/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Drawer.css";
import Login from "./Login"

const Drawer = ({isVerified, handleShowCpfPopup, handleLogout}) => {
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
            <li>
            <li>
              <br />
              <p className="other-products">Adquirir Jogos</p>  
            </li>
            </li>
            <li>
            <a href="https://seguro.lovechocolate.com.br/r/BAUKPJCJU1" target="_blank" rel="noopener noreferrer">Love Cards Clássico</a>
            </li>
            <li>
            <a href="https://seguro.lovechocolate.com.br/r/KFLKZZ0F1P" target="_blank" rel="noopener noreferrer">Love Cards Question</a>
            </li>
            <li>
              <br />
              <p className="other-products">Outros Produtos</p>
            </li>
            <li>
              <a href="https://lovechocolate.com.br/products/love-chocolate?utm_campaign=internal_referral&utm_source=lovecards_digital" target="_blank" rel="noopener noreferrer">Love Chocolate</a>
            </li>
            <li>
              <a href="https://lovechocolate.com.br/products/seu-site-personalizado?utm_campaign=internal_referral&utm_source=lovecards_digital" target="_blank" rel="noopener noreferrer">Love Site</a>
            </li>
            <li>
              <a href="https://lovechocolate.com.br/products/love-cards?utm_campaign=internal_referral&utm_source=lovecards_digital" target="_blank" rel="noopener noreferrer">Love Cards Físico</a>
            </li>
            <li>
                {!isVerified && (
                <Login
                  clickLogin={() => {
                    handleShowCpfPopup()
                    toggleDrawer()
                  }}
                  text={"Entrar"}
                />
              )}
              {isVerified && (
                <Login
                  clickLogin={handleLogout}
                  text={"Sair"}
                />
              )}
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && <div className="overlay" onClick={toggleDrawer}></div>}
    </div>
  );
};

export default Drawer;
