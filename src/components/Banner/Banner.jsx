import React from "react";

import axios from "./../../Axios";
import requests from "./../../requests";
import { useEffect, useState } from "react";
import "./Banner.css";
const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // setMovie(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    };
    fetchData();
  }, []);

  const truncate = (str, n) =>
    str.length > n ? str.substr(0, n) + "..." : str;
  console.log(movie);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,

          backgroundSize: "cover",
        }}
        className="banner"
      >
        <div className="pt-[200px] pl-[50px] w-[400px] text-white flex flex-col gap-4">
          <h1 className="font-bold text-4xl"></h1>
          {movie?.name || movie?.title || movie?.original_name};
          <div className="flex gap-3">
            <button className="px-4 py-1 bg-[#3939399d] text-[#fff] outline-none border-none rounded-sm hover:text-[#000] hover:bg-[#e6e6e6]">
              Play{" "}
            </button>
            <button className="px-4 py-1 bg-[#3939399d] text-[#fff] outline-none border-none rounded-sm hover:text-[#000] hover:bg-[#e6e6e6]">
              {" "}
              My List
            </button>
          </div>
          <p>{truncate(`${movie?.overview}`, 150)}</p>
        </div>
        <div className="banner-shadow"> </div>
      </div>
    </>
  );
};

export default Banner;
