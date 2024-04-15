import { useState } from "react";

import "../../../sass/components/_salonOwner.scss";

const OwnerInfo = () => {
  const [showPhone, setShowPhone] = useState();

  return (
    <div className="salon__owner__info">
      <div className="salon__owner__info__title">Car Fanatics Company</div>
      <div className="salon__owner__info__detail">
        <img
          src="/carDetail/owner.png"
          alt="owner"
          className="salon__owner__info__detail__img"
        />
        <div className="salon__owner__info__detail__content">
          <div className="salon__owner__info__detail__content__name">
            Vüqar Əhmədov
          </div>
          <div className="salon__owner__info__detail__content__status">
            Dealer
          </div>
          <div className="salon__owner__info__detail__content__city">Bakı</div>
        </div>
      </div>
      <button
        className="salon__owner__info__btn"
        onClick={() => {
          setShowPhone((prev) => !prev);
        }}
      >
        <img src="/carDetail/phone.png" alt="phone" />
        <div className="salon__owner__info__btn__phone">{`${
          showPhone ? "(050) 555 67 72" : "(050) 555 6* **"
        }`}</div>
      </button>
    </div>
  );
};

export default OwnerInfo;
