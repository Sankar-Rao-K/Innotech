import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, RotateCcw, Send, X, ArrowRight, Bot } from 'lucide-react';
import { processUserQuery, resetSessionContext, WELCOME, ChatMessage, ChatAction } from '../utils/chatbotEngine';

interface ChatbotProps { navigate: (route: string) => void; openConsultationModal?: () => void }

/** Minimal rich text: **bold**, "• " bullets, line breaks, auto-linked emails and phone numbers. */
const Rich: React.FC<{ text: string }> = ({ text }) => {
  const inline = (s: string, key: string) =>
    s.split(/(\*\*[^*]+\*\*|[\w.+-]+@[\w-]+\.[\w.]+|\+\d[\d\s()-]{8,}\d)/g).map((part, i) => {
      if (/^\*\*.*\*\*$/.test(part)) return <strong key={key + i}>{part.slice(2, -2)}</strong>;
      if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part)) return <a key={key + i} href={`mailto:${part}`} className="underline font-semibold break-all">{part}</a>;
      if (/^\+\d/.test(part)) return <a key={key + i} href={`tel:${part.replace(/[^\d+]/g, '')}`} className="underline font-semibold whitespace-nowrap">{part}</a>;
      return <React.Fragment key={key + i}>{part}</React.Fragment>;
    });
  return (
    <>
      {text.split('\n').map((line, i) =>
        line.startsWith('• ')
          ? <div key={i} className="flex gap-2 pl-1"><span aria-hidden="true">•</span><span>{inline(line.slice(2), `l${i}`)}</span></div>
          : line === '' ? <div key={i} className="h-2" /> : <div key={i}>{inline(line, `l${i}`)}</div>
      )}
    </>
  );
};

const fresh = (): ChatMessage => ({ ...WELCOME, id: `welcome-${Date.now()}`, timestamp: new Date() });

export const Chatbot: React.FC<ChatbotProps> = ({ navigate, openConsultationModal }) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [fresh()]);
  const [seenLauncher, setSeenLauncher] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (open) endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, [open, messages, typing]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const mobile = window.matchMedia('(max-width: 639px)').matches;
    const prev = document.body.style.overflow;
    if (mobile) document.body.style.overflow = 'hidden';
    else setTimeout(() => inputRef.current?.focus(), 120);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open]);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setMessages(m => [...m, { id: `u-${Date.now()}`, sender: 'user', text, timestamp: new Date() }]);
    setInput('');
    setTyping(true);
    setTimeout(() => { setMessages(m => [...m, processUserQuery(text)]); setTyping(false); }, 450);
  };

  const run = (a: ChatAction) => {
    if (a.type === 'route' && a.route) { navigate(a.route); setOpen(false); }
    else if (a.type === 'consultation') { openConsultationModal?.(); setOpen(false); }
    else if (a.type === 'link' && a.url) {
      if (a.url.startsWith('http')) window.open(a.url, '_blank', 'noopener,noreferrer'); else window.location.href = a.url;
    }
  };

  const reset = () => { resetSessionContext(); setMessages([fresh()]); setTyping(false); };
  const lastBotId = [...messages].reverse().find(m => m.sender === 'bot')?.id;

  return (
    <div className="print:hidden font-sans">
      {!open && (
        <button onClick={() => { setOpen(true); setSeenLauncher(true); }} aria-label="Open InnoTech assistant"
          className={`fixed z-[65] bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 rounded-full bg-[#0B3C8C] hover:bg-[#092f6f] text-white shadow-xl px-4 py-3.5 transition active:scale-95 ${seenLauncher ? '' : 'anim-pulse-ring'}`}>
          <MessageCircle className="w-6 h-6" /><span className="hidden sm:inline text-sm font-bold">Ask InnoTech</span>
        </button>
      )}

      {open && (
        <div role="dialog" aria-label="InnoTech assistant" className="fixed z-[70] inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[400px] sm:h-[620px] sm:max-h-[calc(100dvh-3rem)] bg-white sm:rounded-2xl shadow-2xl border border-[#D7EAF7] flex flex-col overflow-hidden h-[100dvh] sm:h-[620px]">
          <header className="flex items-center gap-3 bg-gradient-to-r from-[#0B2A5B] to-[#0F4C8A] text-white px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15"><Bot className="w-5 h-5" /></span>
            <div className="flex-1 min-w-0"><p className="font-extrabold leading-tight">InnoTech Assistant</p><p className="text-[11px] text-blue-200 truncate">Services · Frameworks · Insights · Contact</p></div>
            <button onClick={reset} aria-label="Restart conversation" className="p-2 rounded-full hover:bg-white/15"><RotateCcw className="w-4 h-4" /></button>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="p-2 rounded-full hover:bg-white/15"><X className="w-5 h-5" /></button>
          </header>

          <div className="flex-1 overflow-y-auto bg-[#F5FAFE] px-3 py-4 space-y-3" role="log" aria-live="polite">
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] ${m.sender === 'user' ? '' : 'w-full'}`}>
                  <div className={`rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed shadow-sm ${m.sender === 'user' ? 'bg-[#0B3C8C] text-white rounded-br-sm ml-auto w-fit' : 'bg-white text-[#123B5D] border border-[#D7EAF7] rounded-bl-sm'}`}>
                    {m.sender === 'user' ? m.text : <Rich text={m.text} />}
                  </div>
                  {m.actions && m.actions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.actions.map(a => (
                        <button key={a.label} onClick={() => run(a)} className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2">{a.label}<ArrowRight className="w-3.5 h-3.5" /></button>
                      ))}
                    </div>
                  )}
                  {m.id === lastBotId && m.suggestions && !typing && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.suggestions.map(s => <button key={s} onClick={() => send(s)} className="rounded-full border border-blue-300 bg-white text-blue-700 hover:bg-blue-50 text-xs font-semibold px-3 py-1.5">{s}</button>)}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex" aria-label="Assistant is typing"><div className="rounded-2xl rounded-bl-sm bg-white border border-[#D7EAF7] px-4 py-3 flex gap-1">
                {[0, 1, 2].map(i => <span key={i} className="h-2 w-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: `${i * 140}ms` }} />)}
              </div></div>
            )}
            <div ref={endRef} />
          </div>

          <form onSubmit={e => { e.preventDefault(); send(input); }} className="flex gap-2 border-t border-[#D7EAF7] bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <label className="flex-1"><span className="sr-only">Type your question</span>
              <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about services, frameworks, papers…" maxLength={300} enterKeyHint="send"
                className="w-full rounded-full border border-[#D7EAF7] bg-[#F5FAFE] px-4 py-2.5 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </label>
            <button type="submit" disabled={!input.trim() || typing} aria-label="Send message" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B3C8C] text-white disabled:opacity-40"><Send className="w-4 h-4" /></button>
          </form>
        </div>
      )}
    </div>
  );
};
