import "../App.css";
import AddTaskForm from "./AddTaskForm";
import { sampleData } from "../data/sampleData";
import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <>
      <main>
        <AddTaskForm />

        <div id="task-list">
          {sampleData.map((item) => (
            <TaskItem
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
