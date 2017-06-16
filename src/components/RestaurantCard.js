import React from 'react';
import { Card } from 'native-base';

import RestaurantHeader from './RestaurantHeader';
import RestaurantImage from './RestaurantImage';
import RestaurantDescription from './RestaurantDescription';
import RestaurantReview from './RestaurantReview';

const RestaurantCard = ({ name, image, location, bestPlateHer, bestPlateHim, review, logo }) => {
  return (
    <Card>
      <RestaurantHeader
        name={name}
        location={location}
        logo={logo}
      />
      <RestaurantImage image={image} />
      <RestaurantDescription
        bestPlateHer={bestPlateHer}
        bestPlateHim={bestPlateHim}
        review={review}
      />
      <RestaurantReview review={review} />
    </Card>
  );
};

export default RestaurantCard;
