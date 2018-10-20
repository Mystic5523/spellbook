const db = require("../models");


module.exports ={
    findAll: function(req, res) {
        console.log(db)
        db.Spelllist
        .find({}).sort({level:1})
        .then(dbModel => {
            console.log(dbModel) 
            return res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    }
    
};