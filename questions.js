const Question = require("../models/question")

exports.getQuestions = async (req, res) => {
    try {
        const questions = await Question.find({});
        return res.status(200).json(questions);
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}

exports.getQuestionsDetails = async (req, res) => {
    try {
        const { id } = req.params
        const question = await Question.findById(id);

        if (!question) return res.status(404);

        return res.status(200).json(question);
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}

exports.deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params
        await Question.findOneAndDelete({ _id: id})
        return res.status(200).json({message: "success"})
    }
    catch (err) {
        return res.status(500).json({error: err.message})
    }
}

exports.updateQuestion = async (req, res) => {
    try {
        const { id } = req.params
        const { answers, text, correctAnswer } = req.body

        if (!answers) return res.status(400)
        const question = await Question.findByIdAndUpdate(id, {
            answers,
            text,
            correctAnswer
        });

        if (!question) return res.status(404)
        return res.status(200).json(question);

    } catch (error) {
        return res.status(500).json({"error" : error});
    }
}

exports.addQuestion = async (req, res) => {
    try {
        const { newQuestion } = req.body
        await Question.insertMany([newQuestion])
        return res.status(201).json(newQuestion);
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}
