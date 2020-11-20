import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css';

export const Comment = ({ comment, showCommentsId }) => {
  return (
    <>
      {comment.id === showCommentsId && comment.comments.map((item,index) => <div className="comment-container" key={index}>
        <UserOutlined style={{
          color: 'green'
        }} />
        <p className="comment-text"><strong>{item.name}:</strong>{item.comment}</p>
      </div>
      )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    id: state.id
  };
};

export default withRouter(
  connect(mapStateToProps, null)(Comment)
);