import React from 'react'
import './Answers.css'

const Answers = ({ currentQuestion, answers, userAnswers, setUserAnswers, selectedAnswer, setSelectedAnswer }) => {
    const handleSelection = (answer, index) => {
        setSelectedAnswer(index)
        const selectedAnswers = [...userAnswers]
        selectedAnswers[currentQuestion] = answer
        setUserAnswers(selectedAnswers)
    }

    return (
        <>
            <ul>
                {answers?.map((answer, index) => (
                    <li 
                        key={answer?.id}
                        onClick={() => handleSelection(answer, index)}
                        className={selectedAnswer === index || userAnswers?.includes(answer) ? 'selected' : null}
                    >
                        {answer?.answer}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Answers