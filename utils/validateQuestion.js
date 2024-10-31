const Joi = require('joi');

function validateQuestion(question) {
  const schema = Joi.object({
    questionText: Joi.string().max(255).required(),
    options: Joi.array().items(
      Joi.object({
        answerText: Joi.string().required(),
        isCorrect: Joi.boolean().required(),
      })
    ),
  });

  return schema.validate(question);
}

module.exports = validateQuestion;
