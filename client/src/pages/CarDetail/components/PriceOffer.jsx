import { useState } from "react";

import "../../../sass/components/_priceOffer.scss";

const INITIAL_DATA = {
  user: "",
  phonePrefix: "050",
  phone: "",
  price: "",
  currency: "AZN",
};

const PriceOffer = ({ handleOffer }) => {
  const [data, setData] = useState(INITIAL_DATA);

  const { user, phonePrefix, phone, price, currency } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(INITIAL_DATA);
    handleOffer();
  };

  const handleChange = ({ target }) => {
    setData((prev) => {
      return { ...prev, [target.name]: target.value };
    });
  };

  return (
    <div className="offer">
      <div className="offer__content">
        <div className="offer__content__title">
          <div className="offer__content__title__text">
            Öz qiymət təklifini göndər
          </div>
          <button
            className="offer__content__title__close"
            onClick={handleOffer}
          >
            <img src="/public/icons/close.png" alt="close" />
          </button>
        </div>
        <form className="offer__content__form" onSubmit={handleSubmit}>
          <div className="offer__content__form__row">
            <input
              type="text"
              name="user"
              value={user}
              onChange={handleChange}
              placeholder="Ad və soyad"
              required
              autoComplete="off"
            />
          </div>
          <div className="offer__content__form__row">
            <select
              name="phonePrefix"
              value={phonePrefix}
              onChange={handleChange}
              autoComplete="off"
            >
              <option value="050">(050)</option>
              <option value="051">(051)</option>
              <option value="055">(055)</option>
              <option value="070">(070)</option>
              <option value="077">(077)</option>
            </select>
            <input
              type="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              placeholder="Nömrə"
              minLength="7"
              maxLength="7"
              required
              autoComplete="off"
            />
          </div>
          <div className="offer__content__form__row">
            <input
              type="number"
              name="price"
              value={`${price}`}
              onChange={handleChange}
              placeholder="Məbləğ"
              min={0}
              required
              autoComplete="off"
            />
            <select
              name="currency"
              value={currency}
              onChange={handleChange}
              autoComplete="off"
            >
              <option value="AZN">AZN</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <button type="submit" className="offer__content__form__btn">
            Göndər
          </button>
        </form>
      </div>
    </div>
  );
};

export default PriceOffer;
