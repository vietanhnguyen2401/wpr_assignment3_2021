import {useState} from "react";

export const useQuestion = ({text, answers, correctAnswer}) => {
    const [newQuestion, setNewQuestion] = useState({
        text,
        answers,
        correctAnswer,
    })
    const handleAddQuestionText = (e) => {
        setNewQuestion({
            ...newQuestion,
            text: e.target.value
        })
    }

    const handleAddAnswer = () => {
        const newAnswers = newQuestion.answers.slice()
        newAnswers.push('')

        setNewQuestion({
            ...newQuestion,
            answers: newAnswers
        })
    }

    const handleDeleteAnswer = (index) => {
        const newAnswers = newQuestion.answers.slice()
        newAnswers.splice(index, 1)
        setNewQuestion({
            ...newQuestion,
            answers: newAnswers
        })
    }

    const handleChangeAnswerValue = (e, index) => {
        const newAnswers = newQuestion.answers.slice()
        newAnswers[index] = e.target.value
        setNewQuestion({
            ...newQuestion,
            answers: newAnswers
        })
    }

    const handleSelectCorrectAnswer = (index) => {
        setNewQuestion({
            ...newQuestion,
            correctAnswer: index
        })
    }
    return {
        newQuestion,
        setNewQuestion,
        handleSelectCorrectAnswer,
        handleChangeAnswerValue,
        handleDeleteAnswer,
        handleAddAnswer,
        handleAddQuestionText,
    }
}
