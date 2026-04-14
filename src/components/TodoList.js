import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>To-Do List</h2>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Adicionar</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            {t}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => removeTask(index)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;