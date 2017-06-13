import React, { Component } from 'react';
import { CardItem, Body, Text, Badge } from 'native-base';

const DinerDescription = ({ best_plate_her, best_plate_him }) =>  {
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

export default DinerDescription;
