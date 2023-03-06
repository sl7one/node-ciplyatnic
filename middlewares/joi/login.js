const Joi = require('joi');

const login = (req, res, next) => {
  const loginSchema = Joi.object({
    login: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = loginSchema.validate(req.body);

  if (error) {
    error.status = 400;
    error.message = 'Unauthorize';
    next(error);
  }
  next();
};

module.exports = login;
