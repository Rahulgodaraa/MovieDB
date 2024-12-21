export const API_CONFIG = {
    API_KEY: '3900c3c2bc45972b0aeb4e0588ff8a9f',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMG_BASE_URL: 'https://image.tmdb.org/t/p/w500'
  };
  
  export const ENDPOINTS = {
    POPULAR: 'popular',
    TOP_RATED: 'top_rated',
    UPCOMING: 'upcoming',
    MOVIE_DETAILS: (id) => `${id}`,
    MOVIE_CREDITS: (id) => `${id}/credits`,
    SEARCH: 'search/movie'
  };