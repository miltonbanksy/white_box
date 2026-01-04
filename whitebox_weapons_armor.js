const magicalWeaponsAndArmor = [
    {roll: 1, modifier: 0, category: "armor or shield", type: "Cursed Armor or Shield", other: "none"},
    {roll: 2, modifier: 1, category: "missile weapon", type: "Missile Weapon(s)", other: "none"},
    {roll: 3, modifier: 1, category: "shield", type: "+1 Shield", other: "none"},
    {roll: 4, modifier: 1, category: "melee weapon", type: "+1 Melee Weapon", other: "none"},
    {roll: 5, modifier: 1, category: "melee weapon", type: "+1 Melee Weapon", other: "none"},
    {roll: 6, modifier: 1, category: "melee weapon", type: "+1 Melee Weapon", other: "none"},
    {roll: 7, modifier: 1, category: "armor", type: "+1 Armor", other: "none"},
    {roll: 8, modifier: 1, category: "armor", type: "+1 Armor", other: "none"},
    {roll: 9, modifier: 0, category: "weapon", type: "Cursed Weapon", other: "none"},
    {roll: 10, modifier: 2, category: "missile weapon", type: "+2 Missile Weapon(s)", other: "none"},
    {roll: 11, modifier: 2, category: "shield", type: "+2 Shield", other: "none"},
    {roll: 12, modifier: 2, category: "melee weapon", type: "+2 Melee Weapon", other: "none"},
    {roll: 13, modifier: 2, category: "armor", type: "+2 Armor", other: "none"},
    {roll: 14, modifier: 1, category: "melee weapon", type: "+1 Melee Weapon with Minor Ability", other: "Minor Ability"},
    {roll: 15, modifier: 3, category: "missile weapon", type: "+3 Missile Weapon(s)", other: "none"},
    {roll: 16, modifier: 3, category: "melee weapon", type: "+3 Melee Weapon", other: "none"},
    {roll: 17, modifier: 3, category: "shield", type: "+3 Shield", other: "none"},
    {roll: 18, modifier: 3, category: "armor", type: "+3 Armor", other: "none"},
    {roll: 19, modifier: 0, category: "unusual weapon", type: "Unusual Weapon (optional) or Re-roll", other: "none"},
    {roll: 20, modifier: 0, category: "unusual armor", type: "Unusual Armor (optional) or Re-roll", other: "none"}
];

const cursedArmorWeaponsShields = [
    {roll: 1, modifier: -1, type: "-1 Weapon or Armor"},
    {roll: 2, modifier: -1, type: "-1 Weapon or Armor"},
    {roll: 3, modifier: -1, type: "-1 Weapon or Armor"},
    {roll: 4, modifier: -2, type: "-2 Weapon or Armor"},
    {roll: 5, modifier: -3, type: "-3 Weapon or Armor"},
    {roll: 6, modifier: 0, type: "Attracts missiles - Grants a +1 to-hit bonus to attack on such missiles."}
];

const minorAbilitiesForMeleeWeapons = [
    {roll: 1, type: "+1 damage"},
    {roll: 2, type: "+1 damage"},
    {roll: 3, type: "+1 damage"},
    {roll: 4, type: "+1 damage"},
    {roll: 5, type: "Sheds light, 15 ft. radius"},
    {roll: 6, type: "Sheds light, 30 ft. radius"}
]

const magicMeleeWeapons = [
    {roll: 1, type: "Axe, battle"},
    {roll: 2, type: "Axe, hand"},
    {roll: 3, type: "Dagger"},
    {roll: 4, type: "Lance"},
    {roll: 5, type: "Mace, heavy"},
    {roll: 6, type: "Mace, light"},
    {roll: 7, type: "Spear"},
    {roll: 8, type: "Staff"},
    {roll: 9, type: "Sword, long"},
    {roll: 10, type: "Sword, short"},
    {roll: 11, type: "Sword, two-handed"},
    {roll: 12, type: "War Hammer"}
];



const magicMissileWeapons = [
    {roll: 1, type: "Arrows", action: () => rollxdx(2, 6)},
    {roll: 2, type: "Arrows", action: () => rollxdx(2, 6)},
    {roll: 3, type: "Arrows", action: () => rollxdx(2, 6)},
    {roll: 4, type: "Arrows", action: () => rollxdx(2, 6)},
    {roll: 5, type: "Arrows", action: () => rollxdx(2, 6)},
    {roll: 6, type: "Arrows", action: () => rollxdx(2, 6)},
    {roll: 7, type: "Arrows", action: () => rollxdx(2, 6)},
    {roll: 8, type: "Arrows", action: () => rollxdx(2, 6)},
    {roll: 9, type: "Stones", action: () => rollxdx(1, 10)},
    {roll: 10, type: "Stones", action: () => rollxdx(1, 10)},
    {roll: 11, type: "Spear", action: 1},
    {roll: 12, type: "Darts", action: () => rollxdx(2, 4)},
    {roll: 13, type: "Darts", action: () => rollxdx(2, 4)},
    {roll: 14, type: "Darts", action: () => rollxdx(2, 4)},
    {roll: 15, type: "Darts", action: () => rollxdx(2, 4)},
    {roll: 16, type: "Bolts, crossbow", action: () => rollxdx(2, 6)},
    {roll: 17, type: "Bolts, crossbow", action: () => rollxdx(2, 6)},
    {roll: 18, type: "Bolts, crossbow", action: () => rollxdx(2, 6)},
    {roll: 19, type: "Bolts, crossbow", action: () => rollxdx(2, 6)},
    {roll: 20, type: "Bolts, crossbow", action: () => rollxdx(2, 6)}
];

