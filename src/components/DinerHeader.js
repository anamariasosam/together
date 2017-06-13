import React, { Component } from 'react';
import { CardItem, Text, Body } from 'native-base';

const DinerHeader = ({ name, location}) =>  {
  return (
  <CardItem header>
    <Body>
      <Text>{name}</Text>
      <Text note>{location}</Text>
    </Body>
  </CardItem>
  );
}
export default DinerHeader;
