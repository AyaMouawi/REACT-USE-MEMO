import React, { useState } from "react";

function NameFilterWithoutMemo() {
  const [names] = useState(["Alice", "Bob", "Charlie", "David"]);
  const [filter, setFilter] = useState("");
  const [counter, setCounter] = useState(0);

  const filterNames = () => {
    console.log("Filtering without useMemo...");
    return names.filter((name) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredNames = filterNames();

  return (
    <div>
      <input
        placeholder="Filter names"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <button onClick={() => setCounter((prev) => prev + 1)}>
        Increment Counter: {counter}
      </button>

      <h3>Filtering without useMemo</h3>
      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameFilterWithoutMemo;
