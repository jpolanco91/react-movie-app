import  React, { Component } from 'react';
import Axios from 'axios';


class MovieTrailerPlayer extends Component {

  state = {
    currentMovieId: '',
    currentMovieTrailerUrl: ''
  }

  componentDidMount() {
    this.setState({ currentMovieId: this.props.match.params.movieId })
    const fullTrailerUrl = `http://varnatrd.tech/api/series/${this.props.match.params.movieId}`

    Axios.get(fullTrailerUrl).then(({ data = [] }) => {
      this.setState({ currentMovieTrailerUrl: data.trailer });
    });
  }

  render() {
    const { currentMovieTrailerUrl } = this.state
    return (
      <div>
        <a href={currentMovieTrailerUrl}><span>Link to play trailer</span></a>
      </div>
    )
  }
}

export default MovieTrailerPlayer;
