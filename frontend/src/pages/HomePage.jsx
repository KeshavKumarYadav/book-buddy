import Product from "../components/Product";
import products from "../products";

const HomePage = () => {
  return (
    <div>
      <h2>Latest Products</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product, i) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
