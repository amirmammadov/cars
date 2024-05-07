import React from "react";
import { useState } from "react";
import styles from "./style.module.scss";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialog } from "@mui/material";
import Confirmation from "./components/Confirmation";
const Registration = () => {
  const [visiblePass, setVisiblePass] = useState(true);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const location=useLocation();
 
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <div className={styles.authContainer}>
      <div className={styles.login}>
        <h1>MOTO4-a xoş gəlmisiniz!</h1>
        <h3>Qeydiyyat</h3>
        <form action="">
          {location.state&&
          <div className={styles.input}>
          <label>Salon adı</label>
          <input type="text" placeholder="Salonun adını daxil edin" />
        </div>
          }
          <div className={styles.input}>
            <label>{location.state?"Rəsmi nümayəndənin ad və soyad":"Ad və soyad"}</label>
            <input type="text" placeholder="Ad və soyadınızı daxil edin" />
          </div>

          <div className={styles.input}>
            <label>Əlaqə nömrəsi</label>
            <div className={styles.phone}>
              <select name="" id="">
                <option value="">+994</option>
                <option value="">+90</option>
                <option value="">+7</option>
              </select>
              <input type="number" placeholder="000 - 000 - 00 - 00" />
            </div>
          </div>
          <div className={styles.input}>
            <label>Şifrə</label>
            <div className={styles.passInput}>
              <input
                type={visiblePass ? "password" : "text"}
                placeholder="Şifrənizi daxil edin"
              />
              <div className={styles.icon}>
                {!visiblePass ? (
                  <VisibilityOffOutlinedIcon
                    onClick={() => {
                      setVisiblePass(!visiblePass);
                    }}
                  />
                ) : (
                  <RemoveRedEyeOutlinedIcon
                    onClick={() => {
                      setVisiblePass(!visiblePass);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles.input}>
            <label>Şifrənizi təsdiq edin</label>
            <div className={styles.passInput}>
              <input
                type={visiblePass ? "password" : "text"}
                placeholder="Şifrənizi təsdiq edin"
              />
              <div className={styles.icon}>
                {!visiblePass ? (
                  <VisibilityOffOutlinedIcon
                    onClick={() => {
                      setVisiblePass(!visiblePass);
                    }}
                  />
                ) : (
                  <RemoveRedEyeOutlinedIcon
                    onClick={() => {
                      setVisiblePass(!visiblePass);
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          <button  onClick={(e)=>{e.preventDefault();setModal(true)}}>Qeydiyyatdan keçin</button>
        </form>

        <p>
          Hesabınız var?
          <span
            onClick={() => {
              navigate("/login");
            }}
          >
            Daxil ol
          </span>
        </p>
      </div>
      <Dialog className={styles.modal} open={modal} onClose={handleCloseModal}>
        <Confirmation handleCloseModal={handleCloseModal} setModal={setModal} />
      </Dialog>
    </div>
  );
};

export default Registration;
