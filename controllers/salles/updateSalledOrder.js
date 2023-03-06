const { Orders } = require('../../models/orders');

const updateSalledOrder = async (req, res, next) => {
  try {
    const { id } = req.params;

    // const result = await DataBase.findByIdAndUpdate(contactId, req.body, { new: true }).populate(
    //   'owner',
    //   'email'
    //   );

    const result = await Orders.findByIdAndUpdate(
      id,
      { active: true },
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

module.exports = updateSalledOrder;
