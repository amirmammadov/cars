import "../../../sass/components/_addReview.scss";

const AddReview = () => {
  return (
    <div className="add__review">
      <div className="add__review__title">Şərh yaz</div>
      <form className="add__review__form">
        <input
          type="text"
          className="add__review__form__input"
          placeholder="Şərh yazmağa başlayın"
        />
      </form>
    </div>
  );
};

export default AddReview;
