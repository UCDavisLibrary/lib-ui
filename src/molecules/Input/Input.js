import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

import * as Atoms from '../../atoms';

const inputProps = {
  type: PropTypes.oneOf(['text', 'email', 'password']),
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

const defaultInputProps = {
  size: 'md',
  className: ''
}

export class Input extends Component {

  render() {
    const { type, size, name, label, className, ...props } = this.props;

    return (
      <div className={`Molecule-Input ${ size } ${ className }`}
           { ...props }>
        <label htmlFor={ name }>{ label }</label>
        <Atoms.Input type={ type } size={ size } name={ name } />
      </div>
    )
  }
}

Input.propTypes = inputProps;
Input.defaultProps = defaultInputProps;
