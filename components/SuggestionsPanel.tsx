import { Suggestion } from "@/types";

interface Props {
  suggestions: Suggestion[];
}

export default function SuggestionsPanel({ suggestions }: Props) {
  return (
    <div className="w-1/3 border-r bg-gray-50 flex flex-col">
      <div className="p-3 font-semibold border-b">Live Suggestions</div>

      <div className="flex-1 p-3 overflow-y-auto space-y-3">
        {suggestions.length === 0 ? (
          <p className="text-sm text-gray-500">No suggestions yet...</p>
        ) : (
          suggestions.map((s) => (
            <div
              key={s.id}
              className="p-3 bg-white rounded-lg shadow-sm border hover:shadow-md transition cursor-pointer"
            >
              <p className="text-xs text-gray-400 capitalize">{s.type}</p>
              <p className="text-sm font-medium">{s.preview}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}