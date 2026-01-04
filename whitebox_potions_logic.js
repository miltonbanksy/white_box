const oddTreasurePotions = [
    { start: 1, end: 3, value: "Animal Control", range: "Self", duration: "1d6+1 turns", description: "The target creature(s) falls under the user's influence. Up to 3d6 monsters of fewer than 3 HD are affected."},
    { start: 4, end: 6, value: "Clairaudience", range: "Self", duration: "1d6+1 turns", description: "The user can hear through solid obstacles."},
    { start: 7, end: 9, value: "Clairvoyance", range: "Self", duration: "1d6+1 turns", description: "The user can see through solid obstacles."},
    { start: 10, end: 12, value: "Diminution", range: "Self", duration: "1d6+1 turns", description: "Imbiber shrinks and becomes 6 inches tall."},
    { start: 13, end: 15, value: "Dragon Control", range: "Self", duration: "1d6+1 turns", description: "The target creature(s) falls under the user's influence. 1d3 dragons of a specific type (determined randomly by the Referee) are affected."},
    { start: 16, end: 18, value: "Ethereality", range: "Self", duration: "1d6+1 turns", description: "The imbiber of this potion can move through solid objects but cannot attack. Equipment also becomes ethereal."},
    { start: 19, end: 21, value: "Fire Resistance", range: "Self", duration: "1d6+1 turns", description: "Grants immunity to normal fire, +2 saving throws against fire attacks, and half damage to magic fire attacks that do not permit saving throws."},
    { start: 22, end: 24, value: "Flying", range: "Self", duration: "1d6+1 turns", description: "This spell grants the power of flight, with a movement rate of 120 feet per round. The Referee rolls for the duration of the spell in secret and does not disclose this information to the Player."},
    { start: 25, end: 27, value: "Gaseous Form", range: "Self", duration: "1d6+1 turns", description: "The user's body turns to a mist that he controls, allowing him to access any place that isn't airtight. Equipment is left behind; only the body becomes gaseous."},
    { start: 28, end: 30, value: "Giant Strength", range: "Self", duration: "1d6+1 turns", description: "Character gains strength above and beyond 18. Gains an additional 1d6 to damage rolls and +4 “to-hit”."},
    { start: 31, end: 33, value: "Growth", range: "Self", duration: "1d6+1 turns", description: "Character grows and becomes 30 feet tall."},
    { start: 34, end: 36, value: "Heroism", range: "Self", duration: "1d6+1 turns", description: " +2 to attacks and damage."},
    { start: 37, end: 39, value: "Invisibility", range: "Self", duration: "1d6+1 turns", description: "The object of this spell, whether a person or a thing, becomes invisible to both normal vision and to darkvision. If the Referee is using the invisibility rules unchanged, the result is that an invisible creature cannot be attacked unless its approximate location is known, and all attacks are made at -4 to-hit."},
    { start: 40, end: 42, value: "Invulnerability", range: "Self", duration: "1d6+1 turns", description: "+2 saving throws, opponents attack at -2."},
    { start: 43, end: 45, value: "Levitation", range: "Self", duration: "1d6+1 turns", description: "Levitation allows up or downward movement at a rate of up to 6 feet per minute (60 feet per turn), and the caster cannot levitate more than 20 feet per level from the ground level where the spell was cast (such range being applied both to movement into the air and to downward movement into a pit or chasm)."},
    { start: 46, end: 48, value: "Plant Control", range: "Self", duration: "1d6+1 turns", description: "The target creature(s) falls under the user's influence. Up to 3d6 monsters of fewer than 3 HD are affected."},
    { start: 49, end: 55, value: "Poison", range: "Self", duration: "1d6+1 turns", description: "Save or die."},
    { start: 56, end: 58, value: "Slipperiness", range: "Self", duration: "1d6+1 turns", description: "Slipperiness: Except for the soles of the feet and the palms of the hands, the character has a virtually frictionless surface."},
    { start: 59, end: 61, value: "Treasure Finding", range: "Self", duration: "1d6+1 turns", description: "Character can detect hoards of treasure within 400 feet of their current location."},
    { start: 62, end: 64, value: "Undead Control", range: "Self", duration: "1d6+1 turns", description: "Undead Control: 2d4 undead of fewer than 4 HD and 1d4 undead of 4+ hit dice fall under the imbiber's control as per the Charm Monster spell."},
    { start: 65, end: 75, value: "Extra Healing", range: "Self", duration: "1d6+1 turns", description: "Cures 3d6+3 HP worth of damage."},
    { start: 76, end: 100, value: "Healing", range: "Self", duration: "1d6+1 turns", description: "Cures 1d6+1 HP worth of damage."}
];



function getPotion() {
    displayTreasureQuality.innerHTML = "<h3>🧪 Potion(s)</h3>";
    let listPotions = [];

    // Get the number of potion table rolls, based on the pre-defined Quality...
    let numberOfPotionRolls = treasureType.potion_rolls;

    for ( rolls = 1; rolls <= numberOfPotionRolls; rolls++ ) {
        die_roll = roll1dx(100);
        
        let potion = oddTreasurePotions.find(
            item => die_roll >= item.start && die_roll <= item.end
        );

        listPotions.push(potion);
    };

    listPotions.forEach(potion => {
        const heading4Element = document.createElement('div');
        const linebreakElement = document.createElement('br');
        heading4Element.innerHTML = `<b>Potion of ${potion.value}</b><br>${potion.description}, Duration: 1d6+1 turns`;
        displayTreasureDescription.appendChild(heading4Element);
        displayTreasureDescription.appendChild(linebreakElement);
    });
    
};