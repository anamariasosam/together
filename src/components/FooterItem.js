import React from 'react';
import { Button, Icon, Text} from 'native-base';

const FooterMenu = ({icon, topic}) =>  {
  return (
    <Button >
      <Icon name={icon} />
      <Text>{topic}</Text>
    </Button>
  );
}

export default FooterMenu;
