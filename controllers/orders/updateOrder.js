const { Orders } = require('../../models/orders');
const { utilsTotalSumm } = require('../../utils/utilsTotalSumm');

const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data: poultry, food, options } = req.body.order;

    req.body.order.total = utilsTotalSumm(poultry, food, options);

    // const result = await DataBase.findByIdAndUpdate(contactId, req.body, { new: true }).populate(
    //   'owner',
    //   'email'
    //   );

    const result = await Orders.findByIdAndUpdate(
      id,
      { ...req.body },
      {
        new: true,
      }
    );

    if (!result) {
      const error = new Error(`Order with ${id} not found`);
      error.status = 404;
      throw error;
    }

    res.status(201).json({
      status: 'success',
      message: 'Заказ успешно обновлен',
      code: 201,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateOrder;
