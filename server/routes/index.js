const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const spellRoutes = require('./api/spells');
const charRoutes = require('./api/chars');

router.use('/spells', spellRoutes);

router.use('/chars', charRoutes);

module.exports = router;
