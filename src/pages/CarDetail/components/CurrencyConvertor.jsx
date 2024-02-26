import "../../../sass/components/_currencyConvertor.scss";

import { useState } from "react";

import CarDetailCredit from "../../../scenes/CarDetailCredit";
import CurrencyCalc from "../../../scenes/CurrencyCalc";

const CurrencyConvertor = ({ product }) => {
  const [isCreditOpen, setIsCreditOpen] = useState(false);
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  const handleCreditOpen = () => {
    setIsCreditOpen((prevValue) => !prevValue);
  };

  return (
    <div className="currency__convertor">
      <div className="currency__convertor__amount">200 000 AZN</div>
      <div className="currency__convertor__options">
        <div className="currency__convertor__options__cases">
          {product.leasing && (
            <div className="currency__convertor__options__cases__item leasing">
              <img src="/carDetail/currency/leasing.png" alt="leasing" />
            </div>
          )}
          {product.credit && (
            <div className="currency__convertor__options__cases__item barter">
              <img src="/carDetail/currency/barter.png" alt="barter" />
            </div>
          )}
          {product.barter && (
            <div className="currency__convertor__options__cases__item credit">
              <img src="/carDetail/currency/credit.png" alt="credit" />
            </div>
          )}
        </div>
        <button
          className="currency__convertor__options__calc"
          onClick={() => setIsCalcOpen(true)}
        >
          Valyuta çevirici
        </button>
      </div>
      <div className="currency__convertor__justice">
        <div className="currency__convertor__justice__rank">
          <div className="currency__convertor__justice__rank__item filled" />
          <div className="currency__convertor__justice__rank__item filled" />
          <div className="currency__convertor__justice__rank__item filled" />
          <div className="currency__convertor__justice__rank__item" />
          <div className="currency__convertor__justice__rank__item" />
        </div>
        <div className="currency__convertor__justice__text">
          Ədalətli qiymət
        </div>
      </div>
      <button className="currency__convertor__btn" onClick={handleCreditOpen}>
        <img src="/carDetail/currency/credit.png" alt="credit" />
        Hissə-hissə al
      </button>
      {isCreditOpen && (
        <div className="currency__convertor__credit">
          <CarDetailCredit closeBtn={setIsCreditOpen} />
        </div>
      )}
      {isCalcOpen && <CurrencyCalc setIsCalcOpen={setIsCalcOpen} />}
    </div>
  );
};

export default CurrencyConvertor;
