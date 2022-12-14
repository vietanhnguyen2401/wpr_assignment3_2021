const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    text: String,
    _id: mongoose.Schema.Types.ObjectId,
    answers: [],
    correctAnswer: Number,
})

module.exports = mongoose.model("Question", QuestionSchema)
