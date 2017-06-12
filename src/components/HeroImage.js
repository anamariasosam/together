import React from 'react';
import { Image } from 'react-native';
import { CardItem } from 'native-base';

const HeroImage = () =>  {
  return (
    <CardItem cardBody>
      <Image
        style={{ flex: 1, resizeMode: 'stretch', height: 200 }}
        source={require('.././images/cover.jpg')} />
    </CardItem>
  );
}

export default HeroImage;
