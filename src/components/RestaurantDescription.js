import React from 'react';
import { CardItem, Body, Text } from 'native-base';

const RestaurantDescription = ({ bestPlateHer, bestPlateHim }) => {
  return (
    <CardItem footer>
      <Body>
        <Text>
          💁🏻 {bestPlateHer}
        </Text>
        <Text>
          💁🏻‍♂️ {bestPlateHim}
        </Text>
      </Body>
    </CardItem>
  );
}

export default RestaurantDescription;
