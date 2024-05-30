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
import { accessories, externalColorsTwo, internalColors } from "../../../mockData/mock";

function Internal() {
  return (
    <section>
      <h2>Daxili</h2>
      {/* <h3>Daxili rəng</h3> */}
      {/* <FormGroup className={`${styles.flexInputs} ${styles.colors}`}>
        {internalColors.map((item, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: item.color,
                  },
                  "&.Mui-checked": {
                    "& .MuiSvgIcon-root": {
                      backgroundColor: "transparent",
                    },
                  },
                }}
              />
            }
            label={item.name}
          />
        ))}
      </FormGroup> */}
      <Autocomplete
          className={`${styles.autocomplete} ${styles.fullWidth}`}
          options={externalColorsTwo}
          componentsProps={{
            paper: {
              sx: {
                borderRadius: "8px",
                marginTop: "10px",
              },
            },
          }}
          renderInput={(params) => (
            <TextField {...params} label="Daxili rəng" />
          )}
        />{" "}
      <h3>Daxili material</h3>
      <FormGroup className={styles.flexInputs}>
        <FormControlLabel
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
          label="Alkantra"
        />
        <FormControlLabel
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
          label="Parça"
        />
        <FormControlLabel
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
          label="Parça dəri"
        />
        <FormControlLabel
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
          label="Velor"
        />
        <FormControlLabel
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
          label="Tam dəri"
        />
        <FormControlLabel
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
          label="Digər"
        />
      </FormGroup>
      {/* <h3>Hava yastıqları</h3>

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
            value="all"
            label="Hamısı"
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
            value="driver"
            label="Sürücü hava yastığı"
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
            value="front"
            label="Ön təhlükəsizlik yastığı"
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
            value="both"
            label="Ön və yan hava yastıqları"
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
            value="more"
            label="Daha çox"
          />
        </RadioGroup>
      </FormControl> */}
      <h3>Avtomobilin təchizatları</h3>
      <FormGroup className={`${styles.flexInputs} ${styles.gridStyle}`}>
        {accessories.map((item, index) => (
          <FormControlLabel
            key={index}
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
    </section>
  );
}

export default Internal;
