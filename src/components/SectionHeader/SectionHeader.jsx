import "../../sass/components/_sectionHeader.scss";

import { useNavigate } from "react-router-dom";

const SectionHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="section__header">
      <div className="section__header__title">{title}</div>
      <button
        className="section__header__link"
        onClick={() => {
          window.scroll(0, 0);
          navigate("/elan");
        }}
      >
        Hamısına bax
        <img
          src="/carDetail/right-arrow.png"
          alt="arrow"
          className="section__header__link__img"
        />
      </button>
    </div>
  );
};

export default SectionHeader;
