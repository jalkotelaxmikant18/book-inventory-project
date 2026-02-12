import { Link } from "react-router-dom";

export default function Navbar({ logout }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">Book Inventory</span>
      <button className="btn btn-danger btn-sm" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}
