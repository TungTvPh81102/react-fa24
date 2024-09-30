const Session = () => {
  return (
    <section className="bg-[#fff7ed] py-16 mt-16">
      <div className="container max-w-screen-xl m-auto grid grid-cols-4 ">
        <div className="flex gap-5 items-center">
          <img src="/public/highQuality.svg" alt="" />
          <div>
            <h3 className="font-semibold text-xl mb-1">High Quantity</h3>
            <p className="text-[#898989]">Crafted from top materials</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img src="/public/support.svg" alt="" />
          <div>
            <h3 className="font-semibold text-xl mb-1">24 / 7 Support</h3>
            <p className="text-[#898989]">Dedicated support</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img src="/public/warranty.svg" alt="" />
          <div>
            <h3 className="font-semibold text-xl mb-1">Warranty Protection</h3>
            <p className="text-[#898989]">Over 2 years</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img src="/public/free-shipping.svg" alt="" />
          <div>
            <h3 className="font-semibold text-xl mb-1">Free Shipping</h3>
            <p className="text-[#898989]">Order over 150 $</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Session;
