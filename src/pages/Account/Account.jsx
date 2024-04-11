import { useState } from "react";

import "../../sass/pages/_account.scss";

import Aside from "./_components/Aside";
import Advert from "./_components/Advert";
import Profile from "./_components/Profile";

const type = ["advert", "account", "logout"];

const Account = () => {
  const [currUserTab, setCurrUserTab] = useState(type[0]);

  const handleUserTab = (tab) => {
    setCurrUserTab(tab);
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
          <div>log out will go here</div>
        )}
      </div>
    </div>
  );
};

export default Account;
