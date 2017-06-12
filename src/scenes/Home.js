import React from 'react';
import { Content } from 'native-base';

import Hero from '.././components/Hero';
import FavsList from '.././components/FavsList';

export default class Home extends React.Component {
  render() {
    return (
      <Content>
        <Hero />
        <FavsList />
      </Content>
    );
  }
}