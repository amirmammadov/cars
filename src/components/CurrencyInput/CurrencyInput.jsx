import "../../sass/components/_currencyInput.scss";

const CurrencyInput = (props) => {
  return (
    <div className="currency__convertor__calc__content__body__item">
      <input
        type="text"
        value={props.amount}
        onChange={(e) => props.onAmountChange(e.target.value)}
        className="currency__convertor__calc__content__body__item__input"
      />
      <select
        value={props.currency}
        onChange={(e) => props.onCurrencyChange(e.target.value)}
        className="currency__convertor__calc__content__body__item__currency"
      >
        {props.currencies.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
