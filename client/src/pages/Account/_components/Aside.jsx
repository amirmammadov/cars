import "../../../sass/components/_accAside.scss";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import PaymentsIcon from "@mui/icons-material/Payments";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { accountAsideBtns } from "../../../constants/index";

const allTabs = [
  {
    id: 1,
    text: "Elanlarım",
    key: accountAsideBtns[0],
    icon: <CreditCardIcon />,
  },
  {
    id: 2,
    text: "Hesabım",
    key: accountAsideBtns[1],
    icon: <PersonIcon />,
  },
  {
    id: 3,
    text: "Qiymət təklifləri",
    key: accountAsideBtns[2],
    icon: <PaymentsIcon />,
  },
  {
    id: 4,
    text: "Çıxış",
    key: accountAsideBtns[3],
    icon: <LogoutIcon />,
  },
];

const Aside = ({ tab, handleTab }) => {
  return (
    <aside className="account__aside">
      <div className="account__aside__header">
        <div className="account__aside__header__caps">UU</div>
        <div className="account__aside__header__user">User User</div>
      </div>
      <div className="account__aside__btns">
        {allTabs.map((tabItem) => (
          <button
            key={tabItem.id}
            className={`account__aside__btns__item ${
              tabItem.key === tab && "active"
            }`}
            onClick={() => handleTab(tabItem.key)}
          >
            {tabItem.icon}
            <p className="account__aside__btns__item__text">{tabItem.text}</p>
            <ChevronRightIcon />
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Aside;
