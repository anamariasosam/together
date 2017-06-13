import React, { Component } from 'react';
import { Card,CardItem, Text } from 'native-base';

import DinerHeader from './DinerHeader';
import DinerImage from './DinerImage';
import DinerDescription from './DinerDescription';
import DinerReview from './DinerReview';

const DinerCard = ({ name, image, location, best_plate_her, best_plate_him, review }) =>  {
  return (
    <Card>
      <DinerHeader name={name} location={location} />
      <DinerImage image={image} />
      <DinerDescription
        best_plate_her={best_plate_her}
        best_plate_him={best_plate_him}
        review={review}
      />
      <DinerReview review={review} />
    </Card>
  );
}

export default DinerCard;
