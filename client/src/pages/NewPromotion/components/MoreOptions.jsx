import { useState } from "react";

import "../../../sass/components/_moreOptions.scss";

import { useDispatch } from "react-redux";
import { setNewPromotionState } from "../../../features/appSlice";

import OptionInputSingle from "../../../components/OptionInputSingle/OptionInputSingle";

import { moreOptionsIterator } from "../../../constants/index";

const MoreOptions = () => {
  const [clear, setClear] = useState(false);

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
        className="more__options__input"
        autoComplete="off"
      />
      <input
        type="text"
        placeholder="Həcm, (sm3)"
        name="volume"
        onChange={(e) => handleChange(e)}
        className="more__options__input"
        autoComplete="off"
      />
      <input
        type="text"
        placeholder="Güc, kW"
        name="power"
        onChange={(e) => handleChange(e)}
        className="more__options__input"
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
          />
        );
      })}
    </div>
  );
};

export default MoreOptions;
