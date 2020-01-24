import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

import * as Atoms from '../../atoms';

const inputProps = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel', 'textarea']),
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  assistiveText: PropTypes.string
};

const defaultInputProps = {
  value: '',
  size: 'md',
  className: ''
};

export class Input extends Component {

  render() {
    const {
      type,
      size,
      name,
      label,
      value,
      onChange,
      assistiveText,
      className,
      placeholder,
      rows,
      cols,
      autocomplete,
      required,
      readonly,
      disabled
    } = this.props;

    return (
      <div className={`Molecule-Input ${ size } ${ disabled ? 'disabled' : '' } ${ className }`}>
        <label htmlFor={ name }>
          <span className="label-text">{ label }</span>
          { required && <span className="asterisk">*</span> }
        </label>
        <Atoms.Input ref={ c => this.input = c }
                     type={ type }
                     size={ size }
                     name={ name }
                     value={ value }
                     placeholder={ placeholder }
                     rows={ rows }
                     cols={ cols }
                     autocomplete={ autocomplete }
                     onChange={ onChange }
                     required={ required }
                     readonly={ readonly }
                     disabled={ disabled } />
        <div className="assistive-text">
          {
            assistiveText &&
            <div className="assistive-text-content">
              { assistiveText }
            </div>
          }
          {
            required &&
            <div className="required">
              <span className="asterisk">*</span>
              <span>Required</span>
            </div>
          }
        </div>
      </div>
    )
  }
}

Input.propTypes = inputProps;
Input.defaultProps = defaultInputProps;
