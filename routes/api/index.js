const router = require("express").Router();
const spellRoutes = require("./spells");

router.use("/spells", spellRoutes);

module.exports = router;