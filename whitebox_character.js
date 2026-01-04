const formCharCreation0 = document.getElementById('form-char-creation-0');
const formCharCreation1b = document.getElementById('form-char-creation-1b-generate-class');
const formCharCreationChooseClass = document.getElementById('form-char-creation-choose-class');

const formCharCreationChooseStatMethod = document.getElementById('form-char-creation-choose-stat-method');
const displayCharClass = document.getElementById('display-char-class');
const displayCharExperience = document.getElementById('display-char-experience');
const displayCharHP = document.getElementById('display-char-hp');
const displayCharStats = document.getElementById('display-char-stats');
const displayCharBonuses = document.getElementById('display-char-bonuses');
const displayCharGear = document.getElementById('display-char-gear');
const formCharCreationSummary = document.getElementById('form-char-creation-summary');
const formCharCreationMage = document.getElementById('form-char-creation-mage');
const spellInfo = document.getElementById('spell-info');
const displayCharSpellChoice = document.getElementById('display-char-spell-choice');

const charismaModifierTable = [
    {min: 18, hirelings_max: 7, hirelings_loyalty: "+2"},
    {min: 16, hirelings_max: 6, hirelings_loyalty: "+2"},
    {min: 13, hirelings_max: 5, hirelings_loyalty: "+1"},
    {min: 9, hirelings_max: 4, hirelings_loyalty: "+0"},
    {min: 7, hirelings_max: 3, hirelings_loyalty: "-1"},
    {min: 5, hirelings_max: 2, hirelings_loyalty: "-2"},
    {min: 3, hirelings_max: 1, hirelings_loyalty: "-2"}
].sort((a, b) => b.min - a.min);

const modifierTable = [
    {min: 15, mod: 1, xpBonus: "10%"},
    {min: 13, mod: 0, xpBonus: "5%"},
    {min: 9, mod: 0, xpBonus: "0%"},
    {min: 8, mod: 0, xpBonus: "-5%"},
    {min: 7, mod: 0, xpBonus: "-5%"},
    {min: 0, mod: -1, xpBonus: "-5%"},
];

const classes = [
    {
        class: "Fighter", 
        hd: "1d6+1", 
        hpBase: () => roll1dx(6) +1, 
        primary_stat: "STR", 
        xp_next: 2000, 
        saving_throw: 14, 
        saving_throw_bonus: "+2 vs. death, poison"
    },
    {class: "Magic User", hd: "1d6", hpBase: () => roll1dx(6), primary_stat: "INT", xp_next: 2500, saving_throw: 15, saving_throw_bonus: "+2 vs. spells (incl. wands, staves)"},
    {class: "Cleric", hd: "1d6", hpBase: () => roll1dx(6), primary_stat: "WIS", xp_next: 1500, saving_throw: 15, saving_throw_bonus: "+2 vs. poison, paralysis"}
];

const character = {
    level: 1,
    xp: 0,
    xp_next: 0,
    hd: 0,
    hp: 0,
    hpBase: 0,
    //conMod: 0,
    hpAfterConMod: 0,
    toHit: "+0",
    gold: 0,
    class: "Unknown", 
    primary_stat: "Unknown",
    stats: {
        STR: {label: "STR", name: "strength", value: 0, modifier: 0},
        DEX: {label: "DEX", name: "dexterity", value: 0, modifier: 0},
        CON: {label: "CON", name: "constitution", value: 0, modifier: 0},
        INT: {label: "INT", name: "intelligence", value: 0, modifier: 0},
        WIS: {label: "WIS", name: "wisdom", value: 0, modifier: 0},
        CHA: {label: "CHA", name: "charisma", value: 0, modifier: 0}
    },
    gear: ""
};

