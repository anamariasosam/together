import React from 'react';
import { List } from 'native-base';

import FavsListItem from './FavsListItem';

const FavsList = () =>  {
  return (
    <List>
      <FavsListItem topic="food" description="Chicken nuggets"/>
      <FavsListItem topic="movie" description="Wonder Woman"/>
      <FavsListItem topic="city" description="New York City"/>
    </List>
  );
}

export default FavsList;
