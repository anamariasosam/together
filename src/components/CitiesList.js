import React from 'react';
import { List } from 'native-base';

import CitiesListItem from './CitiesListItem';

const CitiesList = () => {
  return (
    <List>
      <CitiesListItem name="New York City" date="nov 2015" />
      <CitiesListItem name="New York City" date="nov 2015" />
      <CitiesListItem name="New York City" date="nov 2015" />
    </List>
  );
};

export default CitiesList;
