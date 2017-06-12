import React from 'react';
import { Container, Header, Title, Body } from 'native-base';

import Home from './src/scenes/Home';
import FooterMenu from './src/components/FooterMenu';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Together</Title>
          </Body>
        </Header>

        <Home />

        <FooterMenu />
      </Container>
    );
  }
}
