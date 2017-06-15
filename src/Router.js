import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './scenes/Home';
import City from './scenes/City';

const RouterComponent = () => (
  <Router
    sceneStyle={{ paddingTop: 65 }}
  >
    <Scene key="list" component={Home} title="Together" />
    <Scene key="list" component={City} title="Together" initial />
  </Router>
);

export default RouterComponent;
