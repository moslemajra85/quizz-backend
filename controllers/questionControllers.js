const express = require('express');
const Question = require('../models/question');
const validateQuestion = require('../utils/validateQuestion');
const validateAnswers = require('../utils/validateAsnwers');

async function getAllQuestions(req, res) {
  try {
    const questions = await Question.find();
    res.status(200).send(questions);
  } catch (error) {
    res.status(500).send('Something went wrong', error);
  }
}

async function getQuestion(req, res) {
  try {
    const id = req.params.id;

    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).send(`Question with id = ${id} was not found`);
    }

    res.status(200).send(question);
  } catch (error) {
    console.log('Something went wrong');
  }
}

async function createQuestion(req, res) {
  try {
    const { error } = validateQuestion(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const question = new Question(req.body);
    const result = await question.save();
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
  }
}

async function updateQuestion(req, re) {}

async function deleteQuestion(req, res) {}

// Submit an answer
async function submitAnswer(req, res) {
  try {
    // answer format : [{questionId, answerText}, ...]

    const { error } = validateAnswers(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let score = 0;

    const { answers } = req.body;

    for (let answer of answers) {
      const { questionId, answerText } = answer;

      const question = await Question.findById(questionId);

      const correctAnswer = question.options.find(
        (option) => option.isCorrect === true
      );

      if (correctAnswer.answerText === answerText) {
        score += 1;
      }
    }

    res.json({
      yourScore: score,
    });

    //check if the question exist
    // const question = Question.findById(req.body.answers);

    // if (!question) {
    //   return res
    //     .status(404)
    //     .send(`Question with id = ${req.body.questionId} was not founds`);
    // }

    // res.send(question);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  submitAnswer,
};
