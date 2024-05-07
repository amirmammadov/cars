import styles from "./styles.module.scss";
import { Autocomplete, TextField } from "@mui/material";
import { years } from "../../../mockData/mock";

function DoubleInputs({ l1, l2, type, title }) {
  return (
    <>
      <h2>{title}</h2>
      {type === "select" ? (
        <div className={styles.doubleSelects}>
          <Autocomplete
            options={years}
            className={styles.first}
            renderInput={(params) => <TextField {...params} label="Min" />}
          />
          <Autocomplete
            className={styles.second}
            options={years}
            renderInput={(params) => <TextField {...params} label="Max" />}
          />
        </div>
      ) : (
        <div className={styles.doubleInputs}>
          <TextField
            className={styles.first}
            id="outlined-basic"
            type="number"
            label={l1}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            type="number"
            label={l2}
            variant="outlined"
          />
        </div>
      )}
    </>
  );
}

export default DoubleInputs;
