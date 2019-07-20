import React from 'react';
import ReactDOM from 'react-dom';
import ControlledInput from './components/ControlledInput'
import UncontrolledInput from './components/UncontrolledInput';

ReactDOM.render(
  <div>
    <ControlledInput />   
    <UncontrolledInput />
  </div>,
  document.getElementById('root')
);