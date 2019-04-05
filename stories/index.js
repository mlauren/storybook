import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Button } from '@storybook/react/demo';
import { Button } from '../src/components/Button'

storiesOf('Button', module)
  .add('with text', () => <Button class="button">Primary Button</Button>)
  .add('with some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));