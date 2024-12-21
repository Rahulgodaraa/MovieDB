import { API_CONFIG, ENDPOINTS } from '../config/api.config';
import axios from 'axios';

const { BASE_URL, API_KEY } = API_CONFIG;

class MovieService {
  async getMovies(endpoint, page = 1) {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${endpoint}`, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
            page
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  }

  async getMovieDetails(movieId) {
    try {
      const [movieRes, creditsRes] = await Promise.all([
        axios.get(`${BASE_URL}/movie/${ENDPOINTS.MOVIE_DETAILS(movieId)}`, {
          params: {
            api_key: API_KEY
          }
        }),
        axios.get(`${BASE_URL}/movie/${ENDPOINTS.MOVIE_CREDITS(movieId)}`, {
          params: {
            api_key: API_KEY
          }
        })
      ]);

      return {
        ...movieRes.data,
        credits: creditsRes.data
      };
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  }

  async searchMovies(query, page = 1) {
    try {
      const response = await axios.get(
        `${BASE_URL}/${ENDPOINTS.SEARCH}`, {
          params: {
            api_key: API_KEY,
            query,
            page
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error searching movies:', error);
      throw error;
    }
  }
}

export const movieService = new MovieService();