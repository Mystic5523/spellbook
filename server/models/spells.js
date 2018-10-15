const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const SpellSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    desc: {
        type: String,
        default: ''
    },
    higher_level: {
        type: String,
        default: ''
    },
    page: {
        type: Number,
    },
    components: {
        type: String,
        default: ''
    },
    material: {
        type: String,
        default: ''
    },
    ritual: {
        type: String,
        default: ''
    },
    duration: {
        type: String,
        default: ''
    },
    concentration: {
        type: String,
        default: ''
    },
    casting_time: {
        type: String,
        default: ''
    },
    level: {
        type: Number,
    },
    school: {
        type: Array,
    },
    classes: {
        type: Array,
    }
});

const Spells = mongoose.model("Spells", SpellSchema);

module.export = Spells;