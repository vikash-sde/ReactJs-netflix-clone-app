import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import "./row.css";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which runs on a specific condition/variable

  useEffect(() => {
    //if [],run ones when the row loads, and don't runs again
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      //https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&wtith_network=213
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=iSIA05baODs&t=1s

          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  // console.log(movies);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie, i) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
