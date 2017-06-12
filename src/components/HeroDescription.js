import React from 'react';
import { Icon, Text, CardItem } from 'native-base';

const HeroDescription = ({ months, years }) =>  {
  return (
    <CardItem>
       <Icon  name="calendar" />
       <Text>Together: {months} Months - {years} Years</Text>
     </CardItem>
  );
}

export default HeroDescription;
