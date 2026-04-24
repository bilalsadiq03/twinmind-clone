import { TranscriptChunk } from "@/types";

interface Props {
  transcript: TranscriptChunk[];
}

export default function TranscriptPanel({ transcript }: Props) {
  return (
    <div className="w-1/3 border-r bg-white flex flex-col">
      <div className="p-3 font-semibold border-b">Transcript</div>

      <div className="flex-1 p-3 overflow-y-auto text-sm text-gray-700 space-y-2">
        {transcript.length === 0 ? (
          <p>No transcript yet...</p>
        ) : (
          transcript.map((chunk) => (
            <div key={chunk.id}>{chunk.text}</div>
          ))
        )}
      </div>
    </div>
  );
}