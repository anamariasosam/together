import React from 'react';
import { Thumbnail, ListItem, Body, Text } from 'native-base';

const FavsListItem = ({ topic, description }) => {
  const thumbnails = {
    food: require('.././images/food.png'),
    movie: require('.././images/movie.png'),
    city: require('.././images/city.png')
  };
  return (
    <ListItem>
      <Thumbnail square source={thumbnails[topic]} />
      <Body>
        <Text>Best {topic}</Text>
        <Text note>{description}</Text>
      </Body>
    </ListItem>
  );
};

export default FavsListItem;
