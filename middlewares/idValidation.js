const { isValidObjectId } = require('mongoose');

const isValidId = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    const error = new Error();
    error.status = 404;
    error.message = `${id} not valid id format`;
    next(error);
  }

  next();
};

module.exports = isValidId;
