const { Orders } = require('../../models/orders');

const getOrder = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Orders.find(id);

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

module.exports = getOrder;
