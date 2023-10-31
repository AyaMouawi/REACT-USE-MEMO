import React, { useState, useMemo } from "react";

function NameFilterWithMemo() {
  const [names] = useState(["Alice", "Bob", "Charlie", "David"]);
  const [filter, setFilter] = useState("");
  const [counter, setCounter] = useState(0);

  const filteredNames = useMemo(() => {
    console.log("Filtering with useMemo...");
    return names.filter((name) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [names, filter]);

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

      <h3>Filtering with useMemo</h3>
      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameFilterWithMemo;
