import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Button, ArrowButton } from 'atoms';

storiesOf('Atoms/Buttons', module)
  .add(
    'README',
    (() => (
      <div>
        <h1>Buttons</h1>
        <hr />

        <h2>Do</h2>
        <ul>
          <li>Use a simple verb or action phrase as the button text.</li>
          <li>Use "Sentence case" instead of "Title Case" for the button text.</li>
          <li>Try to use one (or two) buttons at most per user context. Too many calls to action can be confusing to users.</li>
          <li>Pair ghost buttons with primary buttons. Use the primary button to either emphasize <strong>our</strong> desired action or for confirmation. Use a ghost button to cancel.</li>
        </ul>

        <h2>Don't</h2>
        <ul>
          <li>Use a non-verb word/phrase, or be overly verbose in your button text.</li>
          <li>USE ALL CAPS!!!</li>
          <li>Go crazy with icons.</li>
          <li>Use a button where a link would be better.</li>
          <li>Use too many buttons per page. If you need more than one or two buttons, then there are probably better interface elements in your toolkit for the problem!</li>
        </ul>
      </div>
    ))
  )
  .add(
    'Button Variants',
    withInfo(`
      ## About
      A simple button that executes an action.

      ## Usage
      ~~~
			  import { Atoms } from '@ucd-lib/lib-ui';

        <Atoms.Button>Submit</Atoms.Button>
      ~~~
    `)(() => (
      <table cellPadding="16" style={{ backgroundColor: 'hsl(0, 0%, 97%)' }}>
        <thead style={{ backgroundColor: 'hsl(0, 0%, 90%)' }}>
          <tr>
            <th>Type</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary <strong>(default)</strong></td>
            <td>
              <Button onClick={action('primary button click')}>
                Confirm
              </Button>
            </td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>
              <Button type="secondary" onClick={action('secondary button click')}>
                Submit
              </Button>
            </td>
          </tr>
          <tr>
            <td>Ghost</td>
            <td>
              <Button type="ghost" onClick={action('ghost button click')}>
                Cancel
              </Button>
            </td>
          </tr>
          <tr>
            <td>Arrow</td>
            <td>
              <Button type="arrow" onClick={action('arrow button click')}>
                Get started
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    ))
  )
  ;
