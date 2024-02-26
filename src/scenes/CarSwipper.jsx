import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "../sass/layout/_carSwipper.scss";

const CarSwipper = (props) => {
  return (
    <div className="carousel__container">
      <Carousel infiniteLoop autoPlay>
        {props.images.map((img, index) => (
          <div key={index} className="image">
            <img src={img} alt="car" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

CarSwipper.propTypes = {
  images: PropTypes.array.isRequired,
};

export default CarSwipper;
