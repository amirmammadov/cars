import React from "react";
import { useState } from "react";
import styles from "./style.module.scss";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@mui/material";
import Confirmation from "./components/Confirmation";
import Forgotpass from "./components/ForgotPass";
import Refreshpass from "./components/RefreshPass";
const Login = () => {
  const [modal, setModal] = useState(false);
  const [visiblePass, setVisiblePass] = useState(true);
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setModal(false);
  };
  const [modalType, setModalType] = useState("forgot");
  return (
    <div className={styles.authContainer}>
      <div className={styles.login}>
        <h1>MOTO4-a xoş gəlmisiniz!</h1>
        <h3>Daxil olun</h3>
        <form action="" onSubmit={()=>navigate('/')}>
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
          <p onClick={() => setModal(true)} className={styles.forgetPass}>
            Şifrəni unutdum
          </p>
          <button type="submit" >Daxil olun</button>
        </form>

        <p>
          Hesabınız yoxdur?
          <span
            onClick={() => {
              navigate("/register");
            }}
          >
            Qeydiyyatdan keçin
          </span>
        </p>
      </div>
      <Dialog className={styles.modal} open={modal} onClose={handleCloseModal}>
        {/* <Confirmation handleCloseModal={handleCloseModal} setModal={setModal} /> */}
        {modalType === "forgot" ? (
          <Forgotpass
            setModalType={setModalType}
            handleCloseModal={handleCloseModal}
            setModal={setModal}
            
          />
        ) : (
          <Refreshpass
            setModalType={setModalType}
            handleCloseModal={handleCloseModal}
            setModal={setModal}
          />
        )}
      </Dialog>
    </div>
  );
};

export default Login;
