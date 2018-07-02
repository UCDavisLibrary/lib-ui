import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

import * as Atoms from '../../atoms';

const inputProps = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password']),
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
}

export class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  handleChange = ({ target }) => this.setState({ value: target.value })

  render() {
    const { type, size, name, label, value, assistiveText, className, required, ...props } = this.props;

    return (
      <div className={`Molecule-Input ${ size } ${ className }`}>
        <label htmlFor={ name }>
          <span className="label-text">{ label }</span>
          { required && <span className="asterisk">*</span> }
        </label>
        <Atoms.Input type={ type }
                     size={ size }
                     name={ name }
                     value={ value }
                     onChange={ this.handleChange }
                     required={ required }
                     { ...props } />
        <div className="assistive-text">
          {
            required &&
            <div className="required">
              <span className="asterisk">*</span>
              <span>Required</span>
            </div>
          }
          { assistiveText }
        </div>
      </div>
    )
  }
}

Input.propTypes = inputProps;
Input.defaultProps = defaultInputProps;
