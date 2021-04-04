import React, {useState} from 'react'
import './App.css'
import Person from './Person/Person'
import './Person/Person.css'
// import {M, Mb} from './Math/Math'  


const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28}, 
      {name: 'Manu', age: 26}, 
      {name: 'Stephanie', age: 27}
    ]
    // otherState: 'some other value'
  })

  const [otherState, setOtherState] = useState('some other value')


  console.log(personsState, otherState)

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // this.state.persons[1].name = 'Maximilian'; Don't do this.
    setPersonsState({
      persons: [
        {name: 'Max', age: 28}, 
        {name: newName, age: 26}, 
        {name: 'Stephanie', age: 22}
      ]
      // otherState: personsState.otherState
    })
  }

    const nameChangedHandler = (event) => {
      // console.log('Was clicked!')
      // this.state.persons[1].name = 'Maximilian'; Don't do this.
      setPersonsState({
        persons: [
          {name: 'Max', age: 28}, 
          {name: event.target.value, age: 26}, 
          {name: 'Stephanie', age: 22}
        ]
        // otherState: personsState.otherState
      })

  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
      <div className='App'>
        <h1>I love you.</h1>
        <p> This is really working.     </p>
        <button 
        style={style}
        onClick={() => switchNameHandler('Maximillian!!')}>Switch Name</button>
        <Person 
          name='Vil' 
          age='24'/> 
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(this, 'Max!')}
          changed={nameChangedHandler}/> 
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}/> 
      </div> 
  )
}
  
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
export default App

// class App extends React.Component {
//   state = {
//     persons: [
//       {name: 'Max', age: 28}, 
//       {name: 'Manu', age: 26}, 
//       {name: 'Stephanie', age: 27}
//     ]
//   }



//   render() {
//   }
// }