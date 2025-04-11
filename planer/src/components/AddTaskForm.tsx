import { useState } from "react";
import "../App.css";

// TODO: Return do some way the data from user (Add the new list item)
/**
 * Komponent `AddTaskForm` wyświetla formularz umożliwiający użytkownikowi
 * dodanie nowego zadania i opcjonalnego opisu. Dane nie są jeszcze podpinane
 * do listy zadań – aktualnie po przesłaniu formularza testowo ustawiane są wartości
 * `taskTitle` i `taskBody`, które są wypisywane w konsoli.
 *
 * @component
 * @returns {JSX.Element} Formularz dodawania zadania
 *
 * @example
 * <AddTaskForm />
 */
export default function AddTaskForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskBody, setTaskBody] = useState("");

  /**
   * Obsługuje zdarzenie wysłania formularza.
   * Ustawia testowe dane oraz wypisuje je w konsoli.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Zdarzenie formularza
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(taskTitle);
    console.log(taskBody);

    setTaskTitle("");
    setTaskBody("");
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 mt-16"
        onSubmit={handleSubmit}
      >
        <label htmlFor="task-title" className="text-gray-700 font-medium">
          Wpisz zadanie
        </label>
        <input
          value={taskTitle}
          type="text"
          name="task-title"
          id="user-new-task"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTaskTitle(e.target.value);
          }}
        />
        <label htmlFor="task-body" className="text-gray-700 font-medium">
          Wpisz opis zadania (opcjonalne)
        </label>
        <input
          value={taskBody}
          type="text"
          name="task-title"
          id="user-new-body"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTaskBody(e.target.value);
          }}
        />
        <input
          type="submit"
          value="Dodaj!"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
        />
      </form>
    </>
  );
}
