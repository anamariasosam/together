import React, { Component } from 'react';
import { Image } from 'react-native';
import { CardItem } from 'native-base';

const DinerImage = ({image}) =>  {
  return (
  <CardItem cardBody>
    <Image style={{ flex: 1, resizeMode: 'stretch', height: 200 }} source={image} />
  </CardItem>
  );
}

export default DinerImage;
