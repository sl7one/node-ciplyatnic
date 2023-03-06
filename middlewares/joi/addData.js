const Joi = require('joi');

const addData = (req, res, next) => {
  const addDataSchema = Joi.object({
    date: Joi.string().required(),
    order: Joi.object({
      buyer: Joi.object({
        name: Joi.string().required(),
        phone: Joi.string()
          .regex(/^\+?\d{10,}$/)
          .required(),
        location: Joi.string().required(),
      }).required(),
      data: Joi.array().items(
        Joi.object({
          id: Joi.string().required(),
          type: Joi.string().required(),
          count: Joi.number().integer().min(1).required(),
          price: Joi.number().positive().min(1).required(),
        })
      ),
      food: Joi.array().items(
        Joi.object({
          id: Joi.string().required(),
          type: Joi.string().required(),
          count: Joi.number().integer().min(1).required(),
          price: Joi.number().positive().min(1).required(),
        })
      ),
      options: Joi.array().items(
        Joi.object({
          id: Joi.string().required(),
          type: Joi.string().required(),
          count: Joi.number().integer().min(1).required(),
          price: Joi.number().positive().min(1).required(),
        })
      ),
    }).required(),
  });

  const { error } = addDataSchema.validate(req.body);

  if (error) {
    error.status = 400;
    next(error);
  }
  next();
};

module.exports = addData;
