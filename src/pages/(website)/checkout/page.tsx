import Heading from "../../../components/Typography/Heading";

const CheckOutPage = () => {
  return (
    <section className="contrainer max-w-screen-xl m-auto mb-16">
      <Heading children="Billing details" className="mt-16 mb-8" />
      <div className="grid grid-cols-2 gap-8">
        <div>
          <form action="">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="font-medium " htmlFor="">
                  First Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-solid border-neutral-300 block w-full outline-none p-2 mt-2"
                />
              </div>
              <div>
                <label className="font-medium " htmlFor="">
                  Last Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-solid border-neutral-300  block w-full outline-none p-2 mt-2"
                />
              </div>
            </div>
            <div className="mt-8">
              <label htmlFor="" className="font-medium">
                Company Name (Optional)
              </label>
              <input
                type="text"
                name=""
                id=""
                className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2"
              />
            </div>
            <div className="mt-8">
              <label className="font-medium" htmlFor="">
                Coutry / Region
              </label>
              <div className="border border-solid border-neutral-300 mt-2 p-2">
                <select name="" id="" className="block w-full">
                  <option value="" className="hidden">
                    Choose Your Country
                  </option>
                  <option value="">Việt Nam</option>
                  <option value="">America</option>
                </select>
              </div>
            </div>
            <div className="mt-8">
              <label htmlFor="" className="font-medium">
                Street address
              </label>
              <input
                type="text"
                name=""
                id=""
                className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="" className="font-medium">
                Town / City
              </label>
              <input
                type="text"
                name=""
                id=""
                className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2"
              />
            </div>
            <div className="mt-8">
              <label className="font-medium" htmlFor="">
                Province
              </label>
              <div className="border border-solid border-neutral-300 mt-2 p-2">
                <select name="" id="" className="block w-full">
                  <option value="" className="hidden">
                    Choose Your Province
                  </option>
                  <option value="">Việt Nam</option>
                  <option value="">America</option>
                </select>
              </div>
            </div>
            <div className="mt-8">
              <label htmlFor="" className="font-medium">
                ZIP code
              </label>
              <input
                type="text"
                name=""
                id=""
                className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="" className="font-medium">
                Phone
              </label>
              <input
                type="text"
                name=""
                id=""
                className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2"
              />
            </div>
            <div className="mt-8">
              <label htmlFor="" className="font-medium">
                Email address
              </label>
              <input
                type="text"
                name=""
                id=""
                className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2"
              />
            </div>
          </form>
        </div>
        <div>
          <p className="*:font-semibold *:text-2xl flex justify-between">
            <span>Product</span>
            <span>Subtotal</span>
          </p>
          <p className="flex justify-between mt-4">
            <span className="text-neutral-500">
              Asgaard sofa{" "}
              <strong className="font-medium text-black">X1</strong>
            </span>
            <span className="font-medium ">25.000.000đ</span>
          </p>
          <p className="flex justify-between mt-4">
            <span className="">Subtotal </span>
            <span className="font-medium ">25.000.000đ</span>
          </p>
          <p className="flex justify-between mt-4">
            <span className="">Total </span>
            <span className="font-bold text-xl text-[#b88e2f]">
              25.000.000đ
            </span>
          </p>
          <hr className="my-8 border-[#A3A3A3]" />
          <div>
            <div>
              <input type="radio" name="" id="" />
              <span className="font-medium ml-2">Direct Bank Transfer</span>
            </div>
            <p className="text-[#a3a3a3] mt-3">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="my-4">
              <input type="radio" name="" id="" />
              <span className="font-medium ml-2 text-[#a3a3a3]">
                ATM Bank Transfer
              </span>
            </div>
            <div>
              <input type="radio" name="" id="" />
              <span className="font-medium ml-2 text-[#a3a3a3]">
                Cash On Delivery
              </span>
            </div>
          </div>
          <p className="mt-8 text-[#262626]">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy</span>.
          </p>
          <div className="text-center mt-8 ">
            <a
              href=""
              className="border borderr-solide border-yellow-600 text-yellow-600   font-semibold py-2 px-16 inline-block hoever:text-white hover:bg-yellow-600 hover:text-white"
            >
              Place order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;
