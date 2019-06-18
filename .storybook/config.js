import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/styles/main.scss';

addDecorator(withInfo); 

const req = require.context('../stories', true, /\.js$/);
// TODO move stories into components folder
// const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);