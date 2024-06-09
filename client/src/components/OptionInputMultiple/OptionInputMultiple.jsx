import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function OptionInputMultiple({
  options,
  holder,
  keyValue,
  handleChange,
  clear,
  setClear,
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleAutocompleteChange = (event, value) => {
    setSelectedOptions(value);
    setClear(false);
    handleChange({
      target: { name: keyValue, value: value || [] },
    });
  };

  useEffect(() => {
    if (clear) {
      setSelectedOptions([]);
    }
  }, [clear]);

  const renderTags = (value, getTagProps) => {
    if (value.length === 0) {
      return null;
    } else if (value.length === 1) {
      return <div {...getTagProps({ index: 0 })}>{value[0].title}</div>;
    } else {
      return <div>{`${value.length} selected`}</div>;
    }
  };

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      classes={{ popupIndicator: "custom-popup-indicator" }}
      sx={{
        width: "100%",
        overflow: "hidden",
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderRadius: "8px",
            border: "1px solid #620985",
          },
        "& .MuiAutocomplete-inputRoot": { padding: "5px" },
        // borderRadius: "8px",
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "#d2d2d2",
          borderRadius: "8px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#d2d2d2",
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
      getOptionLabel={(option) => option.title}
      value={selectedOptions}
      onChange={handleAutocompleteChange}
      renderOption={(props, option, { selected }) => (
        <li
          {...props}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 10px",
            marginLeft: "0",
          }}
        >
          {option.title}
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8, color: selected ? "#620985" : "" }}
            checked={selected}
          />
        </li>
      )}
      renderTags={renderTags}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={holder}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        />
      )}
    />
  );
}
