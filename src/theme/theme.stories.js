import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

storiesOf('Theme', module)
  .add(
    'Typography',
    () => (
      <div>
        <strong>Headers - Cereal</strong>

        <h1>H1 - Lorem ipsum dolor</h1>
        <h2>H2 - Lorem ipsum dolor</h2>
        <h3>H3 - Lorem ipsum dolor</h3>
        <h4>H4 - Lorem ipsum dolor</h4>
        <h5>H5 - Lorem ipsum dolor</h5>
        <h6>H6 - Lorem ipsum dolor</h6>

        <hr />

        <p>
          <strong>Body Text - Cereal</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam nisl nisi, nec aliquet leo semper non. Vivamus dignissim semper faucibus. Sed quis nibh molestie, scelerisque ante dignissim, feugiat quam. Maecenas vitae tincidunt dui. Quisque varius sem id lobortis varius. Nullam interdum sodales tristique. Praesent non orci vitae neque semper volutpat. Maecenas vitae viverra ex, sit amet luctus erat.
        </p>
      </div>
    )
  )
