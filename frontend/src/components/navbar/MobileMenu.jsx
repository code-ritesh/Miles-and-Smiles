import { Search, Users, Heart } from "lucide-react";

export default function MobileMenu({
  isLoggedIn,
  onLogout,
  onLogin,
  menuOpen,
}) {
  if (!menuOpen) return null;
  return (
    <div className="absolute top-full left-0 w-full bg-(--surface) border-t border-(--muted) flex flex-col items-center space-y-3 py-4 md:hidden transition-all duration-300">
      <div className="flex items-center bg-(--card) rounded-full px-4 py-2 w-[90%]">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-(--text) placeholder-(--muted) w-full"
        />
        <Search className="text-(--muted) cursor-pointer" size={18} />
      </div>

      <div className="flex space-x-4">
        <button className="p-2 hover:bg-(--card) rounded-full cursor-pointer">
          <Users className="text-(--muted) cursor-pointer" size={20} />
        </button>
        <button className="p-2 hover:bg-(--card) rounded-full cursor-pointer">
          <Heart className="text-(--muted) cursor-pointer" size={20} />
        </button>
      </div>

      {isLoggedIn ? (
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-md"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={onLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-md"
        >
          Login
        </button>
      )}
    </div>
  );
}