// (FORM) Choose method of generating a Class:
formCharCreation1b.addEventListener('change', function(event) {
    const selectedValue = event.target.value;

    if (selectedValue == "class-choose") {
        formCharCreationChooseClass.classList.add('show-me');
    } else {
        let character_class_index = Math.floor(Math.random() * classes.length);
        character.class = classes[character_class_index].class;
        character.primary_stat = classes[character_class_index].primary_stat;
        
        // Find the xp_next value based on the class:
        const class_xp_data = classes.find(c => c.class === character.class);
        character.xp_next = class_xp_data.xp_next;

        formCharCreationChooseStatMethod.classList.add('show-me');
        
        displayCharClass.innerHTML = `Level ${character.level} ${character.class}<br>Primary Stat: ${character.primary_stat}`;
        formCharCreationSummary.classList.add('show-me');
    }

    this.classList.remove('show-me');
    this.classList.add('hide-me');
    
});

// (FORM) Choose a Class from a list:
formCharCreationChooseClass.addEventListener('change', function(event) {
    
    // Find matching class object
    const chosenClassName = event.target.value; // The character class chosen by user
    const classData = classes.find(c => c.class === chosenClassName);

    if (!classData) {
        console.error("Class not found:", chosenClassName);
        return;
    }

    character.class = classData.class;
    character.primary_stat = classData.primary_stat;

    // Find the xp_next value based on the class:
    const class_xp_data = classes.find(c => c.class === character.class);
    character.xp_next = class_xp_data.xp_next;

    this.classList.remove('show-me');
    this.classList.add('hide-me');

    displayCharClass.innerHTML = `Level ${character.level} ${character.class}<br>Primary Stat: ${character.primary_stat}`;
    formCharCreationSummary.classList.add('show-me');
    formCharCreationChooseStatMethod.classList.add('show-me');
});

