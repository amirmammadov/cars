import { useState } from "react";
import styles from "./style.module.scss";
import { Icon } from "@fluentui/react";
function OrderFilter({ title }) {
  const [choosen, setChoosen] = useState(title);
  const [isOpen, setOpen] = useState(false);
  const handleChange = (value) => {
    setOpen(!isOpen);
    setChoosen(value);
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={() => setOpen(!isOpen)} className={styles.choosen}>
        <p>{choosen}</p>
        <Icon iconName="Sort" />
      </div>
      {isOpen && (
        <div className={styles.sorts}>
          <ul>
            <li
              onClick={() => {
                handleChange("Tarix");
              }}
            >
              Tarix
            </li>
            <li
              onClick={() => {
                handleChange("Əvvəlcə ucuz");
              }}
            >
              Əvvəlcə ucuz
            </li>
            <li
              onClick={() => {
                handleChange("Əvvəlcə bahalı");
              }}
            >
              Əvvəlcə bahalı
            </li>
            <li
              onClick={() => {
                handleChange("Yürüş");
              }}
            >
              Yürüş
            </li>
            <li
              onClick={() => {
                handleChange("İl");
              }}
            >
              İl
            </li>
            <li
              onClick={() => {
                handleChange("Rating");
              }}
            >
              Rating
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default OrderFilter;
