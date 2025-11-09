export default function Logo({ username, isLoggedIn }) {
  return (
    <div
      title={`Welcome ${isLoggedIn && username ? username : "Guest"} 😊💕`}
      className="flex items-center space-x-2 md:space-x-3 cursor-pointer"
    >
      <img src="/logo.png" alt="logo" className="w-8 h-8 rounded" />
      <h1 className="font-semibold text-lg">Miles & Smiles</h1>
    </div>
  );
}
