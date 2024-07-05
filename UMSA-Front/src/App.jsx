import './App.css'
import React from 'react'
import {BrowserRourter} from 'react-router-dom'

import Router from './routes/Router'
 


function App() {
  

  return (
    <>
      <BrowserRourter>
          <Router/>
      </BrowserRourter>
    </>
  )
}

export default App
