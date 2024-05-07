import styles from "../styles.module.scss";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
} from "@mui/material";

function Additional() {
  return (
    <section className={styles.lastSection}>
      <h2>Əlavə</h2>
      <h3>Satıcı</h3>
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
            value="Private "
            label=" Salon"
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
            value="Seller"
            label="Satıcı"
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
            value="company"
            label="Şirkət"
          />
        </RadioGroup>
      </FormControl>
      {/* <h3>Satıcı reytinqi</h3>
      <FormControl className={`${styles.radioGroup} `}>
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
            value="three"
            label={
              <Rating
                className={styles.ratings}
                name="size-medium"
                value={3}
                readOnly
              />
            }
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
            value="four"
            label={
              <Rating
                className={styles.ratings}
                name="size-medium"
                value={4}
                readOnly
              />
            }
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
            label={
              <Rating
                className={styles.ratings}
                name="size-medium"
                value={5}
                readOnly
              />
            }
          />
        </RadioGroup>
      </FormControl> */}
    </section>
  );
}

export default Additional;
