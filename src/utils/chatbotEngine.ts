// Rule-based chatbot engine: keyword scoring with phrase, prefix and typo tolerance. No external API.
import { ENTRIES, PUBLICATION_ENTRIES, GLOSSARY, SUGGESTIONS_DEFAULT, KBEntry } from '../data/chatbotKnowledge';
import { COMPANY_DETAILS } from '../data/siteData';

export interface ChatAction { type: 'route' | 'consultation' | 'link'; label: string; route?: string; url?: string }
export interface ChatMessage { id: string; sender: 'user' | 'bot'; text: string; timestamp: Date; actions?: ChatAction[]; suggestions?: string[] }

let lastEntry: KBEntry | null = null;
let seq = 0;
export const resetSessionContext = () => { lastEntry = null; };

const STOPWORDS = new Set(['a', 'an', 'the', 'is', 'are', 'am', 'of', 'to', 'in', 'on', 'for', 'and', 'or', 'do', 'does', 'you', 'your', 'me', 'my', 'i', 'we', 'can', 'could', 'would', 'please', 'about', 'tell', 'it', 'that', 'this', 'with', 'be', 'have', 'has', 'what', 'whats', 'how', 'any']);
export const normalizeText = (t: string) => t.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9()+ ]/g, ' ').replace(/\s+/g, ' ').trim();
const flat = (t: string) => t.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();

function lev(a: string, b: string): number {
  if (Math.abs(a.length - b.length) > 1) return 2;
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return dp[a.length][b.length];
}

function score(entry: KBEntry, text: string, tokens: string[]): number {
  let s = 0;
  const padded = ' ' + text + ' ';
  for (const raw of entry.keywords) {
    const k = flat(raw);
    if (!k) continue;
    if (k.includes(' ')) {
      const words = k.split(' ');
      if (padded.includes(' ' + k + ' ')) { s += 3 * words.length; continue; }
      // order-insensitive, typo-tolerant phrase match ("tecnology tranfer")
      const ok = words.every(w => tokens.some(t => t === w || (w.length >= 5 && t.length >= 5 && lev(t, w) <= 1)));
      if (ok && words.length > 1) s += 2 * words.length;
      continue;
    }
    if (tokens.includes(k)) { s += 3; continue; }
    if (k.length >= 5) {
      for (const t of tokens) {
        if (t.length >= 5 && (t.startsWith(k) || k.startsWith(t))) { s += 1.5; break; }
        if (t.length >= 6 && lev(t, k) <= 1) { s += 2; break; }
        if (t.length >= 7 && k.length >= 7 && t.slice(0, 7) === k.slice(0, 7)) { s += 1.5; break; }
      }
    }
  }
  return s;
}

const msg = (text: string, extra: Partial<ChatMessage> = {}): ChatMessage => ({ id: `bot-${Date.now()}-${seq++}`, sender: 'bot', text, timestamp: new Date(), ...extra });

function actionsFor(e: KBEntry): ChatAction[] {
  const a: ChatAction[] = [];
  if (e.route) a.push({ type: 'route', label: e.routeLabel || 'Open page', route: e.route });
  if (e.id === 'meeting') a.push({ type: 'link', label: 'Book a web conference', url: COMPANY_DETAILS.scheduleLink });
  if (e.id === 'contact' || e.id === 'human') {
    a.push({ type: 'link', label: 'Email us', url: `mailto:${COMPANY_DETAILS.email}` });
    a.push({ type: 'link', label: 'Call us', url: `tel:${COMPANY_DETAILS.phoneHref}` });
  }
  if (['start', 'pricing', 'contact', 'human', 'models', 'svc-advisory', 'meeting', 'founder'].includes(e.id)) a.push({ type: 'consultation', label: 'Request an initial discussion' });
  return a;
}

export function processUserQuery(rawInput: string): ChatMessage {
  const text = flat(rawInput);
  const tokens = text.split(' ').filter(Boolean);
  const content = tokens.filter(t => !STOPWORDS.has(t));

  // 1) "more" follow-up
  if (lastEntry && /^(more|tell me more|details|go on|continue|explain|elaborate|more details)$/.test(text)) {
    const e = lastEntry;
    return msg(e.more || 'Here is where you can read the full details. You can also ask me a follow-up question.', { actions: actionsFor(e), suggestions: e.follow || SUGGESTIONS_DEFAULT });
  }

  if (!lastEntry && /^(more|tell me more|details|go on|continue|elaborate|more details)$/.test(text)) {
    return msg('Happy to go deeper. Which topic would you like more detail on?', { suggestions: SUGGESTIONS_DEFAULT });
  }

  // 2) glossary: "what is X", "define X", or the bare term
  const asksDefinition = /^(what is|what s|what are|define|meaning of|explain|whats)\b/.test(text) || (tokens.length <= 3 && content.length <= 2);
  if (asksDefinition) {
    const padded = ' ' + text + ' ';
    const hit = GLOSSARY.find(g => g.keys.some(k => padded.includes(' ' + flat(k) + ' ')));
    if (hit && !/innotech|you do|your/.test(text)) {
      lastEntry = null;
      return msg(hit.text, { suggestions: ['What services do you offer?', 'Browse publications', 'Contact the team'] });
    }
  }

  // 3) best knowledge-base match (publications weighted slightly lower than core entries)
  let best: KBEntry | null = null, bestScore = 0;
  for (const e of ENTRIES) { const s = score(e, text, content); if (s > bestScore) { best = e; bestScore = s; } }
  let pubBest: KBEntry | null = null, pubScore = 0;
  for (const e of PUBLICATION_ENTRIES) { const s = score(e, text, content); if (s > pubScore) { pubBest = e; pubScore = s; } }
  if (pubBest && pubScore >= 3 && pubScore >= bestScore) { best = pubBest; bestScore = pubScore; }

  if (best && bestScore >= 2.5) {
    lastEntry = best;
    return msg(best.answer, { actions: actionsFor(best), suggestions: best.follow || SUGGESTIONS_DEFAULT });
  }

  // 4) fallback
  lastEntry = null;
  return msg("I'm not sure I understood that. I can help with InnoTech's services, expertise, frameworks, publications, the founder, or how to get in touch. You can also reach the team directly and they will be glad to help.", {
    actions: [{ type: 'consultation', label: 'Request an initial discussion' }, { type: 'route', label: 'Contact page', route: '/contact-us' }],
    suggestions: SUGGESTIONS_DEFAULT,
  });
}

export const WELCOME: Omit<ChatMessage, 'id' | 'timestamp'> = {
  sender: 'bot',
  text: "Hi! I'm the InnoTech assistant. Ask me about our **services**, **expertise**, **frameworks**, **publications** or how to get in touch.",
  suggestions: SUGGESTIONS_DEFAULT,
};
