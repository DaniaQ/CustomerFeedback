import React from 'react';
import './graph.css';

import StarRatings from 'react-star-ratings';

class Graph extends React.Component {
  render() {
    return (
      <div className='graph-container'>
        <div className="graph-bar">
          <StarRatings
            rating={1}
            starRatedColor="orange"
            changeRating={this.changeRating}
            numberOfStars={5}
            name='rating'
            starDimension="20px"
          />
           <span className="rating-count">({this.props.Ratings[1]})</span>
        </div>

        <div className="graph-bar">
          <StarRatings
            rating={2}
            starRatedColor="orange"
            changeRating={this.changeRating}
            numberOfStars={5}
            name='rating'
            starDimension="20px"
          />
           <span className="rating-count">({this.props.Ratings[2]})</span>
        </div>

        <div className="graph-bar">
          <StarRatings
            rating={3}
            starRatedColor="orange"
            changeRating={this.changeRating}
            numberOfStars={5}
            name='rating'
            starDimension="20px"
          />
          <span className="rating-count">({this.props.Ratings[3]})</span>
        </div>

        <div className="graph-bar">
          <StarRatings
            rating={4}
            starRatedColor="orange"
            changeRating={this.changeRating}
            numberOfStars={5}
            name='rating'
            starDimension="20px"
          />
           <span className="rating-count">({this.props.Ratings[4]})</span>
        </div>

        <div className="graph-bar">
          <StarRatings
            rating={5}
            starRatedColor="orange"
            changeRating={this.changeRating}
            numberOfStars={5}
            name='rating'
            starDimension="20px"
          />
           <span className="rating-count">({this.props.Ratings[5]})</span>
        </div>
      </div>
    );
  }
}

export default Graph;