import { useParams } from "react-router-dom";
import products from "../products";
import StarRating from "../components/StarRating";
import AddToCartBtn from "../components/AddToCartBtn";

const ProductDetailPage = () => {
  const param = useParams();
  const [product] = products.filter((product) => product._id === param.id);
  console.log(product);
  const offer = Math.round((product.price / product.mrp) * 100);

  return (
    <>
      <div className="w-full flex flex-col gap-6 items-center px-3 py-6 sm:flex-row sm:items-start md:w-3/4 md:mx-auto">
        <img
          src={product.image}
          alt={product.name}
          className="w-full sm:w-1/2"
        />
        <div>
          <div className=" w-full space-y-2">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <p>
              <span>
                <span className="text-xl">
                  <StarRating outof={5} rating={product.rating} />
                </span>
              </span>{" "}
              ({product.numReviews})
            </p>
            <p className="text-xl">{product.brand}</p>
            <div className="flex items-center gap-3">
              <p className="text-xl text-green-700">-{offer}%</p>
              <h2 className="text-4xl font-semibold">
                <span className="text-sm">₹ </span>
                {product.price}
              </h2>
            </div>
            <h3 className="text-md">
              MRP <span className="line-through">{product.mrp}</span>
            </h3>
          </div>
          <div className="mx-auto w-4/5 h-10 sm:mx-auto sm:w-full my-8">
            <AddToCartBtn />
          </div>
          <div className="sm:hidden lg:block border border-stone-400 shadow-xl rounded-md px-3 py-2">
            <h2 className="text-xl font-semibold">Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <div className="mx-4 md:w-3/4 md:mx-auto mb-8 justify-center hidden sm:block lg:hidden border border-stone-400 shadow-xl rounded-md px-3 py-2">
        <h2 className="text-xl font-semibold">Description</h2>
        <p>{product.description}</p>
      </div>
    </>
  );
};

export default ProductDetailPage;
