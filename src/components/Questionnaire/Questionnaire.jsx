import React from 'react'
import { useState } from 'react'
import Progress from '../Progress/Progress'
import Subtitle from '../common/Subtitle/Subtitle'

const Questionnaire = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const { question, answers } = questions[currentQuestion]

    return (
        <>
            <Progress 
                currentQuestion={currentQuestion} 
                questions={questions} 
            />
            <Subtitle>{question}</Subtitle>
        </>
    )
}

export default Questionnaire