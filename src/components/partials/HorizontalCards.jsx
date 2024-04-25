import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";
const HorizontalCards = ({ data }) => {
  console.log(data);
  return (
    <div className="w-[100%] flex overflow-y-hidden p-5 mb-5 ">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[15%] h-[53vh] bg-zinc-900 mr-5"
          >
            <img
              className="w-full h-[45%] object-cover"
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original${
                      d.backdrop_path || d.poster_path
                    }`
                  : noimage
              }
              alt=""
            />
            <div className="text-white p-1 h-[45%] overflow-y-auto">
              <h1 className="mt-3 text-lg font-semibold">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="mt-3 text-sm">
                {d.overview.slice(0, 50)}...
                <p className="text-blue-400">more</p>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl text-white font-bold text-center mt-5">
          Nothing to show
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;
