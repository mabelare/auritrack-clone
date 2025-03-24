import React from "react";
const ListBtem = ({ list, toggleSelect, selectedLists, deleteLists }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <p className="text-gray-800 font-semibold">
        {list.name || "Unnamed List"}
      </p>

      <p className="text-gray-500 text-sm mt-1">- {list.dateCreated}</p>

      <div className="flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          checked={selectedLists.includes(list.id)}
          onChange={() => toggleSelect(list.id)}
          className="accent-blue-500"
        />
      </div>
    </div>
  );
};

export default ListBtem;
