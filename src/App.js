import React from 'react'
import './App.css'
import Person from './Person/Person'
import {M, Mb} from './Math/Math'  

class App extends React.Component {
  state = {
    persons: [
      {name: 'Max', age: 28}, 
      {name: 'Manu', age: 26}, 
      {name: 'Stephanie', age: 27}
    ]

  }

  render() {
    return (
      <div className='App'>
        <h1>I love you.</h1>
        <p> This is really working.     </p>
        <button>Switch Name</button>
        <Person name='Vil' age='24'/> 
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/> 
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> 
        <p>What is the value of <M m='\gamma'/>? <Mb m='\int_{-\infty}^{\infty}e^{-x^2}\ dx'/> </p>
        
      </div> 
    )

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App
