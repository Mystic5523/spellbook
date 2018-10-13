const path = require("path");
const router = require("express").Router();
const apiRouter = require("./api");


router.use("/api", apiRouter);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "fillIn"));
});

module.exports = router;