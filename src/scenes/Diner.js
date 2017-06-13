import React, { Component } from 'react';
import { Container, View, DeckSwiper } from 'native-base';

import DinerCarousel from '.././components/DinerCarousel';

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
