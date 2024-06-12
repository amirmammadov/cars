import { useState } from "react";

import { useClearFilter } from "../../../hooks/useClearFilter";

import "../../../sass/components/_filtersSection.scss";

import RadioGroups from "../../../components/RadioGroups/RadioGroups";
import OptionInputSingle from "../../../components/OptionInputSingle/OptionInputSingle";
import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import { moreFilterOptions } from "../../../constants/more-filters";

const INITIAL_DATA = {};

const Fundamentals = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [radioValue, setRadioValue] = useState("all");

  const isClear = useClearFilter()[0];

  const { brand, model, banType, seats, city, forMarket, radios } =
    moreFilterOptions;

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
        radios={radios}
      />
      <div className="filters__fund__row">
        <div className="filters__fund__row__item">
          <OptionInputSingle
            options={brand}
            holder="Marka"
            keyValue="brand"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={model}
            holder="Model"
            keyValue="model"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={banType}
            holder="Ban növü"
            keyValue="banType"
            clear={isClear}
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
            options={seats}
            holder="Oturacaq Sayı"
            keyValue="seats"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={city}
            holder="Şəhər"
            keyValue="city"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
        <div className="filters__fund__row__item">
          <OptionInputMultiple
            options={forMarket}
            holder="Yığıldığı bazar"
            keyValue="forMarket"
            clear={isClear}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
