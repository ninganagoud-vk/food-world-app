import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionAddComment } from '../../../store/actions/action';
import './style.css';

const CommentBox = ({ actionAddComment, id }) => {
  const handleSubmit = (e) => {
    // Prevent the default behaviour of form submit
    e.preventDefault();

    // Get the value of the comment box
    // and make sure it not some empty strings
    const comment = e.target.elements.comment.value.trim();
    const name = e.target.elements.name.value.trim();

    // Make sure name and comment boxes are filled
    if (name && comment) {
      const commentObject = { obj: { name, comment }, id };
      actionAddComment(commentObject);
      // Clear input fields
      e.target.elements.comment.value = '';
      e.target.elements.name.value = '';
    }
  }

  return (
    <div className="comment-box-container">
      <form onSubmit={handleSubmit} className="comment-form">
        <input type="text" className="input" name="name" placeholder="Your name" />
        <textarea className="textarea" name="comment" placeholder="Add a comment" ></textarea>
        <input className="button is-primary" type="submit" />
      </form>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

const mapDispatchToProps = {
  actionAddComment
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CommentBox)
);