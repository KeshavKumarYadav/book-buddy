const CartItem = ({ product }) => {
  const offer = Math.round((product.price / product.mrp) * 100);
  return (
    <div className="flex">
      <img src={product.image} alt="product.name" className="w-40" />
      <div>
        <h1>{product.name}</h1>
        <p>{product.brand}</p>
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold">
            <span className="text-sm">₹ </span>
            {product.price}
          </h2>
          <h3 className="text-xs">
            MRP <span className="line-through">{product.mrp}</span>
          </h3>
          <p className="text-xs">({offer}%) off</p>
        </div>
        <h2>{product.price}</h2>
      </div>
    </div>
  );
};

export default CartItem;
