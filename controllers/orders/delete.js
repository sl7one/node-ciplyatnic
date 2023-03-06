const { Orders } = require('../../models/orders');

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    // const result = await DataBase.findByIdAndRemove(contactId).populate('owner', 'email');
    const result = await Orders.findByIdAndRemove(id);

    if (!result) {
      const err = new Error();
      err.status = 404;
      err.message = `Order with ID=${contactId} not found`;
      throw err;
    }

    res.status(200).json({
      status: 'success',
      message: 'Заказ успешно удален',
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContact;
