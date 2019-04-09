import React from "react";
import styled from 'styled-components';

var Dash = styled.div`
display: flex;
margin: 0 auto;
max-width: 500px;
text-align:center;
flex-direction: column;
padding-top: 10%;
`

function Display(props) {
return (
<Dash>
    <div>Strikes: {props.strikes}</div>
    <div>Balls: {props.balls}</div>
</Dash>
);
}

export default Display;