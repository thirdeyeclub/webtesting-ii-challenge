import React from 'react';
import ReactDOM from 'react-dom';
import {render , fireEvent} from "react-testing-library"
import App from './App';

describe('APP', () => {
  
  describe('render()', () => {
    
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders', () => {
      render(<App />);
    });
    
  });
});