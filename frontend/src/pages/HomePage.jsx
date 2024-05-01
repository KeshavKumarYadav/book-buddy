import ProductCard from "../components/ProductCard";
import products from "../products";
import Categories from "../segment/Categories";

const HomePage = () => {
  return (
    <>
      <Categories />
      <div className="px-3 py-6">
        <div className="mb-6 flex gap-4 items-end">
          <h2 className="text-3xl font-semibold">Latest Products</h2>
          <p>
            <a className="text-blue-700 hover:text-red-700 hover:cursor-pointer hover:underline">
              See All
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
