import React from 'react';

function MenuButton(props) {

  return (
    <button tabIndex='0' type="button" aria-label="Toggle Menu Button" className="MenuButton" onClick={props.activateToggle}>
      <div className="button"></div>
      <div className="button"></div>
      <div className="button"></div>
    </button>

  )
}

export default MenuButton
