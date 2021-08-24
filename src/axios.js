import axios from "axios";

// base url to make requrests to the movies database

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// instance.get("/foo-bar");

export default instance;
