import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-3">
      <h1 className="text-2xl font-bold text-white">
        <i className=" text-[#6556CD] ri-tv-fill mr-2"></i> <span>SCSDB.</span>
      </h1>
      <nav className="flex flex-col gap-3 text-xl text-zinc-400">
        <h1 className="mt-10 mb-5 text-xl font-semibold text-white">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="mr-2 ri-fire-fill"></i> Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="mr-2 ri-bard-fill"></i> Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="mr-2 ri-movie-2-fill"></i> Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="mr-2 ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link to="/person" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-team-fill"></i> People
        </Link>
      </nav>
      <hr className="h-[1px] border-none bg-zinc-400" />
      <nav className="flex flex-col gap-3 text-xl text-zinc-400">
        <h1 className="mt-10 mb-5 text-xl font-semibold text-white">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-information-fill"></i> About SCSDB
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
