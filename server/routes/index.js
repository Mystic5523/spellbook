const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const spellRoutes = require('./api/spells');

router.use('/spells', spellRoutes)

module.exports = router;
