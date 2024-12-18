import { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useDispatch, useSelector } from "react-redux";
import { setNewPromotionState } from "../../../features/appSlice";

import "../../../sass/components/_price.scss";

const Price = () => {
  const [radioValue, setRadioValue] = useState("all");

  const emptyValues = useSelector((state) => state.promotionEmpty);

  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setRadioValue(event.target.value);

    dispatch(setNewPromotionState({ name, value }));
  };

  const handleChange = (target) => {
    dispatch(setNewPromotionState({ name: target.name, value: target.value }));
  };

  return (
    <div className="new__promotion__price">
      <div className="new__promotion__price__inputs">
        <input
          type="number"
          className={`new__promotion__price__inputs__amount ${
            emptyValues.includes("brand") && "isEmpty"
          }`}
          placeholder="Qiymət"
          name="price"
          autoComplete="off"
          onChange={(e) => handleChange(e.target)}
        />
        <select
          className="new__promotion__price__inputs__currency"
          name="currency"
          onChange={(e) => handleChange(e.target)}
        >
          <option value="AZN">AZN</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="all"
          className="new__promotion__price__radios"
          value={radioValue}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="all"
            name="paymentOptions"
            control={
              <Radio
                sx={{ color: "#620985", "&.Mui-checked": { color: "#620985" } }}
              />
            }
            label="Hamısı"
            className="new__promotion__price__radios__label"
          />
          <FormControlLabel
            value="credit"
            name="paymentOptions"
            control={
              <Radio
                sx={{ color: "#620985", "&.Mui-checked": { color: "#620985" } }}
              />
            }
            label="Kredit"
            className="new__promotion__price__radios__label"
          />
          <FormControlLabel
            value="barter"
            name="paymentOptions"
            control={
              <Radio
                sx={{
                  color: "#620985",
                  "&.Mui-checked": { color: "#620985" },
                }}
              />
            }
            label="Barter"
            className="new__promotion__price__radios__label"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Price;
