const { Orders } = require('../../models/orders');

const getAllSAlles = async (req, res, next) => {
  try {
    const result = await Orders.find({ active: false }).sort({ date: -1 });

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

module.exports = getAllSAlles;
