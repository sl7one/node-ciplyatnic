const { Schema, model } = require('mongoose');

const categoriesSchema = Schema(
  {
    poultry: [
      {
        type: String,
        required: true,
      },
    ],
    suppliers: [
      {
        type: String,
        required: true,
      },
    ],
    buyers: [
      {
        type: String,
        required: true,
      },
    ],
  },

  { timestamps: true, versionKey: false }
);

const Categories = model('Categories', categoriesSchema);

module.exports = { Categories };
