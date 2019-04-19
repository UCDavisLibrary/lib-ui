import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TooltipMenu.css';

const tooltipMenuProps = {
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf([ 'bottomRight' ])
};

const tooltipMenuDefaultProps = {
  placement: 'bottomRight'
}

export class TooltipMenu extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      isOpen: false
    };
  }

  handleOutsideClick = ( e ) => {
    if(
      this.menu &&
      ( this.menu.contains( e.target ) || this.childrenContainer.contains( e.target ) )
    ) {
      return;
    }
    this.setState({ isOpen: false }, () => {
      document.removeEventListener( 'mouseup', this.handleOutsideClick, false );
    });
  }

  handleToggleClick = ( e ) => {
    e.preventDefault();

    if( !this.state.isOpen ) {
      this.setState({ isOpen: true }, () => {
        document.addEventListener( 'mouseup', this.handleOutsideClick, false );
      });
    } else {
      this.setState({ isOpen: false }, () => {
        document.removeEventListener( 'mouseup', this.handleOutsideClick, false );
      });
    }
  }

  renderMenu = () => {
    const { menu } = this.props;

    return (
      <div className="tooltip-menu-container"
           ref={ node => { this.menu = node } }>
        { menu.map( ( section, i ) => ( this.renderSection( section, i ) ) ) }
      </div>
    )
  }
  renderSection = ( section, i ) => {
    return (
      <div className="tooltip-menu-section" key={ `ttms-${ i }` }>
        { section.map( ( item, i ) => ( this.renderItem( item, i ) ) ) }
      </div>
    )
  }
  renderItem = ( item, i ) => {
    return (
      <button className={ `tooltip-menu-item ${ item.variant ? item.variant : '' }` }
              onClick={() => { this.handleItemClick( item.onClick ) }}
              key={ `ttmi-${ i }` }>
        <span>{ item.label }</span>
      </button>
    )
  }
  handleItemClick = ( onClick ) => {
    onClick();

    this.setState({ isOpen: false }, () => {
      document.removeEventListener( 'mouseup', this.handleOutsideClick, false );
    });
  }

  render() {
    const { children, placement } = this.props;

    return (
      <div className={ `TooltipMenu placement-${ placement }` }>
        <div className="children-container"
                onClick={ this.handleToggleClick }
                ref={ node => { this.childrenContainer = node }}>
          { children }
        </div>
        {
          this.state.isOpen &&
          this.renderMenu()
        }
      </div>
    )
  }
}

TooltipMenu.propTypes = tooltipMenuProps;
TooltipMenu.defaultProps = tooltipMenuDefaultProps;
