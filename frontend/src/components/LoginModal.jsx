import { useState, useEffect } from "react";

function LoginModal({ onClose }) {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("loggedInUser");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const getUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };

  const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name) newErrors.name = "Name required";
    if (!email) newErrors.email = "Email required";
    if (!password) newErrors.password = "Password required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const users = getUsers();
      const existingUser = users.find((u) => u.email === email);
      if (existingUser) {
        alert("❌ User already exists with this email");
      } else {
        saveUser({ name, email, password });
        localStorage.setItem("loggedInUser", name);
        setUserName(name);
        alert(`✅ Welcome ${name}! Your account is created.`);
        setName("");
        setEmail("");
        setPassword("");
        setActiveTab("login"); 
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) newErrors.email = "Email required";
    if (!password) newErrors.password = "Password required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const users = getUsers();
      const user = users.find((u) => u.email === email && u.password === password);
      if (user) {
        localStorage.setItem("loggedInUser", user.name);
        setUserName(user.name);
        alert(`✅ Welcome ${user.name}`);
        setEmail("");
        setPassword("");
      } else {
        alert("❌ Invalid email or password");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUserName("");
    alert("✅ Logged out");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      alert("❌ Please enter your email");
      return;
    }
    const users = getUsers();
    const user = users.find((u) => u.email === forgotEmail);
    if (user) {
      alert("✅ Password reset link sent to your email (Mock)");
    } else {
      alert("❌ Email not found");
    }
    setForgotEmail("");
    setActiveTab("login");
  };

  const renderLoginForm = () =>
    userName ? (
      <div>
        <h2 className="text-lg font-bold mb-3">👋 Hello, {userName}</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    ) : (
      <form onSubmit={handleLogin} className="flex flex-col space-y-3">
        <h2 className="text-lg font-bold mb-1">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password}</p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <div className="flex justify-between text-xs text-blue-500 mt-2">
          <span
            onClick={() => setActiveTab("forgot")}
            className="cursor-pointer"
          >
            Forgot Password?
          </span>
          <span
            onClick={() => setActiveTab("register")}
            className="cursor-pointer"
          >
            Create Account
          </span>
        </div>
      </form>
    );

  const renderRegisterForm = () => (
    <form onSubmit={handleRegister} className="flex flex-col space-y-3">
      <h2 className="text-lg font-bold mb-1">Register</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      {errors.password && (
        <p className="text-red-500 text-xs">{errors.password}</p>
      )}

      <button
        type="submit"
        className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Register
      </button>

      <p
        onClick={() => setActiveTab("login")}
        className="text-xs text-blue-500 cursor-pointer text-right"
      >
        Already have an account? Login
      </p>
    </form>
  );

  const renderForgotForm = () => (
    <form onSubmit={handleForgotPassword} className="flex flex-col space-y-3">
      <h2 className="text-lg font-bold mb-1">Reset Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={forgotEmail}
        onChange={(e) => setForgotEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
      >
        Send Reset Link
      </button>
      <p
        onClick={() => setActiveTab("login")}
        className="text-xs text-blue-500 cursor-pointer text-right"
      >
        Back to Login
      </p>
    </form>
  );

  return (
    <div
      className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto transition-transform duration-300"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
      >
        ✕
      </button>

      {activeTab === "login" && renderLoginForm()}
      {activeTab === "register" && renderRegisterForm()}
      {activeTab === "forgot" && renderForgotForm()}
    </div>
  );
}

export default LoginModal;
