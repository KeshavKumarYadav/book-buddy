import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function getProducts() {
      const res = await fetch(`http://127.0.0.1:8000/api/product/1`);
      const data = await res.json();
      setProduct(data);
      // console.log(data);
    }
    getProducts();
  }, []);

  return (
    <div className="w-4/5 mx-auto my-8 flex gap-x-4">
      <div className="px-6 bg-white border border-stone-400 rounded-md flex-auto">
        <h1 className="text-4xl font-semibold text-stone-800">Shopping Cart</h1>
        <hr className="my-4" />
        <CartItem product={product} />
      </div>
      <div className="px-6 bg-white border border-stone-400 rounded-md flex-1">
        <h2 className="text-2xl font-semibold">SUMMARY</h2>
        <hr />
        <div className="flex justify-between text-lg">
          <span>Price</span>
          <span>₹1458</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Discount</span>
          <span>₹412</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Delivery Charges</span>
          <span>₹49</span>
        </div>
        <hr />
        <div className="flex justify-between text-lg">
          <span>Total Amount</span>
          <span>₹1649</span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
