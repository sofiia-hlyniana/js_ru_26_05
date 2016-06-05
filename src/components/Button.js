import React, {PropTypes, Component} from 'react';

function Button (props) {
    const { onClick, buttonText } = props;
    return (
        <button onClick={onClick}>{buttonText}</button>
    );
 }

Button.PropTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default Button;

