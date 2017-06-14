import React, { Component } from 'react';
import { CardItem, Text, Body, Thumbnail, Left } from 'native-base';

const DinerHeader = ({ name, location, logo}) =>  {
  return (
  <CardItem header>
      <Left>
        <Thumbnail source={logo} />
        <Body>
          <Text>{name}</Text>
          <Text note>{location}</Text>
        </Body>
      </Left>
  </CardItem>
  );
}
export default DinerHeader;
