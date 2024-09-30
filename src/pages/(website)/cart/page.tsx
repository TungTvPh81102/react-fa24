import { Link } from "react-router-dom";
import { IconTrash } from "../../../components/icon";

const CartPage = () => {
  return (
    <section className="container max-w-screen-xl m-auto grid grid-cols-12 gap-8 my-16">
      <div className="col-span-8">
        <table className="w-full">
          <thead>
            <tr className=" bg-neutral-100 *:py-4 *:font-medium">
              <th className="text-left pl-4">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="*:py-4 *:text-center ">
              <td className="!text-left">
                <img
                  className="inline mr-4"
                  src="https://picsum.photos/id/1/77/77"
                  alt=""
                />
                <span className="text-[#a3a3a3]">Asgaard sofa</span>
              </td>
              <td>
                <span className="text-[#a3a3a3]">25.000.000đ</span>
              </td>
              <td>1</td>
              <td className="font-medium">25.000.000đ</td>
              <td>
                <span className="text-red-500">
                  <IconTrash />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-span-4 bg-neutral-100 p-8">
        <h2 className="font-semibold text-2xl mb-4">Cart Total</h2>
        <hr className="border-[#a3a3a3] mb-5" />
        <p className="font-medium flex justify-between mb-2">
          <span>Subtotal</span>
          <span className="text-[#a3a3a3] ">25.000.000đ</span>
        </p>
        <p className=" flex justify-between items-center mb-8">
          <span className="font-medium">Total</span>
          <span className="text-bold font-extrabold text-red-500 text-[20px]">
            25.000.000đ
          </span>
        </p>
        <Link
          className="border border-solid border-yellow-500 text-yellow-500 w-full inline-block text-center py-2 hover:bg-yellow-500 hover:text-white"
          to="/check-out"
        >
          Checkout
        </Link>
      </div>
    </section>
  );
};

export default CartPage;
