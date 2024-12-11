import CustomButton from "./CustomButton";
import { useModal } from "../providers/ModalContext";
import { useEffect } from "react";
import "./styles.css";

export default function Modal() {
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);
  if (!isOpen) return null;
  const handleClick = () => {};
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-content">
          <button className="close-button" onClick={()=>closeModal()}>X</button>
          <h1>Заказать звонок</h1>
          <p>Имя</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="ваше имя"
            maxLength="25"
          />
          <p>Телефон</p>
          <input
            type="tel"
            name=""
            id=""
            placeholder="+7 ХХХ - ХХХ - ХХ -ХХ"
            maxLength="25"
          />
          <p>Email</p>
          <input
            type="email"
            name=""
            id=""
            placeholder="mail@site.com"
            maxLength="50"
          />
          <p>Сообщение</p>
          <textarea id="" placeholder="Ваше сообщение" />
          <p className="conf-politics">
            Нажимая кнопку “Отправить”, соглашаюсь с<br />
            <a href="#">политикой конфидениальности</a>
          </p>
          <CustomButton text="Отправить" onClick={handleClick} type="submit" />
        </div>
      </div>
    </div>
  );
}
