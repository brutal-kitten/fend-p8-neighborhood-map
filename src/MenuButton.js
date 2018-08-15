import React from 'react';

function MenuButton(props) {

  return (
    <button className="MenuButton" onClick={props.activateToggle}>
      <div className="button"></div>
      <div className="button"></div>
      <div className="button"></div>
    </button>

  )
}

export default MenuButton
