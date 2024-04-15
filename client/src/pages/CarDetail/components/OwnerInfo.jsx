import { useState } from "react";

import "../../../sass/components/_ownerInfo.scss";

const OwnerInfo = () => {
  const [showPhone, setShowPhone] = useState();

  return (
    <div className="owner__info">
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
      <div className="owner__info__divider" />
      <div className="owner__info__vin">
        <div className="owner__info__vin__key">VİN kod:</div>
        <div className="owner__info__vin__value">WDD12345678901234</div>
      </div>
      <button
        className="owner__info__btn"
        onClick={() => {
          setShowPhone((prev) => !prev);
        }}
      >
        <img src="/carDetail/phone.png" alt="phone" />
        <div className="owner__info__btn__phone">{`${
          showPhone ? "(050) 555 67 72" : "(050) 555 6* **"
        }`}</div>
      </button>
    </div>
  );
};

export default OwnerInfo;
