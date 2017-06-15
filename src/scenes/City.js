import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import CitiesList from '.././components/CitiesList';
import FooterMenu from '.././components/FooterMenu';

export default class City extends Component {
  render() {
    return (
      <Container>
        <Content>
          <CitiesList />
        </Content>

        <FooterMenu />
      </Container>
    );
  }
}
