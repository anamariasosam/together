import React from 'react';
import { Button, Icon, Footer, FooterTab, Text} from 'native-base';

import FooterItem from './FooterItem';

const FooterMenu = () =>  {
  return (
    <Footer >
      <FooterTab>
        <FooterItem icon="restaurant" topic="Restaurant" />
        <FooterItem icon="film" topic="Movies" />
        <FooterItem icon="map" topic="Cities" />
      </FooterTab>
    </Footer>
  );
}

export default FooterMenu;
