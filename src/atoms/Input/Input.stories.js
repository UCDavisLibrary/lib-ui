import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Input } from 'atoms';

storiesOf('Atoms/Input', module)
  .add(
    'README',
    (() => (
      <div>
        <h1>Inputs</h1>
        <hr />

        <h2>Do</h2>
        <ul>
          <li>Use these to build <code>Molecules.Input</code> components!</li>
        </ul>

        <h2>Don't</h2>
        <ul>
          <li>You probably don't need these raw <code>Atom.Input</code> components in your final product. These are simply the building blocks used in the <code>Molecules.Input</code> components which include labels and other such standards.</li>
        </ul>
      </div>
    ))
  )
  .add(
    'Text Input',
    withInfo(`
      ## About
      Simple inputs fields.

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
              <Input type="text" />
            </td>
            <td>
              <Input type="text" size="sm" />
            </td>
          </tr>
          <tr>
            <td>email</td>
            <td>
              <Input type="email" />
            </td>
            <td>
              <Input type="email" size="sm" />
            </td>
          </tr>
          <tr>
            <td>password</td>
            <td>
              <Input type="password" />
            </td>
            <td>
              <Input type="password" size="sm" />
            </td>
          </tr>
        </tbody>
      </table>
    ))
  )
;
