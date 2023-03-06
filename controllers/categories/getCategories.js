const { Categories } = require('../../models/categories');

const getCategories = async (req, res, next) => {
  try {
    const result = await Categories.find({});

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

module.exports = getCategories;
