import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import styles from "../styles.module.scss";
import { externalColors } from "../../../mockData/mock";

function External() {
  const others = [
    "ABS",
    "Məsafə xəbərdarlıq sistemi",
    "Mərkəzi qapanma",
    "Start-stop sistemi",
    "Lyuk",
    "Adaptiv döngə işıqları",
    "Ehtiyyat təkər",
    "Yağış sensoru",
    "Ksenon lampalar",
    "Yüngül lehimli disklər",
    "Qızdırılan ön şüşə",
    "Duman əleyhinə lampa",
  ];
  return (
    <section>
      <h2>Xarici</h2>
      <h3>Xarici rəng</h3>
      <FormGroup className={`${styles.flexInputs} ${styles.colors}`}>
        {externalColors.map((item, index) => (
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
      </FormGroup>
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
