import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useDispatch } from "react-redux";
import { setNewPromotionState } from "../../../features/appSlice";

import "../../../sass/components/_price.scss";

const Price = () => {
  const dispatch = useDispatch();

  const handleChange = (target) => {
    dispatch(setNewPromotionState({ name: target.name, value: target.value }));
  };

  return (
    <div className="new__promotion__price">
      <div className="new__promotion__price__inputs">
        <input
          type="number"
          className="new__promotion__price__inputs__amount"
          placeholder="Qiymət"
          name="price"
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
        >
          <FormControlLabel
            value="all"
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
