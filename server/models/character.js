const mongoose = require("mongoose");

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
    selectedSpells : {
        type: Array,
        default: empty,
    }
});

const Char = mongoose.model("Char", charSchema);

module.export = Char;