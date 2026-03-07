"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // for smooth animations

export default function KSquareAssistant() {
  const [messages, setMessages] = useState<{ sender: "user" | "assistant"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    // Simulate assistant response
    setTimeout(() => {
      const response = { sender: "assistant", text: getAssistantResponse(input) };
      setMessages(prev => [...prev, response]);
    }, 500);

    setInput("");
  };

  const getAssistantResponse = (msg: string) => {
    const lower = msg.toLowerCase();
    if (lower.includes("services")) return "We offer AI, cloud, and enterprise solutions tailored to your business.";
    if (lower.includes("contact")) return "Reach us at contact@ksquaregroup.com or +1-555-1234.";
    if (lower.includes("team")) return "Our team consists of experts in AI, cloud computing, and enterprise systems.";
    return "Ask me about our services, team, or contact info!";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Bubble */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all animate-pulse"
        title="KSquare Assistant"
      >
        💬
      </button>

      {/* Animated Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="mt-2 w-80 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-2xl rounded-xl flex flex-col h-96 overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-t-xl flex justify-between items-center">
              KSquare Assistant
              <button onClick={() => setOpen(false)} className="font-bold">×</button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`p-2 rounded-md max-w-[80%] ${
                    m.sender === "user"
                      ? "bg-blue-100 dark:bg-blue-800 self-end"
                      : "bg-gray-100 dark:bg-gray-800 self-start"
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-2 border-t border-neutral-200 dark:border-neutral-700 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 px-2 py-1 border rounded-md dark:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                placeholder="Ask about KSquare..."
                onKeyDown={e => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}