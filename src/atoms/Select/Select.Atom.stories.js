import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Select } from 'atoms';

const options = [
  {
    value: '',
    text: 'Select option'
  },
  {
    value: '#ff0000',
    text: 'Red'
  },
  {
    value: '#00ff00',
    text: 'Green'
  },
  {
    value: '#0000ff',
    text: 'Blue'
  }
];

storiesOf('Atoms/Select', module)
  .add(
    'README',
    (() => (
      <div>
        <h1>Selects</h1>
        <hr />

        <h2>Do</h2>
        <ul>
          <li>Use these to build <code>Molecules.Select</code> components!</li>
        </ul>

        <h2>Don't</h2>
        <ul>
          <li>You probably don't need these raw <code>Atom.Select</code> components in your final product. These are simply the building blocks used in the <code>Molecules.Select</code> components which include labels and other such standards.</li>
        </ul>
      </div>
    ))
  )
  .add(
    'Selects',
    withInfo(`
      ## About
      Simple select fields.

      ## Usage
      * WIP
    `)
    (() => (
      <table cellPadding="16">
        <thead style={{ backgroundColor: 'hsl(0, 0%, 90%)' }}>
          <tr>
            <th>Example</th>
            <th>Size: md (default)</th>
            <th>Size: sm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Basic select
            </td>
            <td>
              <Select name="colors"
                      value=""
                      options={ options } />
            </td>
            <td>
              <Select name="colors"
                      value=""
                      size="sm"
                      options={ options } />
            </td>
          </tr>
          <tr>
            <td>
              Disabled
            </td>
            <td>
              <Select name="colors"
                      value=""
                      options={ options }
                      disabled />
            </td>
            <td>
              <Select name="colors"
                      value=""
                      size="sm"
                      options={ options }
                      disabled />
            </td>
          </tr>
        </tbody>
      </table>
    ))
  )
;
