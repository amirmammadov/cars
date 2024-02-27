import PhoneIcon from "@mui/icons-material/Phone";
import BalanceIcon from "@mui/icons-material/Balance";
import PersonIcon from "@mui/icons-material/Person";
import { Icon } from "@fluentui/react";

import "../../sass/layout/_topBar.scss";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();

  const isOpen = location.pathname === "/favorites";

  return (
    <div className="topbar">
      <div className="topbar__phone">
        <PhoneIcon className="topbar__phone__icon" sx={{ color: "#fff" }} />
        <div className="topbar__phone__text">+994 70 562 12 69</div>
      </div>
      <div className="topbar__more">
        <select className="topbar__more__langOptions">
          <option value="AZ">AZ</option>
          <option value="EN">EN</option>
        </select>
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
        <div className="topbar__more__account">
          <PersonIcon
            className="topbar__more__account__icon"
            sx={{ color: "#fff" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
