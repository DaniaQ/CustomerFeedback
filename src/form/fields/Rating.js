import React, { Component } from 'react';

import Ratings from 'react-ratings-declarative';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0
        }
        this.changeRating = this.changeRating.bind(this);
    }

    changeRating(rating) {
        this.setState({ rating: rating });
        this.props.handleClick(rating);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name} className="form-label">{this.props.title}</label>
                <Ratings
                    rating={this.state.rating}
                    widgetRatedColors="orange"
                    widgetHoverColors="orange"
                    widgetDimensions="20px"
                    changeRating={this.changeRating}
                >
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                    <Ratings.Widget />
                </Ratings>
            </div>
        );
    }
}

export default Rating;