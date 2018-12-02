const db = require("../models");


module.exports ={
    update: function(req, res) {
        db.Char
        .create(req.body) 
        .then(dbModel => {
            return res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
    }
    
};