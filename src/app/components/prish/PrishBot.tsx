import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Send } from 'lucide-react';

interface Message {
  id: string;
  from: 'user' | 'bot';
  text: string;
}

const QUICK_CHIPS = ['Best treks', 'Download options', 'Best season', 'Nepal info'];

function getBotReply(msg: string): string {
  const m = msg.toLowerCase();
  if (/mountain|peak|himalaya/.test(m))
    return '🏔 Our top mountain views include Everest, Annapurna, and Manang. Tap any journey card to explore trekking routes and photo collections.';
  if (/everest|base.?camp/.test(m))
    return 'We have 4 Everest trek packages — from a 14-day Base Camp expedition to the short 7-day Gokyo Lakes route. Check the Journeys section for details.';
  if (/nepal|annapurna|manang/.test(m))
    return '🇳🇵 Nepal is our largest collection with 180+ destinations. The Annapurna Circuit and Manang Valley are fan favourites — stunning in every season.';
  if (/download|price|free|cost|tier/.test(m))
    return '⬇ Three download tiers: Free (web quality), Standard (print quality), RAW (contact us for licensing). Hover any photo and click the download icon.';
  if (/ocean|forest|desert|cit(y|ies)|soon|coming/.test(m))
    return '🌊 Oceans, Forests, Deserts, and Cities are coming next quarter. Subscribe to our newsletter to be notified first!';
  if (/rating|star|rate|review/.test(m))
    return '⭐ Click any photo to see its full rating and review count. Top-rated photos are sorted first in the gallery.';
  if (/best.?trek|top.?trek|season|when|visit/.test(m))
    return '📅 Best seasons: Spring (Mar–May) and Autumn (Sep–Nov) for clear skies and stable weather. April and October are most popular.';
  return 'I can help with mountain recommendations, trek info, download options, and more. Try asking about Everest, Annapurna, or the best season to visit Nepal!';
}

export function PrishBot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: '0', from: 'bot', text: "Hello! I'm PRISH AI. Ask me about treks, photo downloads, or destinations." },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  function send(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), from: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = { id: (Date.now() + 1).toString(), from: 'bot', text: getBotReply(text) };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-28 right-6 w-[340px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
      style={{ height: '480px' }}
    >
      {/* Header */}
      <div className="bg-[#0A0A0A] px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white text-sm font-medium tracking-wide">PRISH AI</span>
        </div>
        <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                msg.from === 'user'
                  ? 'bg-[#0A0A0A] text-white rounded-br-sm'
                  : 'bg-[#F5F5F3] text-[#0A0A0A] rounded-bl-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator — 3 bouncing dots */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#F5F5F3] px-3 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[#999999] rounded-full"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Quick Chips */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto flex-shrink-0" style={{ scrollbarWidth: 'none' }}>
        {QUICK_CHIPS.map(chip => (
          <button
            key={chip}
            onClick={() => send(chip)}
            className="whitespace-nowrap px-3 py-1 rounded-full bg-[#F5F5F3] text-[#0A0A0A] text-xs hover:bg-[#E5E5E3] transition-colors"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 py-3 border-t border-[#0A0A0A]/10 flex gap-2 flex-shrink-0">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send(input)}
          placeholder="Ask about treks, photos..."
          className="flex-1 text-sm outline-none text-[#0A0A0A] placeholder:text-[#999999] bg-transparent"
          autoFocus
        />
        <button
          onClick={() => send(input)}
          className="w-8 h-8 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors flex-shrink-0"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
