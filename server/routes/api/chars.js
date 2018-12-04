const router = require("express").Router();
const charsController = require("../../controllers/charsController");

// Matches with "/api/chars"
router.route("/")
    .get(charsController.findAll)
    // .post(charsController.create);

// Matches with "/api/chars/:id"
router.route("/")
    .post(charsController.create);
//     .put(charsController.update)
//     .delete(charsController.remove);

module.exports = router;