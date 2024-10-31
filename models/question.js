const mongoose = require('mongoose');

const questionScheme = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: [
    {
      answerText: String,
      isCorrect: Boolean,
    },
  ],
});

const Question = mongoose.model('Question', questionScheme);

module.exports = Question;
