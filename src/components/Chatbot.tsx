import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { venueData } from '../data/venueData';
import ReactMarkdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: 'Hello! I am the Fire Tower Miami assistant. How can I help you with your event planning today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    // Initialize chat session
    chatRef.current = ai.chats.create({
      model: 'gemini-3.1-pro-preview',
      config: {
        systemInstruction: `You are a helpful customer support assistant for Fire Tower Miami, an event venue.
Use the following JSON data about the venue's amenities and rental agreement to answer user questions accurately.
If the user asks something not covered in the data, politely inform them that they should contact the venue directly at BOOKINGS@FIRETOWERMIAMI.COM or (305) 593-6100 OPT #1.
Be concise, friendly, and professional.

Venue Data:
${JSON.stringify(venueData, null, 2)}`
      }
    });
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text: response.text }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text: 'Sorry, I encountered an error. Please try again later or contact us directly.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
        {isOpen && (
          <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-75"></span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 bg-gold text-charcoal rounded-full shadow-lg flex items-center justify-center hover:bg-gold-light transition-transform hover:scale-105 z-50"
          aria-label="Toggle chat"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-white rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-charcoal text-white px-4 py-3 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-gold" />
                <span className="font-medium font-serif tracking-wide">Fire Tower Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-offwhite">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2 ${msg.role === 'user' ? 'bg-charcoal text-white rounded-tr-sm' : 'bg-white border border-gray-100 text-charcoal shadow-sm rounded-tl-sm'}`}>
                    {msg.role === 'user' ? (
                      <p className="text-sm">{msg.text}</p>
                    ) : (
                      <div className="text-sm prose prose-sm max-w-none prose-p:leading-relaxed prose-a:text-gold">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 text-charcoal shadow-sm rounded-2xl rounded-tl-sm px-4 py-3">
                    <Loader2 className="w-4 h-4 animate-spin text-gold" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-100">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 px-4 py-2 bg-offwhite border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 bg-gold text-charcoal rounded-full flex items-center justify-center hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
