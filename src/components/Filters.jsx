export default function Filters({ status, setStatus, sort, setSort }) {
  return (
    <div className="row">
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="all">Alle</option>
        <option value="open">Offen</option>
        <option value="done">Erledigt</option>
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="-createdAt">Neueste zuerst</option>
        <option value="createdAt">Älteste zuerst</option>
        <option value="dueDate">Fällig ↑</option>
        <option value="-dueDate">Fällig ↓</option>
      </select>
    </div>
  );
}
