function getWeaponArmor() {
            let quantitySum = 0;

            let weaponTypeIndex = 0; // I should aim to lock this into a function
            let weaponType = "";
            let weaponDescription = "";
            let weaponAbilityIndex = "";
            let weaponAbility = "";
            let weaponSpellCasting = "";
            let weaponCommunication = "";

            // HELPER FUNCTIONS

            function getMagicWeapon(magicWeaponTable) {
                weaponTypeIndex = Math.floor(Math.random() * magicWeaponTable.length);
                return magicWeaponTable[weaponTypeIndex];
            };

            function quantity(weaponType) {
                if (typeof weaponType.action === "function") {
                    const rolls = weaponType.action();  // call the function
                    quantitySum = rolls.reduce((a, b) => a + b, 0 );
                } else {
                    quantitySum = weaponType.action;    // use the string or number
                }
                return quantitySum;
            };

            function singularOrPluralcheck(quantitySum, displayType) {
                if (quantitySum === 1 && displayType.endsWith("s")) {
                    return displayType.slice(0, -1);
                } else {
                    return displayType;
                }
            };
            
            die_roll = roll1dx(8) + treasureType.modifier; // Roll 1d8 + Quality mod
            // die_roll = 14; // FOR TESTING ONLY !!!!!!!!!!!

            if ( die_roll == 1 ) {
                // CURSED ARMOR OR SHIELD (working √)
                let curseMod = "";
                die_roll = roll1dx(2);
                // Using ternary operator for either/or...
                const message = (die_roll == 1) ? "Armor" : "Shield";
                die_roll = roll1dx(6);
                if (die_roll == 1 || die_roll == 2 || die_roll == 3) {
                    curseMod = "-1 penalty to weapon or armor";
                } else if (die_roll == 4) {
                    curseMod = "-2 penalty to weapon or armor";
                } else if (die_roll == 5) {
                    curseMod = "-3 penalty to weapon or armor";
                } else {
                    curseMod = "Attracts Missiles and grants those missiles a +1 'to-hit' bonus.";
                }
                console.log(`Cursed ${message}`);
                displayTreasureDescription.innerHTML = `<b>💀 Cursed ${message}, ${curseMod}</b>`;
                
            } else if ( die_roll == 2 ) {
                // MAGIC MISSLE WEAPON +1 (working √)
                weaponType = getMagicWeapon(magicMissileWeapons);
                let displayType = weaponType.type;
                quantitySum = quantity(weaponType);
                displayType = singularOrPluralcheck(quantitySum, displayType);
                displayTreasureDescription.innerHTML = `<b>${quantitySum} Magic ${displayType} +1 to hit</b>`;
                
            } else if ( die_roll == 3 ) {
                // MAGIC SHIELD +1 (working √)
                displayTreasureDescription.innerHTML = "<b>Magic Shield +1</b>";

            } else if ( die_roll == 4 || die_roll == 5 || die_roll == 6 ) {
                // MAGIC MELEE WEAPON +1 (working √)
                weaponType = getMagicWeapon(magicMeleeWeapons);
                displayTreasureDescription.innerHTML = `<b>Magic ${weaponType.type} +1</b>`;

            } else if ( die_roll == 7 || die_roll == 8 ) {
                // MAGIC ARMOR +1 (not tested)
                displayTreasureDescription.innerHTML = "<b>Magic Armor +1</b>";

            } else if ( die_roll == 9 ) {
                // CURSED WEAPON (not tested)
                die_roll = roll1dx(6);
                if (die_roll == 1 || die_roll == 2 || die_roll == 3) {
                    curseMod = "-1 (Choose weapon or armor)";
                } else if (die_roll == 4) {
                    curseMod = "-2 (Choose weapon or armor)";
                } else if (die_roll == 5) {
                    curseMod = "-3 (Choose weapon or armor)";
                } else {
                    curseMod = "Attracts Missiles and grants those missiles a +1 'to-hit' bonus.";
                }
                displayTreasureDescription.innerHTML = `<b>💀 Cursed Weapon ${curseMod}</b>`;

            }  else if ( die_roll == 10 ) {
                // MAGIC MISSILE WEAPON +2 (working √)
                weaponType = getMagicWeapon(magicMissileWeapons);
                let displayType = weaponType.type;
                quantitySum = quantity(weaponType);
                displayType = singularOrPluralcheck(quantitySum, displayType);
                displayTreasureDescription.innerHTML = `<b>${quantitySum} Magic ${displayType} +2 to hit</b>`;

            } else if ( die_roll == 11 ) {
                // MAGIC SHIELD +2 (not tested)
                displayTreasureDescription.innerHTML = "<b>Magic Shield +2</b>";

            } else if ( die_roll == 12 ) {
                // MAGIC MELEE WEAPON +2 (not tested)
                weaponType = getMagicWeapon(magicMeleeWeapons);
                displayTreasureDescription.innerHTML = `<b>Magic ${weaponType.type} +2 to hit</b>`;

            } else if ( die_roll == 13 ) {
                // MAGIC ARMOR +2 (not tested)
                displayTreasureDescription.innerHTML = "<b>Magic Armor +2</b>";

            } else if ( die_roll == 14 ) {
                // MAGIC MELEE WEAPON +1 PLUS MINOR ABILITY (working √)
                weaponType = getMagicWeapon(magicMeleeWeapons);
                weaponAbilityIndex = Math.floor(Math.random() * minorAbilitiesForMeleeWeapons.length);
                weaponAbility = minorAbilitiesForMeleeWeapons[weaponAbilityIndex];
                displayTreasureDescription.innerHTML = `<b>Magic ${weaponType.type} +1 to hit, ${weaponAbility.type}</b>`;
                
            }  else if ( die_roll == 15 ) {
                // MAGIC MISSILE WEAPON +3 (not tested)
                weaponType = getMagicWeapon(magicMissileWeapons);
                let displayType = weaponType.type;
                quantitySum = quantity(weaponType);
                displayType = singularOrPluralcheck(quantitySum, displayType);
                displayTreasureDescription.innerHTML = `<b>${quantitySum} Magic ${displayType} +3 to hit</b>`;

            } else if ( die_roll == 16 ) {
                // MAGIC MELEE WEAPON +3 (not tested)
                weaponType = getMagicWeapon(magicMeleeWeapons);
                displayTreasureDescription.innerHTML = `<b>Magic ${weaponType.type} +3 to hit</b>`;

            } else if ( die_roll == 17 ) {
                // MAGIC SHIELD +3 (not tested)
                displayTreasureDescription.innerHTML = "<b>Magic Shield +3</b>";
                
            } else if ( die_roll == 18 ) {
                // MAGIC ARMOR +3 (not tested)
                displayTreasureDescription.innerHTML = "<b>Magic Armor +3</b>";

            } else if ( die_roll == 19 ) {
                // Unusual Weapon or roll again
                weaponTypeIndex = Math.floor(Math.random() * magicUnusualWeapons.length);
                weaponType = magicUnusualWeapons[weaponTypeIndex].type;
                weaponDescription = magicUnusualWeapons[weaponTypeIndex].description;
                
                if (weaponType == "Intelligent Weapon") {
                    mod = Math.floor(Math.random() * 3) +1;
                    die_roll = roll1dx(100);
                    if (die_roll <= 10) {
                        weaponSpellCasting = "This weapon can cast a spell once per day.";
                    } else {
                        weaponSpellCasting = "This weapon has no spellcasting ability.";
                    }

                    die_roll = roll1dx(100);
                    if (die_roll <= 25) {
                        weaponCommunication = "It is able to communicate audibly with its bearer.";
                    } else {
                        weaponCommunication = "It is able to communicate with its bearer, but not audibly.";
                    }
                    displayTreasureDescription.innerHTML = `<b>${weaponType}</b> +${mod} to hit<br>${weaponSpellCasting}<br>${weaponCommunication}`;
                } else {
                    displayTreasureDescription.innerHTML = `<b>${weaponType}</b><br>${weaponDescription}`;
                }

            } else if ( die_roll == 20 ) {
                // Unusual Armor or roll again
                weaponTypeIndex = Math.floor(Math.random() * magicUnusualArmor.length);
                weaponType = magicUnusualArmor[weaponTypeIndex].type;
                weaponDescription = magicUnusualArmor[weaponTypeIndex].description; 
                displayTreasureDescription.innerHTML = `<b>${weaponType}</b><br>${weaponDescription}</b>`;
            };            
        };