import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">RideIndia 🏍️</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/maintenance">Maintenance</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About Us</Link>   
      </div>
    </nav>
  );
}

export default Navbar;