import { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import "../../../sass/components/_type.scss";

import { useDispatch } from "react-redux";
import { setNewPromotionState } from "../../../features/appSlice";

import { brandOptions, modelOptions } from "../../../constants/index";

import OptionInputSingle from "../../../components/OptionInputSingle/OptionInputSingle";

const Type = () => {
  const [clear, setClear] = useState(false);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch(setNewPromotionState({ name: target.name, value: target.value }));
  };

  return (
    <div className="new__promotion__main__type">
      <OptionInputSingle
        options={brandOptions}
        holder="Marka"
        keyValue="brand"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
        key="brand"
        className="new__promotion__main__type__input"
      />
      <OptionInputSingle
        options={modelOptions}
        holder="Model"
        keyValue="model"
        clear={clear}
        setClear={setClear}
        handleChange={handleChange}
        key="model"
        className="new__promotion__main__type__input"
      />
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="new"
          className="new__promotion__main__type__group"
        >
          <FormControlLabel
            value="new"
            control={
              <Radio
                sx={{ color: "#620985", "&.Mui-checked": { color: "#620985" } }}
              />
            }
            label="Yeni"
            className="radio__group__label"
          />
          <FormControlLabel
            value="old"
            control={
              <Radio
                sx={{ color: "#620985", "&.Mui-checked": { color: "#620985" } }}
              />
            }
            label="Sürülmüş"
            className="radio__group__label"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Type;
