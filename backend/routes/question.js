const express = require('express')
const router = express.Router()
const { getQuestions, getQuestionsDetails, deleteQuestion, updateQuestion, addQuestion } = require("../controllers/questions");

router.get("/questions", getQuestions)
router.get("/questions/:id", getQuestionsDetails)
router.put("/questions/:id", updateQuestion)
router.post("/questions/", addQuestion)
router.delete("/questions/:id", deleteQuestion)
module.exports = router

