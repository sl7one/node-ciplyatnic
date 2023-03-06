const { User } = require('../models/users');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer') {
    const err = new Error();
    err.status = 401;
    err.message = 'Not authorized';
    next(err);
  }

  try {
    const { id: tokenID } = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(tokenID);

    if (!user || !user.token || user.token !== token) {
      const err = new Error();
      err.status = 401;
      err.message = `Not authorized`;
      next(err);
    }

    req.user = user;

    next();
  } catch (error) {
    if (error.message === 'Invalid signature' || error.message === 'jwt malformed') {
      error.status = 401;
      error.message = 'Invalid token';
    }
    next(error);
  }
};

module.exports = auth;
