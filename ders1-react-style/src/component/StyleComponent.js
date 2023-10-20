//  1. ornek
// import React from 'react';
// import styled from 'styled-components';
// const StyleComponent = styled.p`
//   background: red;
//   width: 100px;
//   text-align: center;
//   padding: 10px;
//   border-radius: 10px;
//   &:hover{
//    background: green;
//   }  
// `;
// export default StyleComponent
// ..........................................
//  2. ornek props ile
import React from 'react';
import styled, { css } from 'styled-components';
const StyleComponent = styled.p`
  background: red;
  width: 100px;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  &:hover{
   background: green;
  }  
  ${props=>props.color === "blue" && css`
  color:blue
  `}
`;
export default StyleComponent