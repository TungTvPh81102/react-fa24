import ProductItem from "../../../components/product/ProductItem";
import Session from "../../../components/session/Session";
import Slider from "../../../components/Slider";
import Heading from "../../../components/Typography/Heading";

const ShopPage = () => {
  return (
    <div>
      <Slider />
      <section className="container max-w-screen-xl m-auto grid grid-cols-12 gap-8 mt-16">
        <div className="col-span-3">
          <Heading children="Categories" className="mb-4" />
          <ul>
            <li className="text-yellow-600 font-medium mb-2">
              <a href="">Cafe Chair</a>
            </li>
            <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600">
              <a href="">Sofa</a>
            </li>
            <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600">
              <a href="">Lamp</a>
            </li>
            <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600">
              <a href="">Carpet</a>
            </li>
            <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600">
              <a href="">Cabinet</a>
            </li>
            <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600">
              <a href="">Tea table</a>
            </li>
          </ul>
        </div>
        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-8">
            {/* <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem /> */}
          </div>
          <div className="mt-8">
            <a
              className="py-2 px-4 mr-2 bg-yellow-600 inline-block text-white font-bold rounded-md"
              href=""
            >
              1
            </a>
            <a
              className="py-2 px-4 mr-2 bg-neutral-400 inline-block text-white font-bold rounded-md"
              href=""
            >
              2
            </a>
            <a
              className="py-2 px-4 mr-2 bg-neutral-400 inline-block text-white font-bold rounded-md"
              href=""
            >
              3
            </a>
            <a
              className="py-2 px-4 bg-neutral-400 inline-block text-white font-bold rounded-md"
              href=""
            >
              Next
            </a>
          </div>
        </div>
      </section>
      <Session />
    </div>
  );
};

export default ShopPage;
