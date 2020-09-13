import React from 'react'

import './App.css'
import Header from './components/Header'
import Home from './components/home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
    </div>
  )
}

export default App
