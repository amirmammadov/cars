import styles from "./styles.module.scss";
import { Breadcrumbs } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@fluentui/react";
import Fundamentals from "./components/Fundamentals";
import Technical from "./components/Technical";
import External from "./components/External";
import Internal from "./components/Internal";
import Additional from "./components/Additional";

function MoreFilters() {
  const navigate = useNavigate();
  const handleFilter = () => {
    navigate("/result");
  };
  return (
    <div className={styles.container}>
      <Breadcrumbs
        className={styles.nav}
        separator={<Icon iconName="ChevronRightMed" />}
        aria-label="breadcrumb"
      >
        <Link to="/">Ana səhifə</Link>
        <Link>Axtarışım</Link>
      </Breadcrumbs>
      <h1>Ətraflı axtarış</h1>
      <Fundamentals />
      <Technical />
      <External />
      <Internal />
      <Additional />

      <div className={styles.endBtns}>
        <button className={styles.cancelBtn}>
          Təmizlə{" "}
          <span>
            <Icon iconName="Cancel" />
          </span>
        </button>
        <button className={styles.filterBtn} onClick={handleFilter}>
          Filtrlə{" "}
          <span>
            <Icon iconName="Equalizer" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default MoreFilters;
