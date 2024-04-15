import "../../../sass/components/_accProfile.scss";

const Profile = () => {
  return (
    <div className="acc__profile">
      <div className="acc__profile__title">Hesabım</div>
      <div className="acc__profile__content">
        <form className="acc__profile__content__form">
          <input
            type="text"
            placeholder="Ad..."
            className="acc__profile__content__form__item"
          />
          <input
            type="text"
            placeholder="Soyad..."
            className="acc__profile__content__form__item"
          />
          <input
            type="mail"
            placeholder="Mail..."
            className="acc__profile__content__form__item"
          />
          <input
            type="phone"
            placeholder="Nömrə..."
            className="acc__profile__content__form__item"
          />
          <input
            type="password"
            placeholder="....."
            className="acc__profile__content__form__item"
          />
          <input
            type="password"
            placeholder="Yeni şifrə..."
            className="acc__profile__content__form__item"
          />
          <button type="submit" className="acc__profile__content__form__btn">
            Yadda saxla
          </button>
        </form>
        <div className="acc__profile__content__img">
          <div className="acc__profile__content__img__preview">
            <img src="/icons/preview.png" alt="user" />
          </div>
          <div className="acc__profile__content__img__info">
            <div className="acc__profile__content__img__info__title">
              Profil şəkli
            </div>
            <div className="acc__profile__content__img__info__note">
              JPG, PNG, Bitmap, 3 MB-dan çox olmayan
            </div>
            <button className="acc__profile__content__img__info__btn">
              <img src="/icons/plus.png" alt="plus" />
              <p className="acc__profile__content__img__info__btn__text">
                Şəkil əlavə et
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
