import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import RestaurantsList from '.././components/RestaurantsList';

export default class Restaurant extends Component {
  render() {
    return (
      <Container>
        <Content>
          <RestaurantsList />
        </Content>
      </Container>
    );
  }
}
