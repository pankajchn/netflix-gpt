/* eslint-disable react/prop-types */
import { POSTER_PATH } from "../utils/constants";
import { Link } from "react-router-dom";
const MovieCard = ({ cey, poster_path }) => {
  if (!poster_path) return null;
  return (
    <Link to={`/player/${cey}`} className="min-w-32 md:min-w-52 md:h-60 mx-2 md:mx-0">
      <img
        className="h-48 w-32 md:w-48 md:h-60 hover:border-2"
        src={POSTER_PATH + poster_path}
        alt="poster_path"
      />
    </Link>
  );
};
export default MovieCard;
