import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-400  flex backdrop-blur-md justify-center items-center 
        z-50"
    >
      <div className="bg-white p-6 relative rounded-lg shadow-lg max-w-md w-full">
        <button
          className="absolute top-2 right-2 text-gray-600 "
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
