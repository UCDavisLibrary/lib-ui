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
    'Text Inputs',
    withInfo(`
      ## About
      Simple inputs fields.

      ## Usage
      * Each input's **placeholder** prop can be overridden.
    `)
    (() => (
      <table cellPadding="16">
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
              <Input type="text" name="input1" />
            </td>
            <td>
              <Input type="text" size="sm" name="input1sm" />
            </td>
          </tr>
          <tr>
            <td>email</td>
            <td>
              <Input type="email" name="input2" />
            </td>
            <td>
              <Input type="email" size="sm" name="input2sm" />
            </td>
          </tr>
          <tr>
            <td>tel</td>
            <td>
              <Input type="tel" name="inputTel" />
            </td>
            <td>
              <Input type="tel" size="sm" name="inputTelSm" />
            </td>
          </tr>
          <tr>
            <td>password</td>
            <td>
              <Input type="password" name="input3" />
            </td>
            <td>
              <Input type="password" size="sm" name="input3sm" />
            </td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <Input type="text" name="input4" value={ 'hello world' } disabled />
            </td>
            <td>
              <Input type="text" size="sm" name="input4sm" value={ 'hello world' } disabled />
            </td>
          </tr>
          <tr>
            <td>textarea</td>
            <td>
              <Input type="textarea" name="input5" value={ 'hello world' } disabled />
            </td>
            <td>
              <Input type="textarea" size="sm" name="input5sm" value={ 'hello world' } disabled />
            </td>
          </tr>
        </tbody>
      </table>
    ))
  )
;
