import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Checkbox,
  TextField,
} from "@mui/material";
import { useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Icon } from "@fluentui/react";

function SelectAccordion({ data, title, type }) {
  const [initial, setInitial] = useState(true);
  const [choosen, setChoosen] = useState([]);
  const handleChange = (e, newValue) => {
    if (type !== "multi") {
      setChoosen(e.target.innerText);
      setInitial(true);
    } else setChoosen(newValue);
  };

  return (
    <Accordion className={styles.accordion}>
      <AccordionSummary
        onClick={() => {
          setInitial(true);
        }}
        expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
      >
        <h2>{title}</h2>
      </AccordionSummary>
      <AccordionDetails>
        {initial ? (
          <p>
            {type === "multi"
              ? choosen?.map((item) => <>{item.name ? item.name : item} ,</>)
              : choosen}
            <span>
              <Link onClick={() => setInitial(false)}>Dəyiş</Link>
            </span>
          </p>
        ) : type === "multi" ? (
          <Autocomplete
            className={styles.autocomplete}
            multiple
            onChange={(e, value) => handleChange(e, value)}
            disableCloseOnSelect
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  // icon={icon}
                  // checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.name ? option.name : option}
              </li>
            )}
            getOptionLabel={(option) => (option?.name ? option.name : option)}
            options={data}
            sx={{ color: "red" }}
            renderInput={(params) => <TextField {...params} label="Axtar" />}
          />
        ) : (
          <Autocomplete
            onChange={(e) => handleChange(e)}
            className={styles.autocomplete}
            options={data}
            renderInput={(params) => <TextField {...params} label="Axtar" />}
          />
        )}
      </AccordionDetails>
    </Accordion>
  );
}

export default SelectAccordion;
