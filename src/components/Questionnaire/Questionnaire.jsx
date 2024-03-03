import React from 'react'
import { useState } from 'react'
import Progress from '../Progress/Progress'
import Subtitle from '../common/Subtitle/Subtitle'
import Answers from '../Answers/Answers'
import Navigation from '../Navigation/Navigation'
import Text from '../common/Text/Text'
import Results from '../Results/Results'

const Questionnaire = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState()
    const [showResults, setShowResults] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const { question, answers } = questions[currentQuestion]

    return (
        <>
            {!showResults ? (
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
                        setShowMessage={setShowMessage}
                    />
                    {showMessage ? (
                        <Text>Please select an answer for all questions.</Text>
                    ) : null
                    }
                </>
            ) : <Results
                userAnswers={userAnswers}
                setCurrentQuestion={setCurrentQuestion}
                setShowResults={setShowResults}
                setSelectedAnswer={setSelectedAnswer}
                setUserAnswers={setUserAnswers}
            />
            }
        </>
    )
}

export default Questionnaire