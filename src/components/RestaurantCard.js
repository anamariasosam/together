import React, { Component } from 'react';
import { Card } from 'native-base';

import RestaurantHeader from './RestaurantHeader';
import RestaurantImage from './RestaurantImage';
import RestaurantDescription from './RestaurantDescription';
import RestaurantReview from './RestaurantReview';

const RestaurantCard = ({ name, image, location, best_plate_her, best_plate_him, review, logo }) =>  {
  return (
    <Card>
      <RestaurantHeader
        name={name}
        location={location}
        logo={logo}
      />
      <RestaurantImage image={image} />
      <RestaurantDescription
        best_plate_her={best_plate_her}
        best_plate_him={best_plate_him}
        review={review}
      />
      <RestaurantReview review={review} />
    </Card>
  );
}

export default RestaurantCard;
