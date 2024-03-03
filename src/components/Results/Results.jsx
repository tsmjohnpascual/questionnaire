import React from 'react'
import './Results.css'
import Subtitle from '../common/Subtitle/Subtitle'
import Button from '../common/Button/Button'
import Text  from '../common/Text/Text'
import check from '../../assets/check.svg'
import cross from '../../assets/cross.svg'

const Results = ({ userAnswers, setCurrentQuestion, setShowResults, setSelectedAnswer, setUserAnswers }) => {
    const correctAnswers = userAnswers?.filter((answer) => answer?.isCorrect)

    const handleRestart = () => {
        setCurrentQuestion(0)
        setSelectedAnswer(null)
        setUserAnswers([])
        setShowResults(false)
    }

    return (
        <>
            <Subtitle>Results - {correctAnswers?.length}/{userAnswers?.length} correct</Subtitle>
            <h3>Correct Questions</h3>
            {userAnswers?.map((answer) => (
                answer?.isCorrect ?
                    <Text key={answer?.id}>Question {userAnswers?.indexOf(answer) + 1} <img src={check} alt='check svg'/></Text>
                    : null
            ))}
            <h3>Incorrect Questions</h3>
            {userAnswers?.map((answer) => (
                !answer?.isCorrect ?
                    <Text key={answer?.id}>Question {userAnswers?.indexOf(answer) + 1} <img src={cross} alt='cross svg'/></Text>
                    : null
            ))}
            <div className='button-container'>
                <Button onClick={handleRestart}>Restart</Button>
            </div>
        </>
    )
}

export default Results