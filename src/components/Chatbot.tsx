import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  MessageCircle, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { processUserQuery, ChatMessage, resetSessionContext } from '../utils/chatbotEngine';

interface ChatbotProps {
  navigate: (route: string) => void;
  openConsultationModal?: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ navigate, openConsultationModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome-msg',
      sender: 'bot',
      text: "Hello! Welcome to InnoTech BioPharm Solutions. I'm your website customer care assistant. I can help you learn about our CMC services, formulation development, analytical testing, scale-up capabilities, and connect you directly with our technical leadership. How can I help you today?",
      timestamp: new Date(),
      suggestions: [
        "What services do you offer?",
        "What is CMC?",
        "Formulation Development",
        "How can I get a quote?",
        "Contact the team"
      ]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Auto focus input on desktop
      if (window.innerWidth >= 768) {
        setTimeout(() => inputRef.current?.focus(), 150);
      }
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = (userText: string) => {
    const trimmed = userText.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Realistic human-paced customer-care response (180ms - 320ms)
    setTimeout(() => {
      const botResponse = processUserQuery(trimmed);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 240);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  const handleReset = () => {
    resetSessionContext();
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: "Conversation refreshed. I'm ready to assist you with information about our CMC services, formulation science, or connecting with our team. What would you like to explore?",
        timestamp: new Date(),
        suggestions: [
          "What services do you offer?",
          "What is CMC?",
          "How can I get a quote?",
          "Contact the team"
        ]
      }
    ]);
  };

  const handleActionClick = (message: ChatMessage) => {
    if (!message.action) return;
    if (message.action.type === 'whatsapp' && message.action.url) {
      window.open(message.action.url, '_blank', 'noopener,noreferrer');
    } else if (message.action.type === 'route' && message.action.route) {
      navigate(message.action.route);
      setIsOpen(false);
    } else if (message.action.type === 'consultation' && openConsultationModal) {
      openConsultationModal();
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans print:hidden">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open InnoTech BioPharm Customer Care"
          className="group flex items-center gap-2.5 bg-[#2F9FEA] hover:bg-[#2389D2] active:bg-[#1E77B8] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg border border-[#A6D8FA] transition-all duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#2F9FEA] focus:ring-offset-2"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full border border-[#2F9FEA]" />
          </div>
          <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
            Customer Care
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="InnoTech BioPharm Customer Care"
          className="bg-white rounded-2xl border border-[#D7EAF7] shadow-2xl flex flex-col w-[calc(100vw-28px)] sm:w-[390px] h-[580px] max-h-[82vh] overflow-hidden transition-all duration-200 animate-in fade-in slide-in-from-bottom-3"
        >
          {/* Header */}
          <div className="bg-[#F5FAFE] border-b border-[#D7EAF7] p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2F9FEA] flex items-center justify-center text-white shrink-0 shadow-xs">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm text-[#123B5D] leading-tight">
                    InnoTech BioPharm
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Online" />
                </div>
                <div className="text-[11px] text-[#536B7D] font-medium leading-tight">
                  Customer Care &bull; Website Assistant
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Restart conversation"
                aria-label="Restart conversation"
                className="p-1.5 rounded-lg text-[#536B7D] hover:text-[#123B5D] hover:bg-[#EAF6FD] transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat window"
                aria-label="Close chat window"
                className="p-1.5 rounded-lg text-[#536B7D] hover:text-[#123B5D] hover:bg-[#EAF6FD] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Subheader Transparency Notice */}
          <div className="bg-[#EAF6FD] px-3.5 py-1.5 border-b border-[#D7EAF7] text-[10px] text-[#123B5D] flex items-center gap-1.5 font-medium shrink-0">
            <Sparkles className="w-3 h-3 text-[#2F9FEA] shrink-0" />
            <span>Official website assistant &bull; Direct technical inquiries</span>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs bg-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {/* Speech Bubble */}
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-[#2F9FEA] text-white rounded-br-xs font-medium'
                      : 'bg-[#F5FAFE] text-[#123B5D] border border-[#D7EAF7] rounded-bl-xs'
                  }`}
                >
                  {/* Format bold markdown cleanly */}
                  {msg.text.split('\n').map((line, idx) => {
                    if (!line) return <div key={idx} className="h-1.5" />;
                    return (
                      <p key={idx} className="mb-1 last:mb-0">
                        {line.split(/(\*\*.*?\*\*)/g).map((chunk, i) => {
                          if (chunk.startsWith('**') && chunk.endsWith('**')) {
                            return (
                              <strong key={i} className="font-extrabold text-[#123B5D]">
                                {chunk.slice(2, -2)}
                              </strong>
                            );
                          }
                          return chunk;
                        })}
                      </p>
                    );
                  })}
                </div>

                {/* Primary Action Button (e.g. WhatsApp or Route Navigation) */}
                {msg.action && (
                  <div className="mt-2 w-full max-w-[85%]">
                    {msg.action.type === 'whatsapp' ? (
                      <button
                        onClick={() => handleActionClick(msg)}
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] active:bg-[#1DA851] text-white font-extrabold text-xs px-3.5 py-2.5 rounded-xl shadow-xs transition-all duration-200 hover:-translate-y-[1px]"
                      >
                        <MessageCircle className="w-4 h-4 text-white shrink-0 fill-current" />
                        <span>{msg.action.label}</span>
                        <ExternalLink className="w-3 h-3 text-white/80" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleActionClick(msg)}
                        className="w-full flex items-center justify-center gap-1.5 bg-[#2F9FEA] hover:bg-[#2389D2] text-white font-extrabold text-xs px-3.5 py-2 rounded-xl shadow-xs transition-all duration-200"
                      >
                        <span>{msg.action.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}

                {/* Quick Follow-Up Suggestion Chips */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {msg.suggestions.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => handleSuggestionClick(sug)}
                        className="text-[11px] font-bold text-[#123B5D] bg-[#F5FAFE] hover:bg-[#EAF6FD] hover:text-[#2F9FEA] hover:border-[#2F9FEA] px-2.5 py-1 rounded-lg border border-[#D7EAF7] transition-all text-left"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}

                {/* Timestamp */}
                <span className="text-[10px] text-[#536B7D] mt-1 px-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start">
                <div className="bg-[#F5FAFE] border border-[#D7EAF7] rounded-2xl rounded-bl-xs px-3 py-2 text-[#536B7D] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#2F9FEA] rounded-full animate-pulse" />
                  <span className="w-1.5 h-1.5 bg-[#2F9FEA] rounded-full animate-pulse [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 bg-[#2F9FEA] rounded-full animate-pulse [animation-delay:300ms]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Dock */}
          <div className="px-3 py-2 bg-[#F5FAFE] border-t border-[#D7EAF7] flex items-center gap-2 overflow-x-auto text-[11px] shrink-0">
            <button
              onClick={() => handleSend("What services do you provide?")}
              className="whitespace-nowrap px-2.5 py-1 rounded-md bg-white border border-[#D7EAF7] text-[#123B5D] hover:text-[#2F9FEA] font-bold transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleSend("What is CMC?")}
              className="whitespace-nowrap px-2.5 py-1 rounded-md bg-white border border-[#D7EAF7] text-[#123B5D] hover:text-[#2F9FEA] font-bold transition-colors"
            >
              What is CMC?
            </button>
            <button
              onClick={() => handleSend("How can I get a quote?")}
              className="whitespace-nowrap px-2.5 py-1 rounded-md bg-white border border-[#D7EAF7] text-[#2F9FEA] hover:bg-[#EAF6FD] font-extrabold transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span>Get a Quote</span>
            </button>
            <button
              onClick={() => handleSend("Who is Raj Thota?")}
              className="whitespace-nowrap px-2.5 py-1 rounded-md bg-white border border-[#D7EAF7] text-[#123B5D] hover:text-[#2F9FEA] font-bold transition-colors"
            >
              Founder
            </button>
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-3 bg-white border-t border-[#D7EAF7] flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask us about our services, CMC, pricing..."
              className="flex-1 bg-[#F5FAFE] border border-[#D7EAF7] rounded-xl px-3.5 py-2.5 text-xs text-[#123B5D] placeholder-[#536B7D] focus:outline-none focus:ring-1 focus:ring-[#2F9FEA] focus:border-[#2F9FEA]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="w-9 h-9 rounded-xl bg-[#2F9FEA] hover:bg-[#2389D2] active:bg-[#1E77B8] disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center shrink-0 transition-colors shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
