const inputMonsterName = document.getElementById('input-monster-name');
const btnFindMonsterName = document.getElementById('btn-find-monster-name');
const selectMonsterName = document.getElementById('select-monster-name');
const displayMonsterDetails = document.getElementById('display-monster-details');

// Build Select Widget for 'Search by Dungeon Level'
for (let l = 1; l <= 10; l++) {
    const option = document.createElement('option');
    option.textContent = l;
    option.value = l;
    selectMonsterName.appendChild(option);
};

const optionSelect = document.createElement('option');
optionSelect.textContent = "Choose...";
optionSelect.value = 0;
selectMonsterName.add(optionSelect, selectMonsterName[0]);
selectMonsterName.value = optionSelect.value;

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function filterByDungeonLevel(monsters, level) {
    const dungeonLevel = Number(level);

    if (dungeonLevel === 0) return [];

    return arrayMonsters.filter(monster =>
        monster.dungeon_levels.includes(dungeonLevel)
    );
};

btnFindMonsterName.addEventListener('click', () => {
    const input = inputMonsterName.value;
    const inputToCaps = capitalizeFirstLetter(input);
    const monsterData = arrayMonsters.find(m => m.name === inputToCaps);

    if (!monsterData) {
        alert("Sorry, monster not found.");
        return;
    }

    inputMonsterName.value = "";

    displayMonsterDetails.innerHTML = `
    <b>${monsterData.name}</b> (${monsterData.form}), AC: ${monsterData.armor_class_descend}[${monsterData.armor_class_ascend}], HD: ${monsterData.hit_dice}, HDE: ${monsterData.HDE}, MV: ${monsterData.move}, XP: ${monsterData.XP}
    <br>Attack: ${monsterData.attack} +${monsterData.toHitBonus}, Save: ${monsterData.saving_throw}
    <br>Special: ${monsterData.special}
    <br>Dungeon Levels: ${monsterData.dungeon_levels}
    <br>Terrain: ${monsterData.terrain.join(", ")}
    <p>${monsterData.notes}</p>
    `;
});


selectMonsterName.addEventListener('change', (event) => {
    const selectedLevel = event.target.value;

    const matchingMonsters = filterByDungeonLevel(arrayMonsters, selectedLevel);

    console.log(matchingMonsters);

    // Example: display their names
    displayMonsterDetails.innerHTML = matchingMonsters.length
        ? matchingMonsters.map(m => `<p>${m.name}</p>`).join("")
        : "<p>No monsters found for this dungeon level.</p>";
});

// Template
/*
{
        name: "",
        form: "",
        hit_dice: ,
        HDE: ,
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
        form: "Undead",
        hit_dice: 7,
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
        terrain: ["Settled", "Swamp, Jungle", "Barren"],
        notes: "Banshees are horrid fey (or undead) creatures that live in swamps and other desolate places. They can only be harmed by magical or silver weapons. Banshees have a 49% resistance to magic, and they are immune to enchantments. Their shriek (once per day) necessitates a saving throw versus death or the hearer will die in 2d6 rounds. They can travel over water and other terrain as if it were land, but crossing running water causes it to lose its magic resistance for 3d6 hours. They look like gaunt humans with long, stringy hair and glowing yellow eyes. They often wear hooded cloaks. At the Referee's discretion, such creatures might be undead rather than faerie-folk, and are considered to have 9 HD for turning purposes."
    },
    {
        name: "Basilisk",
        form: "Monster",
        hit_dice: 6,
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
        terrain: ["Barren", "Hills, Mountains", "Open, Forest", "River, Coast", "Swamp, Jungle"],
        notes: "Basilisks are great lizards whose gaze turns to stone anyone meeting its eye (fighting without looking incurs a -4 penalty 'to-hit'). If the basilisk's own gaze is reflected back at it, it has a 10% chance to force the basilisk into a saving throw against being turned to stone itself."
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
        terrain: ["Settled", "Hills, Mountains", "Barren", "Swamp, Jungle", "Open Forest"],
        notes: "Kobolds are subterranean, vaguely goblin-like humanoids. They have a -1 “to-hit” penalty when fighting above ground. Many use slings or short bows, and they fight with short swords or spiked clubs in melee combat."
    }
];