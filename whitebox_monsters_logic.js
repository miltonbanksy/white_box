const selectMonsterByName = document.getElementById('select-monster-by-name');
const inputMonsterName = document.getElementById('input-monster-name');
const btnFindMonsterName = document.getElementById('btn-find-monster-name');
const selectMonsterByDungeonLevel = document.getElementById('select-monsters-by-dungeon-level');
const displayMonsterDetails = document.getElementById('display-monster-details');


function getArrayOfMonsterNames() {
    const monsterList = arrayMonsters.map(monster => monster.name);
    console.log(monsterList)
    
    monsterList.forEach(element => {
        const option = document.createElement('option');
        option.textContent = element;
        selectMonsterByName.appendChild(option);
    });

    const optionSelect = document.createElement('option');
    optionSelect.textContent = "Choose...";
    optionSelect.value = 0;
    selectMonsterByName.add(optionSelect, selectMonsterByName[0]);
    selectMonsterByName.value = optionSelect.value;
};


// Build Select Widget for 'Search by Dungeon Level'
for (let l = 1; l <= 10; l++) {
    const option = document.createElement('option');
    option.textContent = l;
    option.value = l;
    selectMonsterByDungeonLevel.appendChild(option);
};

const optionSelect = document.createElement('option');
optionSelect.textContent = "Choose...";
optionSelect.value = 0;
selectMonsterByDungeonLevel.add(optionSelect, selectMonsterByDungeonLevel[0]);
selectMonsterByDungeonLevel.value = optionSelect.value;

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
    const input = inputMonsterName.value.trim();
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


selectMonsterByDungeonLevel.addEventListener('change', (event) => {
    const selectedLevel = event.target.value;

    const matchingMonsters = filterByDungeonLevel(arrayMonsters, selectedLevel);

    console.log(matchingMonsters);

    // Example: display their names
    displayMonsterDetails.innerHTML = matchingMonsters.length
        ? matchingMonsters.map(m => `<p>${m.name}</p>`).join("")
        : "<p>No monsters found for this dungeon level.</p>";
});


// Start up
getArrayOfMonsterNames();