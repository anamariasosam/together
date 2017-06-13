import React, { Component } from 'react';
import { CardItem, Text, Body } from 'native-base';

const DinerHeader = ({ name, description}) =>  {
  return (
  <CardItem header>
    <Body>
      <Text>{name}</Text>
      <Text note>{description}</Text>
    </Body>
  </CardItem>
  );
}
export default DinerHeader;
