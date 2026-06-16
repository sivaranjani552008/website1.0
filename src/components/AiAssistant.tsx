import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, Bot, Sparkles, Loader, ShieldCheck, ChevronDown, RefreshCw } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  isDemo?: boolean;
}

const PRESET_QUERIES = [
  { label: "Integrations supported?", text: "What databases and CRM integrations do you support?" },
  { label: "Pricing structure?", text: "Can you list your pricing plans and differences?" },
  { label: "Security & SOC 2?", text: "Are you SOC 2 certified? How is data protected?" },
  { label: "Y Combinator status?", text: "Tell me about your Y Combinator backing and funding." }
];

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      sender: "assistant",
      text: "Welcome to InsightFlow AI! I am your virtual guide. I can explain our technical architecture, standard integrations, pricing tiers, and SOC 2 security compliance. Ask me anything, or select a quick query below."
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when fresh messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (rawText: string) => {
    if (!rawText.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: rawText
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: rawText }),
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with service agent");
      }

      const data = await response.json();
      
      const assistantMsg: Message = {
        id: `assist-${Date.now()}`,
        sender: "assistant",
        text: data.response || "No valid response generated.",
        isDemo: !!data.isDemoMode
      };

      if (data.isDemoMode) {
        setIsDemoMode(true);
      }

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.warn("API Error, using client fallback:", err);
      // Fallback local simulation logic
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `assist-err-${Date.now()}`,
            sender: "assistant",
            text: "My backend is processing queries. Let me reassure you: all data is locked using end-to-end encryption. In full production trials, custom AI agents query your connected databases through a secure proxy server. Is there a specific data source (Salesforce, SAP, or Snowflake) you plan to link?",
            isDemo: true
          }
        ]);
      }, 500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Toggle Icon Bubble */}
      {!isOpen && (
        <button
          id="btn-ai-widget"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 p-3.5 bg-carbon-blue hover:bg-carbon-blue-hover text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-carbon-blue cursor-pointer"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-sm font-semibold tracking-wider uppercase select-none whitespace-nowrap">
            Launch Assistant
          </span>
        </button>
      )}

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div
          id="ai-assistant-panel"
          className="w-full max-w-[380px] sm:w-[380px] h-[520px] bg-white dark:bg-carbon-gray-100 border border-carbon-gray-200 dark:border-carbon-gray-900 rounded-md shadow-2xl overflow-hidden flex flex-col relative"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-carbon-blue text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-white/15 rounded">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-display font-semibold select-none flex items-center gap-1">
                  InsightFlow Concierge
                  <Sparkles className="w-3.5 h-3.5 text-blue-200 animate-pulse-glow" />
                </h4>
                <span className="text-[9px] font-mono opacity-80 uppercase tracking-widest block">
                  {isDemoMode ? "PROTOTYPE SECURE ASSISTANCE" : "ACTIVE MODEL GENERATION"}
                </span>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded transition-colors"
              aria-label="Close assistant panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick status notice about backend encryption */}
          <div className="bg-carbon-gray-10 dark:bg-carbon-gray-90 px-3 py-1.5 border-b dark:border-carbon-gray-950 flex items-center justify-between text-[10px] text-gray-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              SOC 2 Compliant Channel
            </span>
            <span className="font-mono text-[9px]">v2.5-flash</span>
          </div>

          {/* Message view sandbox */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 select-text">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded p-3 text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-carbon-blue text-white rounded-br-none"
                      : "bg-carbon-gray-10 dark:bg-carbon-gray-90 text-gray-800 dark:text-gray-200 rounded-bl-none border dark:border-carbon-gray-800"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  
                  {msg.isDemo && (
                    <span className="text-[8px] font-mono text-gray-400 block mt-1 pt-1 border-t border-gray-200/20 text-right uppercase">
                      Demo Fallback Verified
                    </span>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-carbon-gray-10 dark:bg-carbon-gray-90 rounded p-3 rounded-bl-none border dark:border-carbon-gray-800 max-w-[85%]">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Loader className="w-3.5 h-3.5 animate-spin" />
                    <span>Analyzing systems...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Click Chips Container */}
          <div className="px-4 py-2 bg-gray-50 dark:bg-carbon-gray-90/30 border-t dark:border-carbon-gray-950">
            <span className="text-[9px] font-mono text-gray-400 block mb-1.5 uppercase select-none">
              Suggested queries:
            </span>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              {PRESET_QUERIES.map((q) => (
                <button
                  key={q.label}
                  onClick={() => handleSendMessage(q.text)}
                  disabled={isLoading}
                  className="shrink-0 text-[10px] bg-white dark:bg-carbon-gray-90 border dark:border-carbon-gray-800 hover:border-carbon-blue hover:text-carbon-blue text-gray-600 dark:text-gray-300 px-2 py-1 rounded transition-all cursor-pointer disabled:opacity-50"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form message input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="p-3 border-t dark:border-carbon-gray-950 bg-white dark:bg-carbon-gray-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about pricing, plans or SOC 2..."
              disabled={isLoading}
              className="flex-1 text-xs px-3 py-2 border dark:border-carbon-gray-900 rounded bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-carbon-blue focus:bg-white"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!inputText.trim() || isLoading}
              className="p-2 bg-carbon-blue hover:bg-carbon-blue-hover text-white rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
