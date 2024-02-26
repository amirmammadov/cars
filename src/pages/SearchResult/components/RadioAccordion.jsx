import { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
} from "@mui/material";
import styles from "./styles.module.scss";
import { Icon } from "@fluentui/react";
export default function RadioAccordion({ title, data, type }) {
  // eslint-disable-next-line no-unused-vars
  const [initial, setInitial] = useState(true);

  return (
    <Accordion
      //  expanded= {true}
      className={styles.accordion}
    >
      <AccordionSummary
        onClick={() => {
          setInitial(true);
        }}
        expandIcon={<Icon className={styles.bold} iconName="ChevronUp" />}
      >
        <h2>{title}</h2>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl className={styles.radioGroup}>
          <RadioGroup defaultValue="all">
            {data.map((item, index) => (
              <FormControlLabel
                key={index}
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
                value={item.value}
                label={
                  type === "rating" ? (
                    <Rating
                      className={styles.ratings}
                      name="size-medium"
                      value={item.value}
                      readOnly
                    />
                  ) : (
                    item.label
                  )
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
}
