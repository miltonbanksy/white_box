// # GET SCROLL
function getScroll() {
    
    treasureQuality = "<h3>📜 Scroll(s)<h3";
    displayTreasureQuality.innerHTML = treasureQuality;
    scrollUser = "";
    let scroll = "";
    let spellLevel = 0;
    let randomProtectionScroll = "";
    let listRandomSpell = [];

    die_roll = roll1dx(8) + treasureType.modifier; // Roll 1d8 + Quality mod
    //die_roll = 6; // !!!! TEST ONLY REMOVE !!!!
    
    // Info: generateRandomScrolls(number of scrolls, min level, max level)
    if ( die_roll == 1 ) {
        generateRandomScrolls(1, 1, 1);
    } else if ( die_roll == 2 ) {
        generateRandomScrolls(1, 1, 3);
    } else if ( die_roll == 3 ) {
        generateRandomScrolls(2, 1, 2);
    } else if ( die_roll == 4 ) {
        generateRandomScrolls(3, 1, 1);
    } else if ( die_roll == 5 || die_roll == 12 || die_roll == 19) {
        displayTreasureName.innerHTML = "💀 Cursed Scroll 💀";
        //console.log("💀 Find a Cursed Scroll 💀");
        return
    } else if ( die_roll == 6 || die_roll == 7 ) {
        randomProtectionScroll = getRandomProtectionScroll();
        displayTreasureName.innerHTML = `<b>Protection from ${randomProtectionScroll.type}</b> (Standard duration)`;
        displayTreasureDescription.innerHTML = randomProtectionScroll.description;
    } else if ( die_roll == 8 ) {
        generateRandomScrolls(2, 1, 4);
    } else if (die_roll == 9) {
        generateRandomScrolls(2, 1, 6);
    } else if (die_roll == 10) {
        generateRandomScrolls(1, 3, 6);
    } else if (die_roll == 11) {
        generateRandomScrolls(5, 1, 3);
    } else if (die_roll == 13 || die_roll == 14) {
        randomProtectionScroll = getRandomProtectionScroll();
        displayTreasureName.innerHTML = `<b>Protection from ${randomProtectionScroll.type}</b> (Double duration)`;
        displayTreasureDescription.innerHTML = randomProtectionScroll.description;
    } else if (die_roll == 15) {
        generateRandomScrolls(5, 1, 6);
    } else if (die_roll == 16) {
        generateRandomScrolls(6, 1, 6);
    } else if (die_roll == 17) {
        generateRandomScrolls(7, 1, 6);
    } else if (die_roll == 18) {
        generateRandomScrolls(8, 1, 6);
    } else if (die_roll == 20) {
        randomProtectionScroll = getRandomProtectionScroll();
        displayTreasureName.innerHTML = `<b>Protection from ${randomProtectionScroll.type}</b> (Triple duration, Double effect)`;
        displayTreasureDescription.innerHTML = randomProtectionScroll.description;
    } else {
        scroll = "No match";
    }
};


function generateRandomScrolls(numberOfScrolls, minLevel, maxLevel) {
    const scrolls = [];

    for (let i = 0; i < numberOfScrolls; i++) {
        // Roll spell level
        let level = Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;

        // Decide scroll user (MU or Cleric)
        const user = roll1dx(2) === 1 ? "Magic User" : "Cleric";

        // Auto-correct level 6 → 5 for Clerics
        if (user === "Cleric" && level === 6) {
            level = 5;
        }

        // Fetch spell
        const spell = getRandomSpellByLevel(user, level);

        scrolls.push({
            user,
            level,
            spell
        });
    }

    // Display results
    scrolls.forEach(s => {
        // This bit is magic! It allows me to refresh a function embedded in list.
        // typeof... asks: Is the 'duration' property a function?
        const durationValue = typeof s.spell.duration === "function"
        // if yes...
            ? s.spell.duration()
        // if no...
            : s.spell.duration;

        // Same logic, longer if/else version...
        /*
        let durationValue;

            if (typeof s.spell.duration === "function") {
                durationValue = s.spell.duration();  // call the function
            } else {
                durationValue = s.spell.duration;    // use the string or number
            }
        */

        const heading4Element = document.createElement('div');
        const linebreakElement = document.createElement('br');
        
        heading4Element.innerHTML = `<b>${s.spell.name}</b> (Level ${s.spell.level} ${s.user} spell)<br>${s.spell.description}`;
        displayTreasureDescription.appendChild(heading4Element);
        displayTreasureDescription.appendChild(linebreakElement);
    });
};