import "../App.css";
import { sampleData } from "../data/sampleData";
import TaskItem from "./TaskItem";

/**
 * Komponent `TaskList` odpowiada za renderowanie listy zadań
 * na podstawie danych z `sampleData`. Każde zadanie jest przekazywane
 * do komponentu `TaskItem`.
 *
 * @component
 * @returns {JSX.Element} Lista komponentów `TaskItem`
 *
 * @example
 * <TaskList />
 */
export default function TaskList() {
  return (
    <>
      <main className="px-4 py-10 md:py-14 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div
          id="task-list"
          className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2"
        >
          {sampleData.map((item) => (
            <TaskItem
              key={item.id}
              id={item.id}
              title={item.tytul}
              body={item.opis}
              isDone={item.wykonane}
            />
          ))}
        </div>
      </main>
    </>
  );
}
