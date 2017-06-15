import React from 'react';
import { List } from 'native-base';

import MovieGenre from '.././components/MovieGenre';
import MovieDetail from '.././components/MovieDetail';

const MovieItem = ({ genre, list }) =>  {
  const moviesList = list.map( (movie) => {
    return(
      <MovieDetail
        { ...movie }
        key={ movie.name }
      />
    )
  });

  return (
    <List>
      <MovieGenre genre={genre} />
      { moviesList }
    </List>
  );
}

export default MovieItem;
