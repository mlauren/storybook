
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, customClass }) => (
  <button className={"button " + customClass || ''} aria-hidden="true" onClick={onClick} type="button">
  {children}
  </button>
);

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: () => {},
};
export { Button as Button };
