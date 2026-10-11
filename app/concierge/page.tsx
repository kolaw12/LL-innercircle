"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import LuxuryDivider from "@/components/ui/LuxuryDivider";

interface Message {
  id: string;
  sender: "concierge" | "member";
  text: string;
  time: string;
}

export default function ConciergePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "concierge",
      text: "Good morning, Mr. Johnson. Welcome to the Lakowe Lakes Concierge Desk. How may I assist you with your estate experience today?",
      time: "10:14 AM",
    },
    {
      id: "2",
      sender: "member",
      text: "Hello, I would like to reserve a private table for 4 at The Clubhouse Grill for 7:30 PM tomorrow.",
      time: "10:16 AM",
    },
    {
      id: "3",
      sender: "concierge",
      text: "Certainly. I have noted your request for 4 guests tomorrow at 7:30 PM. Would you prefer a lakeside patio table or inside near the fireplace?",
      time: "10:17 AM",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickSuggestions = [
    { label: "Book a Table", icon: <UtensilsIcon /> },
    { label: "Airport Pickup", icon: <CarIcon /> },
    { label: "Facilities", icon: <BuildingIcon /> },
    { label: "Spa", icon: <SparklesIcon /> },
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "member",
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMessage]);
    if (!textToSend) setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "concierge",
          text: `Thank you for your inquiry about "${text.trim()}". Our Estate Manager is processing this right away and will confirm shortly.`,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-forest-gradient text-grey-light flex flex-col justify-between">
      {/* Top Header Bar */}
      <header className="stagger-1 sticky top-0 z-40 bg-forest/95 backdrop-blur-md border-b border-bronze/20 px-7 sm:px-8 py-4 shadow-sm">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Link
            href="/dashboard"
            className="w-10 h-10 rounded-2xl bg-[#0c3520] border border-bronze/20 flex items-center justify-center text-bronze hover:bg-bronze/10 transition-premium shadow-card focus:outline-none focus:ring-2 focus:ring-bronze/50"
            aria-label="Back to Dashboard"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>

          <div className="text-center">
            <h1 className="font-montserrat text-cream text-lg font-bold leading-tight">Concierge</h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bronze opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-bronze"></span>
              </span>
              <span className="font-montserrat text-[9px] text-bronze font-semibold tracking-widest uppercase">Online</span>
            </div>
          </div>

          <div className="w-10" />
        </div>
      </header>

      {/* Chat Area */}
      <main className="stagger-2 flex-1 w-full max-w-md mx-auto px-7 sm:px-8 py-8 space-y-6 overflow-y-auto pb-48 scrollbar-none">
        <div className="my-2">
          <LuxuryDivider variant="diamond" />
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === "member" ? "items-end" : "items-start"}`}
          >
            <div
              className={`max-w-[85%] px-5 py-3.5 rounded-[20px] font-montserrat text-sm leading-relaxed shadow-card transition-all ${
                msg.sender === "member"
                  ? "bg-[#0a2f1c] text-cream border border-bronze/40 font-medium rounded-br-sm"
                  : "bg-cream text-charcoal rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
            <span className="text-[11px] font-montserrat text-cream/70 mt-1.5 px-2 font-medium tracking-wide">
              {msg.time}
            </span>
          </div>
        ))}

        {isTyping && (
          <div className="flex flex-col items-start animate-fade-in">
            <div className="px-5 py-4 rounded-[20px] bg-cream text-charcoal rounded-bl-sm flex items-center gap-2 shadow-card">
              <span className="w-2 h-2 rounded-full bg-bronze/80 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-bronze/80 animate-bounce" style={{ animationDelay: "0.2s" }} />
              <span className="w-2 h-2 rounded-full bg-bronze/80 animate-bounce" style={{ animationDelay: "0.4s" }} />
            </div>
            <span className="text-[11px] font-montserrat text-cream/70 mt-1.5 px-2 font-medium tracking-wide">
              Concierge is typing...
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* Fixed Bottom Input */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-forest/95 backdrop-blur-md border-t border-bronze/20 pt-4 pb-6 px-7 sm:px-8 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none -mx-2 px-2">
            {quickSuggestions.map((suggestion) => (
              <button
                key={suggestion.label}
                type="button"
                onClick={() => handleSend(suggestion.label)}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full bg-transparent border border-bronze/30 text-bronze text-[11px] font-montserrat font-semibold hover:bg-bronze/10 transition-premium shadow-sm focus:outline-none focus:ring-2 focus:ring-bronze/50 whitespace-nowrap"
              >
                {suggestion.icon}
                {suggestion.label}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-3"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask Concierge anything..."
              className="flex-1 min-h-[52px] px-5 rounded-2xl bg-cream text-charcoal placeholder-charcoal/40 font-montserrat text-sm border-2 border-transparent focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze/50 transition-premium shadow-card"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="w-[52px] h-[52px] flex-shrink-0 rounded-2xl border-[1.5px] border-bronze bg-[#0c3520] text-bronze hover:bg-gradient-to-br hover:from-[#d8b87a] hover:via-[#c5a059] hover:to-[#9b783e] hover:text-[#0a2f1c] active:bg-gradient-to-br active:from-[#d8b87a] active:via-[#c5a059] active:to-[#9b783e] active:text-[#0a2f1c] active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center font-semibold shadow-card transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-bronze/60"
              aria-label="Send message"
            >
              <svg className="w-5 h-5 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function UtensilsIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
