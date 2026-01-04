function tradeOutTreasure() {
    // Clear the treasure detail displays:
    for (let i = 0; i < treasureDisplays.length; i++) {
        treasureDisplays[i].innerHTML = "";
    }
    
    // Trade out has 10% chance of success for all quality levels.
    // Check if a trade out is successful...
    
    displayTradeOutMagicOrMundane.innerHTML = "";
    let die_roll = roll1dx(100);
    
    // Trade out was successful...
    if ( die_roll <= chanceOfTradeOutAsInt ) { // Defaults to 10. User can change this.
        displayTradeOut.innerHTML ="\nTrade out successful";
        
        // Check if the trade out is for Magic Items or Gem/Jewelry...
        die_roll = roll1dx(100);
        
        if ( die_roll <= chanceOfMagicItemAsInt ) { // Defaults to 1/20, 5%
            magicalOrMundaneItem = "magical item";
            displayTradeOutMagicOrMundane.innerHTML = "Magic Item(s)"
            getMagicItem();
            
        } else {
            magicalOrMundaneItem = "Non-Magical Item";
            displayTradeOutMagicOrMundane.innerHTML = "Non-Magical Item(s)";
            
            // Determine the QUALITY of the gem or jewelry...
            die_roll = roll1dx(6);
            
            if (treasureType.quality == "Major") {
                // I'm using compact code here because it only has multiplier formulas.
                const base = roll1dx(100) * 10;
                
                const multiplier = 
                    die_roll === 1 ? 1 :
                    die_roll <= 3 ? 8 :
                    die_roll <= 5 ? 12 :
                    20;

                die_roll = base * multiplier;
            
            } else if (treasureType.quality == "Medium") {
                // I'm using readable code here because it has different formulas.
                if ( die_roll == 1 ) {
                    die_roll = roll1dx(100);
                } else if ( die_roll == 2 || die_roll == 3 ) {
                    die_roll = (roll1dx(100) * 10) + 250;
                } else if ( die_roll == 4 || die_roll == 5 ) {
                    die_roll = (roll1dx(100) * 10) + 750;
                } else {
                    die_roll = roll1dx(100) * 100;
                }
                
            } else {
                // I'm using readable code here because it has different formulas.
                if ( die_roll == 1 ) {
                    die_roll = roll1dx(6);
                } else if ( die_roll == 2 || die_roll == 3 ) {
                    die_roll = roll1dx(100) + 25;
                } else if ( die_roll == 4 || die_roll == 5 ) {
                    die_roll = roll1dx(100) + 75;
                } else {
                    die_roll = roll1dx(100) * 10;
                }
            }
            displayTreasureQuality.innerHTML = `<h4>💎 ${treasureType.quality} gem or jewelry worth ${die_roll}gp</h4>`;
        }
    } else {
        // Trade out was unsuccessful...
        displayTradeOut.innerText ="Trade out failed."
    }
};



// # GET MAGIC ITEM (ALL QUALITY LEVELS)
function getMagicItem() {
    // console.log("Roll on the 'Magic Item' table...")
    // Determine the type of Major Magic Item...
    die_roll = roll1dx(6); // Change this to 6 for live!
    //die_roll = 6 // !!!! TESTING ONLY !!!!
    if ( die_roll == 1 ) {
        getPotion();

    } else if ( die_roll == 2 || die_roll == 3 ) {
        getScroll();

    } else if ( die_roll == 4 || die_roll == 5 ) {
        getWeaponArmor();

    } else {
        getMiscItem();
    }
};

function getSumOfArray(array) {
    const sumOfArray = array.reduce((a, b)=> a + b, 0);
    return sumOfArray;
};

function roll1dx(number_of_sides) {
    return Math.floor(Math.random() * number_of_sides) +1;
};

function rollxdx(number_of_dice, number_of_sides) {
    let dice_bag = [];
    for (let x = 1; x <= number_of_dice; x++) {
        let die = Math.floor(Math.random() * number_of_sides) +1;
        dice_bag.push(die);
    }
    return dice_bag;
};

function roll4d6DropLowest() {
    const rolls = [];

    for (let i = 0; i < 4; i++) {
        rolls.push(Math.floor(Math.random() * 6) +1);
    }

    rolls.sort((a, b) => a - b); // lowest -> highest
    rolls.shift(); // remove lowest
    
    return getSumOfArray(rolls); // sum highest 3
};

function removeSmallest(arr) {
    // Find the smallest value:
    const minValue = Math.min(...arr);

    // Find the index of the smallest value
    const minIndex = arr.indexOf(minValue);

    // Filter out the elements at that specific index:
    return arr.filter((_, index) => index !== minIndex);
};

function get_percentage(num, per) {
    return (num / 100) * per;
};

function getListLength(listName) {
    return listName.length;
};

function getRandomProtectionScroll() {
    const randomProtectionScrollIndex = Math.floor(Math.random() * protectionFrom2.length);
    return protectionFrom2[randomProtectionScrollIndex];
};


function getRandomSpellByLevel(user, level) {
    let list = [];

    if (user === "Cleric") {
        list = spellsCleric.filter(spell => spell.level === level);
    } else {
        list = spellsMage.filter(spell => spell.level === level);
    }

    if (list.length === 0) {
        return { name: "No spell found", level };
    }

    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
};