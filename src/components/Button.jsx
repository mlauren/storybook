
import React from 'react';
import PropTypes from 'prop-types';

// const Button = ({ children, onClick, onLoad, customClass }) => (
  
// );

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className={"button" + (typeof this.props.customClass !== "undefined") ?  " " + this.props.customClass : '' } onClick={this.props.onClick} onLoad={this.props.onLoad} type="button">
        {this.props.children}
      </button>)
  }
}

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  customClass: PropTypes.string
};
Button.defaultProps = {
  onClick: () => {},
  onLoad: () => {}
};
export { Button as Button };
