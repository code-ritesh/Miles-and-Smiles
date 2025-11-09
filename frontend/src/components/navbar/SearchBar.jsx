import { Search } from "lucide-react";

export default function SearchBar({ className = "" }) {
  return (
    <div
      className={`hidden md:flex items-center bg-(--card) rounded-full px-4 py-2 w-[40%] transition-colors duration-200 ${className}`}
    >
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none text-(--text) placeholder-(--muted) w-full"
      />
      <Search className="text-(--muted) cursor-pointer" size={18} />
    </div>
  );
}
