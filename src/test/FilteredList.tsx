import { useMemo, useState } from "react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const FilteredList = () => {
  const [search, setSearch] = useState("");

  // Memoize filtered users
  const filteredUsers = useMemo(() => {
    console.log("Filtering...");
    return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]); // Recalculate only when 'search' changes

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
