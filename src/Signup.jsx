import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", username);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100    ">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
        <h2 className="text-lg font-bold text-gray-800">Signup/Login</h2>
        <form onSubmit={handleSignup} className="mt-4">
          <input
            type="text"
            placeholder="Enter Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4 required"
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md"
          >
            Sign up
          </button>
        </form>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 w-full bg-gray-700 text-white py-2 rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
