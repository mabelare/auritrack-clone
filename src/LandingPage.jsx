import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateListModal from "./components/CreateListModal.jsx";

const LandingPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className=" relative flex justify-center min-h-screen items-center  bg-gray-200 ">
      <div className="absolute insert-0 bg-white/30 backdrop-blur-lg"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg text-center  max-w-md w-full">
        <img src="./Vector.png" alt="guest" className="w-8 h-8 mb-4 mx-auto" />

        <h2 className="text-lg font-bold text-gray-800">
          Create next shopping <br /> lists;
          <em className="text-gray-400">no account needed!</em>
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          You can create a shopping list right away-no sign-up needed! Just add
          your items,set your budget,and download your list as an image for easy
          reference.
        </p>
        <div className="flex  gap-8 mt-4 ml-4">
          <Link
            to="/signup"
            className="lg:w-full w-auto px-4 py-2 border bg-gray-300 border-gray-400 font-medium rounded-md text-center"
          >
            Create an Account
          </Link>
          <button
            className="w-auto lg:w-full px-4 py-2 text-white bg-orange-600 font-medium rounded-md text-center"
            onClick={openModal}
          >
            Create Lists
          </button>
        </div>
      </div>
      {isModalOpen && (
        <CreateListModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default LandingPage;
