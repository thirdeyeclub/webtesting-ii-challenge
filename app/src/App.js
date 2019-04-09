import React, { Component } from 'react';
import './App.css';
import Dashboard from './Comp/Dashboard';
import Display from './Comp/Display';
import styled from 'styled-components';

var Title = styled.p`
display: flex;
flex-direction: row;
margin: 0 auto;
justify-content:center;`

class App extends Component {
state ={
  strike: 0,
  balls: 0
}

  render() {
    return (
      <><Title>Baseball Game</Title>
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
