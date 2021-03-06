import React from 'react'
import './Person.css'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 40%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`
const Person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // }
  return (
    <StyledDiv>
      <p onClick={props.click}>I'm {props.name} and I am {props.age}  years old!   </p> 
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </StyledDiv> 
    
  ) 
}

// @media (min-width: 500px) {
//   .Person {
//     width: 450px;
//   }
// }





export default Person