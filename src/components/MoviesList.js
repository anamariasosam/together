import React, { Component } from 'react';
import { Content } from 'native-base';

import MovieItem from '.././components/MovieItem';

export default class MoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentWillMount() {
    this.setState({ movies: [
      {
        genre: 'ACTION',
        list: [
          {
            name: 'Wonder Woman',
            review: 8.2,
          },
          {
            name: 'Pirates of the Caribbean',
            review: 7.1,
          },
          {
            name: 'Logan',
            review: 8.3,
          },
        ],
      },
    ],
    });
  }

  renderMovies() {
    return this.state.movies.map(movie => <MovieItem {...movie} key={movie.genre} />);
  }

  render() {
    return (
      <Content>
        {this.renderMovies()}
      </Content>
    );
  }
}
