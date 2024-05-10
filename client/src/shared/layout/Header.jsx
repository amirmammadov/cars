import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";

import CloseIcon from "@mui/icons-material/Close";

import { Link, useLocation } from "react-router-dom";

import PrimaryBtn from "../../components/buttons/PrimaryBtn";

import { Icon } from "@fluentui/react";

import { useLoggedIn } from "../../hooks/useLoggedIn";
import { useDeviceSize } from "../../hooks/useDeviceSize";

function Header() {
  const [activePage, setActivePage] = useState("/");
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const isLoggedIn = useLoggedIn();
  const windowSize = useDeviceSize()[0];

  const location = useLocation();

  useEffect(() => {
    setActivePage(location.pathname);
    setHamburgerClicked(false);
  }, [location]);

  useEffect(() => {
    if (windowSize > 768) {
      setHamburgerClicked(false);
    }
  }, [windowSize]);

  useEffect(() => {
    if (hamburgerClicked) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  }, [hamburgerClicked]);

  const handleHamburgerOpen = () => {
    setHamburgerClicked((prevValue) => !prevValue);
  };

  return (
    <div className={styles.header}>
      <div className={styles.hamburger} onClick={handleHamburgerOpen}>
        <span className={styles.hamburgerClicked}></span>
        <span></span>
        <span></span>
      </div>
      <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="" className={styles.logo} />
      </Link>
      <div className={styles.nav}>
        <Link className={activePage === "/" ? styles.active : ""} to="/">
          Ana səhifə
        </Link>
        <Link
          className={activePage === "/elan" ? styles.active : ""}
          to="/elan"
        >
          Elanlar
        </Link>
        <Link
          className={activePage === "/salons" ? styles.active : ""}
          to="/salons"
        >
          Şirkətlər
        </Link>
        <Link className={activePage === "/faq" ? styles.active : ""} to="/faq">
          FAQ
        </Link>
      </div>
      <div className={styles.btns}>
        <PrimaryBtn
          text="Yeni Elan"
          newPageTitle="new-promotion"
          icon={<Icon iconName="Add" />}
        />
      </div>
      {hamburgerClicked && windowSize < 768 && (
        <div className={styles.mobileFixed}>
          <div className={styles.mobileNav}>
            <div className={styles.mobileNavHeader}>
              <div className={styles.mobileNavHeaderText}>Menu</div>
              <div
                className={styles.mobileNavHeaderClose}
                onClick={handleHamburgerOpen}
              >
                <CloseIcon />
              </div>
            </div>
            <div className={styles.mobileNavLists}>
              <Link className={styles.mobileNavListsItem} to="/">
                Ana Səhifə
              </Link>
              <Link className={styles.mobileNavListsItem} to="/elan">
                Elanlar
              </Link>
              <Link className={styles.mobileNavListsItem} to="/salons">
                Şirkətlər
              </Link>
              <Link className={styles.mobileNavListsItem} to="/faq">
                FAQ
              </Link>
              <Link className={styles.mobileNavListsItem} to="/favorites">
                Seçilmişlər
              </Link>
              <Link className={styles.mobileNavListsItem} to="/comparison">
                Müqayisələr
              </Link>
              <Link
                className={styles.mobileNavListsItem}
                to={`${isLoggedIn ? "/user" : "/login"}`}
              >
                {isLoggedIn ? "Hesab" : "Login"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
