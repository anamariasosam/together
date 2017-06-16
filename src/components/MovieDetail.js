import React from 'react';
import { ListItem, Text } from 'native-base';

import MovieReview from '.././components/MovieReview';

const MovieDetail = ({ name, review }) => {
  return (
    <ListItem>
      <Text>{name}</Text>
      <MovieReview review={review} />
    </ListItem>
  );
};

export default MovieDetail;
