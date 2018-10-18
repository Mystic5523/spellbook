const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/spellList"
);


const spellSeed = [
  {
    name: "Prestidigitation",
    desc: "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within 'range': You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor. You instantaneously light or snuff out a candle, a torch, or a small campfire. You instantaneously clean or soil an object no larger than 1 cubic foot. You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour. You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour. You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn. If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
    ,
    page: "phb 267",
    range: "10 feet",
    components: [
      "V",
      "S"
    ],
    ritual: "no",
    duration: "1 hour",
    concentration: "no",
    casting_time: "1 action",
    level: 0,
    school: "Transmutation",
    classes: [
      {
        name: "Bard",
      },
      {
        name: "Sorcerer",
      },
      {
        name: "Warlock",
      },
      {
        name: "Wizard",
      }
    ],
    subclasses: [
      {
        name: "Lore"
      }
    ],
  },
  {
    name: "Acid Splash",
    desc: "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage. This spellâ€™s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    page: "phb 211",
    range: "60 feet",
    components: [
      "V",
      "S"
    ],
    ritual: "no",
    duration: "Instantaneous",
    concentration: "no",
    casting_time: "1 action",
    level: 0,
    school: "Conjuration",
    classes: [
      {
        name: "Sorcerer",
      },
      {
        name: "Wizard",
      }
    ],
    subclasses: [
      {
        name: "Lore"
      }
    ],
  },
  {
    name: "Alarm",
    desc: "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that wonâ€™t set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.",
    page: "phb 211",
    range: "30 feet",
    components: [
      "V",
      "S",
      "M"
    ],
    material: "A tiny bell and a piece of fine silver wire.",
    ritual: "yes",
    duration: "8 hours",
    concentration: "no",
    casting_time: "1 minute",
    level: 1,
    school: "Abjuration",
    classes: [
      {
        name: "Ranger",
      },
      {
        name: "Wizard",
      }
    ],
    subclasses: [
      {
        name: "Lore"
      }
    ],
  },
  {
    name: "Magic Missile",
    desc: "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.",
    higher_level: "When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.",
    page: "phb 257",
    range: "120 feet",
    components: [
      "V",
      "S"
    ],
    ritual: "no",
    duration: "Instantaneous",
    concentration: "no",
    casting_time: "1 action",
    level: 1,
    school: "Evocation",
    classes: [
      {
        name: "Sorcerer",
      },
      {
        name: "Wizard",
      }
    ],
    "subclasses": [
      {
        name: "Lore"
      }
    ],
  },
  {
    name: "Acid Arrow",
    desc: "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
    higher_level: "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.",
    page: "phb 259",
    range: "90 feet",
    components: [
      "V",
      "S",
      "M"
    ],
    material: "Powdered rhubarb leaf and an adderâ€™s stomach.",
    ritual: "no",
    duration: "Instantaneous",
    concentration: "no",
    casting_time: "1 action",
    level: 2,
    school: "Evocation",
    classes: [
      {
        name: "Wizard",
      }
    ],
    subclasses: [
      {
        name: "Lore"
      },
      {
        name: "Land"
      }
    ],
  },
  {
    name: "Invisibility",
    desc: "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the targetâ€™s person. The spell ends for a target that attacks or casts a spell.",
    higher_level: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
    page: "phb 254",
    range: "Touch",
    components: [
      "V",
      "S",
      "M"
    ],
    material: "An eyelash encased in gum arabic.",
    ritual: "no",
    duration: "Up to 1 hour",
    concentration: "yes",
    casting_time: "1 action",
    level: 2,
    school: "Illusion",
    classes: [
      {
        name: "Bard",
      },
      {
        name: "Sorcerer",
      },
      {
        name: "Warlock",
      },
      {
        name: "Wizard",
      }
    ],
    subclasses: [
      {
        name: "Lore"
      },
      {
        name: "Land"
      }
    ],
  }
];

db.Spell
.remove({})
.then(() => db.Spell.collection.insertMany(spellSeed))
.then (data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
})