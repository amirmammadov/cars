import { useState, useEffect, useCallback } from "react";

import "../sass/layout/_currencyCalc.scss";

import axios from "axios";

import CloseIcon from "@mui/icons-material/Close";

import CurrencyInput from "../components/CurrencyInput/CurrencyInput";

const CurrencyCalc = ({ setIsCalcOpen }) => {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState("AZN");
  const [currency2, setCurrency2] = useState("USD");
  const [rates, setRates] = useState([]);

  const currency = process.env.CURRENCY_API;

  useEffect(() => {
    axios
      .get(`http://data.fixer.io/api/latest?access_key=${currency}`)
      .then((response) => {
        setRates(response.data.rates);
      });
  }, [currency]);

  function format(number) {
    return number.toFixed(2);
  }

  const handleAmount1Change = useCallback(
    (amount1) => {
      setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
      setAmount1(amount1);
    },
    [currency1, currency2, rates]
  );

  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div className="currency__convertor__calc">
      <div className="currency__convertor__calc__content">
        <div className="currency__convertor__calc__content__title">
          <div className="currency__convertor__calc__content__title__text">
            Valyuta çevirici
          </div>
          <CloseIcon
            className="currency__convertor__calc__content__title__btn"
            onClick={() => setIsCalcOpen(false)}
          />
        </div>
        <div className="currency__convertor__calc__content__body">
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates)}
            amount={amount1}
            currency={currency1}
            key={1}
          />
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rates)}
            amount={amount2}
            currency={currency2}
            key={2}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyCalc;
