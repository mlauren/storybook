import { configure, addDecorator, addParameters, getStorybook } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import '../src/styles/main.scss';

addDecorator(withA11y); 
addParameters({
  showPanel: false,
  sidebarAnimations: true,
  a11y: {
    config: {},
    options: {
      // checks: { 'color-contrast': { options: { noScroll: true } } },
      // restoreScroll: true,
      // hierarchySeparator: /\/|\./,
      // hierarchyRootSeparator: /\|/,
    },
  },
  options: {
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
  },
});

const req = require.context('../stories', true, /\.js$/);
// TODO move stories into components folder
// const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);