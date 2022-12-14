import React from "react";
import styled from "styled-components/macro";
import {Item} from "./Item";

export const QuestionsList = ({questions, onDeleteQuestion}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th width="210">Actions</th>
                </tr>
            </thead>
            <tbody>
                {questions.map((question, index) => {
                    const answer = question.answers[question.correctAnswer]
                    return (
                        <Item
                            key={question._id}
                            title={question.text}
                            answer={answer}
                            index={index + 1}
                            id={question._id}
                            onDeleteQuestion={onDeleteQuestion}
                        />
                    )}
                )}
            </tbody>
        </Table>
    )
}

const Table = styled.table`
  width: 100%;
  margin: 15px 0;
  border-collapse: collapse;
  border: 1px solid #ddd;

  tr, th, td {
    border: 1px solid #ddd;
  }

  th, td {
    padding: 15px;
  }
`
