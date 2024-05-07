import { useState } from "react";

import Offers from "./Offers";
import OfferItem from "./OfferItem";

const OfferMain = () => {
  const [offerItemOpen, setOfferItemOpen] = useState(false);
  const [offerId, setOfferId] = useState(null);

  const handleOfferClick = (id = null) => {
    if (id) {
      setOfferId(id);
    }
    setOfferItemOpen((prev) => !prev);
  };

  return (
    <div className="offer__main">
      {!offerItemOpen ? (
        <Offers handleOffer={handleOfferClick} />
      ) : (
        <OfferItem offerId={offerId} handleOffer={handleOfferClick} />
      )}
    </div>
  );
};

export default OfferMain;
