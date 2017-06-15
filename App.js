import React from 'react';
import { Container, Header, Title, Body,Subtitle } from 'native-base';

import Home from './src/scenes/Home';
import Restaurant from './src/scenes/Restaurant';
import Movie from './src/scenes/Movie';
import City from './src/scenes/City';
import FooterMenu from './src/components/FooterMenu';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Cities</Title>
            <Subtitle>List of Cities</Subtitle>
          </Body>
        </Header>

        <City />

        <FooterMenu />
      </Container>
    );
  }
}
