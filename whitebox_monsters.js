
const terrains = ["Barren", "Coast", "Forest", "Hills", "Jungle", "Mountains", "Open", "River", "Settled", "Swamp"];

// Template
/*
{
        name: "",
        form: "",
        hit_dice: "",
        HDE: number,
        toHitBonus: number,
        armor_class_descend: number,
        armor_class_ascend: number,
        attack: "",
        special: "",
        move: number,
        XP: number,
        saving_throw: number,
        dungeon_levels: [],
        terrain: [""],
        notes: ""
    },
*/


const arrayMonsters = [
    {
        name: "Banshee",
        form: "Undead",
        hit_dice: "7d6",
        HDE: 11,
        toHitBonus: 7,
        armor_class_descend: 0,
        armor_class_ascend: 19,
        attack: "Claw",
        special: "See notes",
        move: 12,
        XP: 1700,
        saving_throw: 12,
        dungeon_levels: [7],
        terrain: ["Settled", "Swamp", "Jungle", "Barren"],
        notes: "Banshees are horrid fey (or undead) creatures that live in swamps and other desolate places. They can only be harmed by magical or silver weapons. Banshees have a 49% resistance to magic, and they are immune to enchantments. Their shriek (once per day) necessitates a saving throw versus death or the hearer will die in 2d6 rounds. They can travel over water and other terrain as if it were land, but crossing running water causes it to lose its magic resistance for 3d6 hours. They look like gaunt humans with long, stringy hair and glowing yellow eyes. They often wear hooded cloaks. At the Referee's discretion, such creatures might be undead rather than faerie-folk, and are considered to have 9 HD for turning purposes."
    },
    {
        name: "Basilisk",
        form: "Monster",
        hit_dice: "6d6",
        HDE: 8,
        toHitBonus: 6,
        armor_class_descend: 4,
        armor_class_ascend: 15,
        attack: "Bite",
        special: "Petrifying Gaze",
        move: 6,
        XP: 800,
        saving_throw: 13,
        dungeon_levels: [6],
        terrain: ["Barren", "Hills", "Mountains", "Open", "Forest", "River", "Coast", "Swamp", "Jungle"],
        notes: "Basilisks are great lizards whose gaze turns to stone anyone meeting its eye (fighting without looking incurs a -4 penalty 'to-hit'). If the basilisk's own gaze is reflected back at it, it has a 10% chance to force the basilisk into a saving throw against being turned to stone itself."
    },
    {
        name: "Beetle, Giant Fire",
        form: "Animal",
        hit_dice: "1d6 + 3",
        HDE: 1,
        toHitBonus: 1,
        armor_class_descend: 4,
        armor_class_ascend: 15,
        attack: "Bite",
        special: "None",
        move: 12,
        XP: 15,
        saving_throw: 18,
        dungeon_levels: [1, 2],
        terrain: ["Coast", "River", "Open", "Forest", "Swamp", "Jungle"],
        notes: "A giant fire beetle's oily light-glands glow red, and continue to give off light for 1d6 days after they are removed (shedding light in a 10 foot radius)."
    },
    {
        name: "Kobold",
        form: "Humanoid",
        hit_dice: "1/2",
        HDE: 0,
        toHitBonus: 0,
        armor_class_descend: 6,
        armor_class_ascend: 13,
        attack: "Weapon",
        special: "None",
        move: 6,
        XP: 10,
        saving_throw: "19 - HD",
        dungeon_levels: [1],
        terrain: ["Settled", "Hills", "Mountains", "Barren", "Swamp", "Jungle", "Open", "Forest"],
        notes: "Kobolds are subterranean, vaguely goblin-like humanoids. They have a -1 “to-hit” penalty when fighting above ground. Many use slings or short bows, and they fight with short swords or spiked clubs in melee combat."
    }
];