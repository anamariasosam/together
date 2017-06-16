import React from 'react';

import Hero from '.././components/Hero';
import FavsList from '.././components/FavsList';
import Scene from './Scene';

const Home = () => {
  return (
    <Scene>
      <Hero />
      <FavsList />
    </Scene>
  );
};

export default Home;
