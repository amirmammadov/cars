import { useState } from "react";

import "../../sass/pages/_account.scss";

import Aside from "./_components/Aside";
import Advert from "./_components/Advert";
import Profile from "./_components/Profile";
import OfferMain from "./_components/OfferMain";
import Logout from "./_components/Logout";

import { accountAsideBtns } from "../../constants/index";

const accTabsContent = {
  advert: <Advert />,
  account: <Profile />,
  offer: <OfferMain />,
};

const Account = () => {
  const [currUserTab, setCurrUserTab] = useState(accountAsideBtns[0]);
  const [showModal, setShowModal] = useState(false);

  const handleUserTab = (tab) => {
    if (tab === "logout") {
      setShowModal(true);
      return;
    }

    setCurrUserTab(tab);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="account">
      <Aside tab={currUserTab} handleTab={handleUserTab} />
      <div className="account__content">{accTabsContent[currUserTab]}</div>
      {showModal && <Logout handleClose={handleModalClose} />}
    </div>
  );
};

export default Account;
