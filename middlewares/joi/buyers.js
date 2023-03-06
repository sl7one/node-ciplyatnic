const Joi = require('joi');

const buyers = (req, res, next) => {
  const buyersSchema = Joi.object({
    buyers: Joi.array().items(Joi.string()),
  });

  const { error } = buyersSchema.validate(req.body);

  if (error) {
    error.status = 400;
    error.message = 'Invalid request buyers';
    next(error);
  }
  next();
};

module.exports = buyers;
