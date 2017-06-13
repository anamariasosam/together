import React, { Component } from 'react';
import { Card } from 'native-base';

import DinerHeader from './DinerHeader';
import DinerImage from './DinerImage';
import DinerDescription from './DinerDescription';

const DinerCard = ({ name, image, description }) =>  {
  return (
    <Card>
      <DinerHeader name={name} description={description} />
      <DinerImage image={image} />
      <DinerDescription/>
    </Card>
  );
}

export default DinerCard;
