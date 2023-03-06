const Joi = require('joi');

const poultry = (req, res, next) => {
  const poultrySchema = Joi.object({
    poultry: Joi.array().items(Joi.string()),
  });

  const { error } = poultrySchema.validate(req.body);

  if (error) {
    error.status = 400;
    error.message = 'Invalid request poultry';
    next(error);
  }
  next();
};

module.exports = poultry;
