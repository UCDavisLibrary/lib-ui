import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Button } from 'atoms';
import { Input } from 'molecules';
import { Dialog } from 'organisms';

storiesOf('Organisms/Dialog', module)
  .add(
    'README',
    (() => (
      <div>
        <h1>Dialogs</h1>
        <hr />

        <h2>Do</h2>
        <ul>
          <li>Use this sparingly. A dialog or modal takes users out of their current context and can make for a bad user experience.</li>
        </ul>

        <h2>Don't</h2>
        <ul>
          <li>Go crazy with these things.</li>
          <li>Nest dialogs.</li>
        </ul>
      </div>
    ))
  )
  .add(
    'Dialogs',
    withInfo(`
      ## About
      Otherwise known as a modal.

      ## Usage
      * See this story file for example implementation.
    `)
    (() => (
      <DialogStory />
    ))
  )
;

class DialogStory extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      value: ''
    };
  }

  showDialog = () => {
    this.setState({ show: true });
  }
  dismissDialog = () => {
    this.setState({ show: false });
  }
  submitDialog = () => {
    const value = this.input1sm.state.value;

    this.setState({
      show: false,
      value
    });
  }

  render() {
    return (
      <div>
        <Button onClick={ this.showDialog } size="sm" type="arrow">
          Show dialog
        </Button>

        <div style={{ margin: '1rem 0' }}>
          Value: { this.state.value }
        </div>

        <Dialog title="This is a dialog"
                submitText="Submit"
                cancelText="Cancel"
                show={ this.state.show }
                dismiss={ this.dismissDialog }
                submit={ this.submitDialog }>
          <Input ref={ c => { this.input1sm = c } }
                 type="text"
                 size="sm"
                 name="input1sm"
                 label="What is love?"
                 style={{ width: '100%' }} />
        </Dialog>
      </div>
    )
  }
}
