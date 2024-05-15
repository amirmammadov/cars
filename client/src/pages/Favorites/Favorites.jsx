import "../../sass/pages/_favorites.scss";
import { useSelector } from "react-redux";

import { products } from "../../mockData/products";

import { Link } from "react-router-dom";

import Car from "../../components/Car/Car";

const Favorites = () => {
  const favCarIds = useSelector((state) => state.favCarIds);

  const favoriteProducts = products.filter((product) =>
    favCarIds.includes(product.id)
  );
  return (
    <main className="favorites">
      <div className="favorites__title">Seçilmiş avtomobillər</div>
      {favoriteProducts.length === 0 ? (
        <div className="no__car">
          <img
            src="/carDetail/favorite.png"
            alt="favorite"
            className="no__car__img"
          />
          <div className="no__car__text">Seçilmiş avtomobil yoxdur.</div>
          <Link to="/" className="no__car__link">
            Ana səhifəyə qayıt.
          </Link>
        </div>
      ) : (
        <div className="favorites__content">
          {favoriteProducts.map((product) => {
            return <Car key={product.id} product={product} />;
          })}
        </div>
      )}
    </main>
  );
};

export default Favorites;
