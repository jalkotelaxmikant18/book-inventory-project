import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch('http://localhost:5000/api/auth/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        if (!res.ok) throw new Error("Invalid login");
        return res.json();
      })
      .then(() => {
        setLogin(true);          // ✅ set admin logged in
        navigate("/admin");     // ✅ redirect to admin dashboard
      })
      .catch(() => alert("Invalid username or password"));
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Admin Login</h3>

      <input
        className="form-control mb-2"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <input
        className="form-control mb-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button className="btn btn-primary w-100" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
