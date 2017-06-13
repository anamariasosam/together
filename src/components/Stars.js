import React, { Component } from 'react'
import { Button, Icon } from 'native-base';


export default class Stars extends Component {

  render() {
    return (
      <Button transparent>
        <Icon ios='ios-star' android="md-star" style={{fontSize: 30, color: 'pink'}} />
        <Icon ios='ios-star' android="md-star" style={{fontSize: 30, color: 'pink'}} />
        <Icon ios='ios-star' android="md-star" style={{fontSize: 30, color: 'pink'}} />
        <Icon ios='ios-star-half' android="md-star-half" style={{fontSize: 30, color: 'pink'}} />
        <Icon ios='ios-star-outline' android="md-star-outline" style={{fontSize: 30, color: 'pink'}} />
      </Button>
    );
  }
}
