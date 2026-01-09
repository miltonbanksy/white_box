const inputMonsterName = document.getElementById('input-monster-name');
const btnFindMonsterName = document.getElementById('btn-find-monster-name');

btnFindMonsterName.addEventListener('click', () => {
    const monsterName = arrayMonsters.find(array => array.name === inputMonsterName);
    console.log(monsterName);
});

// Template
/*
{
        name: "",
        form: "",
        hit_dice: ,
        HDE: 0,
        toHitBonus: ,
        armor_class_descend: ,
        armor_class_ascend: ,
        attack: "",
        special: "",
        move: ,
        XP: ,
        saving_throw: ,
        dungeon_levels: [],
        terrain: [""],
        notes: ""
    },
*/


const arrayMonsters = [
    {
        name: "Banshee",
        form: "undead",
        hit_dice: 7,
        HDE: 11,
        toHitBonus: 7,
        armor_class_descend: 0,
        armor_class_ascend: 19,
        attack: "claw",
        special: "see notes",
        move: 12,
        XP: 1700,
        saving_throw: 12,
        dungeon_levels: [7],
        terrain: ["settled", "swamp, jungle", "barren"],
        notes: "Banshees are horrid fey (or undead) creatures that live in swamps and other desolate places. They can only be harmed by magical or silver weapons. Banshees have a 49% resistance to magic, and they are immune to enchantments. Their shriek (once per day) necessitates a saving throw versus death or the hearer will die in 2d6 rounds. They can travel over water and other terrain as if it were land, but crossing running water causes it to lose its magic resistance for 3d6 hours. They look like gaunt humans with long, stringy hair and glowing yellow eyes. They often wear hooded cloaks. At the Referee's discretion, such creatures might be undead rather than faerie-folk, and are considered to have 9 HD for turning purposes."
    },
    {
        name: "Kobold",
        form: "humanoid",
        hit_dice: "1/2",
        HDE: 0,
        toHitBonus: 7,
        armor_class_descend: 6,
        armor_class_ascend: 13,
        attack: "weapon",
        special: "none",
        move: 6,
        XP: 10,
        saving_throw: "19 - HD",
        dungeon_levels: [1],
        terrain: ["settled", "Hills, Mtns, Barren", "Swamp, Jungle", "Open Forest"],
        notes: "Kobolds are subterranean, vaguely goblin-like humanoids. They have a -1 “to-hit” penalty when fighting above ground. Many use slings or short bows, and they fight with short swords or spiked clubs in melee combat."
    }
];