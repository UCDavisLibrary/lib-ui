import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Button } from './atoms';
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
      phoneNumber: '(530) 555-5555',
      selectValue: ''
    }
  }

  handleClick = () => {
    this.setState({
      phoneNumber: '(530) 555-5551'
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
        <Input type="tel" name="phoneNUmber" label="Phone number"
               value={ this.state.phoneNumber }
               onChange={( e ) => { this.setState({ phoneNumber: e.target.value }, () => { console.log(this.state) }) }} />
        <button onClick={ this.handleClick }>AKSJDNAS</button>

        <Select type="text"
                name="newPositionJob"
                label="Job Appointment (PPS)"
                options={ selectOptions }
                value={ this.state.selectValue }
                onChange={ this.handleSelect } />

        <Button variant="arrow" onClick={action('arrow button click')} disabled={ true }>
          Get started
        </Button>
      </div>
    )
  }
}
