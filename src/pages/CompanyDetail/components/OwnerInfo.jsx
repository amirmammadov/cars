import { useState } from "react";

import "../../../sass/components/_salonOwner.scss";

const OwnerInfo = () => {
  const [showPhone, setShowPhone] = useState();

  return (
    <div className="owner__info">
      <div className="owner__info__title">Car Fanatics Company</div>
      <div className="owner__info__detail">
        <img
          src="/carDetail/owner.png"
          alt="owner"
          className="owner__info__detail__img"
        />
        <div className="owner__info__detail__content">
          <div className="owner__info__detail__content__name">
            Vüqar Əhmədov
          </div>
          <div className="owner__info__detail__content__status">Dealer</div>
          <div className="owner__info__detail__content__city">Bakı</div>
        </div>
      </div>
      <button
        className="owner__info__btn"
        onClick={() => {
          setShowPhone((prev) => !prev);
        }}
      >
        <img src="/carDetail/phone.png" alt="phone" />
        {showPhone ? (
          <span>(050) 555 67 72</span>
        ) : (
          <span>(050) 555 6* **</span>
        )}
      </button>
    </div>
  );
};

export default OwnerInfo;
