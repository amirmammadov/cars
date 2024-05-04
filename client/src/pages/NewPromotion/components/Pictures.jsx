import { useRef, useState } from "react";

import "../../../sass/components/_pictures.scss";

import CloseIcon from "@mui/icons-material/Close";

import { useDispatch } from "react-redux";
import { setNewPromotionState } from "../../../features/appSlice";

const INITIAL__IMAGES = {
  frontView: "",
  backView: "",
  panelView: "",
  otherImages: [],
};

const Pictures = () => {
  const [images, setImages] = useState(INITIAL__IMAGES);
  const frontView = useRef();
  const backView = useRef();
  const panelView = useRef();
  const otherslView = useRef();

  const dispatch = useDispatch();

  const urlFront = images.frontView && URL.createObjectURL(images.frontView);
  const urlBack = images.backView && URL.createObjectURL(images.backView);
  const urlPanel = images.panelView && URL.createObjectURL(images.panelView);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];

      setImages((preValues) => {
        return {
          ...preValues,
          [e.target.name]: selectedFile,
        };
      });

      dispatch(
        setNewPromotionState({
          name: e.target.name,
          value: selectedFile,
        })
      );
    }
  };

  const handleOtherFilesChange = (e) => {
    dispatch(
      setNewPromotionState({
        name: "otherImages",
        value: [...images.otherImages, ...e.target.files],
      })
    );

    if (e.target.files && e.target.files.length > 0) {
      setImages((preValues) => {
        return {
          ...preValues,
          otherImages: [...preValues.otherImages, ...e.target.files],
        };
      });
    }
  };

  const handleUploadClick = (name) => {
    if (name.current) {
      name.current.click();
    }
  };

  const handleImageDelete = (img) => {
    setImages((preValues) => {
      return {
        ...preValues,
        otherImages: preValues.otherImages.filter((other) => other !== img),
      };
    });

    dispatch(
      setNewPromotionState({
        name: "otherImages",
        value: images.otherImages.filter((other) => other !== img),
      })
    );
  };

  return (
    <div className="pictures">
      <div className="pictures__title">Şəkillər</div>
      <div className="pictures__content">
        <button
          className="pictures__content__item"
          onClick={() => handleUploadClick(frontView)}
        >
          <img
            src={urlFront ? urlFront : "/promotion/frontin.png"}
            alt="car__front"
            className="pictures__content__item__img"
          />
          <p
            className={`pictures__content__item__text ${
              images.frontView === "" && "active"
            }`}
          >
            Ön görünüş
          </p>
          <input
            type="file"
            accept="image/*"
            name="frontView"
            ref={frontView}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`pictures__content__item__close ${
              images.frontView !== "" && "active"
            }`}
          >
            <CloseIcon sx={{ color: "#18072b", fontSize: "22px" }} />
          </button>
        </button>
        <button
          className="pictures__content__item"
          onClick={() => handleUploadClick(backView)}
        >
          <img
            src={urlBack ? urlBack : "/promotion/back.png"}
            alt="car__front"
            className="pictures__content__item__img"
          />
          <p
            className={`pictures__content__item__text ${
              images.backView === "" && "active"
            }`}
          >
            Arxa görünüş
          </p>
          <input
            type="file"
            accept="image/*"
            name="backView"
            ref={backView}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`pictures__content__item__close ${
              images.backView !== "" && "active"
            }`}
          >
            <CloseIcon sx={{ color: "#18072b", fontSize: "22px" }} />
          </button>
        </button>
        <button
          className="pictures__content__item"
          onClick={() => handleUploadClick(panelView)}
        >
          <img
            src={urlPanel ? urlPanel : "/promotion/panel.jpeg"}
            alt="car__front"
            className="pictures__content__item__img"
          />
          <p
            className={`pictures__content__item__text ${
              images.panelView === "" && "active"
            }`}
          >
            Ön panel
          </p>
          <input
            type="file"
            accept="image/*"
            name="panelView"
            ref={panelView}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`pictures__content__item__close ${
              images.panelView !== "" && "active"
            }`}
          >
            <CloseIcon sx={{ color: "#18072b", fontSize: "22px" }} />
          </button>
        </button>
        {images.otherImages.length > 0 &&
          images.otherImages.map((img, index) => {
            const url = URL.createObjectURL(img);
            return (
              <div key={index} className="pictures__content__item">
                <img
                  src={url}
                  alt="car__front"
                  className="pictures__content__item__img"
                />
                <button
                  onClick={() => handleImageDelete(img)}
                  className={`pictures__content__item__close active`}
                >
                  <CloseIcon sx={{ color: "#18072b", fontSize: "22px" }} />
                </button>
              </div>
            );
          })}
        <button
          className="pictures__content__item extra"
          onClick={() => handleUploadClick(otherslView)}
        >
          <img
            src="/promotion/extra.png"
            alt="car__front"
            className="pictures__content__item__extraImg"
          />
          <p className="pictures__content__item__text active">Şəkil əlavə et</p>
          <input
            type="file"
            accept="image/*"
            multiple
            name="otherImages"
            ref={otherslView}
            style={{ display: "none" }}
            onChange={handleOtherFilesChange}
          />
        </button>
      </div>
      <div className="pictures__notes">
        <ul className="pictures__notes__list">
          <li className="pictures__notes__list__item">
            - Minimum – 3 şəkil (ön, arxa və bütöv ön panelin görüntüsü
            mütləqdir).
          </li>
          <li className="pictures__notes__list__item">
            - Şəkillər Azərbaycan Respublikasının ərazisində çəkilməlidir.
          </li>
          <li className="pictures__notes__list__item">
            - Maksimum 20 şəkil yerləşdirmək mümkündür.
          </li>
          <li className="pictures__notes__list__item">
            - Avtosalonda çəkilmiş şəkillər qeydiyyatdan keçmiş avtosalonun
            hesabından уerləşdirilməlidir.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pictures;
