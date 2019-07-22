import React from 'react';
import { storiesOf } from '@storybook/react';
import { notes } from '@storybook/addon-notes';
import { button } from "./index";
import Modal from '../src/components/Modal.js'
import modalNotes from '../notes/modal.md';

export const defaultButtons = [
  {...button, id: '1', children: "Secondary button", customClass: "secondary -inverted"},
  {...button, id: '2', children: "Primary button", customClass: "primary"}
]

storiesOf('Modal', module)
  .add('reg modal', () => (
    <Modal modalTitle="Hello, I am a modal Title" buttons={defaultButtons}></Modal>
  ),
  {
    notes: {markdown: modalNotes},
  });