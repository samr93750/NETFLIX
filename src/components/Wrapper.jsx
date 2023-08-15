import React from 'react'
import Nav from "./Navigation/Navigation"
import Banner from "./Banner/Banner"
import Row from "./Row/Rows"
import requests from '../requests'
import Footer from "./Footer/Footer"


const Wrapper = () => {

const datas = [
 {title: "NETFLIX ORIGINALS",fetchUrl: requests.fetchNetflixOriginals,isLarge: true,},
  { title: "Trending New", fetchUrl: requests.fetchTrending },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
  { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
  { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
  { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
  { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
  { title: "Documentary Movies", fetchUrl: requests.fetchDocumentaries },
];

  return (
    <div>
      <Nav />
      <Banner />
      {datas.map((data) => (
        <Row title={data.title} fetchUrl={data.fetchUrl} isLarge={data.isLarge} />
      ))} 
      <Footer />

      {/* {datas.map((data) => (
        <Row
          title={data.title}
          fetchUrl={data.fetchUrl}
          // isLarge={data.isLarge}
        /> */}
      {/* ))} */}
      {/* <Row /> */}
    </div>
  );
}

export default Wrapper;
