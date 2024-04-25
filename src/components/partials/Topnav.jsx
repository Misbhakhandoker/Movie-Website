import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import noimage from "/noimage.jpg"
const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const GetSerches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSerches();
  }, [query]);

  return (
    <div className="z-[1000] w-[70%]  h-[10vh] relative  flex  m-auto items-center ">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-3xl cursor-pointer text-zinc-400 ri-close-fill"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-500 top-[100%] left-[8%] overflow-auto rounded">
        {searches.map((s, i) => (
          <Link to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="text-black hover:bg-zinc-300 p-5 w-[100%] border-b-2 border-zinc-100 flex justify-start items-center"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-10"
              src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage}
              alt=""
            />
            <span>{s.title || s.original_name || s.original_title}</span>
          </Link>
        ))}
        {/* */}
      </div>
    </div>
  );
};

export default Topnav;
