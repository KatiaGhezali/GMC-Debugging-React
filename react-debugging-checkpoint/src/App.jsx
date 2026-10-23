import { useState } from "react";
import "./App.css";

function TaskItem({ task, onToggle }) {
  return (
    <li>
      <span>{task.title}</span>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? "Completed" : "Mark Complete"}
      </button>
    </li>
  );
}

function TaskList({ tasks, onToggle }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  );
}

function TaskSummary({ tasks }) {
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <p>
      Completed: {completedCount} / {tasks.length}
    </p>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React DevTools", completed: false },
    { id: 2, title: "Inspect component props", completed: false },
    { id: 3, title: "Debug state updates", completed: false },
  ]);

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  return (
    <main>
      <h1>React Debugging Checkpoint</h1>

      <TaskSummary tasks={tasks} />

      <TaskList tasks={tasks} onToggle={toggleTask} />
    </main>
  );
}
