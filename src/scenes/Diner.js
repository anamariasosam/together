import React, { Component } from 'react';
import { Container, View, DeckSwiper } from 'native-base';

import DinerCarousel from '.././components/DinerCarousel';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('.././images/cover.jpg'),
    description: 'comida de mar'
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('.././images/cover.jpg'),
    description: 'comida de mar'
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('.././images/cover.jpg'),
    description: 'comida de mar'
  },
];

export default class Diner extends Component {
  render() {
    return (
      <Container>
        <View>
          <DinerCarousel />
        </View>
      </Container>
    );
  }
}
