import { useState } from "react";

export default function TodoItem({ item, onToggle, onUpdate, onDelete }) {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [dueDate, setDueDate] = useState(
    item.dueDate ? item.dueDate.slice(0, 10) : ""
  );

  return (
    <div className={`todo ${item.done ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={!!item.done}
        onChange={(e) => onToggle(item._id, e.target.checked)}
        title="Erledigt"
      />

      <div className="title">
        {isEditing ? (
          <div className="row">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ flex: "1" }}
            />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            <button
              className="ghost"
              onClick={() => {
                setEditing(false);
                setTitle(item.title);
                setDueDate(item.dueDate ? item.dueDate.slice(0, 10) : "");
              }}
            >
              Abbr.
            </button>
            <button
              onClick={() => {
                onUpdate(item._id, title.trim() || item.title, dueDate || null);
                setEditing(false);
              }}
            >
              Speichern
            </button>
          </div>
        ) : (
          <>
            <div style={{ fontWeight: 600 }}>{item.title}</div>
            {item.dueDate && (
              <small>
                Fällig: {new Date(item.dueDate).toLocaleDateString()}
              </small>
            )}
          </>
        )}
      </div>

      {!isEditing && (
        <>
          <button className="ghost" onClick={() => setEditing(true)}>
            ✏️
          </button>
          <button className="ghost" onClick={() => onDelete(item._id)}>
            🗑️
          </button>
        </>
      )}
    </div>
  );
}
