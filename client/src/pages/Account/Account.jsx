import { useState, useEffect } from "react";

import "../../sass/pages/_account.scss";

import Aside from "./_components/Aside";
import Advert from "./_components/Advert";
import Profile from "./_components/Profile";
import OfferMain from "./_components/OfferMain";
import Logout from "./_components/Logout";

import { accountAsideBtns } from "../../constants/index";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMobileAccActive } from "../../features/appSlice";

import { useDeviceSize } from "../../hooks/useDeviceSize";

const accTabsContent = {
  advert: <Advert />,
  account: <Profile />,
  offer: <OfferMain />,
};

const Account = () => {
  const [currUserTab, setCurrUserTab] = useState(accountAsideBtns[0]);
  const [showModal, setShowModal] = useState(false);

  const width = useDeviceSize()[0];

  const isContentHide = useSelector((state) => state.mobileForAccActive);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMobileAccActive(false));
  }, [dispatch, width]);

  const handleUserTab = (tab) => {
    if (tab === "logout") {
      setShowModal(true);
      return;
    }

    if (window.innerWidth < 768) {
      dispatch(setMobileAccActive(true));
    }

    setCurrUserTab(tab);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="account">
      {!isContentHide && <Aside tab={currUserTab} handleTab={handleUserTab} />}
      <div className={`account__content ${isContentHide && "opened"}`}>
        {accTabsContent[currUserTab]}
      </div>
      {showModal && <Logout handleClose={handleModalClose} />}
    </div>
  );
};

export default Account;
