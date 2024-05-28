import { useState } from "react";
import styles from "../styles.module.scss";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import {
  brands,
  cities,
  models,
  ownercount,
  seatCount,
  carTypes,
  years,
} from "../../../mockData/mock";
import ShowRoom from "../../../components/showRoom/ShowRoom";
function Fundamentals() {
  const [currency, setCurrency] = useState("AZN");

  return (
    <section className={styles.firstSection}>
      <h2>Təməl məlumatlar</h2>
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
              value="new"
              label="Yeni"
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
              value="old"
              label="Sürülmüş"
            />
          </RadioGroup>
        </FormControl>
        <br />
        <br />
      <div className={styles.baseInfo}>
        <div className={styles.inputs}>
          <Autocomplete
            className={styles.autocomplete}
            options={brands}
            componentsProps={{
              paper: {
                sx: {
                  borderRadius: "8px",
                  marginTop: "10px",
                },
              },
            }}
            renderInput={(params) => <TextField {...params} label="Marka" />}
          />
          <Autocomplete
            className={styles.autocomplete}
            multiple
            disableCloseOnSelect
            componentsProps={{
              paper: {
                sx: {
                  borderRadius: "8px",
                  marginTop: "10px",
                },
              },
            }}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  // icon={icon}
                  // checkedIcon={checkedIcon}
                  style={{ marginRight: 8, display: "block", marginLeft: "0" }}
                  checked={selected}
                />
                {option}
              </li>
            )}
            options={models}
            sx={{ color: "red" }}
            renderInput={(params) => <TextField {...params} label="Model" />}
          />
         
           <Autocomplete
            className={styles.autocomplete}
            options={carTypes}
            componentsProps={{
              paper: {
                sx: {
                  borderRadius: "8px",
                  marginTop: "10px",
                },
              },
            }}
            renderInput={(params) => <TextField {...params} label="Avtomobil salonu" />}
          />
        </div>

    
      </div>
<br />
<br />
      {/* <ShowRoom className={styles.salon}/> */}

      <div className={styles.dflex}>
        <div className={styles.dflex}>
          <div className={styles.doubleInputs}>
            <TextField
              className={styles.first}
              id="outlined-basic"
              type="number"
              label="Yürüyüş, Min"
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
              label="Qiymət, Min"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              type="number"
              label="Max"
              variant="outlined"
            />
          </div>
          <Select
            className={styles.currency}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value="AZN">AZN</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
          </Select>
        </div>
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
              value="credit"
              label="Kredit"
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
              value="barter"
              label="Barter"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={styles.dflex}>
        <div className={styles.doubleSelects}>
          <Autocomplete
            options={years}
            className={styles.first}
            componentsProps={{
              paper: {
                sx: {
                  borderRadius: "8px",
                  marginTop: "10px",
                },
              },
            }}
            renderInput={(params) => <TextField {...params} label="İl, Min" />}
          />
          <Autocomplete
            className={styles.second}
            options={years}
            componentsProps={{
              paper: {
                sx: {
                  borderRadius: "8px",
                  marginTop: "10px",
                },
              },
            }}
            renderInput={(params) => <TextField {...params} label="Max" />}
          />
        </div>
        <Autocomplete
          className={`${styles.autocomplete} ${styles.fullWidth}`}
          options={seatCount}
          componentsProps={{
            paper: {
              sx: {
                borderRadius: "8px",
                marginTop: "10px",
              },
            },
          }}
          renderInput={(params) => (
            <TextField {...params} label="Oturacaq sayı" />
          )}
        />{" "}
        <Autocomplete
          className={styles.autocomplete}
          options={cities}
          renderInput={(params) => <TextField {...params} label="Şəhər" />}
          componentsProps={{
            paper: {
              sx: {
                borderRadius: "8px",
                marginTop: "10px",
              },
            },
          }}
        />
            <Autocomplete
          className={`${styles.autocomplete} ${styles.fullWidth}`}
          options={ownercount}
              componentsProps={{
                paper: {
                  sx: {
                    borderRadius: "8px",
                    marginTop: "10px",
                  },
                },
              }}
              renderInput={(params) => <TextField {...params} label="Yığıldığı bazar" />}
            />{" "}
      </div>
    </section>
  );
}

export default Fundamentals;
