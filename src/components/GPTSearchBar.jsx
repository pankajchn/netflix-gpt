const GPTSearchBar = () => {
  return (
    <div>
      <form className="flex justify-center">
        <input
          placeholder="What would you like to watch today?"
          className="px-5 py-4 w-[30rem] bg-white rounded-sm text-black"
        />
        <button className="bg-red-600 text-white px-5 py-4 font-bold font-poppins rounded-e-sm hover:bg-opacity-80">
          Search
        </button>
      </form>
    </div>
  );
};
export default GPTSearchBar;
