import React from 'react';
import './comments.css';

class CommentsList extends React.Component {
  render() {
    return (
      <div className="comments-container">
         {this.props.Comments.map((value, index) => {
           if (index < 4)
              return  <Comment key={index} comment={value.comment}/>
          return ''
      })}
      </div>
    );
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.comment}</p>
      </div>
    );
  }
}

export default CommentsList;