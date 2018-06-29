import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './Button.css';

const arrowButtonProps = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

const arrowButtonDefaultProps = {
  onClick: () => {}
}

export const ArrowButton = ({ children, className, onClick }) => {
  return (
    <Button className={ className } onClick={ onClick }>
      <div>
        { children }
      </div>
      <span className="arrow">&rarr;</span>
    </Button>
  )
}

ArrowButton.propTypes = arrowButtonProps;
ArrowButton.defaultProps = arrowButtonDefaultProps;
