import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

import "../../sass/components/_degreeSlider.scss";

export default function DegreeSlider() {
  const [value, setValue] = React.useState(0);
  const [number, setNumber] = React.useState(1);

  const handleChange = (event, newValue) => {
    let newData = (newValue * (36 / 101)).toFixed(0);
    if (newData === 0) {
      newData = 1;
    }
    setNumber(newData);
    setValue(newValue);
  };

  return (
    <div className="degree__slider">
      <Typography
        id="continuous-slider"
        gutterBottom
        className="degree__slider__text"
      >
        360 Image view
      </Typography>
      <img
        src={`/carDetail/degree/car-${number}.png`}
        width="800"
        height="400"
        alt="360_degree"
        className="degree__slider__img"
      />
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
            sx={{ color: "#620985" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
