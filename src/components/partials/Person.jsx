import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./Cards";
import Loading from "./Loading";
import Topnav from "./Topnav";

const Person = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("person");
  const [people, setpeople] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  document.title = "SCSDB | People " + category.toUpperCase();

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);
      // console.log(data);
      if (data.results.length > 0) {
        setpeople((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
      // console.log(randomData);
      // console.log(category);
      //   setpeople(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  //    console.log(page);
  const refershHandler = async () => {
    if (people.length === 0) {
      GetPeople();
    } else {
      setpage(1);
      setpeople([]);
      GetPeople();
    }
  };

  //   console.log(people);
  useEffect(() => {
    refershHandler();
    GetPeople();
  }, [category]);
  return people.length > 0 ? (
    <div className="px-[3%] w-screen h-auto bg-[#1F1E24]">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"
          ></i>
          People
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[70%]">
          <Topnav />

          <div className="w-[2%]"></div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={people.length}
        next={GetPeople}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={people} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Person;
