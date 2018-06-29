# lib-ui

A React component library for UCD Library apps.

This library was built using [Storybook](https://github.com/storybooks/storybook) as a sandbox for component development. Storybook runs outside of your app and allows us to develop components in isolation.

We organize components into 3 categories:
* Atoms
* Molecules
* Organisms

See Brad Frost's [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) for more details.

## Development

Get the development instance running:
```
npm i -g @storybook/cli
cd path/to/lib-ui
npm start
```

### Using the library locally
If you want to import this node module into a local sandbox app for testing without having to publish to NPM, then do this in the lib-ui directory:
```
npm run build
npm link
```
This installs the current build to your local global node_modules directory. You can now install this local build into any project like so:
```
npm i --save absolute/file/system/path/to/your/global/node_modules/@ucd-lib/lib-ui
```
Now you can import the theme and components into your React app. See **Usage** section below for details.

## Usage
1. Link the fonts
```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Montserrat:700" rel="stylesheet">
```
2. Include the theme styles
```js
// In your React entry point (Example: index.js if you used create-react-app)
import '@ucd-lib/lib-ui/dist/theme.css';
```
**Note:** Don't forget to remove or override the default styles if you used create-react-app to bootstrap your app.
3. Using components
```js
// In a React component
import { Atoms } from '@ucd-lib/lib-ui';

export const MyReactApp = ({}) => (
  <Atoms.Button>Submit</Atoms.Button>
)
```
