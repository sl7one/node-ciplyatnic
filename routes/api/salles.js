const express = require('express');

const ctrl = require('../../controllers');
const auth = require('../../middlewares/auth');
const isValidId = require('../../middlewares/idValidation');
const joiValidation = require('../../middlewares/joi');
const router = express.Router();

router.get('/', ctrl.getAllSalles);
router.patch('/:id', isValidId, ctrl.updateSalledOrder);

module.exports = router;
