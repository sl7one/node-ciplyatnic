const { Orders } = require('../../models/orders');

const getAll = async (req, res, next) => {
  try {
    const result = await Orders.find({ active: true }).sort({ date: -1 });

    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
