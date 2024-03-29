import "../../../sass/components/_currencyConvertor.scss";

import { useState } from "react";

import CurrencyCalc from "../../../scenes/CurrencyCalc";

const CurrencyConvertor = ({ product }) => {
  const [isCalcOpen, setIsCalcOpen] = useState(false);

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

      {isCalcOpen && <CurrencyCalc setIsCalcOpen={setIsCalcOpen} />}
    </div>
  );
};

export default CurrencyConvertor;
