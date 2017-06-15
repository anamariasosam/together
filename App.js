import React from 'react';
import { Container, Header, Title, Body,Subtitle } from 'native-base';

import Home from './src/scenes/Home';
import Restaurant from './src/scenes/Restaurant';
import Movie from './src/scenes/Movie';
import FooterMenu from './src/components/FooterMenu';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Movies</Title>
            <Subtitle>List of Movies</Subtitle>
          </Body>
        </Header>

        <Movie />

        <FooterMenu />
      </Container>
    );
  }
}
