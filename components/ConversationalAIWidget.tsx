"use client";

import { useState } from "react";

export default function ConversationalAIWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Widget Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        {open ? "Close Chat" : "Chat with AI"}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="mt-2 w-80 h-96 bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden">
          <div className="flex-1 p-4 overflow-y-auto">
            <p className="text-neutral-500 text-sm">Hello! How can I help you today?</p>
            {/* Messages will go here */}
          </div>
          <div className="p-2 border-t border-neutral-200 dark:border-neutral-800">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}