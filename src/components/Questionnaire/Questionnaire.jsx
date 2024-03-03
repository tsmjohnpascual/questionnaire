import React from 'react'
import { useState } from 'react'
import Progress from '../Progress/Progress'

const Questionnaire = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)

    return (
        <>
            <Progress 
                currentQuestion={currentQuestion} 
                questions={questions} 
            />
        </>
    )
}

export default Questionnaire