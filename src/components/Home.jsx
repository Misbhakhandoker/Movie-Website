import { useEffect, useState } from "react";
import Dropdown from "./partials/Dropdown";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "./utils/axios";
import Loading from "./partials/Loading";
const Home = () => {
  document.title = "SCSDB | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      // console.log(randomData);
      setwallpaper(randomData);
    } catch (error) {
      console.log(error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);
  return wallpaper && trending ? (
    <>
      <Sidenav />

      <div className="w-[80%] h-full overflow-auto">
        <Topnav />
        <Header data={wallpaper} />
        <div className="flex justify-between p-10">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading/>
  );
};

export default Home;
