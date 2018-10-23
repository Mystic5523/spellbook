const db = require("../models");


module.exports ={
    findAll: function(req, res) {
        db.Spelllist
        .find({}).sort({level:1})
        .then(dbModel => {
            return res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    }
    
};