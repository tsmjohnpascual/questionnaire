import React from 'react'
import { useState } from 'react'
import Progress from '../Progress/Progress'
import Subtitle from '../common/Subtitle/Subtitle'
import Answers from '../Answers/Answers'
import Navigation from '../Navigation/Navigation'

const Questionnaire = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState()
    const [showResults, setShowResults] = useState(false)
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
            <Navigation
                questions={questions}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                showResults={showResults}
                setShowResults={setShowResults}
                setSelectedAnswer={setSelectedAnswer}
                userAnswers={userAnswers}
            />
        </>
    )
}

export default Questionnaire