import { useState } from "react";
import styles from "./styles.module.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { Icon } from "@fluentui/react";
import {
  accessories,
  brands,
  cities,
  externalColors,
  fuelTypes,
  models,
  rating,
  seller,
  status,
  transmissions,
} from "../../../mockData/mock";
import { carTypes } from "../../../constants";
import DoubleInputs from "./DoubleInputs";
import SelectAccordion from "./SelectAccordion";
import RadioAccordion from "./RadioAccordion";

function SearchBar() {
  // eslint-disable-next-line no-unused-vars
  const [initial, setInitial] = useState(true);

  return (
    <div className={styles.wrapper}>
      <h1>Ətraflı axtarış</h1>
      <SelectAccordion title="Marka" data={brands} />
      <SelectAccordion type="multi" data={models} title="Model" />
      <div className={styles.hr} />
      <RadioAccordion data={status} title="Vəziyyəti" />
      <div className={styles.hr} />

      <DoubleInputs title="Qiymət" l1="Min" l2="Max" />
      <DoubleInputs title="Yürüyüş" l1="Min" l2="Max" />
      <DoubleInputs type="select" title="İl" l1="Min" l2="Max" />
      <DoubleInputs title="Güc, kW" l1="Min" l2="Max" />
      <h2>
        Həcm, sm<sup className={styles.sup}>3</sup>
      </h2>
      <DoubleInputs l1="Min" l2="Max" />
      <div className={styles.hr} />
      <Accordion className={styles.accordion}>
        <AccordionSummary
          onClick={() => {
            setInitial(true);
          }}
          expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
        >
          <h2>Xarici rəngi</h2>
        </AccordionSummary>
        <AccordionDetails>
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
                // label={item.name}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <div className={styles.hr} />

      <SelectAccordion data={cities} title="Şəhər" />
      <SelectAccordion type="multi" data={fuelTypes} title="Yanacaq növü" />
      <SelectAccordion type="multi" data={carTypes} title="Avtomobil növü" />
      <SelectAccordion type="multi" data={transmissions} title="Transmissiya" />
      <SelectAccordion
        type="multi"
        data={accessories}
        title="Avtomobil təchizatları"
      />
      <div className={styles.hr} />
      <RadioAccordion title="Satıcı" data={seller} />
      <RadioAccordion title="Satıcı reytinqi" data={rating} type="rating" />
    </div>
  );
}

export default SearchBar;
