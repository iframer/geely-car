import { useState } from 'react';
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Логотип</h1>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Главная</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}

export default Header;
