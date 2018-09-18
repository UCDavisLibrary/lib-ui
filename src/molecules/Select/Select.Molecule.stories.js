import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Select } from 'molecules';

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

storiesOf('Molecules/Select', module)
  .add(
    'README',
    (() => (
      <div>
        <h1>Selects</h1>
        <hr />

        <h2>Do</h2>
        <ul>
          <li>Use this instead of <code>Atoms.Select</code> unless you're really sure.</li>
        </ul>

        <h2>Don't</h2>
        <ul>
          <li>Use <code>Atoms.Select</code> instead of this unless you're really sure.</li>
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
            <th>Size: md (default)</th>
            <th>Size: sm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Select type="text" name="colorsMd" label="Colors" options={ options } required />
            </td>
            <td>
              <Select type="text" size="sm" name="colorsSm" label="Colors" options={ options } />
            </td>
          </tr>
        </tbody>
      </table>
    ))
  )
;
