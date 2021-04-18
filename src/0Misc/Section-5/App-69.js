//Using Radium for Media Queries


//Person.js
import React from 'react'
import './Person.css'
import Radium from 'radium'

const Person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }
  return (
    <div className='Person' style={style}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age}  years old!   </p> 
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>  
    
  ) 
}

// @media (min-width: 500px) {
//   .Person {
//     width: 450px;
//   }
// }


export default Radium(Person)


//App.js
import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium'





class App extends Component {
  state = {
    persons: [
      {id: 'adgdg', name: 'Max', age: 28 },
      {id: 'agadg', name: 'Manu', age: 29 },
      {id: 'qqwre', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    
    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person
    
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    //Use this para gumawa ng own copy ng array. Kasi yung sa L57 approach is gumamit ng pointer sa old array, meaning kung baguhin mo tong copy natin, mababago din yung lumang array kasi nga minanipulate niya ang old array. 
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render () {
	const style = {
    backgroundColor: 'green',
    color: 'white',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  }
  
  let persons = null;

  if(this.state.showPersons) {
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
        })}
        
      </div>      
    )

    style.backgroundColor = 'red'
    style[':hover'] = {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  }

  let classes = []
  if(this.state.persons.length <= 2) {
    classes.push('red')
  }
  if(this.state.persons.length <= 1) {
    classes.push('bold')
  } 

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
        {persons}  
      </div>
      </StyleRoot>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App)

