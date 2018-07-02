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
  size: 'md',
  className: ''
}

export const Button = ({ children, onClick, type, size, className, ...props }) => {
  return (
    <button className={`Atom-Button ${ type } ${ size } ${ className }`}
            onClick={ onClick }
            { ...props }>
      <div className="children-wrapper">
        <div>{ children }</div>
        { type === 'arrow' && <span className="arrow">&rarr;</span> }
      </div>
    </button>
  )
}

Button.propTypes = buttonProps;
Button.defaultProps = buttonDefaultProps;
