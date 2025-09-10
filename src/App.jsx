import { useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import "./index.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("-createdAt");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await getTodos(status, sort);
      setTodos(data);
    } catch {
      setError("Konnte Daten nicht laden");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, [status, sort]);

  async function add(todo) {
    if (!todo.title?.trim()) return;
    const created = await createTodo(todo);
    setTodos((prev) => [created, ...prev]);
  }
  async function toggle(id, done) {
    const updated = await updateTodo(id, { done });
    setTodos((prev) => prev.map((t) => (t._id === id ? updated : t)));
  }
  async function update(id, title, dueDate) {
    const updated = await updateTodo(id, { title, dueDate });
    setTodos((prev) => prev.map((t) => (t._id === id ? updated : t)));
  }
  async function remove(id) {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((t) => t._id !== id));
  }

  return (
    <div className="container">
      <h2>Simple To-Do Manager</h2>
      <TodoForm onAdd={add} />

      <div className="toolbar">
        <Filters
          status={status}
          setStatus={setStatus}
          sort={sort}
          setSort={setSort}
        />
        <span className="badge">{todos.length} Einträge</span>
      </div>

      <div className="card">
        {loading && <p>Lade…</p>}
        {error && <p style={{ color: "crimson" }}>{error}</p>}
        {!loading && !todos.length && <p>Keine Aufgaben vorhanden.</p>}
        <TodoList
          items={todos}
          onToggle={toggle}
          onUpdate={update}
          onDelete={remove}
        />
      </div>
    </div>
  );
}
