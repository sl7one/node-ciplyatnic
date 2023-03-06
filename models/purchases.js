const { Schema, model } = require('mongoose');

const purchasesSchema = Schema(
  {
    date: { type: String, required: [true, 'Set date'] },
    order: {
      saller: {
        name: {
          type: String,
          required: [true, 'Set name'],
        },

        type: Object,
        required: [true, 'Set saller'],
      },
      data: { type: Array, required: [true, 'Set payload'] },
      total: Number,
    },
  },
  { timestamps: true, versionKey: false }
);

const Purchases = model('purchases', purchasesSchema);

module.exports = { Purchases };
