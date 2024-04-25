import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import HorizontalCards from "../partials/HorizontalCards";
import { asyncloadtv, removetv } from "../store/actions/tvAction";
import Loading from "./Loading";
const TvDetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  console.log(info);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(pathname);
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-[280vh] px-[10%]"
    >
      {/* Part 1 navigation */}
      <nav className="relative w-full text-xl text-zinc-200">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"
        ></Link>
        <a target="_blank" href={`${info.details.homepage}`}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://wikipedia.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.details.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Part 2 Poster and details */}
      <div className="flex w-full ">
        <div>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] w-[150vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              info.details.poster_path || info.details.backdrop_path
            }`}
            alt=""
          />
        </div>

        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-black ">
            {info.details.name ||
              info.details.title ||
              info.details.original_name ||
              info.details.original_title}
            <small className="text-2xl font-bold text-zinc-300">
              ({info.details.first_air_date.split("-")[0]})
            </small>
          </h1>
          <div className="flex items-center mt-3 mb-10 gap-x-3">
            <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">
              {(info.details.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold text-2xl leading-6">
              User Score
            </h1>
            <h1>{info.details.first_air_date}</h1>
            <h1>{info.details.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.details.runtime}min</h1>
          </div>
          <h1 className="text-xl italic font-semibold text-zinc-200">
            {info.details.tagline}
          </h1>
          <h1 className="mt-5 mb-3 text-2xl">Overview</h1>
          <p>{info.details.overview}</p>
          <h1 className="mt-5 mb-3 text-2xl">tv Translations</h1>
          <p className="mb-10 ">{info.translations.join(", ")}</p>
          <Link
            className="p-3 bg-[#6556CD] rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i className="mr-3 text-xl ri-play-fill"></i>
            Play Trailer
          </Link>
          <div className="mb-10"></div>
        </div>
      </div>

      {/* part 3 Available on Platform */}
      <div className="w-[80%] flex flex-col gap-y-5">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex items-center text-white gap-x-10">
            <h1>Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[7vh] h-[7vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex items-center text-white gap-x-10">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[7vh] h-[7vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex items-center text-white gap-x-10">
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[7vh] h-[7vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-300" />
      {/* part 4 Seasons */}
      <h1 className="mt-10 text-3xl font-bold text-white ">Seasons</h1>
      <div className="w-[100%] flex overflow-y-hidden p-5 mb-5 ">
        {info.details.seasons.length > 0 ? (
          info.details.seasons.map((s, i) => (
            <>
              <div className="w-[15vh] mr-[8%]">
                <img
                  key={i}
                  className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] min-w-[14vw] h-[50vh] object-cover"
                  src={`https://image.tmdb.org/t/p/original/${
                    s.poster_path || s.backdrop_path || s.profile_path
                  }`}
                  alt=""
                />
                <h1 className="mt-3 text-2xl font-semibold text-zinc-300">
                  {s.name}
                </h1>
              </div>
            </>
          ))
        ) : (
          <h1 className="text-3xl mt-5 text-white font-black text-center">
            Nothing to show
          </h1>
        )}
      </div>
      {/* part 5 Recommendations and Similar Stuff */}
      <h1 className="mt-10 text-3xl font-bold text-white ">
        Recommendations & Similar stuff
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
