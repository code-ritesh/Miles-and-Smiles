import { useState } from "react";
import Login from "../components/Login.jsx";
import SignUp from "../components/SignUp.jsx";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");
  const [message, setMessage] = useState(null);

  return (
    <div className="flex justify-center items-center h-screen bg-(--bg)">
      <div className="bg-(--card) text-(--text) rounded-2xl shadow-lg w-96 p-6">
        {message && (
          <div
            className={`mb-4 px-3 py-2 rounded-md text-sm border
            ${
              message.type === "success"
                ? "bg-green-100 text-green-800 border-green-200"
                : ""
            }
            ${
              message.type === "error"
                ? "bg-red-100 text-red-800 border-red-200"
                : ""
            }
            ${
              message.type === "info"
                ? "bg-blue-100 text-blue-800 border-blue-200"
                : ""
            }
          `}
          >
            {message.text}
          </div>
        )}
        <div className="flex bg-(--surface) rounded-md p-1 mb-6">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-2 rounded-md transition-all ${
              activeTab === "login"
                ? "bg-blue-500 text-white shadow"
                : "text-(--muted) hover:text-(--text)"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-2 rounded-md transition-all ${
              activeTab === "signup"
                ? "bg-blue-500 text-white shadow"
                : "text-(--muted) hover:text-(--text)"
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="transition-all duration-500 ease-in-out">
          {activeTab === "login" ? (
            <Login onMessage={setMessage} />
          ) : (
            <SignUp onMessage={setMessage} />
          )}
        </div>
      </div>
    </div>
  );
}
