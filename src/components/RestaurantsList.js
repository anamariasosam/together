import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import RestaurantCard from '.././components/RestaurantCard';

export default class RestaurantsList extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }

  componentWillMount() {
    this.setState({ restaurants: [
      {
        name: 'Sushi Market',
        location: 'Contenedores, Envigado',
        image: require('.././images/sushi.jpg'),
        logo: require('.././images/sushimarket.jpg'),
        bestPlateHer: 'Sopa del Mar',
        bestPlateHim: 'Fujishowa',
        review: 4.5
      },
      {
        name: 'Grill Station',
        location: 'Provenza, Poblado',
        image: require('.././images/grill_station.jpg'),
        logo: require('.././images/grillstation.jpg'),
        bestPlateHer: 'New York',
        bestPlateHim: 'New York',
        review: 3.5
      },
    ]
    });
  }

  renderRestaurants() {
   return this.state.restaurants.map(restaurant =>
     <RestaurantCard
       {...restaurant}
       key={restaurant.name}
     />
   );
 }

  render() {
    return (
      <ScrollView>
        { this.renderRestaurants() }
      </ScrollView>
    );
  }
}
