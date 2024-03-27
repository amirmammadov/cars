import { IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../style.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Refreshpass = ({ handleCloseModal, setModal,setModalType }) => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);
  const handleAgain = (e) => {
    e.preventDefault();
    setModal(true);
    setSeconds(30);
  };
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalTitle}>
      <IconButton
          aria-label="close"
          onClick={()=>{setModalType("forgot")}}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
          className={styles.backBtn}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <h1>Şifrəni yenilə</h1>
        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
          className={styles.closeBtn}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <label htmlFor="">Yeni şifrə</label>
      <input type="text" placeholder="Yeni şifrənizi daxil edin" />
      <label htmlFor="">Yeni şifrəni təsdiqlə</label>
      <input type="text" placeholder="Yeni şifrənizi təsdiq edin" />

      <button onClick={() => {setModal(false); setModalType("forgot");}}>Yenilə</button>
    </div>
  );
};

export default Refreshpass;
