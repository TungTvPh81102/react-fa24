import { IconArrowRight, IconDate } from "../icon";

const NewItem = () => {
  return (
    <div className="">
      <div>
        <img src="https://picsum.photos/id/1/296/211" alt="" />
      </div>
      <div>
        <p className="text-[#9ca3af] font-semibold text-sm flex items-center mt-4 mb-1">
          <IconDate />
          <span className="ml-2">24/04/2024</span>
        </p>
        <h3 className="font-semibold text-xl">
          A bedroom must have something like this
        </h3>
        <a
          className="text-red-600 font-semibold text-base flex items-center mt-3"
          href=""
        >
          Xem chi tiết
          <span className="ml-2">
            <IconArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
};

export default NewItem;
