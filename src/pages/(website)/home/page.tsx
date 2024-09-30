import { useQuery } from "@tanstack/react-query";
import Gallery from "../../../components/gallery/Gallery";
import NewItem from "../../../components/new/NewItem";
import ProductItem from "../../../components/product/ProductItem";
import Session from "../../../components/session/Session";
import Slider from "../../../components/Slider";
import Heading from "../../../components/Typography/Heading";
import api from "../../../api";
import { useState } from "react";
import { IProduct } from "../../../interface";
import { Skeleton } from "antd";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const { isLoading, error, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await api.get("/products");
      setProducts(data);
      return data;
    },
  });

  const limitedProducts = products.slice(0, 8);

  return (
    <div className="">
      <Slider />
      <div className="max-w-6xl mx-auto mt-16 ">
        <div className="flex justify-between">
          <Heading children="New Products" />
          <a
            className="border border-solid border-yellow-500 text-yellow-600 px-4 py-2 font-semibold text-base hover:bg-yellow-600 hover:text-white"
            href=""
          >
            View all products
          </a>
        </div>

        {isError && <p>{error.message}</p>}

        <Skeleton active loading={isLoading}>
          <section className="mt-4 grid grid-cols-4 gap-8">
            {limitedProducts.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </section>
        </Skeleton>

        <section className="mt-16">
          <div className=" flex justify-between">
            <Heading children="Gallery" />
            <a
              className="border border-solid border-yellow-500 text-yellow-600 px-4 py-2 font-semibold text-base hover:bg-yellow-600 hover:text-white"
              href=""
            >
              View all gallery
            </a>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-3 gap-8">
              <Gallery />
              <Gallery />
              <Gallery />
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8">
              <Gallery />
              <Gallery />
              <Gallery />
            </div>
          </div>
        </section>
        <section className="mt-16">
          <div className=" flex justify-between">
            <Heading children="News" />
            <a
              className="border border-solid border-yellow-500 text-yellow-600 px-4 py-2 font-semibold text-base hover:bg-yellow-600 hover:text-white"
              href=""
            >
              View all news
            </a>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-8">
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
          </div>
        </section>
      </div>
      <Session />
    </div>
  );
};

export default HomePage;
