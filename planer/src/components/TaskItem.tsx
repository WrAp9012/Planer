interface task {
  id: number;
  title: string;
  body?: string;
  isDone: boolean;
}

export default function TaskItem({ id, title, body, isDone }: task) {
  return (
    <>
      <div
        id={`item-card-${id}`}
        className={`rounded-2xl shadow-lg p-6 mb-6 transition-all duration-300 border ${
          isDone ? "bg-green-50 border-green-400" : "bg-red-50 border-red-300"
        }`}
      >
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-700 mb-4">{body}</p>
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
            isDone ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
          }`}
        >
          {isDone ? "✔️ Ukończono" : "⏳ Nie ukończono"}
        </span>
      </div>
    </>
  );
}
