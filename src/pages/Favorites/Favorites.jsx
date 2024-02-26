import "../../sass/pages/_favorites.scss";
import { useSelector } from "react-redux";

import { products } from "../../mockData/products";

// import { useProjects } from "../../services/queries";

import ProductCart from "../../components/productCard/ProductCart";

const Favorites = () => {
  const favCarIds = useSelector((state) => state.favCarIds);

  // const { data, isPending } = useProjects();

  const favoriteProducts = products.filter((product) =>
    favCarIds.includes(product.id)
  );

  // if (isPending) {
  //   return;
  // }

  return (
    <main className="favorites">
      <div className="favorites__title">Seçilmiş avtomobillər</div>
      <div className="favorites__content">
        {favoriteProducts.length === 0 && (
          <div className="no__car">
            <img
              src="/carDetail/favorite.png"
              alt="favorite"
              className="no__car__img"
            />
            <div className="no__car__text">Seçilmiş avtomobil yoxdur.</div>
          </div>
        )}
        {favoriteProducts.map((product) => {
          return <ProductCart key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
};

export default Favorites;
