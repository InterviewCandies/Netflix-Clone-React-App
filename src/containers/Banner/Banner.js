import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Banner.css";
import Navbar from "../../components/NavBar/Navbar";

const BASE_IMAGE = "https://image.tmdb.org/t/p/original/";
const Banner = ({ fetchURL }) => {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setBanner(
        request.data.results[
          Math.trunc(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, [fetchURL]);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${BASE_IMAGE + banner?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {banner?.name || banner?.original_name}
        </h1>
        <button className="banner-button">Play</button>
        <button className="banner-button">My List</button>
        <p className="banner-description">{banner.overview}</p>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
};

export default Banner;
