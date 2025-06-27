import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

function Navbar({ cartCount }) {
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState(null);

  // ✅ On first load, check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedName = localStorage.getItem("userName");
    if (token && storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    alert("✅ Logged Out");
    setUserName(null);
    window.location.reload();
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white relative">
      <h1 className="text-xl font-bold">Think Cloths</h1>

      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/cart" className="relative">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartCount}
            </span>
          )}
        </Link>

       

        {/* 👤 Profile Button */}
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="text-xl p-2 rounded-full hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition duration-200"
        >
          👤
        </button>
      </div>

      {/* ✅ Login Modal */}
      {showLogin && (
        <div className="absolute right-4 top-16 bg-white shadow-md border p-4 w-80 z-50">
          <LoginModal onClose={() => setShowLogin(false)} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
