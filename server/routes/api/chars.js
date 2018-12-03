const router = require("express").Router();
const charsController = require("../../controllers/charsController");

// Matches with "/api/chars"
router.route("/chars")
    .get(charsController.findAll)
    .post(charsController.create);

// Matches with "/api/chars/:id"
router
    .route("/:id")
    .get(charsController.findById)
    .put(charsController.update)
    .delete(charsController.remove);

module.exports = router;