import React, { Component } from 'react';
import { CardItem, Body, Badge, Text } from 'native-base';

const RestaurantReview = ({review}) =>  {
  return (
    <CardItem footer>
      <Body>
        <Badge success>
          <Text>{review}</Text>
        </Badge>
      </Body>
    </CardItem>

  );
}

export default RestaurantReview;
