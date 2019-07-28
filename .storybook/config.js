import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'

const req = require.context('../src/', true, /\.stories\.js$/)
addDecorator(withInfo)

function loadStories() {
  // require('../src/stories');
  req.keys().forEach( filename => req(filename))
}

configure(loadStories, module);
