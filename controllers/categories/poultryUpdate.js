const { Categories } = require('../../models/categories');

const poultryUpdate = async (req, res, next) => {
  try {
    const { poultry } = req.body;

    const result = await Categories.findByIdAndUpdate(
      '63f3b489bddb939464cc92b3',
      { poultry },
      { new: true }
    );

    res.status(201).json({
      status: 'success',
      code: 201,
      data: { result },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = poultryUpdate;
