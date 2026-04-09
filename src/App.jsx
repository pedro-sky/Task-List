import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Estudar",
      day: "10 de abril às 10:00",
      reminder: true,
    },
    {
      id: 2,
      text: "Fazer compras",
      day: "10 de abril às 15:00",
      reminder: true,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <Tasks />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
