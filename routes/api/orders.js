const express = require('express');

const ctrl = require('../../controllers');
const auth = require('../../middlewares/auth');
const isValidId = require('../../middlewares/idValidation');
const joiValidation = require('../../middlewares/joi');
const router = express.Router();

router.get('/', ctrl.getAll);
router.get('/:id', isValidId, ctrl.getOrder);
router.post('/', joiValidation.addData, ctrl.addData);
router.post('/:id', isValidId, ctrl.updateOrder);
router.patch('/:id', isValidId, ctrl.saleOrder);
router.delete('/:id', isValidId, ctrl.remove);

module.exports = router;
