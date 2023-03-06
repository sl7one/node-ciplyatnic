const { Orders } = require('../../models/orders');
const { utilsTotalSumm } = require('../../utils/utilsTotalSumm');

const addData = async (req, res, next) => {
  // const { _id } = req.user;
  const { data: poultry, food, options } = req.body.order;

  req.body.order.total = utilsTotalSumm(poultry, food, options);

  try {
    //   const result = await DataBase.create({ ...req.body, owner: _id });

    const result = await Orders.create({ ...req.body });

    res.status(201).json({
      status: 'success',
      message: 'Заказ успешно добавлен',
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addData;
