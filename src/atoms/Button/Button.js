import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const buttonProps = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'arrow'])
};

const buttonDefaultProps = {
  onClick: () => {},
  type: 'primary'
}

export const Button = ({ children, type, className, onClick }) => {
  return (
    <button className={`libui-Button ${ type } ${ true && className }`} onClick={ onClick }>
      <div>{ children }</div>
      { type === 'arrow' && <span className="arrow">&rarr;</span> }
    </button>
  )
}

Button.propTypes = buttonProps;
Button.defaultProps = buttonDefaultProps;
