import React from "react";
import styled from 'styled-components';

var Btns = styled.div`
display: flex;
margin: 1% auto;
flex-direction: column;
max-width: 100px;
border: solid black 2px;
padding: 10px;
`

function Dashboard(props) {
return (
<Btns>
    <button onClick={props.ball}>Ball</button>
    <button onClick={props.strike}>Strike</button>
    <button onClick={props.hit}>Hit</button>
    <button onClick={props.foul}>Foul</button>
</Btns>
);
}

export default Dashboard;