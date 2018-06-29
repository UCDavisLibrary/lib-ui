import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const buttonProps = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'arrow']),
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string
};

const buttonDefaultProps = {
  onClick: () => {},
  type: 'primary',
  size: 'md'
}

export const Button = ({ children, onClick, type, size, className, ...props }) => {
  return (
    <button className={`libui-Button ${ type } ${ size } ${ true && className }`}
            onClick={ onClick }
            { ...props }>
      <div>{ children }</div>
      { type === 'arrow' && <span className="arrow">&rarr;</span> }
    </button>
  )
}

Button.propTypes = buttonProps;
Button.defaultProps = buttonDefaultProps;
