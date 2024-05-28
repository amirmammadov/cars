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
import styles from "../styles.module.scss";
import { externalColors, externalColorsTwo } from "../../../mockData/mock";
import { fuelConsumption } from "../../../constants";

function External() {
  const others = [
    // "Məsafə xəbərdarlıq sistemi",
    "Vuruğu yoxdur",
    "Mərkəzi qapanma",
    // "Start-stop sistemi",
    "Lyuk",
    "Rənglənməyib",
    // "Adaptiv döngə işıqları",
    // "Ehtiyyat təkər",
    "Yağış sensoru",
    "Ksenon lampalar",
    "ABS",
    "Yüngül lehimli disklər",
    // "Qızdırılan ön şüşə",
    // "Duman əleyhinə lampa",
  ];
  return (
    <section>
      <h2>Xarici</h2>
      {/* <h3>Xarici rəng</h3> */}
  
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
            <TextField {...params} label="Xarici rəng" />
          )}
        />{" "}
      <h3>Parkinq sensoru</h3>
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
          label="Ön"
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
          label="Arxa"
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
          label="Kamera"
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
          label="360° kamera"
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
          label="Özünü idarə edən sistemlər"
        />
      </FormGroup>
      <h3>Sürət kontrol düzənləyici</h3>

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
            value="speed"
            label="Sürət kontrol düzənləyici"
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
            value="adaptive"
            label="Adaptiv kontrol düzənləyici"
          />
        </RadioGroup>
      </FormControl>
      <h3>Digər</h3>
      <FormGroup className={`${styles.flexInputs} ${styles.gridStyle}`}>
        {others.map((item, index) => (
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

export default External;
