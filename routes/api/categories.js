const express = require('express');

const ctrl = require('../../controllers/');
const auth = require('../../middlewares/auth');
const isValidId = require('../../middlewares/idValidation');
const joiValidation = require('../../middlewares/joi');
const router = express.Router();

router.get('/', ctrl.getCategories);

router.patch('/poultry', joiValidation.poultry, ctrl.updatePoultries);
router.patch('/buyers', joiValidation.buyers, ctrl.updateBuyers);
router.patch('/suppliers', joiValidation.suppliers, ctrl.updateSuppliers);

module.exports = router;
