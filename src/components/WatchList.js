import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { MovieCard } from './MovieCard';

export const WatchList = () => {
  const { watchList } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My WatchList</h1>
        </div>
        <div className="movie-grid">
          {
            (watchList.length > 0) ? (
              watchList.map((movie) => {
                return (
                  <MovieCard type="watchList" movie={movie} />
                )
              })
            ) : (
              <h2 className="no-movies">No movies in your list, add some!</h2>
            )
          }
        </div>
      </div>
    </div>
  );
};
