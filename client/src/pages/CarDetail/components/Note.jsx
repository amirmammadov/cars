import "../../../sass/components/_note.scss";

const supplies = [
  "TV",
  "USB Ports",
  "Elektrik pəncərələr",
  "Kondisioner",
  "Oturacaqların isidilməsi",
];

const others = [
  "ABS",
  "Yüngül lehimli disklər",
  "Ksenon lampalar",
  "Yağış sensoru",
  "Rənglənməyib",
];

const Note = ({ product }) => {
  return (
    <div className="note">
      <div className="note__extra">
        <div className="note__extra__title">Avtomobil təchizatları</div>
        <div className="note__extra__content">
          {supplies.map((supply, index) => (
            <div className="note__extra__content__item" key={index}>
              {supply}
            </div>
          ))}
        </div>
      </div>
      <div className="note__extra">
        <div className="note__extra__title">Digər üstünlükləri</div>
        <div className="note__extra__content">
          {others.map((other, index) => (
            <div className="note__extra__content__item" key={index}>
              {other}
            </div>
          ))}
        </div>
      </div>
      <div className="note__title">Əlavə qeydlər</div>
      <div className="note__content">{product.note.content}</div>
    </div>
  );
};

export default Note;
