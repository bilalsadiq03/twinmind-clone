"use client";

import { useState } from "react";
import TranscriptPanel from "@/components/TranscriptPanel";
import SuggestionsPanel from "@/components/SuggestionsPanel";
import ChatPanel from "@/components/ChatPanel";
import { Message, Suggestion, TranscriptChunk } from "@/types";

export default function Home() {
  const [transcript, setTranscript] = useState<TranscriptChunk[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      
      {/* Header */}
      <div className="h-14 border-b bg-white flex items-center px-6 font-semibold shadow-sm">
        TwinMind AI Assistant
      </div>

      {/* Layout */}
      <div className="flex flex-1 overflow-hidden">
        <TranscriptPanel transcript={transcript} />
        <SuggestionsPanel suggestions={suggestions} />
        <ChatPanel messages={messages} onSend={handleSend} />
      </div>
    </div>
  );
}