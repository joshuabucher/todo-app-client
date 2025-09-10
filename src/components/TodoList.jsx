import TodoItem from "./TodoItem";

export default function TodoList({ items, onToggle, onUpdate, onDelete }) {
  return (
    <div>
      {items.map((item) => (
        <TodoItem
          key={item._id}
          item={item}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
