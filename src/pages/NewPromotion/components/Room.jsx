import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { carTypes } from "../../../constants";

import "../../../sass/components/_room.scss";
import { FormControl } from "@mui/material";

const Room = () => {
  return (
    <div className="new__promotion__room">
      <div className="new__promotion__room__title">Avtomobil salonu</div>
      <div className="new__promotion__room__content">
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="new__promotion__room__content__control"
            sx={{
              flexDirection: "row",
            }}
          >
            {carTypes.map((type, index) => (
              <FormControlLabel
                key={index}
                className="new__promotion__room__content__control__item"
                value={type.name}
                control={
                  <Radio
                    sx={{
                      color: "#bbbbbb",
                      "&.Mui-checked": {
                        color: "#620985",
                      },
                    }}
                  />
                }
                label={
                  <div className="new__promotion__room__content__control__item__label">
                    <img
                      src={type.image}
                      alt={type.name}
                      className="label__img"
                    />
                    <p className="label__text">{type.name}</p>
                  </div>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Room;
