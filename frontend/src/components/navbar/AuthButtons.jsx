import { useNavigate } from "react-router-dom";

export default function AuthButtons({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();
  return isLoggedIn ? (
    <button
      onClick={onLogout}
      className="hidden md:block bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md cursor-pointer"
    >
      Logout
    </button>
  ) : (
    <button
      onClick={() => navigate("/auth")}
      className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md cursor-pointer"
    >
      Login
    </button>
  );
}
