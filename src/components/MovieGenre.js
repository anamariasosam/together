import React from 'react';
import { Separator, Text } from 'native-base';

const MovieGenre = ({ genre }) =>  {
  return (
    <Separator bordered>
      <Text>{genre}</Text>
    </Separator>
  );
}

export default MovieGenre;
