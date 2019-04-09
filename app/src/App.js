import React, { Component } from 'react';
import './App.css';
import Dashboard from './Comp/Dashboard';
import Display from './Comp/Display';

class App extends Component {
state ={
  strike: 0,
  balls: 0
}

  render() {
    return (
      <><p>hello world</p>
      <Display/>
      <Dashboard/>
      </>

    );
  }


hit = () => {
  this.setState({ strikes: 0, balls: 0 });
};

foul = () => {
  this.setState(prevState => {
    if (prevState.strikes >= 2) {
      return prevState;
    }
    return {
      ...prevState,
      strikes: (prevState.strikes += 1)
    };
  });
};

strike = () => {
  this.setState(prevState => ({
    ...prevState,
    strikes: prevState.strikes + 1 === 3 ? 0 : (prevState.strikes += 1)
  }));
};

ball = () => {
  this.setState(prevState => ({
    ...prevState,
    balls: prevState.balls + 1 === 4 ? 0 : (prevState.balls += 1)
  }));
};
}

export default App;
