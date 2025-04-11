import "../App.css";
import AddTaskForm from "../components/AddTaskForm";
import Header from "../components/Header";
import TaskList from "../components/TaskList";

/**
 * Komponent `Home` to główny widok aplikacji.
 * Zawiera nagłówek, formularz dodawania zadań oraz listę zadań.
 *
 * @component
 * @returns {JSX.Element} Widok główny aplikacji
 *
 * @example
 * <Home />
 */
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black text-white p-4">
        <Header />
        <AddTaskForm />
        <TaskList />
      </div>
    </>
  );
}
