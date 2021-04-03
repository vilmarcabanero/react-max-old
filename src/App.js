import React from 'react'
import './App.css'
import Person from './Person/Person'
//import Area from './Person/Math'
// import {Integral} from './Math/Math'  
import {Math} from './Math/Math'  

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>I love you.</h1>
        <p> This is really working.     </p>
        <Person name='Vil'/> 
        <Person/> 
        <Person/> 
        <Math value='\pi'/>
      </div> 
    )

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App
