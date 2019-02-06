var React = require('react');

class MovieElement extends React.Component {
  // Title, Image, year
  render() {
    return (
      <div>
        <img src={this.props.imageSource} />
        <div>{this.props.title}</div>
        <div>{this.props.year}</div>
      </div>
    )
  }
}

module.exports =  MovieElement;
