import React, {PropTypes, Component} from 'react';

class Button extends Component {
  
  render() {
    const { onClick, buttonText } = this.props;
    return (
        <button onClick={onClick}>{buttonText}</button>
    );
  }
}

Button.PropTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default Button;

