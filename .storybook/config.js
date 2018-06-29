import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);

// Configure withInfo addon
setDefaults({ inline: false, source: false });
setAddon(infoAddon);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
