import { IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../style.module.scss";
import { useState } from "react";
import { useEffect } from "react";
const Forgotpass = (
    { handleCloseModal,setModal ,setModalType}) => {
        const [seconds, setSeconds] = useState(30);
      
        useEffect(() => {
          const interval = setInterval(() => {
            if (seconds > 0) {
              setSeconds((prevSeconds) => prevSeconds - 1);
            }
          }, 1000);
      
          return () => clearInterval(interval);
        }, [seconds]);
        const handleAgain=(e)=>{
              e.preventDefault();
              setModal(true);
              setSeconds(30);
            
        }
    return (
        <div className={styles.modalContent}>
        <div className={styles.modalTitle}>
          <h1>Şifrəmi unutdum</h1>
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
        <p>(+994) 50-666-45-15 nömrəsinə göndərilmiş SMS-kodu daxil edin.</p>
        <input type="number" placeholder="_ _ _ _" />
        <p className={styles.timer}>00 : {seconds}</p>
        <button onClick={()=>{setModalType("refresh")}}>Təsdiqlə</button>
        <a
          onClick={handleAgain}
          href=""
        >
          SMS-kod yenidən göndərilsin
        </a>
      </div>
    );
}

export default Forgotpass;
