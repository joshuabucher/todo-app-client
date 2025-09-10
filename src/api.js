const BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export const getTodos = (status = "all", sort = "-createdAt") =>
  fetch(`${BASE}/todos?status=${status}&sort=${encodeURIComponent(sort)}`).then(
    (r) => r.json()
  );

export const createTodo = (data) =>
  fetch(`${BASE}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((r) => r.json());

export const updateTodo = (id, data) =>
  fetch(`${BASE}/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((r) => r.json());

export const deleteTodo = (id) =>
  fetch(`${BASE}/todos/${id}`, { method: "DELETE" }).then((r) => r.json());
