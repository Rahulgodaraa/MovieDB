import React, { useState } from 'react';

export const Navbar = ({ onSearch, onNavigate, currentView }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setIsCollapsed(true);  
    setSearchQuery('');

  };

  

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
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
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a 
              className={`nav-link ${currentView === 'popular' ? 'active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('popular');
                setIsCollapsed(true); // Close navbar on mobile after click
              }}
            >
              Popular
            </a>
          </li>
          <li className="nav-item">
            <a 
              className={`nav-link ${currentView === 'top_rated' ? 'active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('top_rated');
                setIsCollapsed(true);
              }}
            >
              Top Rated
            </a>
          </li>
          <li className="nav-item">
            <a 
              className={`nav-link ${currentView === 'upcoming' ? 'active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('upcoming');
                setIsCollapsed(true);
              }}
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