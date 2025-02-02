/* eslint-disable react/prop-types */

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-10 top-40 ms-12">
      <div>
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="w-[30rem] my-5 text-white">{overview}</p>
      </div>
      <div>
        <button className="bg-white text-black font-semibold px-7 py-2 rounded-md hover:bg-opacity-80">
          {" "}
          <span>▶</span> Play
        </button>
        <button className="bg-gray-500 text-black font-semibold px-7 py-2 ms-3 rounded-md hover:bg-opacity-80">
        ⓘ More Info
        </button>
      </div>
    </div>
  );
};
export default VedioTitle;
