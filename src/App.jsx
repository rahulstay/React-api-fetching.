import React from 'react'
import Button from './components/Button'
import Joke from './components/Joke'
import './App.css'
import './index.css'
const App = () => {
  return (
    <div className="className">
      <h1>Joke for you!</h1>
      <Joke/>
    </div>
  )
}

export default App