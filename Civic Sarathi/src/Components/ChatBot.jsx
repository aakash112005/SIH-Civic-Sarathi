import React from 'react'
import { useState } from 'react';

function ChatBot() {
   const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm Sarathi, your virtual assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newUserMessage = {
      sender: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const botReply = {
      sender: "bot",
      text: "Hello! I'm Sarathi, your virtual assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newUserMessage, botReply]);
    setInput("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl flex flex-col h-[80vh]">
        {/* Header */}
        <div className="bg-indigo-600 text-white text-lg font-bold px-4 py-3 rounded-t-2xl">
          Sarathi Chatbot
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
              <span className="text-xs text-gray-400 mt-1">{msg.time}</span>
            </div>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSend}
          className="flex items-center gap-2 border-t p-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBot
