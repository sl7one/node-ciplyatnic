const Joi = require('joi');

const addPurchase = (req, res, next) => {
  const addPurchaseSchema = Joi.object({
    date: Joi.string().required(),
    order: Joi.object({
      saller: Joi.object({
        name: Joi.string().required(),
      }).required(),
      data: Joi.array()
        .items(
          Joi.object({
            id: Joi.string().required(),
            type: Joi.string().required(),
            count: Joi.number().integer().min(1).required(),
            price: Joi.number().positive().min(1).required(),
          })
        )
        .min(1)
        .required(),
    }).required(),
  });

  const { error } = addPurchaseSchema.validate(req.body);

  if (error) {
    console.log(error);
    error.status = 400;
    error.message = 'Invalid request data';
    next(error);
  }
  next();
};

module.exports = addPurchase;
