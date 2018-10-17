import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Input } from './molecules';

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
      workingTitle: 'hello'
    }
  }

  handleClick = () => {
    this.setState({
      workingTitle: 'world'
    }, () => { console.log( this.state ) })
  }

  render() {
    return (
      <div>
        <Input type="text" name="workingTitle" label="Working title" value={ this.state.workingTitle } />

        <button onClick={ this.handleClick }>AKSJDNAS</button>
      </div>
    )
  }
}
