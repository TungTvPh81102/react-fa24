const Footer = () => {
  return (
    <footer className="bg-[#262626] text-white pt-16">
      <div className="container max-w-screen-xl m-auto grid grid-cols-4 gap-8 mb-16">
        <div>
          <div className="flex items-center gap-1 mb-4">
            <img className="" src="/public/logo.svg" alt="" />
            <p className="font-bold text-[34px]">Furniro</p>
          </div>
          <p>400 University Drive Suite 200 Coral, FL 33134</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Site map</h3>
          <ul>
            <li className="mb-4">
              <a href="" className="font-medium ">
                Home
              </a>
            </li>
            <li className="mb-4">
              <a href="" className="font-medium ">
                Shop
              </a>
            </li>
            <li className="mb-4">
              <a href="" className="font-medium ">
                About
              </a>
            </li>
            <li className="mb-4">
              <a href="" className="font-medium ">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Help</h3>
          <ul>
            <li className="mb-4">
              <a href="" className="font-medium ">
                Payment Options
              </a>
            </li>
            <li className="mb-4">
              <a href="" className="font-medium ">
                Returns
              </a>
            </li>
            <li className="mb-4">
              <a href="" className="font-medium ">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Location</h3>
          <ul>
            <li className="mb-4">
              <a href="" className="font-medium ">
                Support@gamial.com
              </a>
            </li>
            <li className="mb-4">
              <a href="" className="font-medium ">
                Ahmedabad Main Road
              </a>
            </li>
            <li className="mb-4">
              <a href="" className="font-medium ">
                Udaipur, India- 313002
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-center mt-4 p-8">Copyright © 2022. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
