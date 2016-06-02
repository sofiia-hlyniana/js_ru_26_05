import React, {PropTypes, Component} from 'react';

function Comment (props) {

    const { id, name, text, title } = props;
    const commentTitle = title ? <h5>{title}</h5> : null;
    const commentName = name ? <h4>{name}</h4> : null;
    return (
        <div id={id}>
          {commentName}
          {commentTitle}
          <div>{text}</div>
        </div>
    );
}

Comment.PropTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Comment;

