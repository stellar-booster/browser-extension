import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Input} from './';

describe('UI', () => {
  it('Button renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Input renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
