import { Link } from "react-router-dom";
import { IProduct } from "../../interface";
const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const ProductItem = ({ product }: { product: IProduct }) => {
  return (
    <div className="h-[460px]">
      <div className="overflow-hidden">
        <img
          className="hover:scale-125 duration-1000"
          src={product.thumbnail}
          alt=""
        />
      </div>
      <div className="bg-[#f5f5f5] p-4">
        <h3 className="font-semibold text-xl mb-2">
          {capitalizeFirstLetter(product.category!)}
        </h3>
        <Link to={`/product-detail/${product.id}`} className="text-[#898989] text-base">
          {product.title.length > 50
            ? `${product.title.substring(0, 50)}...`
            : product.title}
        </Link>
        <p className="font-semibold text-xl text-red-600 mb-3 mt-4">
          {product.price}
        </p>
        <button className="border border-solid border-yellow-500 text-yellow-600 w-full font-semibold text-base py-2 hover:bg-yellow-600 hover:text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
