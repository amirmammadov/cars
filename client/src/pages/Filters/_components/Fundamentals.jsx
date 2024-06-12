import { useState } from "react";

import "../../../sass/components/_filtersSection.scss";

import RadioGroups from "../../../components/RadioGroups/RadioGroups";
import OptionInputSingle from "../../../components/OptionInputSingle/OptionInputSingle";
import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import {
  filtersRadioValues,
  brandOptions,
  modelOptions,
  banOptions,
  seatNumbers,
  forMarket,
  cityOptions,
} from "../../../constants";

const INITIAL_DATA = {};

const Fundamentals = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [radioValue, setRadioValue] = useState("all");
  const [clear, setClear] = useState(false);

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setRadioValue(value);
  };

  const handleChange = ({ target }) => {
    setData((prevValues) => ({
      ...prevValues,
      [target.name]: target.value,
    }));
  };

  console.log(data);

  return (
    <div className="filters__fund">
      <div className="filters__fund__title">Təməl məlumatlar</div>
      <RadioGroups
        value={radioValue}
        radioName="isNew"
        handler={handleRadioChange}
        obj={filtersRadioValues}
      />
      <div className="filters__fund__row">
        <div className="filters__fund__row__item">
          <OptionInputSingle
            options={brandOptions}
            holder="Marka"
            keyValue="brand"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="brand"
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={modelOptions}
            holder="Model"
            keyValue="model"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="model"
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={banOptions}
            holder="Ban növü"
            keyValue="ban"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="ban"
          />
        </div>
        <div className="filters__fund__row__item" />
      </div>
      <div className="filters__fund__row">
        <div className="filters__fund__row__item customInput">
          <input type="number" placeholder="Yürüyüş, Min" />
          <input type="number" placeholder="Max" />
        </div>
        <div className="filters__fund__row__item">
          <select>
            <option value="all">Hamısı</option>
            <option value="new">Yeni</option>
            <option value="old">Sürülmüş</option>
          </select>
        </div>
        <div className="filters__fund__row__item customInput">
          <input type="number" placeholder="Qiymət, Min" />
          <input type="number" placeholder="Max" />
        </div>
        <div className="filters__fund__row__item options">
          <select>
            <option value="AZN">AZN</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>
      <div className="filters__fund__row">
        <div className="filters__fund__row__item customInput">
          <input type="number" placeholder="Il, Min" />
          <input type="number" placeholder="Max" />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={seatNumbers}
            holder="Oturacaq Sayı"
            keyValue="seat"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="seat"
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={cityOptions}
            holder="Şəhər"
            keyValue="city"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="city"
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={forMarket}
            holder="Yığıldığı bazar"
            keyValue="forMarket"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="forMarket"
          />
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
