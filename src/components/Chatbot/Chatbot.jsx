import { useState, useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";

import "../../sass/components/_chatbot.scss";

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let interval = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => {
      clearTimeout(interval);
    };
  }, []);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="chatbot">
      <div className={`chatbot__content ${open && "active"}`}>
        <div className="chatbot__content__header">
          <img src="./icons/chatbot.png" alt="bot" />
          <p className="chatbot__content__header__text">ChatBot</p>
        </div>
        <div className="chatbot__content__body">
          <img src="./icons/chatbot.png" alt="bot" />
          <p className="chatbot__content__body__text">
            Hörmətli istifadəçi, statistikaları izləmək üçün linkə keçid edin:
            <a href="#" className="chatbot__content__body__text__link">
              Moto4
            </a>
          </p>
        </div>
      </div>
      <button className="chatbot__btn" onClick={handleOpen}>
        {open ? (
          <CloseIcon key="close" sx={{ width: "30px", height: "30px" }} />
        ) : (
          <img
            src={`./icons/chatbot.png`}
            alt="btn"
            key="open"
            className="chatbot__btn__icon"
          />
        )}
      </button>
    </div>
  );
};

export default Chatbot;
