import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Home from './scenes/Home';
import City from './scenes/City';
import Movie from './scenes/Movie';
import Restaurant from './scenes/Restaurant';

const RouterComponent = () => (
  <Router
    sceneStyle={{ paddingTop: 65 }}
  >
    <Scene key="list" component={Home} title="Together" initial />
    <Scene key="list" component={City} title="Together" />
    <Scene key="list" component={Restaurant} title="Together" />
    <Scene key="list" component={Movie} title="Together" />
  </Router>
);

export default RouterComponent;
