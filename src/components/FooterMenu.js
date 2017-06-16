import React from 'react';
import { Footer, FooterTab } from 'native-base';

import FooterItem from './FooterItem';

const FooterMenu = () => {
  return (
    <Footer >
      <FooterTab>
        <FooterItem icon="restaurant" topic="Restaurants" />
        <FooterItem icon="film" topic="Movies" />
        <FooterItem icon="map" topic="Cities" />
      </FooterTab>
    </Footer>
  );
};

export default FooterMenu;
