const { Schema, model } = require('mongoose');

const ordersSchema = Schema(
  {
    date: { type: String, required: [true, 'Set Date'] },
    order: {
      buyer: {
        name: {
          type: String,
          required: [true, 'Set name'],
        },
        phone: {
          type: String,
          required: [true, 'Set phone'],
        },
        location: {
          type: String,
          required: [true, 'Set location'],
        },
        type: Object,
        required: [true, 'Set buyer'],
      },
      data: Array,
      food: Array,
      options: Array,
      total: Number,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Orders = model('Orders', ordersSchema);

module.exports = { Orders };
