"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
        aria-label="Open Chat"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-xs bg-white dark:bg-neutral-900 rounded-xl shadow-xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <h4 className="font-semibold">AI Assistant</h4>
            <button onClick={() => setOpen(false)} className="text-white font-bold">
              ×
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-4 overflow-y-auto text-sm text-neutral-900 dark:text-neutral-200">
            <p className="mb-2">
              Hi! I’m your AI assistant. How can I help you today?
            </p>
            {/* Example messages (you can replace with real chat logic later) */}
            <p className="mb-2 text-neutral-600 dark:text-neutral-400">
              Ask me about AI solutions, enterprise insights, or our case studies.
            </p>
          </div>

          {/* Input */}
          <div className="px-3 py-2 border-t border-neutral-200 dark:border-neutral-700 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}