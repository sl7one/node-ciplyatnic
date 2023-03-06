const express = require('express');

const ctrl = require('../../controllers');
const auth = require('../../middlewares/auth');
const isValidId = require('../../middlewares/idValidation');
const joiValidation = require('../../middlewares/joi');
const router = express.Router();

router.get('/', ctrl.getAllPurchases);
router.post('/', joiValidation.addPurchase, ctrl.addPurchases);
// router.patch('/:id', isValidId, joiValidation.addData, ctrl.update);

module.exports = router;
