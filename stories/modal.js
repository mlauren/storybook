import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Button } from '@storybook/react/demo';
import BaseButton from '../src/components/BaseButton'
import { button } from "./index";
import Modal from '../src/components/Modal.js'

// import 'modal-pattern/src/main';


export const defaultButtons = [
  {...button, id: '1', children: "Secondary button", customClass: "secondary -inverted"},
  {...button, id: '2', children: "Primary button", customClass: "primary"}
]

// const modalInit = function() {
//   console.log('hello!');
// }

storiesOf('Modal', module)
  .add('reg modal', () => (
    <Modal modalTitle="Hello, I am a modal Title" buttons={defaultButtons}></Modal>
  ));