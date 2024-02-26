import styles from "./styles.module.scss";

import { useNavigate } from "react-router-dom";

function PrimaryBtn({ text, icon, newPageTitle }) {
  const navigate = useNavigate();

  return (
    <button
      className={styles.primary}
      onClick={() => navigate(`/${newPageTitle}`)}
    >
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
}

export default PrimaryBtn;
