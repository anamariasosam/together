import React from 'react';
import { Right, Badge, Text } from 'native-base';

const MovieReview = ({ review }) => {
  return (
    <Right>
      <Badge primary>
        <Text>{review}</Text>
      </Badge>
    </Right>
  );
};

export default MovieReview;
