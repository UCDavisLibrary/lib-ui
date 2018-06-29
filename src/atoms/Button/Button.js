import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const buttonProps = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

const buttonDefaultProps = {
  onClick: () => {}
}

export const Button = ({ children, className, onClick }) => {
  return (
    <button className={`libui-Button ${ true && className }`} onClick={ onClick }>
      { children }
    </button>
  )
}

Button.propTypes = buttonProps;
Button.defaultProps = buttonDefaultProps;
