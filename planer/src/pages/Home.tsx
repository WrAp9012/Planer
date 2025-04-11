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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-gray-950/60 rounded-2xl shadow-xl p-6 backdrop-blur-md border border-white/10">
        <Header />
        <div className="mt-6">
          <AddTaskForm />
        </div>
        <div className="mt-6">
          <TaskList />
        </div>
      </div>
    </div>
  );
}
