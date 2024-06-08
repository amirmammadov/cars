import { useState } from "react";

import "../../../sass/components/_filtersFundamental.scss";

import RadioGroups from "../../../components/RadioGroups/RadioGroups";
import OptionInputSingle from "../../../components/OptionInputSingle/OptionInputSingle";
import OptionInputMultiple from "../../../components/OptionInputMultiple/OptionInputMultiple";

import {
  filtersRadioValues,
  brandOptions,
  modelOptions,
  banOptions,
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
      </div>
    </div>
  );
};

export default Fundamentals;
