import React, {useEffect} from "react";
import {customAxios} from "../../customAxios";

import {SaveIcon} from "../../components/icons/Save";
import {Aside} from "../../components/Aside";
import {Main} from "../../components/Main";
import {Button} from "../../components/Button";
import {AddIcon} from "../../components/icons/Add";
import {useNavigate, useParams} from "react-router-dom";
import {Answer} from "../../components/Answer";
import {useQuestion} from "../../hooks/question";

export const Edit = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const {
        newQuestion,
        setNewQuestion,
        handleAddQuestionText,
        handleChangeAnswerValue,
        handleSelectCorrectAnswer,
        handleDeleteAnswer, handleAddAnswer
    } = useQuestion({
        text: '',
        answers: [],
        correctAnswer: null,
    })

    useEffect(() => {
        getQuestionDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getQuestionDetails = async () => {
        try {
            const res = await customAxios.get(`questions/${id}`)
            setNewQuestion(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async () => {
        try {
            const {text, answers, correctAnswer} = newQuestion
            await customAxios.put(`questions/${id}`, {
                text,
                answers,
                correctAnswer,
            })
            navigate('/')
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Aside />
            <Main title={"Edit question"}>
                <div id="frm-create">
                    <div className="form-group">
                        <label htmlFor="text">Text</label>
                        <input type="text" name="text" value={newQuestion.text} onChange={handleAddQuestionText}/>
                    </div>

                    <div className="form-group">
                        <label>Answers: </label>
                        {newQuestion.answers.map((answer, index) => (
                            <Answer
                                onChangeAnswerValue={handleChangeAnswerValue}
                                onSelectCorrectAnswer={handleSelectCorrectAnswer}
                                onDeleteAnswer={handleDeleteAnswer}
                                correctAnswer={newQuestion.correctAnswer}
                                answer={answer}
                                index={index}
                                key={index}
                            />
                        ))}
                        <div className="text-right" onClick={handleAddAnswer}>
                            <Button color={'blue'} text={'Add'}>
                                <AddIcon />
                            </Button>
                        </div>
                    </div>

                    <div className="actions" onClick={handleSubmit}>
                        <Button text={'Save'} color={'blue'}>
                            <SaveIcon />
                        </Button>
                    </div>
                </div>
            </Main>
        </>
    )
}
