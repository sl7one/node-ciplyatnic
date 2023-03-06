const { Purchases } = require('../../models/purchases');

const addPurchases = async (req, res, next) => {
  // const { _id } = req.user;

  try {
    //   const result = await DataBase.create({ ...req.body, owner: _id });

    const { data } = req.body.order;
    const total = data.reduce((acc, { count, price }) => (acc += count * price), 0);
    req.body.order.total = total;

    const result = await Purchases.create({ ...req.body });

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

module.exports = addPurchases;
