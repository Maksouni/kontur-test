import "./styles.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav>
        <a href="#" className="logo-text">
          <span style={{ color: "var(--secondary-color)" }}>C</span>o
          <span style={{ color: "var(--primary-color)" }}>D</span>e
        </a>
        <ul className="header-list">
          <li>
            <a href="#">Чему вы научитесь</a>
          </li>
          <li>
            <a href="#">Процесс обучения</a>
          </li>
          <li>
            <a href="#">Стоимость</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
        <a href="tel:+7 499 348 93 96" className="phone">
          +7 (499) 348 93 96
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(true)}>
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="17" height="2" rx="1" fill="#F15525" />
            <rect y="6" width="17" height="2" rx="1" fill="#F15525" />
            <rect y="12" width="17" height="2" rx="1" fill="#F15525" />
          </svg>
        </button>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <button className="close-button" onClick={() => setMenuOpen(false)}>
            X
          </button>
          <ul className="ul-menu">
            <li>
              <a href="#">Чему вы научитесь</a>
            </li>
            <li>
              <a href="#">Процесс обучения</a>
            </li>
            <li>
              <a href="#">Стоимость</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <a href="#">Регистрация</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
