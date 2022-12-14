import React from "react";
import {Button} from "../Button";
import {DeleteIcon} from "../icons/Delete";

export const Answer = ({
  answer,
  index,
  onChangeAnswerValue,
  onSelectCorrectAnswer,
  onDeleteAnswer,
  correctAnswer,
}) => {
    const isCorrectAnswer = correctAnswer === index
    return (
        <div className="answer">
            <input
                type="text"
                name="answers"
                value={answer}
                onChange={(e) => onChangeAnswerValue(e, index)}
            />
            <div onClick={() => onSelectCorrectAnswer(index)}>
                <input
                    name="correctAnswer"
                    type="radio"
                    id={`answer${index}`}
                    defaultChecked={isCorrectAnswer}
                />
                <label htmlFor={`answer${index}`}>correct</label>
            </div>
            <div>

            </div>
            <Button text={'Remove'} color={'orange'} onClick={() => onDeleteAnswer(index)}>
                <DeleteIcon />
            </Button>
        </div>
    )
}
