
import React from 'react';
import PropTypes from 'prop-types';


/** BaseButton component description imported from comments inside the component file */
export default function BaseButton({ id, button: {disabled, children, onClick, onLoad, style, customClass, dataModalTrigger} }) {
  return (
    <button type="button" key={id} disabled={disabled} data-modal-trigger={dataModalTrigger} onClick={onClick} onLoad={onLoad} style={style} className={"button " + customClass}>
      {children}
    </button>
  );
} 
