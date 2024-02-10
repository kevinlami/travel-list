import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onRemoveItems,
  onPackedItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortItems = items;

  if (sortBy === "input") {
    sortItems = items.slice();
  }

  if (sortBy === "descrition") {
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortItems &&
          sortItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onRemoveItems={onRemoveItems}
              onPackedItems={onPackedItems}
            />
          ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="descrition">Sort by descrition</option>
          <option value="packed">Sort by packded status</option>
        </select>
        <button onClick={onClearList}>Clean list</button>
      </div>
    </div>
  );
}
