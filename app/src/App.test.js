import React from 'react';
import ReactDOM from 'react-dom';
import {render} from "react-testing-library"
import App from './App';
import Display from './Comp/Display';
import Dashboard from './Comp/Dashboard';
import Title from './App';

describe('APP', () => {
  
  describe('render()', () => {
    
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    
    it('render?', () => {
      render(<App />);
    });

    it('rendered text', () => {
      const {getByText , queryByText} = render(<App />)
      
      //getByText(/hello world/i)
      expect(queryByText(/baseball game/i)).not.toBeNull();
    });

    it('display rendered', () => {
      render(<Display/>);
    });

    it('dashboard rendered', () => {
      render(<Dashboard/>);
    });

    it('title rendered', () => {
      render(<Title/>);
    });
    
  });
});