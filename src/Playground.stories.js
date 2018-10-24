import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Input, Select } from './molecules';

storiesOf('Playground', module)
  .add(
    'Playground',
    (() => (
      <Playground />
    ))
  )
;

class Playground extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      workingTitle: 'hello',
      selectValue: ''
    }
  }

  handleClick = () => {
    this.setState({
      workingTitle: 'world'
    }, () => { console.log( this.state ) })
  }

  handleSelect = ( e ) => {
    this.setState({
      selectValue: e.target.value
    }, () => { console.log( this.state ) });
  }

  render() {
    const selectOptions = [
      {
        value: '',
        text: '-- Select option --'
      },
      {
        value: 'bwuh',
        text: 'bwuh??'
      }
    ]
    return (
      <div>
        <Input type="text" name="workingTitle" label="Working title" value={ this.state.workingTitle } onChange={( e ) => { this.setState({ workingTitle: e.target.value }) }} />
        <button onClick={ this.handleClick }>AKSJDNAS</button>

        <Select type="text"
                name="newPositionJob"
                label="Job Appointment (PPS)"
                options={ selectOptions }
                value={ this.state.selectValue }
                onChange={ this.handleSelect } />
      </div>
    )
  }
}
