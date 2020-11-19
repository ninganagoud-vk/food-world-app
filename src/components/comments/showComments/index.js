import React from 'react';
import Comment from '../comment'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const ShowComments = ({ comments, showCommentsId }) => {
  return (
    <section className="section" >
      {
        comments.map((comment, index) => <Comment key={index} comment={comment}
          showCommentsId={showCommentsId} />
        )
      }
    </section>
  );
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default withRouter(
  connect(mapStateToProps, null)(ShowComments)
);
