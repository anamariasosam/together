import React, { Component } from 'react';
import { Container, Content, DeckSwiper } from 'native-base';

import DinerCarousel from '.././components/DinerCarousel';

export default class Diner extends Component {
  render() {
    return (
      <Container>
        <Content>
          <DinerCarousel />
        </Content>
      </Container>
    );
  }
}
