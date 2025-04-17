import "../App.css";
import { useState } from "react";
import { sampleData } from "../data/sampleData";
import TaskItem from "./TaskItem";

/**
 * Komponent `TaskList` zarządza stanem listy zadań.
 * Każde zadanie renderowane jest przez `TaskItem`,
 * a stan `isDone` jest modyfikowany poprzez funkcję `toggleDone`.
 */
export default function TaskList() {
  // Dodajemy useState do przechowywania listy zadań
  const [tasks, setTasks] = useState(sampleData);

  // Funkcja do przełączania isDone po kliknięciu
  const toggleDone = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <main className="px-4 py-10 md:py-14 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div
        id="task-list"
        className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2"
      >
        {tasks.map((item) => (
          <TaskItem
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            isDone={item.isDone}
            toggleDone={toggleDone}
          />
        ))}
      </div>
    </main>
  );
}
