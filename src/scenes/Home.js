import React from 'react';
import { Content, Container } from 'native-base';

import Hero from '.././components/Hero';
import FavsList from '.././components/FavsList';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Hero />
          <FavsList />
        </Content>
      </Container>
    );
  }
}
