const Logout = ({ handleClose }) => {
  return (
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
            onClick={handleClose}
          >
            Xeyr
          </button>
          <button className="account__logout__content__btns__item">Bəli</button>
        </div>
        <button className="account__logout__close" onClick={handleClose}>
          <img src="/icons/close.png" alt="close" />
        </button>
      </div>
    </div>
  );
};

export default Logout;
