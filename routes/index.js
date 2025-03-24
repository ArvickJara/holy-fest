const express = require('express');
const organizacionRoutes = require('./organizacion');
const eventosRoutes = require('./eventos');

const router = express.Router();

router.use('/organizacion', organizacionRoutes);
router.use('/eventos', eventosRoutes);

module.exports = router;