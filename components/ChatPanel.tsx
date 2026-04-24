import { Message } from "@/types";
import { useState } from "react";

interface Props {
  messages: Message[];
  onSend: (text: string) => void;
}

export default function ChatPanel({ messages, onSend }: Props) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="w-1/3 bg-white flex flex-col">
      <div className="p-3 font-semibold border-b">Chat</div>

      <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
        {messages.length === 0 ? (
          <p>No messages yet...</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id}>
              <strong>{msg.role}: </strong>
              {msg.content}
            </div>
          ))
        )}
      </div>

      <div className="p-3 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 text-sm"
          placeholder="Ask something..."
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-black text-white rounded-lg text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}