import { useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "../../../sass/components/_promotionColors.scss";

import { innerColors, outerColors } from "../../../constants/index";

const Colors = () => {
  const [activeBtn, setActiveBtn] = useState("inner");

  const changeActiveBtn = () => {
    if (activeBtn === "inner") {
      setActiveBtn("outer");
    } else {
      setActiveBtn("inner");
    }
  };

  return (
    <div className="colors">
      <div className="colors__btns">
        <button
          className={`colors__btns__inner ${activeBtn === "inner" && "active"}`}
          onClick={changeActiveBtn}
        >
          Xarici rəng
        </button>
        <button
          className={`colors__btns__outer ${activeBtn === "outer" && "active"}`}
          onClick={changeActiveBtn}
        >
          Daxili rəng
        </button>
      </div>
      <div className="colors__content">
        {(activeBtn === "inner" ? innerColors : outerColors).map((color) => (
          <div key={color.id} className="colors__content__item">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": {
                        color: color.code,
                      },
                      "&.Mui-checked": {
                        "& .MuiSvgIcon-root": {
                          backgroundColor: "transparent",
                        },
                      },
                    }}
                  />
                }
                label={color.title}
              />
            </FormGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
