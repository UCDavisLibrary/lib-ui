import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Input } from 'molecules';

storiesOf('Molecules/Input', module)
  .add(
    'README',
    (() => (
      <div>
        <h1>Fields</h1>
        <hr />

        <h2>Do</h2>
        <ul>
          <li>Use this instead of <code>Atoms.Input</code> unless you're really sure.</li>
        </ul>

        <h2>Don't</h2>
        <ul>
          <li>Use <code>Atoms.Input</code> instead of this unless you're really sure.</li>
        </ul>
      </div>
    ))
  )
  .add(
    'Text Inputs',
    withInfo(`
      ## About
      Simple input fields.

      ## Usage
      * Don't forget to assign refs to the input's parent component.
      * Each input's **placeholder** prop can be overridden.
    `)
    (() => (
      <table cellPadding="16" style={{ backgroundColor: 'hsl(0, 0%, 97%)' }}>
        <thead style={{ backgroundColor: 'hsl(0, 0%, 90%)' }}>
          <tr>
            <th>Type</th>
            <th>Size: md (default)</th>
            <th>Size: sm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>text <strong>(default)</strong></td>
            <td>
              <Input type="text" name="input1" label="What is love?" />
            </td>
            <td>
              <Input type="text" size="sm" name="input1sm" label="What is love?" />
            </td>
          </tr>
          <tr>
            <td>email</td>
            <td>
              <Input type="email" name="input2" label="E-mail address" />
            </td>
            <td>
              <Input type="email" size="sm" name="input2sm" label="E-mail address" />
            </td>
          </tr>
          <tr>
            <td>password</td>
            <td>
              <Input type="password" name="input3" label="Password" />
            </td>
            <td>
              <Input type="password" size="sm" name="input3sm" label="Password" />
            </td>
          </tr>
        </tbody>
      </table>
    ))
  )
;
