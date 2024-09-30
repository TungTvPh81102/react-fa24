import { useQuery } from "@tanstack/react-query";
import { IconStart } from "../../../components/icon";
import ProductItem from "../../../components/product/ProductItem";
import { Skeleton } from "antd";
import Heading from "../../../components/Typography/Heading";
import { useParams } from "react-router-dom";
import api from "../../../api";
import { useState } from "react";
import { IProduct } from "../../../interface";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const { data } = await api.get(`/products/${id}`);
      setProduct(data);
      return data;
    },
  });

  useQuery({
    queryKey: ["related-products", product.category],
    queryFn: async () => {
      if (product.category) {
        const { data } = await api.get(
          `/products?category=${product.category}&exclude=${id}`
        );
        setRelatedProducts(data);
      }
    },
    enabled: !!product.category, // Only run this query when the category is available
  });

  return (
    <section className="max-w-6xl mx-auto mt-[70px]">
      <Skeleton active loading={isLoading}>
        <div className="grid grid-cols-2 gap-8">
          <div className="grid grid-cols-6 gap-8">
            <div className="col-span-1 *:mb-4">
              {product.images?.map((image) => (
                <img src={image} alt="" />
              ))}
            </div>

            <div className="col-span-5">
              <img src={product.thumbnail} alt="" />
            </div>
          </div>
          <div>
            <p className="font-medium text-xl">{product.title}</p>
            <p className="font-bold text-[40px] text-[#ef4444] my-2">
              {product.price}đ
            </p>
            <div className="flex items-center">
              <div className="*:text-[#ffc700] border-r border-solid border-neutral-400 pr-4 mr-4 flex">
                <IconStart />
                <IconStart />
                <IconStart />
                <IconStart />
                <IconStart />
              </div>
              <span className="font-medium text-sm text-[#9f9f9f]">
                5 Customer Review
              </span>
            </div>
            <p className="font-medium my-4">{product.description}</p>
            <div>
              <p className="text-[#a3a3a3] mb-1">Size</p>
              <div className="flex gap-4">
                <div className="bg-yellow-600 w-[30px] h-[30px] flex items-center justify-center text-white rounded">
                  L
                </div>
                <div className="bg-neutral-400 w-[30px] h-[30px] flex items-center justify-center text-white rounded">
                  XL
                </div>
                <div className="bg-neutral-400 w-[30px] h-[30px] flex items-center justify-center text-white rounded">
                  XS
                </div>
              </div>
            </div>
            <div className="mt-4 mb-8">
              <p className="text-[#a3a3a3] mb-3">Color</p>
              <div className="flex gap-4">
                <div className="bg-[#816dfa] w-[30px] h-[30px] rounded-full"></div>
                <div className="bg-black w-[30px] h-[30px] rounded-full"></div>
                <div className="bg-[#b88e2f] w-[30px] h-[30px] rounded-full"></div>
              </div>
            </div>
            <div>
              <form action="">
                <div className="border border-solid border-neutral-400 w-fit rounded inline-block">
                  <button className="py-2 px-4">-</button>
                  <input
                    type="text"
                    name=""
                    value="1"
                    id=""
                    className="w-[30px] text-center"
                  />
                  <button className="py-2 px-4">+</button>
                </div>
                <button
                  type="submit"
                  className="border border-solid border-yellow-600 text-yellow-600 rounded py-2 px-10 ml-3 hover:bg-yellow-600 hover:text-white"
                >
                  Add to cart
                </button>
                <button
                  type="submit"
                  className="border border-solid border-neutral-800 text-neutral-800 rounded py-2 px-10 ml-3 hover:bg-neutral-800 hover:text-white"
                >
                  + Compare
                </button>
              </form>
            </div>
            <hr className="text-neutral-400 mt-8 mb-3" />
            <div className="*:mb-3 *:text-[#a3a3a3]">
              <p>SKU: {product.sku}</p>
              <p>Category: {product.category}</p>
              <p>Tags: {product.tags?.join(", ")}</p>
            </div>
          </div>
        </div>
        <div className="*:font-semibold *:text-xl *:mr-16 border-b pb-4 mt-16">
          <a href="">Description</a>
          <a className="text-[#a3a3a3]" href="">
            Additional Information
          </a>
          <a className="text-[#a3a3a3]" href="">
            Review [5]
          </a>
        </div>
        <div className="*:text-[#a3a3a3] mt-8 ">
          <p className="mb-2">{product.description}</p>
          <p className="mb-8">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its className, the Kilburn is a compact, stout-hearted
            hero with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <img src="https://picsum.photos/id/1/624/378" alt="" />
            <img src="https://picsum.photos/id/1/624/378" alt="" />
          </div>
        </div>
      </Skeleton>

      <div className="mt-16 mb-16">
        <Heading children="Related Products" className="text-center mb-4" />
        <div className="grid grid-cols-4 gap-8 mt-4">
          {relatedProducts?.slice(0, 4).map((relatedProduct) => (
            <ProductItem key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
