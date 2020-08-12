import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const BASE_IMAGE = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeImage }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchURL]);

  const handleClick = (movie) => {
    if (trailerURL) setTrailerURL("");
    else {
      console.log(movie);
      movieTrailer(movie.name || movie.title || "")
        .then((url) => {
          console.log(url);
          const searchParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(searchParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="posters">
        {movies.map((movie) => {
          return (
            <img
              className={"poster " + (isLargeImage && "big-poster")}
              src={
                BASE_IMAGE +
                (isLargeImage ? movie?.poster_path : movie?.backdrop_path)
              }
              key={movie?.id}
              alt={movie?.name}
              onClick={() => handleClick(movie)}
            ></img>
          );
        })}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts}></YouTube>}
    </div>
  );
};

export default Row;
