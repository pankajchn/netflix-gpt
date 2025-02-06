/* eslint-disable react/prop-types */
import { IoPlaySharp } from "react-icons/io5";
const VedioTitle = ({ title, overview }) => {
  return (
    <div className=" aspect-video absolute bottom-48 ms-40 bg-gradient-to-r from-black">
      <div>
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <p className="w-96 text-white my-2">{overview}</p>
      </div>
      <div className="mt-4 flex">
        <button className="flex bg-white text-black px-7 py-2 rounded hover:bg-opacity-80 font-semibold">
          <span className="mt-1">
            <IoPlaySharp />
          </span>
          Play
        </button>
        <button className="ms-2 bg-neutral-400 text-white px-6 py-2 rounded hover:bg-opacity-80 font-semibold">
          {" "}
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};
export default VedioTitle;