const magicUnusualWeapons = [
    {roll: 1, type: "+1 Blunt weapon that destroys undead", description: "Blunt weapons are the mace, sling, staff, and war hammer. Lesser undead types (fewer than 4 HD) don't get a saving throw; more powerful ones do."},
    {roll: 2, type: "+1 Thrown weapon that returns to hand", description: "These weapons are the hand axe, spear, and war hammer."},
    {roll: 3, type: "+1 Weapon", description: "Grants 1 additional attack/day"},
    {roll: 4, type: "+1 Weapon, +2 vs. particular type of foe", description: "Examples include dragons, giants, orcs, lycanthropes, undead, etc."},
    {roll: 5, type: "+1 Weapon, +4 vs. particular type of foe", description: "Examples include dragons, giants, orcs, lycanthropes, undead, etc."},
    {roll: 6, type: "+2 Weapon, +3 vs. particular type of foe", description: "Examples include dragons, giants, orcs, lycanthropes, undead, etc."},
    {roll: 7, type: "Weapon Flames", description: "Additional 1d6 fire damage: roll 1d4-1 for “to-hit” bonus."},
    {roll: 8, type: "Weapon Freezes", description: "Additional 1d6 cold damage: roll 1d4-1 for “to-hit” bonus."},
    {roll: 9, type: "Dancing Weapon", description: "Fights in the air after 3 rounds, as a +1d3 weapon."},
    {roll: 10, type: "Intelligent Weapon", description: "Roll 1d3 for to-hit bonus. There is a 10% chance that such a weapon may have the ability to cast a spell once per day. Such swords generally can communicate with their bearers, and often (25% chance) can speak audibly."},
];

const magicUnusualArmor = [
    {type: "Armor of Arrow Deflection", description: "+2 against missile fire."},
    {type: "Demonic Armor", description: "Possessed by a spirit or demon, with effects to be determined by the Referee."},
    {type: "Ethereal Armor", description: "+3 plate mail that also allows the wearer to become insubstantial and incorporeal 50 times, after which it reverts to normal +3 platemail. In ethereal form, the wearer cannot be hit and cannot attack (unless the opponent is also ethereal)."},
    {type: "Fiery Armor", description: "+1 armor that is surrounded by flames. These flames deal 1d6 damage to melee attackers."},
    {type: "Bear-Skin", description: "This magical suit of leather armor allows the wearer to transform into a bear once per day for up to ten combat rounds. While in bear form their armor class is 2 [17] and they may attack three times per round with their massive claws and dangerous bite. These attacks inflict 1d6 points of damage."},
    {type: "Bone Mail", description: "Bone Mail grants its borrower the ability to Banish Undead once per day, even if they are not a cleric. However, any undead which are successfully turned are brought to heel as if the wearer of the Bone Mail were of Evil/Chaotic alignment. Each time this ability is used, the player must roll 1d100. If the result is 5 or less, the wearer of the armor becomes Evil/Chaotic in alignment. If alignments are not used, the character will find themselves bound under a powerful Quest spell of the referee's design."},
    {type: "Carapace Plate", description: "Crafted from the shell of a giant ant or similar monstrous insect, the wearer of this armor will never be attacked by insects unless he attacks them first. This includes giant fire beetles, giant centipedes, and even giant spiders."},
    {type: "Dragon Scale Mail", description: "Crafted from dragon hide. It is extraordinarily rare and requires an expert armor to craft. It provides the protection of plate armor, but only weighs 15 lbs."},
    {type: "Dwarf-Forged Plate", description: "Dwarf-forged steel is incredibly strong and very light. Dwarf-forged plate provides a modifier of -7 [+7] to the wearer's armor class and weighs only 30 lbs. It can only be worn by dwarves."},
    {type: "Elven Chain Mail", description: "Elven smiths craft this armor from special silver which has been kissed by starlight. It functions like normal chain mail, but weighs only 5 lbs and elves are able to cast spells while wearing elven chain mail. Almost all elven chain is made to fit elves, though suits made to fit other races are crafted on rare occasions."}
    //add more from WB Omnibus... (don't forget the comma on the prev line!)
];

