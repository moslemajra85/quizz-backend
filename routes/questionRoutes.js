const express = require('express');
const {
  getAllQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  submitAnswer,
} = require('../controllers/questionControllers');
const router = express.Router();

router.get('/', getAllQuestions);
router.get('/:id', getQuestion);
router.post('/', createQuestion);
router.put('/:id', updateQuestion);
router.delete('/:id', deleteQuestion);
router.post('/submit-answer', submitAnswer);

module.exports = router;
