const Joi = require('joi');

const suppliers = (req, res, next) => {
  const suppliersSchema = Joi.object({
    suppliers: Joi.array().items(Joi.string()),
  });

  const { error } = suppliersSchema.validate(req.body);

  if (error) {
    error.status = 400;
    error.message = 'Invalid request suppliers';
    next(error);
  }
  next();
};

module.exports = suppliers;
