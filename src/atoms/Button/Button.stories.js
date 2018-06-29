import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Button, ArrowButton } from 'atoms';

storiesOf('Atoms/Buttons', module)
  .add(
    'Simple Button',
    withInfo(`
      ## About
      A simple button that executes an action.

      All button text should be verbs.

      ## Usage
      ~~~
			  import { Atoms } from '@ucd-lib/lib-ui';

        <Atoms.Button>Submit</Atoms.Button>
      ~~~
    `)(() => (
      <Button onClick={action('button click')}>
        Submit
      </Button>
    ))
  )
  .add(
    'Arrow Button',
    withInfo(`
      ## About
      A simple button with an arrow icon that executes an action.

      All button text should be verbs.

      ## Usage
      ~~~
			  import { Atoms } from '@ucd-lib/lib-ui';

        <Atoms.ArrowButton>Submit</Atoms.ArrowButton>
      ~~~
    `)(() => (
      <ArrowButton onClick={action('arrow button click')}>
        Submit
      </ArrowButton>
    ))
  )
  ;
