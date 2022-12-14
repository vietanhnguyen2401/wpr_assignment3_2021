import React from "react";
import {AddIcon} from "../../components/icons/Add";
import {SaveIcon} from "../../components/icons/Save";
import {Aside} from "../../components/Aside";
import {Main} from "../../components/Main";
import {Button} from "../../components/Button";
import {customAxios} from "../../customAxios";
import {Answer} from "../../components/Answer";
import {useQuestion} from "../../hooks/question";
import {useNavigate} from "react-router-dom";

export const Add = () => {
    const navigate = useNavigate()
    const {
        newQuestion,
        handleAddQuestionText,
        handleChangeAnswerValue,
        handleSelectCorrectAnswer,
        handleDeleteAnswer, handleAddAnswer
    } = useQuestion({
        text: '',
        answers: [],
        correctAnswer: null,
    })

    const handleSubmitQuestion = async () => {
        try {
            await customAxios.post('/questions', {
                newQuestion
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
            <Main title={"New Question"}>
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

                    <div className="actions" onClick={handleSubmitQuestion}>
                        <Button text={'Save'} color={'blue'}>
                            <SaveIcon />
                        </Button>
                    </div>
                </div>
            </Main>
        </>
    )
}
