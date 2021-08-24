const API_KEY = "ac291445feb0982a6e26fe1521d1dba2";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&wtith_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
