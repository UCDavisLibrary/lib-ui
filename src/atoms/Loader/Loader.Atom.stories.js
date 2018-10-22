import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Loader } from 'atoms';

storiesOf('Atoms/Loader', module)
  .add(
    'README',
    (() => (
      <div>
        <h1>Loader</h1>
        <hr />

        <h2>Do</h2>
        <ul>
          <li>WIP</li>
        </ul>

        <h2>Don't</h2>
        <ul>
          <li>WIP</li>
        </ul>
      </div>
    ))
  )
  .add(
    'Loader',
    withInfo(`
      ## About
      Animated loading element.

      ## Usage
      * WIP
    `)
    (() => (
      <table cellPadding="16">
        <thead style={{ backgroundColor: 'hsl(0, 0%, 90%)' }}>
          <tr>
            <th>Variant</th>
            <th>Size: md (default)</th>
            <th>Size: sm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              default
            </td>
            <td>
              <Loader />
            </td>
            <td>
              <Loader size="sm" />
            </td>
          </tr>
          <tr style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}>
            <td>
              white
            </td>
            <td>
              <Loader variant="white" />
            </td>
            <td>
              <Loader variant="white" size="sm" />
            </td>
          </tr>
        </tbody>
      </table>
    ))
  )
;
