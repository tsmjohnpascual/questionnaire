import React from 'react'
import Text from '../common/Text/Text'

const Progress = ({ currentQuestion, questions }) => {
    return (
        <Text className={'progress'}>Question {currentQuestion + 1} / {questions?.length}</Text>
    )
}

export default Progress