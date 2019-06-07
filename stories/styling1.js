import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Button } from '@storybook/react/demo';
import StylingX from '../src/components/typography/StylingX';

storiesOf('Styling1', module)
  .add('with book', () => <StylingX customClass="-book" stylingX="styling-1"> Styling1 </StylingX>)
  .add('with light', () => <StylingX customClass="-light" stylingX="styling-1"> Styling1 </StylingX>)
  .add('with medium', () => <StylingX customClass="-medium" stylingX="styling-1"> Styling1 </StylingX>);