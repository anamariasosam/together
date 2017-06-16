import React from 'react';
import { Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

const FooterMenu = ({ icon, topic }) => {
  const changeScene = () => {
    switch (topic) {
      case 'Movies':
        Actions.Movies();
        break;
      case 'Restaurants':
        Actions.Restaurants();
        break;
      case 'Cities':
        Actions.Cities();
        break;
      default:
        Actions.Home();
        break;
    }
  };
  return (
    <Button onPress={changeScene}>
      <Icon name={icon} />
    </Button>
  );
};

export default FooterMenu;
