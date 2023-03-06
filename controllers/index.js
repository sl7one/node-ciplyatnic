const getAll = require('./orders/getAll');
const getOrder = require('./orders/getOrder');
const addData = require('./orders/add');
const remove = require('./orders/delete');
const saleOrder = require('./orders/saleOrder');
const updateOrder = require('./orders/updateOrder');

const getCategories = require('./categories/getCategories');
const updatePoultries = require('./categories/poultryUpdate');
const updateBuyers = require('./categories/buyersUpdate');
const updateSuppliers = require('./categories/suppliersUpdate');

const getAllPurchases = require('./purchases/getAll');
const addPurchases = require('./purchases/add');

const getAllSalles = require('./salles/getAllSalles');
const updateSalledOrder = require('./salles/updateSalledOrder');

module.exports = {
  getAll,
  getOrder,
  getAllSalles,
  addData,
  remove,
  saleOrder,
  updateOrder,
  getCategories,
  updatePoultries,
  updateBuyers,
  updateSuppliers,
  getAllPurchases,
  addPurchases,
  updateSalledOrder,
};
