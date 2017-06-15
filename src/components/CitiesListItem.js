import React from 'react';
import { Thumbnail, ListItem, Body, Text, Right, Icon, Left} from 'native-base';

const CitiesListItem = ({ name, date }) =>  {
  return (
    <ListItem avatar>
      <Left>
        <Thumbnail small square source={{uri: 'https://scontent.fbog1-1.fna.fbcdn.net/v/t1.0-9/12074847_10207765822842342_2380156078398508595_n.jpg?oh=ac16362211f432b65395ca9626518bc8&oe=59D44500'}}/>
      </Left>
      <Body>
        <Text>{name}</Text>
        <Text note>{date}</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
     </ListItem>

  );
}

export default CitiesListItem;