// (FORM) Choose method of generating stats:
formCharCreationChooseStatMethod.addEventListener('change', function(event) {
    const selectedValue = event.target.value;
    let dice_bag = [];
    
    // // Classic 3d6, randomly distributed.
    if (selectedValue == "stat-method-1") {
        
        for (let i = 0; i < 6; i++) {
            const roll = getSumOfArray(rollxdx(3, 6));
            dice_bag.push(roll);
        }

        const statObjects = Object.values(character.stats);
        // Simple shuffle (Use Fisher-Yates for greater randomness):
        dice_bag.sort(() => Math.random() - 0.5);

        // Assign each stat with a value:
        statObjects.forEach(stat => {
            stat.value = dice_bag.pop();
        });

    // // Classic & Classy 3d6, distributed in favor of chosen Class.
    } else if (selectedValue == "stat-method-2") {

        // Roll 6 x 3d6:
        for (let i = 0; i < 6; i++) {
            const roll = getSumOfArray(rollxdx(3, 6));
            dice_bag.push(roll);
        }

        // Sort highest to lowest:
        dice_bag.sort((a, b) => b - a);

        // Assign highest roll to primary stat
        const primaryKey = character.primary_stat;
        character.stats[primaryKey].value = dice_bag.shift();

        // Shuffle remaining rolls:
        dice_bag.sort(() => Math.random() - 0.5);

        // Assign remaining rolls to other stats:
        Object.keys(character.stats).forEach(statKey => {
            if (statKey !== primaryKey) {
                character.stats[statKey].value = dice_bag.pop();
            }
        });

    // // Heroic 4d6 (drop lowest), randomly distributed.
    } else if (selectedValue == "stat-method-3") {
        
        // Roll 6 heroic stats;
        for (let i = 0; i < 6; i++) {
            dice_bag.push(roll4d6DropLowest());
        }

        // Shuffle
        dice_bag.sort(() => Math.random() - 0.5);

        // Assign randomly
        Object.values(character.stats).forEach(stat => {
            stat.value = dice_bag.pop();
        });

    // // Heroic & Classy 4d6 (drop lowest), distributed in favor of chosen Class.
    } else if (selectedValue == "stat-method-4") {

        for (let i = 0; i < 6; i++) {
            dice_bag.push(roll4d6DropLowest());
        }

        // Highest first
        dice_bag.sort((a, b) => b - a);

        // Assign best to primary stat
        const primaryKey = character.primary_stat;
        character.stats[primaryKey].value = dice_bag.shift();

        // Shuffle remainder
        dice_bag.sort(() => Math.random() - 0.5);

        // Assign the rest
        Object.keys(character.stats).forEach(statKey => {
            if (statKey !== primaryKey) {
                character.stats[statKey].value = dice_bag.pop();
            }
        });
    
    // // Fair Standard Array [15, 14, 13, 12, 10, 8], randomly distributed.
    } else if (selectedValue == "stat-method-5") {
        
        dice_bag = [15, 14, 13, 12, 10, 8];

        // Shuffle
        dice_bag.sort(() => Math.random() - 0.5);

        // Assign randomly
        Object.values(character.stats).forEach(stat => {
            stat.value = dice_bag.pop();
        });
    
    // // Fair & Classy Standard Array [15, 14, 13, 12, 10, 8], distributed in favor of chosen Class.
    } else if (selectedValue == "stat-method-6") {

        dice_bag = [15, 14, 13, 12, 10, 8];

        // Highest first
        dice_bag.sort((a, b) => b - a);

        // Assign best to primary stat
        const primaryKey = character.primary_stat;
        character.stats[primaryKey].value = dice_bag.shift();

        // Shuffle remainder
        dice_bag.sort(() => Math.random() - 0.5);

        // Assign the rest
        Object.keys(character.stats).forEach(statKey => {
            if (statKey !== primaryKey) {
                character.stats[statKey].value = dice_bag.pop();
            }
        });
    }

    Object.values(character.stats).forEach(stat => {
        stat.modifier = getStatModifier(stat.value);
    });

    // Get Saving Throws
    character.saving_throw = getSavingThrowForClass(character.class);

    // Get Saving Throws Bonus
    character.saving_throw_bonus = getSavingThrowForClassBonus(character.class);

    // Get Charisma values for hirelings / loyalty
    const chaValue = character.stats.CHA.value;
    const chaMods = getCharismaModifiers(chaValue);

    character.hirelings_max = chaMods.hirelings_max;
    character.hirelings_loyalty = chaMods.hirelings_loyalty;
    

    // Assign Bonuses: (fighter, magic user, cleric, level to hit, languages)
    character.xpBonus = getCharacterXpBonus(character);

    if (character.class == "Fighter") {
        if (character.stats.STR.value >=15) {
            character.strengthBonusmeleeToHit = "+1";
        } else {
            character.strengthBonusmeleeToHit = "+0";
        }
    } else {
        character.strengthBonusmeleeToHit = "N/A";
    }

    if (character.class == "Magic User") {
        
        formCharCreationMage.classList.remove('hide-me');
        character.spellEffectiveness = character.stats.INT.modifier;

        let spellInfoMage = "Choose or randomize one first-level spell";
        spellInfo.innerHTML = spellInfoMage;
        displayClassSpells(spellsMage);

    } else if (character.class == "Cleric") {
        
        formCharCreationMage.classList.remove('hide-me');
        character.spellEffectiveness = character.stats.WIS.modifier;
        
        let spellInfoCleric = "Clerics must earn their right to cast divine spells by reaching Level 2. Here are a list of first-level spells which may be used as narrative quest sparks for the cleric to pursue to gain the favor of their deity.";
        spellInfo.innerHTML = spellInfoCleric;
        displayClassSpells(spellsCleric);

    } else {
        character.spellEffectiveness = "N/A";
    }


    // Additional Languages
    if (character.stats.INT.value >=11) {
        character.numberOfAdditionalLanguages = character.stats.INT.value - 10;
    } else {
        character.numberOfAdditionalLanguages = 0;
    }


    displayCharExperience.innerHTML = `XP: 0, Next: ${character.xp_next}, Modifier: ${character.xpBonus.xpBonus}`;
    
    // Generate HP
    const classData = classes.find(c => c.class === character.class);
    if (classData) {
        character.hd = classData.hd;
        if (typeof classData.hpBase === "function") {
            character.hpBase = classData.hpBase(); // Call the function
        } else {
            character.hpBase = classData.hpBase;
            alert("Not working!");
        }
        
        
        // Add base HP +/- CON mod:
        character.hpAfterConMod = character.hpBase + character.stats.CON.modifier;
        
        // Make sure HP is at least 1:
        if (character.hpAfterConMod < 1 ) {
            character.hpAfterConMod = 1;
        }

        displayCharHP.innerHTML = `HD: ${character.hd}, HP: ${character.hpAfterConMod} / ${character.hpAfterConMod}`;
    }


    // Generate Starting Gear
    const packs = starterPacks[character.class];
    const randomIndex = Math.floor(Math.random() * packs.length);
    character.gear = packs[randomIndex];

    // Commented out for now. I'm going with gear packs.
    /*
    // Generate Starting Gold:
    let gold_roll = getSumOfArray(rollxdx(3, 6));
    character.gold = gold_roll * 10;
    */

    


    
    displayCharStats.innerHTML = Object.values(character.stats)
        .map(stat => `${stat.label} ${stat.value} (${stat.modifier >= 0 ? '+' : ''}${stat.modifier})`)
        .join('<br>');

    displayCharBonuses.innerHTML = `
    Armor Class Modifier: ${character.stats.DEX.modifier}
    <br>L1 Saving Throw: ${character.saving_throw}
    <br> ${character.class} Saving Throw Bonus: ${character.saving_throw_bonus}
    <br>L1 Melee & Missile To Hit Modifier: +0
    <br>Melee To Hit Modifier (STR): ${character.strengthBonusmeleeToHit}
    <br>Missile To Hit Modifier (DEX): ${character.stats.DEX.modifier}
    <br>Spell Effectiveness Modifier: ${character.spellEffectiveness}
    <br>Hirelings: Max ${character.hirelings_max}, Loyalty: ${character.hirelings_loyalty}
    <br>Additional Languages: ${character.numberOfAdditionalLanguages}`;

    displayCharGear.innerHTML = `GEAR<br>${character.gear}`;
});

