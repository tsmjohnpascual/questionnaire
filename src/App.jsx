import React from 'react'
import './App.css'
import { questions } from './assets/questions'
import Title from './components/Title/Title'
import Questionnaire from './components/Questionnaire/Questionnaire'

const App = () => {
  return (
    <div className='app'>
        <div className='container'>
            <Title />
            <hr />
            <Questionnaire questions={questions}/>
        </div>
    </div>
  )
}

export default App
