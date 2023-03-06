const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

// const usersRouter = require('./routes/api/auth');
const categoriesRouter = require('./routes/api/categories');
const ordersRouter = require('./routes/api/orders');
const purchasesRouter = require('./routes/api/purchases');
const sallesRouter = require('./routes/api/salles');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/cyplyatnic/api/orders', ordersRouter);
app.use('/cyplyatnic/api/categories', categoriesRouter);
app.use('/cyplyatnic/api/purchases', purchasesRouter);
app.use('/cyplyatnic/api/salles', sallesRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server Error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
