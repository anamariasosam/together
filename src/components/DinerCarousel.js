import React, { Component } from 'react';
import { DeckSwiper } from 'native-base';

import DinerCard from '.././components/DinerCard';

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

export default class DinerCarousel extends Component {
  render() {
    return (
      <DeckSwiper
        dataSource={cards}
        renderItem={item =>
          <DinerCard
          name={item.name}
          description={item.description}
          image={item.image}
          />
        }
      />
    );
  }
}
