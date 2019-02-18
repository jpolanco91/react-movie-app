import React, { Component }  from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import MovieContainer from './MovieContainer';
import MovieTrailerPlayer from './MovieTrailerPlayer';

class App extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        Axios.get('http://varnatrd.tech/api/series').then(({ data = [] }) => {
          this.setState({ movies: data });
        });
    }

    render() {
        const { movies } = this.state

        return (
            <div>
              <Route
                exact
                path="/"
                render={() => (
                    <MovieContainer movies={movies} />
                )}
                />
              <Route path='/movie_trailer/:movieId' component={MovieTrailerPlayer} />
            </div>
        );
    }
}

export default App;
