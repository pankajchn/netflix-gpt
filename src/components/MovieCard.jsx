/* eslint-disable react/prop-types */
import { POSTER_PATH } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="min-w-[200px]">
      <img className="w-48 h-60 object-cover"  src={POSTER_PATH + poster_path} alt="poster_path"/>
    </div>
  );
};
export default MovieCard;
