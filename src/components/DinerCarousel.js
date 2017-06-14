import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import DinerCard from '.././components/DinerCard';

export default class DinerCarousel extends Component {
  constructor() {
    super();
    this.state = {
      diners: [],
    };
  }

  componentWillMount() {
    this.setState({ diners: [
      {
        name: 'Sushi Market',
        location: 'Contenedores, Envigado',
        image: require('.././images/sushi.jpg'),
        logo: require('.././images/sushimarket.jpg'),
        best_plate_her: 'Sopa del Mar',
        best_plate_him: 'Fujishowa',
        review: 4.5
      },
      {
        name: 'Grill Station',
        location: 'Provenza, Poblado',
        image: require('.././images/grill_station.jpg'),
        logo: require('.././images/grillstation.jpg'),
        best_plate_her: 'New York',
        best_plate_him: 'New York',
        review: 3.5
      },
    ]
    });
  }

  renderDiners() {
   return this.state.diners.map(diner =>
     <DinerCard
       name={diner.name}
       location={diner.location}
       best_plate_her={diner.best_plate_her}
       best_plate_him={diner.best_plate_him}
       image={diner.image}
       review={diner.review}
       key={diner.name}
       logo={diner.logo}

     />
   );
 }

  render() {
    return (
      <ScrollView>
        { this.renderDiners() }
      </ScrollView>
    );
  }
}
