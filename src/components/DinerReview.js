import React, { Component } from 'react';
import { CardItem, Body, Badge, Text } from 'native-base';

const DinerReview = ({review}) =>  {
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

export default DinerReview;
