import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./../Styles/navbar.css";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Lasom</h1>
      </div>
      <div className={`navbar-search ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-list">
          <Link className="links" to="/">
            <li>Products</li>
          </Link>
          <Link className="links" to="/shopping-cart">
            <li>Cart</li>
          </Link>
          <Link className="links" to="/form-details">
            <li>Check out</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-icons">
        <CgProfile className="icon" />
        <CiSearch className="icon" />
        <MdOutlineShoppingCart className="icon" />
        <button className="contact-button">Contact Us</button>
        <IoIosMenu className="menu-icon " onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
