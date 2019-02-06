var React = require('react');
var MovieElement = require('./MovieElement');

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    Axios.get('http://varnatrd.tech/api/series').then(({ data }) => {
      console.log(data)
      this.setState({ movies: data })
    })
  }

  render() {
    return (
      <div>
      {this.state.movies.map((movie) => {
        return (<MovieElement imageSource={movie.fullImage} title={movie.title} year={movie.year} />)
      })}
      </div>
    )
  }
}

module.exports =  MovieContainer;
