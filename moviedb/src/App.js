import React, { useState, useEffect } from 'react';
import { useMovies } from './hooks/Movies.js';
import { movieService } from './services/movieService';
import { ENDPOINTS } from './config/api.config';
import { MovieGrid, MovieDetails } from './components/movies';
 
import { Navbar } from './components/layout/Navbar';
import { Loading } from './components/common/Loading.js';
import { ErrorMessage } from './components/common/ErrorMessage.js';
import { Pagination } from './components/common/Pagination.js';

const App = () => {
  const { 
    movies, 
    loading, 
    error, 
    currentPage, 
    totalPages, 
    fetchMovies, 
    searchMovies 
  } = useMovies();

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentView, setCurrentView] = useState(ENDPOINTS.POPULAR);

  useEffect(() => {
    fetchMovies(currentView);
  }, []);

  const handleMovieClick = async (movieId) => {
    try {
      const movieDetails = await movieService.getMovieDetails(movieId);
      setSelectedMovie(movieDetails);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const handleSearch = async (query) => {
    if (query.trim()) {
      await searchMovies(query);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      fetchMovies(currentView, newPage);
    }
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
    setSelectedMovie(null);
    fetchMovies(view);
  };

  return (
    <div className="min-vh-100 bg-dark">
      <Navbar 
        onSearch={handleSearch} 
        onNavigate={handleNavigate}
        currentView={currentView}
      />
      
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      
      <main>
        {selectedMovie ? (
          <MovieDetails 
            movie={selectedMovie} 
            onBack={() => setSelectedMovie(null)}
          />
        ) : (
          <>
            <MovieGrid 
              movies={movies} 
              onMovieClick={handleMovieClick}
            />
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default App;