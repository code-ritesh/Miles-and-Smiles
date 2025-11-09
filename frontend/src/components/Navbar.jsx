import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./navbar/Logo.jsx";
import SearchBar from "./navbar/SearchBar.jsx";
import Friends from "./navbar/Friends.jsx";
import Favourites from "./navbar/Favourites.jsx";
import ThemeToggle from "./navbar/ThemeToggle.jsx";
import AuthButtons from "./navbar/AuthButtons.jsx";
import MobileMenu from "./navbar/MobileMenu.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // USER SETTINGS
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogin = () => {
    navigate("/auth");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    localStorage.setItem("showFavoritesOnly", "false");
    setShowFavoritesOnly(false);
    window.dispatchEvent(
      new CustomEvent("favoritesFilterChange", { detail: false })
    );

    navigate("/");
  };

  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  // FAVOURITES SETTINGS
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(
    () => localStorage.getItem("showFavoritesOnly") === "true"
  );

  // Listen for cross-tab changes to token/user
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
      try {
        const updatedUser = localStorage.getItem("user");
        setUser(updatedUser ? JSON.parse(updatedUser) : null);
      } catch {
        setUser(null);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-(--surface) text-(--text) flex items-center justify-between px-4 md:px-6 py-3 shadow-md transition-colors duration-200 relative">
      <Logo username={user?.username} isLoggedIn={isLoggedIn} />
      <SearchBar />
      <div className="flex items-center space-x-3 md:space-x-4">
        <Friends />
        <Favourites
          isLoggedIn={isLoggedIn}
          showFavoritesOnly={showFavoritesOnly}
          setShowFavoritesOnly={setShowFavoritesOnly}
        />
        <ThemeToggle />

        <img
          src={
            isLoggedIn && user && user.pfp_url ? user.pfp_url : "/guestpfp.png"
          }
          alt="profile"
          title={user ? user.username : "Guest"}
          className="w-8 h-8 rounded-full cursor-pointer hidden sm:block"
        />

        <AuthButtons isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-(--card) rounded-full cursor-pointer"
        >
          {menuOpen ? (
            <X className="cursor-pointer" size={22} />
          ) : (
            <Menu className="cursor-pointer" size={22} />
          )}
        </button>
      </div>
      <MobileMenu
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onLogin={handleLogin}
        menuOpen={menuOpen}
      />
    </nav>
  );
};

export default Navbar;
