import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import MoviesList from '.././components/MoviesList';

export default class Movie extends Component {
  render() {
    return (
      <Container>
        <Content>
          <MoviesList />
        </Content>
      </Container>
    );
  }
}
