import React, { Component } from 'react';
import { Card,CardItem, Text } from 'native-base';

import DinerHeader from './DinerHeader';
import DinerImage from './DinerImage';
import DinerDescription from './DinerDescription';
import DinerReview from './DinerReview';

const DinerCard = ({ name, image, location, best_plate_her, best_plate_him, review, logo }) =>  {
  return (
    <Card>
      <DinerHeader
        name={name}
        location={location}
        logo={logo}
      />
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
