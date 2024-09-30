import AboutItem from "../../../components/about/AboutItem";
import Slider from "../../../components/Slider";

const AboutPage = () => {
  return (
    <>
      <Slider />
      <section className="container max-w-screen-xl m-auto mt-16">
        <div className="about-item grid grid-cols-3 gap-8 ">
          <div className="about-content flex flex-col justify-center items-center">
            <img
              className="w-[100px] h-[100px]"
              src="/public/our-missing.svg"
              alt=""
            />
            <h1 className="font-bold text-[32px] mt-[20px] mb-[12px]">
              OUR MISSION
            </h1>
            <p className="text-center text-[18px] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="about-content flex flex-col justify-center items-center">
            <img
              className="w-[100px] h-[100px]"
              src="/public/our-vision.svg"
              alt=""
            />
            <h1 className="font-bold text-[32px] mt-[20px] mb-[12px]">
              OUR VISION
            </h1>
            <p className="text-center text-[18px] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="about-content flex flex-col justify-center items-center">
            <img
              className="w-[100px] h-[100px]"
              src="/public/our-values.svg"
              alt=""
            />
            <h1 className="font-bold text-[32px] mt-[20px] mb-[12px]">
              OUR VALUES
            </h1>
            <p className="text-center text-[18px] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </section>

      <section className="container max-w-screen-xl m-auto mt-16">
        <div className="about-container flex gap-8">
          <img src="/public/about-1.png" alt="" />
          <div className="about-content">
            <h1 className="font-bold text-[32px] mt-[20px] mb-8">
              ABOUT FURNIRO COMPANY
            </h1>
            <p className="text-[18px] mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-[18px]">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>

      <section className="container max-w-screen-xl m-auto mt-16">
        <h1 className="text-center font-bold text-[32px]">
          WE CREATE NATURAL WOOD FURNITURE
        </h1>
        <h1 className="text-center font-bold text-[32px]">
          AS WELL AS HIGH-QUALITY
        </h1>
        <div className="about-container grid grid-cols-4 gap-8 mt-8 mb-8">
          <AboutItem />
          <AboutItem />
          <AboutItem />
          <AboutItem />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
