const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charSchema = new mongoose.Schema({
    name : {
        type: String,
        validation: {
            unique: true
        }
    },
    race : {
        type: String,
        
    },
    class : {
        type: String,
    },
    level : {
        type: Number,
        
    },
});

const Char = mongoose.model("Char", charSchema);

module.export = Char;