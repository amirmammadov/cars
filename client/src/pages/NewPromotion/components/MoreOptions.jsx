import { useState } from "react";

import "../../../sass/components/_moreOptions.scss";

import { useDispatch, useSelector } from "react-redux";
import { setNewPromotionState } from "../../../features/appSlice";

import OptionInputSingle from "../../../components/OptionInputSingle/OptionInputSingle";

import { moreOptionsIterator } from "../../../constants/index";

const MoreOptions = () => {
  const [clear, setClear] = useState(false);

  const emptyValues = useSelector((state) => state.promotionEmpty);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(setNewPromotionState({ name: target.name, value: target.value }));
  };

  return (
    <div className="more__options">
      <input
        type="text"
        placeholder="Yürüş, km"
        name="distance"
        onChange={(e) => handleChange(e)}
        className={`more__options__input ${
          emptyValues.includes("distance") && "isEmpty"
        }`}
        autoComplete="off"
      />
      <input
        type="text"
        placeholder="Həcm, (sm3)"
        name="volume"
        onChange={(e) => handleChange(e)}
        className={`more__options__input ${
          emptyValues.includes("volume") && "isEmpty"
        }`}
        autoComplete="off"
      />
      <input
        type="text"
        placeholder="Güc, kW"
        name="power"
        onChange={(e) => handleChange(e)}
        className={`more__options__input ${
          emptyValues.includes("power") && "isEmpty"
        }`}
        autoComplete="off"
      />
      {moreOptionsIterator.map((option) => {
        return (
          <OptionInputSingle
            options={option.options}
            holder={option.holder}
            keyValue={option.keyValue}
            clear={clear}
            setClear={setClear}
            handleChange={handleChange}
            key={option.keyValue}
            isEmpty={emptyValues.includes(option.keyValue)}
          />
        );
      })}
    </div>
  );
};

export default MoreOptions;
