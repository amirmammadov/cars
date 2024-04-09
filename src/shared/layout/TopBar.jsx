import PhoneIcon from "@mui/icons-material/Phone";
import BalanceIcon from "@mui/icons-material/Balance";
import PersonIcon from "@mui/icons-material/Person";
import { Icon } from "@fluentui/react";
import CloseIcon from "@mui/icons-material/Close";

import "../../sass/layout/_topBar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, IconButton } from "@mui/material";

const TopBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isOpen = location.pathname === "/favorites";
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="topbar">
      <div className="topbar__phone">
        <PhoneIcon className="topbar__phone__icon" sx={{ color: "#fff" }} />
        <div className="topbar__phone__text">+994 70 562 12 69</div>
      </div>
      <div className="topbar__more">
        <Link to="/comparison">
          <BalanceIcon
            className="topbar__more__balance"
            sx={{ color: "#fff" }}
          />
        </Link>
        <Link to="/favorites">
          {isOpen ? (
            <Icon style={{ color: "red" }} iconName="HeartFill" />
          ) : (
            <Icon style={{ color: "#fff" }} iconName="HeartFill" />
          )}
        </Link>
        <div
          className="topbar__more__account"
          onClick={() => setOpenModal(true)}
        >
          <PersonIcon
            className="topbar__more__account__icon"
            sx={{ color: "#fff" }}
          />
        </div>
      </div>
      <Dialog className="modal" open={openModal}>
        <div className="modalContent">
          <div className="modalTitle">
            <h1>Davam edin</h1>
            <IconButton
              aria-label="close"
              onClick={handleCloseModal}
              sx={{
                color: (theme) => theme.palette.grey[500],
              }}
              className="closeBtn"
            >
              <CloseIcon />
            </IconButton>
          </div>
          <button
            onClick={() => {
              navigate("/register");
              setOpenModal(false);
            }}
          >
            Fərdi hesab ilə
          </button>
          <button
            className="buissnessBtn"
            onClick={() => {
              navigate("/register", { state: { data: "salon" } });
              setOpenModal(false);
            }}
          >
            Biznes hesab ilə
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default TopBar;
