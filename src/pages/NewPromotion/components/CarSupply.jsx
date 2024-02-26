import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "../../../sass/components/_carSupply.scss";

import { supplies } from "../../../constants";

const CarSupply = () => {
  return (
    <div className="car__supply">
      <div className="car__supply__title">Avtomobilin təchizatları</div>
      <div className="car__supply__content">
        {supplies.map((supply) => (
          <div key={supply.id} className="car__supply__content__item">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": {
                        color: "#bbb",
                      },
                      "&.Mui-checked": {
                        "& .MuiSvgIcon-root": {
                          backgroundColor: "transparent",
                          color: "#620985",
                        },
                      },
                    }}
                  />
                }
                label={supply.title}
              />
            </FormGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSupply;
