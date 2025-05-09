import React from "react";
const ListBtem = ({ list, toggleSelect, selectedLists }) => {
  return (
    <div className="p-4 mb-12 border rounded-lg shadow-md lg:-mb-10 bg-white lg:w-[300px] lg:h-56 ">
      <div className="flex items-center gap-2 mt-2 justify-between">
        <input
          type="checkbox"
          checked={selectedLists.includes(list.id)}
          onChange={() => toggleSelect(list.id)}
          className="accent-blue-500  flex justify-start"
        />
        <div className="flex  flex-col space-y-1 ">
          <span className="lg:w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="lg:w-2 h-2  bg-gray-400 rounded-full"></span>
          <span className="lg:w-2 h-2  bg-gray-400 rounded-full"></span>
        </div>
      </div>
      <div className="flex  bg-gray-400 p-2 lg:mt-30 rounded-se-xl ">
        <p className="text-gray-800 font-semibold mr-12   ">
          {list.name || "shopping List"}
        </p>

        <p className="text-sm mt-1 text-gray-800 ml-6">- {list.dateCreated}</p>
      </div>
    </div>
  );
};

export default ListBtem;
