import React, { useState } from 'react';

export const Navbar = ({ onSearch, onNavigate, currentView }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={() => onNavigate('popular')}>
          MovieDb
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a 
                className={`nav-link ${currentView === 'popular' ? 'active' : ''}`}
                href="#"
                onClick={() => onNavigate('popular')}
              >
                Popular
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentView === 'top_rated' ? 'active' : ''}`}
                href="#"
                onClick={() => onNavigate('top_rated')}
              >
                Top Rated
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentView === 'upcoming' ? 'active' : ''}`}
                href="#"
                onClick={() => onNavigate('upcoming')}
              >
                Upcoming
              </a>
            </li>
          </ul>
          
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};