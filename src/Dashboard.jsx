import React, { useState } from "react";
import CreateListModal from "./components/CreateListModal.jsx";
import ListBtem from "./ListBtem.jsx";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [lists, setLists] = useState([]);
  const [selectedLists, setSelectedLists] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = (listName) => {
    const newList = {
      id: Date.now(),
      listname: listName || "Unnamed List",
      dateCreated: new Date().toLocaleDateString(),
    };
    setLists([...lists, newList]);
    closeModal();
  };
  const toggleSelect = (id) => {
    setSelectedLists((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const deleteSelected = () => {
    setLists(lists.filter((list) => !selectedLists.includes(list.id)));
    setSelectedLists([]);
  };

  const downloadSelected = () => {
    const selectedItems = lists.filter((list) =>
      selectedLists.includes(list.id)
    );
    alert("Downloading...");
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-black text-white text-xs p-2 flex flex-col lg:flex-row lg:text-sm justify-between items-center">
        <p className="text-center lg:text-left">
          <em className="bg-white mt-4 text-black border rounded-lg p-1">
            New update
          </em>
          Manage your finances with Auritrack! 💰 Scan to download or click ‘Get
          Started’ to sign up.
        </p>

        <div></div>
      </header>

      <div className="text-white lg:ml-6 p-4 flex flex-wrap justify-between items-center">
        <div className="flex gap-2">
          <img
            src="/blur.png"
            alt="logo"
            className="p-2 bg-orange-400 rounded-lg"
          />
          <h3 className="text-black mt-2">
            Auri <em className="text-gray-400">track</em>
          </h3>
        </div>
        <div className="text-right text-sm lg:text-base lg:mr-4">
          <p className="font-semibold text-gray-400 lg:mr-6">Lemonade George</p>
          <p className="text-gray-400 text-sm lg:text-xs">
            lemonade.george@email.com
          </p>
        </div>
      </div>

      <main>
        <div className="flex gap-2 mt-4 ml-4 lg:ml-8">
          <img
            src="/Male.png"
            alt="memeoji"
            className="p-1 bg-amber-100 rounded-full"
          />

          <div>
            <h3 className="font-semibold text-gray-400">
              Hello, <span className="text-black">Lemonade 👋</span>
            </h3>
            <p className="text-gray-400 text-sm lg:text-xs hidden lg:block">
              Plan your purchases with ease. Start adding your items below!
            </p>
          </div>
        </div>
      </main>

      <div className="  flex gap-4 lg:gap-0 flex-col mt-12 lg:flex-row justify-between lg:items-center ">
        <div className="flex flex-col lg:flex-row lg:ml-6 ml-4 gap-4 lg:gap-0">
          <div className="flex border rounded-lg lg:rounded-none lg:rounded-l-lg border-gray-400 lg:p-2 p-1 w-1/2  lg:pr-8">
            <img src="Search.png" alt="search" className="mr-2 " />
            <input
              type="text"
              placeholder="Search by Note Title..."
              className="w-full   rounded-md text-sm lg:text-base 
             focus:ring-2 "
            />
          </div>
          <p className="text-gray-500 text-sm  rounded-lg lg:rounded-none lg:rounded-r-lg lg:w-96 w-7/12 lg:text-base bg-gray-200 border lg:pt-2  p-1">
            You have created {lists.length}
            budget {lists.length === 1 ? "list" : "lists"}
          </p>
        </div>

        <button
          className="border text-gray-500 rounded-lg mt-12 lg:mt-0 ml-24 lg:ml-4  bg-gray-200 p-1 lg:mr-6  w-1/2 lg:w-40 "
          onClick={openModal}
        >
          <div className="flex ml-6 lg:ml-0">
            <img src="/List.png" alt="list" className="lg:mr-2 " />
            Create New List
          </div>
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {lists.length === 0 ? (
          <div className="flex flex-col items-center justify-center col-span-3 gap-4 mt-32">
            <img src="Recent.png" alt="recent" />
            <p className="text-gray-400 text-center text-sm">
              No Recent List Here
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            {lists.map((list) => (
              <ListBtem
                key={list.id}
                list={list}
                toggleSelect={toggleSelect}
                selectedLists={selectedLists}
                deleteLists={deleteSelected}
              />
            ))}
          </div>
        )}
      </div>

      {lists.length > 0 && (
        <div className="flex flex-col lg:flex-row gap-4 lg:mt-48 justify-center items-center  whitespace-nowrap">
          <button
            onClick={deleteSelected}
            className="text-red-500  bg-gray-200 p-2 rounded-lg flex items-center gap-2 justify-center  w-8/12 lg:w-4/12"
            disabled={selectedLists.length === 0}
          >
            <img src="/delete.png" alt="delete" className="w-5 h-5" />
            Delete Selected items
          </button>

          <button
            onClick={downloadSelected}
            className="bg-gray-300 text-black  w-8/12 lg:w-4/12 p-2  rounded-lg"
            disabled={selectedLists.length === 0}
          >
            Download Selected items
          </button>
        </div>
      )}

      {isModalOpen && (
        <CreateListModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Dashboard;
