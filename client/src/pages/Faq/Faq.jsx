import { useState } from "react";
import styles from "./style.module.scss";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { faqData } from "../../mockData/faq";
import { Icon } from "@fluentui/react";

function Faq() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };
  return (
    <div className={styles.container}>
      <h1>Tez-tez verilən suallar</h1>
      {faqData.map((item) => (
        <Accordion
          expanded={expanded === item.id}
          onChange={() => handleChange(item.id)}
          className={styles.accordion}
          key={item.id}
        >
          <AccordionSummary
            className={styles.qstn}
            expandIcon={
              expanded !== item.id ? (
                <Icon
                  iconName="Add"
                  style={{
                    marginLeft: "16px",
                    fontWeight: "500",
                    color: "#18072b",
                  }}
                />
              ) : (
                <Icon
                  iconName="Cancel"
                  style={{ fontWeight: "500", color: "#18072b" }}
                />
              )
            }
          >
            {item.question}
          </AccordionSummary>
          <AccordionDetails className={styles.answer}>
            {item.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default Faq;
