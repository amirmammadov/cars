import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import "../../../sass/components/_others.scss";

import { others } from "../../../constants";

const Others = () => {
  return (
    <div className="car__others">
      <div className="car__others__title">Digər</div>
      <div className="car__others__content">
        {others.map((other) => (
          <div key={other.id} className="car__others__content__item">
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
                label={other.title}
              />
            </FormGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;
