import { useState } from "react";

import "../../sass/pages/_account.scss";

import Aside from "./_components/Aside";
import Advert from "./_components/Advert";
import Profile from "./_components/Profile";

const type = ["advert", "account", "logout"];

const Account = () => {
  const [currUserTab, setCurrUserTab] = useState(type[0]);
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
      <div className="account__content">
        {currUserTab === type[0] ? (
          <Advert />
        ) : currUserTab === type[1] ? (
          <Profile />
        ) : (
          <></>
        )}
      </div>
      {showModal && (
        <div className="account__logout">
          <div className="account__logout__content">
            <div className="account__logout__content__header">
              <div className="account__logout__content__header__title">
                Çıxmaq istədiyinizə əminsiniz?
              </div>
            </div>
            <div className="account__logout__content__btns">
              <button
                className="account__logout__content__btns__item"
                onClick={handleModalClose}
              >
                Xeyr
              </button>
              <button className="account__logout__content__btns__item">
                Bəli
              </button>
            </div>
            <button
              className="account__logout__close"
              onClick={handleModalClose}
            >
              <img src="/icons/close.png" alt="close" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
