import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import "../../sass/components/_optionInput.scss";

export default function OptionInputSingle({
  options,
  holder,
  isYear,
  handleChange,
  keyValue,
  clear,
  setClear,
}) {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleAutocompleteChange = (event, value) => {
    setSelectedValue(value);
    setClear(false);
    handleChange({
      target: { name: keyValue, value: value || "" },
    });
  };

  useEffect(() => {
    if (clear) {
      setSelectedValue(null);
    }
  }, [clear]);

  return (
    <Autocomplete
      id="highlights-demo"
      classes={{
        popupIndicator: "custom-popup-indicator",
      }}
      sx={{
        minWidth: "120px",
        margin: `${isYear && "0"}`,
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          { borderColor: "#620985", borderRadius: "8px", borderWidth: "1px" },
        "& .MuiAutocomplete-inputRoot": { padding: "5px" },
        borderRadius: "8px",
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#fff",
          borderWidth: 0,
        },
      }}
      componentsProps={{
        paper: {
          sx: {
            borderRadius: "8px",
            marginTop: "10px",
          },
        },
      }}
      options={options}
      getOptionLabel={(option) => option.title}
      blurOnSelect={false}
      onChange={handleAutocompleteChange}
      value={selectedValue}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            backgroundColor: "#fff",
            borderTopLeftRadius: `${isYear && holder === "İl,Min" && "8px"}`,
            borderBottomLeftRadius: `${isYear && holder === "İl,Min" && "8px"}`,
            borderTopRightRadius: `${isYear && holder === "Max" && "8px"}`,
            borderBottomRightRadius: `${isYear && holder === "Max" && "8px"}`,
            borderRadius: `${!isYear && "8px"}`,
            border: "none",
          }}
          placeholder={holder}
        />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.title, inputValue, {
          insideWords: true,
        });
        const parts = parse(option.title, matches);

        return (
          <li
            {...props}
            style={{
              padding: "10px",
              fontSize: "16px",
              display: "block",
              marginLeft: "0",
            }}
          >
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
}
