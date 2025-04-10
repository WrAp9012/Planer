import "../App.css";
import Header from "../components/Header";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black text-white p-4">
        <Header />
        <TaskList />
      </div>
    </>
  );
}
