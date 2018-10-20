const router = require("express").Router();
const spellsController = require("../../controllers/spellsController");

// Matches with "/api/spells"
router.route("/")
    .get(spellsController.findAll);
    // .post(spellsController.create);

// Matches with "/api/spells/:id"
// router
//     .route("/:id")
//     .get(spellsController.findById)
//     .put(spellsController.update)
//     .delete(spellsController.remove);

module.exports = router;
