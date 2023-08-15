import "./Row.css"
import axios from "./../../Axios"
import React, { useEffect,useState } from 'react'

const Rows = ({title,fetchUrl,isLarge}) => {

const[movies,setMovies]=useState([])

useEffect(()=>{
  const fetchData=async ()=>{
    const request=await axios.get(fetchUrl)
    setMovies(request.data.results);

    return request;
  };
  fetchData();

},[fetchUrl]);

  return (
    <div className="text-white pl-5">
      <div>
        <h2 className="text-[25px] font-bold">{title}</h2>
        <div className="row_poster flex gap-3 overflow-x-auto  overflow-y-hidden p-5">
          {movies.map((movie) => (
            <img
              src={`https://image.tmdb.org/t/p/original/${
                isLarge ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt=""
              className={`${
                isLarge
                  ? "h-[250px] hover:scale-125 transition-transform duration-300 object-contain cursor-pointer"
                  : "h-[100px] hover:scale-110 transition-transform duration-300 object-contain cursor-pointer"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rows

