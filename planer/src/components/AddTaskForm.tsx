import "../App.css";

export default function AddTaskForm() {
  return (
    <>
      <form className="flex flex-col gap-4 max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 mt-16">
        <label htmlFor="user-new-task" className="text-gray-700 font-medium">
          Wpisz zadanie
        </label>
        <input
          type="text"
          name="user-new-task"
          id="user-new-task"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
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
