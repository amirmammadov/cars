import "../../sass/components/_radioGroups.scss";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const RadioGroups = ({ value, radioName, handler, radios }) => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={radioName}
        defaultValue="new"
        className="radio__group"
        value={value}
        onChange={handler}
      >
        {radios.map((label) => (
          <FormControlLabel
            key={label.id}
            value={label.value}
            name={label.name}
            control={
              <Radio
                sx={{
                  color: "#620985",
                  "&.Mui-checked": { color: "#620985" },
                }}
              />
            }
            label={label.text}
            className="radio__group__label"
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroups;
