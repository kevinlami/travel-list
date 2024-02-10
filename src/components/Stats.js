export default function Stats({ items }) {
  const numItems = items.length;
  if (numItems === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list.</em>
      </footer>
    );
  }

  const numItemsPecked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numItemsPecked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything. Ready to go ✈️"
          : `💼 You have ${numItems} items on your list,and you alredy packed 
        ${numItemsPecked} (${percentage}%)`}
      </em>
    </footer>
  );
}
