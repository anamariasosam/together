import React, { Component } from 'react';
import { CardItem, Body, Text } from 'native-base';

import Stars from './Stars';

const DinerDescription = () =>  {
  return (
    <CardItem footer>
      <Body>
    <Text>
      Best Plates:
    </Text>
    <Text>
      Best Plates:
    </Text>
    <Stars />
  </Body>


    </CardItem>
  );
}

export default DinerDescription;
