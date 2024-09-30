import { Link } from "react-router-dom";
import { IconCart, IconHeart, IconSearch, IconUser } from "./icon";

const Header = () => {
  return (
    <div>
      <header className="bg-white max-w-6xl mx-auto">
        <div className="grid grid-cols-3 items-center gap-8">
          <div className="flex items-center gap-1">
            <img className="" src="/public/logo.svg" alt="" />
            <p className="font-bold text-[34px]">Furniro</p>
          </div>
          <nav>
            <ul className="flex justify-center items-center space-x-8 font-medium text-xl">
              <li>
                <Link className="hover:text-[#ee7228] " to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#ee7228]" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#ee7228]" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#ee7228]" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-end gap-4">
            <Link to="/login">
              <IconUser />
            </Link>
            <Link to="#">
              <IconSearch />
            </Link>
            <Link to="#">
              <IconHeart />
            </Link>
            <Link to="/cart">
              <IconCart />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
