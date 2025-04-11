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
      <main>
        <div id="task-list">
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