// HELPERS
function getStatModifier(statValue) {
    return modifierTable
        .sort((a, b) => b.min - a.min)
        .find(row => statValue >= row.min)
        .mod;
};

// GET CLASS DATA
function getClassData(className) {
    return classes.find(c => c.class === className);
};

function getXPBonusFromStat(statValue) {
    return modifierTable
        .sort((a, b) => b.min - a.min)
        .find(row => statValue >= row.min);
};

function getCharacterXpBonus(character) {

    const classData = getClassData(character.class);
    
    if (!classData) return null;

    const primaryStat = classData.primary_stat;
    const statValue = character.stats[primaryStat].value;

    if (statValue == null) return null;
    return getXPBonusFromStat(statValue);
};

function getCharismaModifiers(chaValue) {
    return charismaModifierTable.find(row => chaValue >= row.min);
};

function getSavingThrowForClass(className) {
    const classData = getClassData(className);
    return classData.saving_throw;
};

function getSavingThrowForClassBonus(className) {
    const classData = getClassData(className);
    return classData.saving_throw_bonus;
};

// I want to create 1 function that handles both MU and Cleric.
// For now, I'll find MU spells.
// Testing get all L1 Magic User Spells:
function getSpellsByLevel(spellList, level) {
    return spellList
        .filter(spell => spell.level === level);
};

function displayClassSpells(classSpellList) {
    let listHtml = '';
    let spellList = getSpellsByLevel(classSpellList, 1);
        spellList.forEach(spell =>  {
            listHtml += `<div>${spell.name}</div>`;
        })
        
        displayCharSpellChoice.innerHTML = listHtml;
};

