export interface Suggestion {
  id: string;
  type: "question" | "insight" | "clarification" | "fact-check" | "answer";
  preview: string;
  details?: string;
  timestamp: number;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface TranscriptChunk {
  id: string;
  text: string;
  timestamp: number;
}