import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Drawer.css";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="menu-button" onClick={toggleDrawer}>
        <FiMenu size={30} />
      </button>

      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleDrawer}>
          <FiX size={30} />
        </button>
        <nav className="drawer-nav">
          <ul>
            <li className="li-option">
              <Link to="/" onClick={toggleDrawer}>
                Início
              </Link>
            </li>
            <li className="li-option">
              <Link to="/como-jogar" onClick={toggleDrawer}>
                Como Jogar
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && <div className="overlay" onClick={toggleDrawer}></div>}
    </div>
  );
};

export default Drawer;
