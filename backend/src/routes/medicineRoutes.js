const express = require('express');
const router = express.Router();

const medicine = require('../controllers/medicine.js');

router.get('/:googleID', medicine.getMedicine);
router.post('/:googleID', medicine.createMedicine);

module.exports = router;

