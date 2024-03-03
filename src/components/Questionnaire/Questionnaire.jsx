import React from 'react'
import { useState } from 'react'
import Progress from '../Progress/Progress'
import Subtitle from '../common/Subtitle/Subtitle'
import Answers from '../Answers/Answers'

const Questionnaire = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState()
    const { question, answers } = questions[currentQuestion]

    return (
        <>
            <Progress 
                currentQuestion={currentQuestion} 
                questions={questions} 
            />
            <Subtitle>{question}</Subtitle>
            <Answers
                questions={questions}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                answers={answers} 
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
            />
        </>
    )
}

export default Questionnaire