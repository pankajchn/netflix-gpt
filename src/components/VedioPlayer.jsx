import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

/* eslint-disable react/prop-types */
const VedioPlayer = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movie?.trailerVedio);

  return (
    <div className="relative top-12 md:-top-16">
      {trailer && (
        <iframe
          className="w-full h-full aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailer.key +
            "?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )} 
       <div className="hidden md:block absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
  );
};
export default VedioPlayer;
