import React from "react";
import Row from "../../containers/Row/Row";
import request from "../../request";
import Banner from "../../containers/Banner/Banner";
import Navbar from "../NavBar/Navbar";
const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner fetchURL={request.fetchNetflixOriginals}></Banner>
      <Row
        title="Trending"
        fetchURL={request.fetchTrending}
        isLargeImage={true}
      ></Row>
      <Row
        title="Netflix originals"
        fetchURL={request.fetchNetflixOriginals}
      ></Row>
      <Row title="Top rated" fetchURL={request.fetchTopRated}></Row>
      <Row title="Action" fetchURL={request.fetchActionMovies}></Row>
      <Row title="Horror" fetchURL={request.fetchHorrorMovies}></Row>
      <Row title="Romance" fetchURL={request.fetchRomanceMovies}></Row>
      <Row title="Comedy" fetchURL={request.fetchComedyMovies}></Row>
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries}></Row>
    </div>
  );
};

export default Layout;
