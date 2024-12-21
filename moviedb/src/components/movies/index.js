// MovieCard.js
import { API_CONFIG } from '../../config/api.config';

export const MovieCard = ({ movie, onClick }) => (
  <div className="card h-100 bg-dark text-white" onClick={onClick} style={{ cursor: 'pointer' }}>
    <img
      src={`${API_CONFIG.IMG_BASE_URL}${movie.poster_path}`}
      className="card-img-top"
      alt={movie.title}
    />
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <div className="d-flex justify-content-between">
        <span className="badge bg-primary">★ {movie.vote_average}</span>
        <small>{new Date(movie.release_date).getFullYear()}</small>
      </div>
    </div>
  </div>
);

// MovieGrid.js
export const MovieGrid = ({ movies, onMovieClick }) => (
  <div className="container py-4">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {movies.map(movie => (
        <div key={movie.id} className="col">
          <MovieCard movie={movie} onClick={() => onMovieClick(movie.id)} />
        </div>
      ))}
    </div>
  </div>
);

// MovieDetails.js
export const MovieDetails = ({ movie, onBack }) => (
  <div className="container py-4">
    <button className="btn btn-secondary mb-4" onClick={onBack}>
      ← Back
    </button>
    
    <div className="card bg-dark text-white">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`${API_CONFIG.IMG_BASE_URL}${movie.poster_path}`}
            className="img-fluid"
            alt={movie.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{movie.title} 
              <span className="text-muted ms-2">
                ({new Date(movie.release_date).getFullYear()})
              </span>
            </h2>
            <div className="mb-3">
              <span className="badge bg-warning text-dark me-2">★ {movie.vote_average}</span>
              <span className="text-muted">
                {movie.runtime} min • {movie.genres?.map(g => g.name).join(', ')}
              </span>
            </div>
            <p className="card-text">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>

    {movie.credits && (
      <div className="mt-5">
        <h3 className="text-white mb-4">Cast</h3>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4">
          {movie.credits.cast.slice(0, 6).map(actor => (
            <div key={actor.id} className="col">
              <div className="card bg-dark text-white h-100">
                <img
                  src={`${API_CONFIG.IMG_BASE_URL}${actor.profile_path}`}
                  className="card-img-top"
                  alt={actor.name}
                />
                <div className="card-body">
                  <h6 className="card-title">{actor.name}</h6>
                  <p className="card-text small text-muted">{actor.character}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);