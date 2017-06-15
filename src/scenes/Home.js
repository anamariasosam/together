import React, { Component } from 'react';
import { Container, Content } from 'native-base';


import Hero from '.././components/Hero';
import FavsList from '.././components/FavsList';
import FooterMenu from '.././components/FooterMenu';


export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Hero />
          <FavsList />
        </Content>

        <FooterMenu />
      </Container>
    );
  }
}
