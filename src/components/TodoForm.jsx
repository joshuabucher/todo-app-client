import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  return (
    <form
      className="row"
      onSubmit={(e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd({ title: title.trim(), dueDate: dueDate || null });
        setTitle("");
        setDueDate("");
      }}
    >
      <input
        placeholder="Neue Aufgabe…"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ flex: "1 1 240px" }}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ flex: "0 0 160px" }}
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}
