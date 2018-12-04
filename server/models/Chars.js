const mongoose = require("mongoose");

const CharsSchema = new mongoose.Schema({
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
        default: [],
    }
}, {collection: 'chars' });

module.exports = mongoose.model('Chars', CharsSchema);

// const Char = mongoose.model("Char", CharSchema);

// module.export = Char;