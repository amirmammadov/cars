import styles from "../styles.module.scss";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import {
  fuelConsumption,
  fuelTypes,
  transmissions,
} from "../../../mockData/mock";

function Technical() {
  return (
    <section>
      <h2>Texniki məlumatlar</h2>
      <h3>Yanacaq növü</h3>
      <FormGroup className={styles.flexInputs}>
        {fuelTypes.map((item) => (
          <FormControlLabel
            key={item}
            control={
              <Checkbox
                sx={{
                  color: "#BBBBBB",
                  "&.Mui-checked": {
                    color: "#620985",
                  },
                }}
              />
            }
            label={item}
          />
        ))}
      </FormGroup>
      <h3>Transmissiya</h3>
      <FormGroup className={styles.flexInputs}>
        {transmissions.map((item) => (
          <FormControlLabel
            key={item}
            control={
              <Checkbox
                sx={{
                  color: "#BBBBBB",
                  "&.Mui-checked": {
                    color: "#620985",
                  },
                }}
              />
            }
            label={item}
          />
        ))}
      </FormGroup>

      <div className={styles.technicalInputs}>
        <div className={styles.doubleInputs}>
          <TextField
            className={styles.first}
            id="outlined-basic"
            type="number"
            label="Güc, Min"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            type="number"
            label="Max"
            variant="outlined"
          />
        </div>
        <div className={styles.doubleInputs}>
          <TextField
            className={styles.first}
            id="outlined-basic"
            type="number"
            label="Həcm, Min"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            type="number"
            label="Max"
            variant="outlined"
          />
        </div>
        <Autocomplete
          className={styles.autocomplete}
          options={fuelConsumption}
          componentsProps={{
            paper: {
              sx: {
                borderRadius: "8px",
                marginTop: "10px",
              },
            },
          }}
          renderInput={(params) => (
            <TextField {...params} label="Yanacaq sərfiyyatı" />
          )}
        />{" "}
      </div>

      <h3>Ötürücü</h3>

      <FormControl className={styles.radioGroup}>
        <RadioGroup>
          <FormControlLabel
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
            value="front"
            label="Ön"
          />

          <FormControlLabel
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
            value="back"
            label="Arxa"
          />

          <FormControlLabel
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
            value="full"
            label="Tam"
          />
        </RadioGroup>
      </FormControl>
    </section>
  );
}

export default Technical;
