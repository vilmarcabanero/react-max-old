import React from 'react'
import {MathComponent} from 'mathjax-react'

const area = () => {
  //const area = String.raw`\int_0^1 x^2\ dx` //
  //return <MathComponent text={String.raw`A = \pi r^2`} display={false}/>
  const example = String.raw`\text{A} = \pi r^2`;
  return <MathComponent tex={example} display={false} />
}

export const Integral = () => {
  //const area = String.raw`\int_0^1 x^2\ dx` //
  //return <MathComponent text={String.raw`A = \pi r^2`} display={false}/>
  const example = String.raw`\int_{-\infty}^{\infty}e^{-x^2}\ dx`;
  return <MathComponent tex={example} display={false} />
}

export let Math = (props) => {
  return <MathComponent tex={props.value} display={false} />
}

export default area;
