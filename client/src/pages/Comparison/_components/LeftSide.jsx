import { trash } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { comparisonTitles } from "../../../constants";

export function LeftSide() {
  return (
    <div className="comparison__content__left">
      <div className="comparison__content__left__actions">
        <div className="comparison__content__left__actions__clearAll">
          <button>Hamısını sil</button>
          <IonIcon icon={trash} />
        </div>
        <div className="comparison__content__left__actions__radios">
          <div className="comparison__content__left__actions__radios__item">
            <input type="radio" id="all" name="option" />
            <label htmlFor="all">Hamısı</label>
          </div>
          <div className="comparison__content__left__actions__radios__item">
            <input type="radio" id="same" name="option" />
            <label htmlFor="same">Oxşarlıqlar</label>
          </div>
          <div className="comparison__content__left__actions__radios__item">
            <input type="radio" id="diff" name="option" />
            <label htmlFor="diff">Fərqlər</label>
          </div>
        </div>
      </div>
      <div className="comparison__content__left__titles">
        {comparisonTitles.map((title) => (
          <div key={title} className="comparison__content__left__titles__item">
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSide;
