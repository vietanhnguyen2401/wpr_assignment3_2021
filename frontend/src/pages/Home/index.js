import React, {useEffect, useMemo, useState} from "react";
import {customAxios} from "../../customAxios";

import {Aside} from "../../components/Aside";
import {Main} from "../../components/Main";
import {SearchBox} from "../../components/SearchBox";
import {QuestionsList} from "../../components/QuestionsList";

export const Home = () => {
    const [searchText, setSearchText] = useState('')
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetchQuestions()
    }, [])

    const filteredQuestions = useMemo(() => {
        if (!searchText) return questions
        return questions.filter((question) => question.text.toLowerCase().includes(searchText.toLowerCase()))
    },[questions, searchText])

    const fetchQuestions = async () => {
        try {
            const res = await customAxios.get('/questions')
            setQuestions(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleChangeSearchText = (text) => {
        setSearchText(text)
    }

    const handleDeleteQuestion = async (id) => {
        try {
            await customAxios.delete(`/questions/${id}`)
            await fetchQuestions()
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Aside />
            <Main title={"All questions"}>
                <SearchBox onChangeSearchText={handleChangeSearchText} />
                <QuestionsList questions={filteredQuestions} onDeleteQuestion={handleDeleteQuestion}/>
            </Main>
        </>
    )
}
