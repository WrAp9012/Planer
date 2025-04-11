/**
 * Interfejs reprezentujący pojedyncze zadanie.
 */
interface task {
  /** Unikalny identyfikator zadania */
  id: number;
  /** Tytuł zadania */
  title: string;
  /** Opcjonalny opis zadania */
  body?: string;
  /** Flaga oznaczająca, czy zadanie zostało ukończone */
  isDone: boolean;
}

/**
 * Komponent `TaskItem` wyświetla pojedyncze zadanie w formie karty.
 * Pokazuje tytuł, opcjonalny opis oraz status ukończenia.
 *
 * @component
 * @param {task} props - Obiekt właściwości zadania
 * @param {number} props.id - Unikalny identyfikator zadania
 * @param {string} props.title - Tytuł zadania
 * @param {string} [props.body] - Opcjonalny opis zadania
 * @param {boolean} props.isDone - Flaga ukończenia zadania
 * @returns {JSX.Element} Karta zadania
 *
 * @example
 * <TaskItem id={1} title="Nauka Reacta" body="Przerobić komponenty" isDone={false} />
 */
export default function TaskItem({ id, title, body, isDone }: task) {
  return (
    <>
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
        <p className="text-gray-800 mb-4 leading-relaxed">{body}</p>
        <span
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300
          ${
            isDone ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
          }`}
        >
          {isDone ? "✔️ Ukończono" : "⏳ Nie ukończono"}
        </span>
      </div>
    </>
  );
}
