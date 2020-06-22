import React from 'react';


import './form.css';
import Rating from './fields/Rating';
import Input from './fields/Input';
import TextArea from './fields/TextArea';
import Graph from '../graph/Graph';
import CommentsList from '../comments/Comments';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User: {
        name: '',
        email: '',
        comment: "",
        rating: 0
      },
      Ratings: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      },
      Comments: [
        {
          name: "Sami M.",
          email: "sami@gmail.com",
          rating: 4,
          datetime: new Date(),
          comment: "The product was good"
        },
        {
          name: "Sami M.",
          email: "sami@gmail.com",
          rating: 4,
          datetime: new Date(),
          comment: "The product was good"
        }
      ]

    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForm = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        User: {
          ...prevState.User,
          [name]: value
        }
      })
    );
  }

  increaseRatingCount(rating) {
    var count = this.state.Ratings[rating] + 1;
    this.setState(
      prevState => ({
        Ratings: {
          ...prevState.Ratings,
          [rating]: count
        }
      }));
  }

  addToCommentList() {
    var comments = this.state.Comments;
    comments.unshift({
      name: this.state.User.name,
      email: this.state.User.email,
      rating: this.state.User.rating,
      datetime: new Date(),
      comment: this.state.User.comment
    });
    this.setState({ Comments: comments }, () => console.log(this.state));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.increaseRatingCount(this.state.User.rating);
    this.addToCommentList();
  }

  handleRatingChange = (rating) => {
    this.setState(
      prevState => ({
        User: {
          ...prevState.User,
          rating: rating
        }
      }));
  }

  render() {
    return (
      <div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <Input type={'text'}
              title={'Name:'}
              name={'name'}
              value={this.state.User.name}
              placeholder={'Enter your name'}
              handleChange={this.handleInput}
            />
            <Input type={'text'}
              title={'Email:'}
              name={'email'}
              value={this.state.User.email}
              placeholder={'Enter your email'}
              handleChange={this.handleInput}
            />
            <Rating
              title={'Rating:'}
              name={'rating'}
              handleClick={this.handleRatingChange}
            />
            <TextArea
              title={'Comment:'}
              rows={10}
              value={this.state.User.comment}
              name={'comment'}
              handleChange={this.handleInput}
              placeholder={"Describe your experience"}
            />
            <input className="submit-button" type="submit" value="Submit" />
          </form>
        </div>
        <Graph Ratings={this.state.Ratings} />
        <CommentsList Comments={this.state.Comments} />
      </div>
    );
  }
}

export default Form;