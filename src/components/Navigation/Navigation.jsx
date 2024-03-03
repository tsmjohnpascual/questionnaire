import React from 'react'
import './Navigation.css'
import Button from '../common/Button/Button'

const Navigation = ({ questions, currentQuestion, setCurrentQuestion, setShowResults, setSelectedAnswer, userAnswers, setShowMessage }) => {
    const handlePrev = () => {
        setSelectedAnswer(null)
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    const handleNext = () => {
        setSelectedAnswer(null)
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    const handleResult = () => {
        if (userAnswers?.length === questions?.length) {
            setShowMessage(false)
            setShowResults(true)
        } else {
            setShowMessage(true)
        }
    }

    return (
        <>
            <div className='button-container'>
                {(currentQuestion !== 0) ? (
                    <Button onClick={handlePrev}>Prev</Button>
                ) : null}
                {(currentQuestion !== questions?.length - 1) ? (
                    <Button onClick={handleNext}>Next</Button>
                ) : <Button onClick={handleResult}>Finish</Button>}
            </div>
        </>
    )
}

export default Navigation