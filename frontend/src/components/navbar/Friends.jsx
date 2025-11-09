import React from "react";
import { Users } from "lucide-react";

function Friends() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <button className="p-2 hover:bg-(--card) rounded-full cursor-pointer">
        <Users className="text-(--muted) cursor-pointer" size={20} />
      </button>
    </div>
  );
}

export default Friends;
