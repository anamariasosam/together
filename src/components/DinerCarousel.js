import React, { Component } from 'react';
import { DeckSwiper } from 'native-base';

import DinerCard from '.././components/DinerCard';

const cards = [
  {
    name: 'Sushi Market',
    location: 'Contenedores',
    image: require('.././images/cover.jpg'),
    best_plate_her: 'Sopa del Mar',
    best_plate_him: 'Fujishowa',
    review: 3.5
  },
];

export default class DinerCarousel extends Component {
  render() {
    return (
      <DeckSwiper
        dataSource={cards}
        renderItem={card =>
          <DinerCard
            name={card.name}
            location={card.location}
            best_plate_her={card.best_plate_her}
            best_plate_him={card.best_plate_him}
            image={card.image}
            review={card.review}
          />
        }
      />
    );
  }
}
