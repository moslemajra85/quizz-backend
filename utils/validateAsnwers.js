const Joi = require('joi');

// the answer will have this format: [{questionId, answerText},...]
function validateAnswers(answers) {
  const schema = Joi.object({
    answers: Joi.array().items(
      Joi.object({
        questionId: Joi.string(),
        answerText: Joi.string().required(),
      })
    ),
  });

  return schema.validate(answers);
}

module.exports = validateAnswers;
