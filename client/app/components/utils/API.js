import axios from "axios";

export default {
  // Gets all Spells
  getSpells: function() {
    return axios.get("/api/spells");
  },
  // Gets the Spell with the given id
  getSpell: function(id) {
    return axios.get("/api/spells/" + id);
  },
  // Deletes the Spell with the given id
  deleteSpell: function(id) {
    return axios.delete("/api/spells/" + id);
  },
  // Saves a Spell to the database
  saveSpell: function(SpellData) {
    return axios.post("/api/spells", SpellData);
  },
  //
  // Saves a new Character to the database
  saveChar: function(CharData) {
    return axios.post("/api/chars", CharData);
  }
};
