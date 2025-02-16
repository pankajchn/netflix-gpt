/* eslint-disable react/prop-types */
import { IoPlaySharp } from "react-icons/io5";
const VedioTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[19rem] px-4 md:bottom-96 md:ms-40">
      <div>
        <h1 className="text-xl md:text-4xl font-bold text-white drop-shadow-lg">{title}</h1>
        <p className="text-[13px] w-96 md:text-base md:w-[50%] text-white drop-shadow-lg my-2">{overview}</p>
      </div>
      <div className="mt-4 flex">
        <button className="flex bg-white text-black text-[14px] md:text-[16px] px-4 py-2  md:px-7 md:py-2 rounded hover:bg-opacity-80 font-semibold">
          <span className="mt-1">
            <IoPlaySharp />
          </span>
          Play
        </button>
        <button className="ms-2 text-[14px] font-semibold md:font-normal bg-[#6d6d6eb3] text-[#fff] px-3 md:px-6 md:py-2 rounded hover:bg-opacity-80 ">
          {" "}
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};
export default VedioTitle;
