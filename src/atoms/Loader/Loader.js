import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const loaderProps = {
  variant: PropTypes.oneOf(['default', 'white']),
  size: PropTypes.oneOf(['sm', 'md'])
};

const defaultLoaderProps = {
  variant: 'default',
  size: 'md'
};

export class Loader extends Component {

  render() {
    const { variant, size } = this.props;

    return (
      <div className={ `Loader ${ variant } ${ size }` }>
        <div />
        <div />
        <div />
      </div>
    )
  }
}

Loader.propTypes = loaderProps;
Loader.defaultProps = defaultLoaderProps;
