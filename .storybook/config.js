import { configure } from '@storybook/react';
import '../src/styles/main.scss';


const req = require.context('../stories', true, /\.js$/);
// TODO move stories into components folder
// const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);