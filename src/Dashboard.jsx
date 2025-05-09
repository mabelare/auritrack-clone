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
          <em className="bg-white mt-4 text-black border rounded-lg p-1 lg:ml-8">
            New update
          </em>
          Manage your finances with Auritrack! 💰 Scan to download or click ‘Get
          Started’ to sign up.
        </p>
        <div className="flex   ">
          <img
            src="appstore.webp"
            alt="app"
            className="w-[92px] hidden lg:block "
          />

          <img
            src="google.png"
            alt="store"
            className="w-[92px] mr-24  hidden lg:block"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="25"
            viewBox="0 0 14 14"
            fill="#f97316"
            className="mr-6  hidden lg:block rounded-lg"
          >
            <path
              d="M0.531937 2.57447C0.531937 1.6116 0.531937 1.13016 0.831062 0.831039C1.13019 0.531914 1.61162 0.531914 2.57449 0.531914C3.53736 0.531914 4.01879 0.531914 4.31792 0.831039C4.61704 1.13016 4.61704 1.6116 4.61704 2.57447C4.61704 3.53734 4.61704 4.01877 4.31792 4.3179C4.01879 4.61702 3.53736 4.61702 2.57449 4.61702C1.61162 4.61702 1.13019 4.61702 0.831062 4.3179C0.531937 4.01877 0.531937 3.53734 0.531937 2.57447Z"
              stroke="white"
              stroke-width="1.02128"
            />
            <path
              d="M0.531937 10.7447C0.531937 9.78181 0.531937 9.30038 0.831062 9.00125C1.13019 8.70213 1.61162 8.70213 2.57449 8.70213C3.53736 8.70213 4.01879 8.70213 4.31792 9.00125C4.61704 9.30038 4.61704 9.78181 4.61704 10.7447C4.61704 11.7075 4.61704 12.189 4.31792 12.4881C4.01879 12.7872 3.53736 12.7872 2.57449 12.7872C1.61162 12.7872 1.13019 12.7872 0.831062 12.4881C0.531937 12.189 0.531937 11.7075 0.531937 10.7447Z"
              stroke="white"
              stroke-width="1.02128"
            />
            <path
              d="M0.531937 6.65957L4.61704 6.65957"
              stroke="white"
              stroke-width="1.02128"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.6596 0.531914V3.93617"
              stroke="white"
              stroke-width="1.02128"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.70215 2.57447C8.70215 1.6116 8.70215 1.13016 9.00127 0.831039C9.3004 0.531914 9.78183 0.531914 10.7447 0.531914C11.7076 0.531914 12.189 0.531914 12.4881 0.831039C12.7873 1.13016 12.7873 1.6116 12.7873 2.57447C12.7873 3.53734 12.7873 4.01877 12.4881 4.3179C12.189 4.61702 11.7076 4.61702 10.7447 4.61702C9.78183 4.61702 9.3004 4.61702 9.00127 4.3179C8.70215 4.01877 8.70215 3.53734 8.70215 2.57447Z"
              stroke="white"
              stroke-width="1.02128"
            />
            <path
              d="M12.7873 6.65957H8.70215C7.73928 6.65957 7.25785 6.65957 6.95872 6.9587C6.6596 7.25782 6.6596 7.73926 6.6596 8.70213M6.6596 10.5876V12.473M8.70215 8.70213V9.7234C8.70215 10.7082 9.2357 10.7447 10.0639 10.7447C10.4399 10.7447 10.7447 11.0495 10.7447 11.4255M9.383 12.7872H8.70215M10.7447 8.70213C11.7076 8.70213 12.189 8.70213 12.4881 9.00168C12.7873 9.30124 12.7873 9.78337 12.7873 10.7476C12.7873 11.7119 12.7873 12.194 12.4881 12.4936C12.2698 12.7122 11.9544 12.7713 11.4256 12.7872"
              stroke="white"
              stroke-width="1.02128"
              stroke-linecap="round"
            />
          </svg>
        </div>
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
          <p className="font-semibold text-gray-400 lg:mr-4">Lemonade George</p>
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
            <p className="text-gray-400 text-[13px] lg:text-xs  ">
              Plan your purchases with ease. Start adding your items below! lets
              have the complewt control of your finances
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
            You have created {lists.length}- budget{" "}
            {lists.length === 1 ? "list" : "lists"}
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
        <div className="flex flex-col lg:flex-row gap-4 lg:mt-30 justify-center items-center  whitespace-nowrap">
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
