import { MdContacts } from "react-icons/md";
import { IconMap, IconShare } from "../../../components/icon";
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareYoutube,
} from "react-icons/fa6";
import { AiFillTikTok, AiOutlineTwitter } from "react-icons/ai";
import { GrSend } from "react-icons/gr";
import Slider from "../../../components/Slider";

const ContactPage = () => {
  return (
    <div>
      <Slider />
      <section className="container max-w-screen-xl m-auto mt-16">
        <div className="grid grid-cols-3 gap-8">
          <div className="contact-item flex gap-6">
            <div className="border-2 border-yellow-600  w-[64px] h-[64px] flex items-center justify-center">
              <span className="material-symbols-outlined text-yellow-600 ">
                <IconMap />
              </span>
            </div>
            <div className="contact-content mt-1 ">
              <h3 className="font-semibold text-[24px]">ADDRESS</h3>
              <p className="font-normal text-neutral-400 mt-5">
                60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội
              </p>
            </div>
          </div>
          <div className="contact-item flex gap-6">
            <div className="border-2 border-yellow-600   w-[64px] h-[64px] flex items-center justify-center">
              <span className="material-symbols-outlined text-yellow-600 ">
                <MdContacts size={32} />
              </span>
            </div>
            <div className="contact-content mt-1">
              <h3 className="font-semibold text-[24px]">CONTACT DETAILS</h3>
              <div className="mt-5">
                <p className="font-normal text-neutral-400">info@furniro.com</p>
                <p className="font-bold text-neutral-400">02056278686</p>
              </div>
            </div>
          </div>
          <div className="contact-item flex gap-6">
            <div className="border-2 border-yellow-600   w-[64px] h-[64px] flex items-center justify-center">
              <span className="material-symbols-outlined text-yellow-600 ">
                <IconShare />
              </span>
            </div>
            <div className="contact-content mt-1">
              <h3 className="font-semibold text-[24px]">SOCIAL NETWORKS</h3>
              <p className="font-normal text-neutral-400 flex mt-5">
                <FaSquareFacebook className="mr-4" size={24} />
                <FaInstagram className="mr-4" size={24} />
                <AiFillTikTok className="mr-4" size={24} />
                <AiOutlineTwitter className="mr-4" size={24} />
                <FaSquareYoutube className="mr-4" size={24} />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F1F1F1] mt-16">
        <div className="contact-container flex grid-cols-2 gap-8">
          <div className="contact-image">
            <img src="/public/contact.png" alt="" />
          </div>
          <div className="contact-form flex flex-col justify-center">
            <h4 className="font-semibold text-[20px]">CONTACT</h4>
            <h2 className="font-bold text-[40px] mb-8">CONTACT WITH US NOW</h2>
            <form action="">
              <div className="flex grid-cols-2 gap-8">
                <input
                  className="bg-transparent border-b-2 pb-3 border-b-[#9CA3AF] w-[300px]"
                  type="text"
                  name=""
                  id=""
                  placeholder="First name"
                />
                <input
                  className="bg-transparent border-b-2 pb-3 border-b-[#9CA3AF]  w-[300px]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Last name"
                />
              </div>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <input
                  className="bg-transparent  border-b-2 pb-3 border-b-[#9CA3AF]  w-[300px]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                />
                <input
                  className="bg-transparent border-b-2 pb-3 border-b-[#9CA3AF]  w-[300px]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone number"
                />
              </div>
              <div className="grid grid-cols-1 mt-8">
                <input
                  className="bg-transparent border-b-2 pb-3 border-b-[#9CA3AF] w-full"
                  type="text"
                  name=""
                  id=""
                  placeholder="Message"
                />
              </div>
              <button className="mt-[44px] bg-yellow-600 text-white p-2 w-[200px] flex justify-center font-bold items-center">
                <GrSend className="mr-2" />
                Send infomation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
