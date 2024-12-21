import { useState, useCallback } from 'react';
import { movieService } from '../services/movieService';
import { ENDPOINTS } from '../config/api.config';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = useCallback(async (endpoint = ENDPOINTS.POPULAR, page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const data = await movieService.getMovies(endpoint, page);
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setCurrentPage(page);
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  }, []);

  const searchMovies = useCallback(async (query, page = 1) => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await movieService.searchMovies(query, page);
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setCurrentPage(page);
    } catch (err) {
      setError('Failed to search movies');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    movies,
    loading,
    error,
    currentPage,
    totalPages,
    fetchMovies,
    searchMovies,
  };
};