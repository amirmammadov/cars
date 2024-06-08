import { useState } from "react";

import RadioGroups from "../../../components/RadioGroups/RadioGroups";

import "../../../sass/components/_type.scss";

import { useDispatch } from "react-redux";
import { setNewPromotionState } from "../../../features/appSlice";

import {
  brandOptions,
  modelOptions,
  salonOptions,
} from "../../../constants/index";

import OptionInputSingle from "../../../components/OptionInputSingle/OptionInputSingle";

import { useSelector } from "react-redux";

import { newPromotionRadioValues } from "../../../constants/index";

const Type = () => {
  const [radioValue, setRadioValue] = useState("new");
  const [clear, setClear] = useState(false);

  const emptyValues = useSelector((state) => state.promotionEmpty);

  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setRadioValue(value);

    dispatch(setNewPromotionState({ name, value }));
  };

  const handleChange = ({ target }) => {
    dispatch(setNewPromotionState({ name: target.name, value: target.value }));
  };

  return (
    <div className="new__promotion__main__type">
      <div className="new__promotion__main__type__checkboxes">
        <RadioGroups
          value={radioValue}
          radioName="isNew"
          handler={handleRadioChange}
          obj={newPromotionRadioValues}
        />
      </div>
      <div className="new__promotion__main__type__inputs">
        <div className="new__promotion__main__type__inputs__item">
          <OptionInputSingle
            options={brandOptions}
            holder="Marka"
            keyValue="brand"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="brand"
            isEmpty={emptyValues.includes("brand")}
          />
        </div>
        <div className="new__promotion__main__type__inputs__item">
          <OptionInputSingle
            options={modelOptions}
            holder="Model"
            keyValue="model"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="model"
            isEmpty={emptyValues.includes("model")}
          />
        </div>
        <div className="new__promotion__main__type__inputs__item">
          <OptionInputSingle
            options={salonOptions}
            holder="Avtomobil Salonu"
            keyValue="salon"
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key="salon"
            isEmpty={emptyValues.includes("salon")}
          />
        </div>
      </div>
    </div>
  );
};

export default Type;
