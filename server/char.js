const router = require("express").Router();
const spellsController = require("../../controllers/charController");


router.route("fillInHere")
    .get(charController.findAll)


module.exports = router;