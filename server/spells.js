const router = require("express").Router();
const spellsController = require("../../controllers/spellsController");


router.route("fillInHere")
    .get(spellsController.findAll)


module.exports = router;