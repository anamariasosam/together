import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Home from './scenes/Home';
import City from './scenes/City';
import Movie from './scenes/Movie';
import Restaurant from './scenes/Restaurant';

const styles = {
  textStyle: {
    fontSize: 20,
    color: '#262626'
  },

  viewStyle: {
    borderBottomWidth: 0,
    height: 65,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  }
};

const RouterComponent = () => (
  <Router
    sceneStyle={{ paddingTop: 70 }}
    navigationBarStyle={styles.viewStyle}
    titleStyle={styles.textStyle}
  >
    <Scene key="root">
      <Scene key="Home" component={Home} title="Together" initial renderBackButton={() => (null)} />
      <Scene key="Cities" component={City} title="Cities" />
      <Scene key="Restaurants" component={Restaurant} title="Restaurants" />
      <Scene key="Movies" component={Movie} title="Movies" />
    </Scene>
  </Router>
);

export default RouterComponent;
