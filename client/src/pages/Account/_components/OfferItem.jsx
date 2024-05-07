import "../../../sass/components/_accOffers.scss";

import { offers } from "../../../mockData/offer";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const OfferItem = ({ offerId, handleOffer }) => {
  const offerItems = offers.filter((offer) => offer.id === offerId);

  return (
    <div className="acc__offers">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        className="acc__offers__links"
      >
        <Typography
          underline="hover"
          className="acc__offers__links__item back"
          onClick={handleOffer}
        >
          Qiymət təklifləri
        </Typography>
        <Typography key="3" className="acc__offers__links__item">
          {offerItems[0].offerName}
        </Typography>
      </Breadcrumbs>
      <div className="acc__offers__content">
        <div className="acc__offers__content__titles">
          <div className="acc__offers__content__titles__item">Ad və soyad</div>
          <div className="acc__offers__content__titles__item">Nömrə</div>
          <div className="acc__offers__content__titles__item">Məbləğ</div>
        </div>
        {offerItems[0].users.map((offerItem) => (
          <div key={offerItem.id} className="acc__offers__content__result">
            <div className="acc__offers__content__result__name">
              {offerItem.userName}
            </div>
            <div className="acc__offers__content__result__code">
              {offerItem.phone}
            </div>
            <div className="acc__offers__content__result__count">
              {offerItem.amount.toLocaleString()}
              {offerItem.currency}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferItem;
