import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

/* eslint-disable react/prop-types */
const VedioPlayer = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movie?.trailerVedio);

  return (
    <div className="absolute top-0">
      {trailer && (
        <iframe
          className="w-screen aspect-video h-[35rem]"
          src={
            "https://www.youtube.com/embed/" +
            trailer.key +
            "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
export default VedioPlayer;
