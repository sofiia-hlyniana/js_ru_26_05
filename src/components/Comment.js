import React, {PropTypes, Component} from 'react';

function Comment (props) {

    const { id, name, text, title } = props;

    return (
        <div id={id}>
          <h4>{name}</h4>
          <h5>{title}</h5>
          <div>{text}</div>
        </div>
    );
}

Comment.PropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Comment;

