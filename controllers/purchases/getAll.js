const { Purchases } = require('../../models/purchases');

const getAllPurchases = async (req, res, next) => {
  try {
    const result = await Purchases.find({}).sort({ date: -1 });

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

module.exports = getAllPurchases;
