"use client";

import { useState } from "react";
import TranscriptPanel from "@/components/TranscriptPanel";
import SuggestionsPanel from "@/components/SuggestionsPanel";
import ChatPanel from "@/components/ChatPanel";
import { Message, Suggestion, TranscriptChunk } from "@/types";
import useAudioRecorder from "@/hooks/useAudioRecorder";

export default function Home() {
  const [transcript, setTranscript] = useState<TranscriptChunk[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const {
    isRecording,
    startRecording,
    stopRecording,
    audioChunks,
  } = useAudioRecorder();

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

        {/* 🎤 Mic Button */}
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`ml-auto px-4 py-1 rounded-lg text-sm ${
            isRecording ? "bg-red-500 text-white" : "bg-black text-white"
          }`}
        >
          {isRecording ? "Stop Mic" : "Start Mic"}
        </button>

        {/* Recording Indicator */}
        {isRecording && (
          <span className="text-red-500 text-sm ml-3">
            ● Recording...
          </span>
        )}
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