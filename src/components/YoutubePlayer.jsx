/* eslint-disable react-hooks/exhaustive-deps */
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addYoutubeVedio } from "../utils/movieSlice";

const YoutubePlayer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const showTrailer = useSelector((store) => store.movie.youtubeVedio);

  const getYoutubeVedio = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await res.json();
      const trailer = json.results.filter((v) => v.type === "Trailer");
      const ytTrailer = trailer[0];
      dispatch(addYoutubeVedio(ytTrailer));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getYoutubeVedio();
  }, []);

  return (
    <div>
      {" "}
      {showTrailer && (
        <div className="h-screen">
          <img
            src={back_arrow_icon}
            onClick={() => navigate("/")}
            alt="back arrow"
            className="w-10 mx-3 my-2 cursor-pointer"
          />
          <div className="h-[85%]">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${showTrailer.key}?autoplay=1&mute=1`}
               allow="autoplay; encrypted-media"
              frameBorder="0"
              allowFullScreen
              className="w-full aspect-video"
            ></iframe>
          </div>
          <div className="flex items-center justify-between md:text-[20px] px-4">
            <p>{showTrailer.published_at.slice(0,10)}</p>
            <p>{showTrailer.name}</p>
            <p>{showTrailer.type}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default YoutubePlayer;
