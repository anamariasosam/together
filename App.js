import React from 'react';
import { Container, Header, Title, Body } from 'native-base';

import Diner from './src/scenes/Diner';
import FooterMenu from './src/components/FooterMenu';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Diner</Title>
          </Body>
        </Header>

        <Diner />

        <FooterMenu />
      </Container>
    );
  }
}
