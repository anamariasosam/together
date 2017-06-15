import React from 'react';
import { CardItem, Body, Text } from 'native-base';

const RestaurantDescription = ({ best_plate_her, best_plate_him }) =>  {
  return (
    <CardItem footer>
      <Body>
        <Text>
          💁🏻 {best_plate_her}
        </Text>
        <Text>
          💁🏻‍♂️ {best_plate_him}
        </Text>
      </Body>
    </CardItem>
  );
}

export default RestaurantDescription;
