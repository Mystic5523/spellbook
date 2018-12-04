const db = require("../models");


module.exports = {
    create: function (req, res) {
        db.Chars
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
        db.Chars
        .find({}).sort({level:1})
        .then(dbModel => {
            return res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    }
};