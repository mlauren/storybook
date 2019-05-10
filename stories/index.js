import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Button } from '@storybook/react/demo';
import BaseButton from '../src/components/BaseButton';

export const button = {
  children: 'Test Task',
  customClass: "",
  disabled: false
};

storiesOf('Button', module)
  .add('with text', () => <BaseButton button={{ ...button, customClass: "primary", children: "Primary Button"}}/>)
  .add('inverted button', () => <BaseButton button={{ ...button, customClass: "-inverted", children: "Secondary Button"}}/>)
  .add('disabled', () => <BaseButton button={{ ...button, disabled:true, customClass: "-inverted", children: "Disabled button"}}/>);