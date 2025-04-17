/**
 * Interfejs reprezentujący pojedyncze zadanie.
 */
type TaskProps = {
  id: number;
  title: string;
  body?: string;
  isDone: boolean;
  toggleDone: (id: number) => void;
};

/**
 * Komponent `TaskItem` wyświetla pojedyncze zadanie w formie karty.
 * Pokazuje tytuł, opcjonalny opis oraz status ukończenia.
 *
 * @component
 * @param {TaskProps} props - Obiekt właściwości zadania
 * @returns {JSX.Element} Karta zadania
 */
export default function TaskItem({
  id,
  title,
  body,
  isDone,
  toggleDone,
}: TaskProps) {
  return (
    <div
      id={`item-card-${id}`}
      className={`rounded-2xl shadow-lg p-6 mb-6 border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group
        ${
          isDone ? "bg-green-50 border-green-400" : "bg-red-50 border-red-300"
        }`}
    >
      <h2 className="text-2xl font-extrabold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
        {title}
      </h2>
      {body && <p className="text-gray-800 mb-4 leading-relaxed">{body}</p>}
      <button
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all duration-300 transform
          ${
            isDone
              ? "bg-green-500 text-white hover:bg-green-600 hover:scale-105"
              : "bg-red-500 text-white hover:bg-red-600 hover:scale-105"
          }`}
        onClick={() => toggleDone(id)}
      >
        {isDone ? "✔️ Ukończono" : "⏳ Nie ukończono"}
      </button>
    </div>
  );
}
