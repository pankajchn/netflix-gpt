import VedioPlayer from "./VedioPlayer";
import VedioTitle from "./VedioTitle";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const moviesList = useSelector((store) => store.movie.nowPlayingMovies);
  if (!moviesList) return;
  const mainMovie = moviesList[1];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative top-4">
      <VedioPlayer movieId={id} />
      <VedioTitle title={original_title} overview={overview} />
    </div>
  );
};
export default HeroSection;
