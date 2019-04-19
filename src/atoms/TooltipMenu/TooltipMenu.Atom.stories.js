import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { TooltipMenu, Button } from 'atoms';

storiesOf('Atoms/TooltipMenu', module)
  .add(
    'README',
    (() => (
      <div>
        <h1>Tooltip Menus</h1>
        <hr />

        <h2>Do</h2>
        <ul>
          <li>Use this to hide secondary, tertiary, or otherwise less important/common functionality.</li>
        </ul>

        <h2>Don't</h2>
        <ul>
          <li>Use this when a Select input would be better.</li>
        </ul>
      </div>
    ))
  )
  .add(
    'Tooltip Menu Variants',
    withInfo(`
      ## About
      A component that reveals hidden clickable actions.

      ## Usage
      ~~~
			  import { Atoms } from '@ucd-lib/lib-ui';

        const menu = [
          [
            {
              label: 'Do a thing',
              onClick: () => { console.log( 'Clicked Item 1' ) }
            },
            {
              label: 'Another thing',
              onClick: () => { console.log( 'Clicked Item 2' ) }
            }
          ],
          [
            {
              label: 'Revoke access',
              variant: 'destructive',
              onClick: () => { console.log( 'Clicked Item 3' ) }
            }
          ]
        ];

        <Atoms.TooltipMenu menu={ menu }
                           placement="bottomRight">
          <Atoms.Button size="sm">Click me</Atoms.Button>
        </Atoms.TooltipMenu>
      ~~~
    `)(() => (
      <TooltipMenuStory />
    ))
  );

class TooltipMenuStory extends React.Component {

  constructor( props ) {
    super( props );
  }

  formatMenuItems = () => {
    return [
      [
        {
          label: 'Do a thing',
          onClick: () => { console.log( 'Clicked Item 1' ) }
        },
        {
          label: 'Another thing',
          onClick: () => { console.log( 'Clicked Item 2' ) }
        },
        {
          label: 'Whaaaaaaat',
          onClick: () => { console.log( 'Clicked Item 3' ) }
        },
      ],
      [
        {
          label: 'Revoke access',
          variant: 'destructive',
          onClick: () => { console.log( 'Clicked Item 4' ) }
        }
      ]
    ]
  }

  render() {
    return (
      <table cellPadding="16" style={{ backgroundColor: 'hsl(0, 0%, 97%)' }}>
        <thead style={{ backgroundColor: 'hsl(0, 0%, 90%)' }}>
          <tr>
            <th>Placement</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bottomRight <strong>(default)</strong></td>
            <td>
              <TooltipMenu menu={ this.formatMenuItems() }
                           placement="bottomRight">
                <Button size="sm">Click me</Button>
              </TooltipMenu>
            </td>
          </tr>
          <tr>
            <td>bottomLeft</td>
            <td>
              <TooltipMenu menu={ this.formatMenuItems() }
                           placement="bottomLeft">
                <Button size="sm">Click me</Button>
              </TooltipMenu>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
