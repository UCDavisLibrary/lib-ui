import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Select.css';

import * as Atoms from '../../atoms';

const selectProps = {
  options: PropTypes.arrayOf( PropTypes.shape({
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    text: PropTypes.string
  }) ).isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};

const defaultSelectProps = {
  value: '',
  size: 'md',
  className: ''
}

export class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  handleChange = ( e ) => {
    const { onChange } = this.props;

    if( onChange ) {
      onChange( e );
    }

    this.setState({ value: e.target.value });
  }

  render() {
    const {
      type,
      size,
      name,
      label,
      value,
      assistiveText,
      className,
      options,
      required,
      disabled,
      ...props
    } = this.props;

    return (
      <div className={`Molecule-Select ${ size } ${ disabled ? 'disabled' : '' } ${ className }`}>
        <label htmlFor={ name }>
          <span className="label-text">{ label }</span>
          { required && <span className="asterisk">*</span> }
        </label>
        <Atoms.Select name={ name }
                value={ this.state.value }
                size={ size }
                options={ options }
                onChange={ this.handleChange }
                disabled={ disabled }
                required={ required } />
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

Select.propTypes = selectProps;
Select.defaultProps = defaultSelectProps;
