const API_KEY = "54051cd6fb347e8954e75ac4db9330d6";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=99`
}

export default request;