const wandLesser = [
    {roll: 1, level: 1, type: "with 10 charges."},
    {roll: 2, level: 1, type: "with 10 charges."},
    {roll: 3, level: 2, type: "with 5 charges."},
    {roll: 4, level: 2, type: "with 5 charges."},
    {roll: 5, level: 3, type: "with 2 charges."},
    {roll: 6, level: 3, type: "with 2 charges."}
];

const wandGreater = [
    {roll: 1, level: 3, type: "spell, holds 10 charges", action: "tbc..."},
    {roll: 2, level: 4, type: "spell, holds 10 charges", action: "tbc..."},
    {roll: 3, level: "none", type: "Wand of Detection (enemies)", description: "Detects enemies in a radius of 60 feet, provided that the enemies are actually thinking hostile thoughts. Always active when held, does not use charges."},    
    {roll: 4, level: "none", type: "Wand of Detection (metal)", description: "Detects large caches of metal, with a range of 20 feet. The wand's user also gets a vague sense of the metal's type. Always active when held, does not use charges."},
    {roll: 5, level: "none", type: "Wand of Detection (magic)", description: "Functions as a Detect Magic spell with a range of 20 feet. The wand's user gets a vague sense of what sort of magic is being detected. Always active when held, does not use charges."},
    {roll: 6, level: "none", type: "Wand of Detection (traps & secret doors)", description: "Detects traps and secret doors with a range of 20 feet. Always active when held, does not use charges."},
    {roll: 7, level: "none", type: "Wand of Polymorph", description: "Casts either Polymorph (self) or Polymorph (other), carries 10 charges."},
    {roll: 8, level: "none", type: "Wand of Fear", description: "Causes creatures in a cone-shaped path to flee (saving throw). There is a 60% chance that they will drop whatever they are holding. The cone extends 60 feet to a base 30 feet across. Holds 25 charges and cannot be recharged)."},
    {roll: 9, level: "none", type: "Wand of Cold", description: "Casts a cone of cold 60 feet to a base 30 feet across. Creatures in the cone take 6d6 damage (saving throw for half damage). Holds 25 charges and cannot be recharged)."},
    {roll: 10, level: "none", type: "Wand of Paralyzing", description: "Casts a cone of paralysis 60 feet to a base 30 feet across. Creatures in the cone are paralyzed for 3d6 turns. Holds 25 charges and cannot be recharged)."}
];

const ringLesser = [
    {roll: 1, type: "Fire Resistance", description: "+5 to saving throws vs. magical fire and grants immunity to normal fire."},
    {roll: 2, type: "Invisibility", description: "Turns wearer invisible."},
    {roll: 3, type: "Mammal control", description: "The wearer controls 1d6 mammals at a range of up to 60 feet. Control does not extend to humans or giant animals."},
    {roll: 4, type: "Poison Resistance", description: "+5 to saving throws vs. poison."},
    {roll: 5, type: "Protection, +1", description: "Grants bonus to armor class and saving throws."},
    {roll: 6, type: "Protection, +2", description: "Grants bonus to armor class and saving throws."}
];

const ringGreater = [
    {roll: 1, type: "Human Control", description: "Allows the wearer to cast Charm Person once per day and maintain the charm on up to 3 individuals at a time."},
    {roll: 2, type: "Three Wishes", description: "Grants the wearer 3 wishes; outrageous wishes backfire."},
    {roll: 3, type: "Regeneration", description: "The wearer regenerates 1 HP/round and thus cannot die unless the ring is removed or the body burned."},
    {roll: 4, type: "Djinn Summoning", description: "The wearer of this ring can summon a djinn."},
    {roll: 5, type: "Shooting Stars", description: "Once per day, this ring can summon 1d6 flaming meteors from the depths of space. Each meteor can target a separate enemy and deals 3d6 damage. If used indoors or underground, the meteors will strike whatever is directly above the target."},
    {roll: 6, type: "X-ray Vision", description: "The wearer has x-ray vision at a range of 40 feet. The maximum distance through which the character can see through solid rock is just over 10 feet, though solid metals (other than lead) is 1 foot, and through lead is 1 inch."},
    {roll: 7, type: "Telekinesis", description: "The wearer can mentally lift and move up to 200 pounds of weight at a range of 120 feet."},
    {roll: 8, type: "Spell Turning", description: "Any spell (other than from a wand, etc.) directly aimed at the wearer of this ring is partially reflected back at the caster. Roll a d100 to determine how much of the spell's power bounces back; the exact determination of what happens is up to the Referee."},
    {roll: 9, type: "Spell Storing (Magic-user)", description: "The ring contains 1d6 Magic-user spells. Roll 1d6 for each spell to determine their spell levels. The wearer (if a Magic-user) can cast these spells as if they were his own memorized and prepared spells. Once the spell is cast, it cannot be cast a second time until the caster rests for 8 hours."},
    {roll: 10, type: "Spell Storing (Cleric)", description: "The ring contains 1d6 Cleric spells. Roll 1d6 for each spell to determine their spell levels (re-roll a 6). The wearer (if a Cleric) can cast these spells as if they were his own memorized and prepared spells. Once the spell is cast, it cannot be cast a second time until the caster rests for 8 hours."}
];

const miscItemsLesser = [
    {item: "Arrow of Direction", description: "Points the direction of whatever the owner requests. Cannot be used more than 7 times in a single week. Usable by: All Classes.", action: ""},
    {item: "Bag of Holding", description: "The inside of this bag is larger than the outside. The inside dimensions are roughly 10 x 5 x 3 feet, but the bag can carry up to 1,000 pounds of weight. If it is not empty, the bag weighs 50 pounds, no matter how much weight it actually contains. Usable by: All Classes.", action: ""},
    {item: "Boots of Elvenkind", description: "The wearer moves with complete silence. Usable by: All Classes.", action: ""},
    {item: "Boots of Speed or Leaping", description: "Boots of Speed double the wearer's movement rate, but require complete rest for a period of time equivalent to the amount of time they were used. Boots of Leaping allow the wearer to make prodigious leaps 10 feet high and up to 30 feet horizontally. These boots also double movement rates, but outdoors only. They do not require the wearer to rest after using them. Usable by: All Classes.", action: ""},
    {item: "Bracers of Defense, AC 6 [13]", description: "These bracers improve the wearer's armor class (whatever part of it is due to actual armor) to the stated level—there is no effect if the wearer is already armored to the same or higher degree. The AC granted by the bracers can be increased by magical rings or other protective magics. Usable by: All Classes.", action: ""},
    {item: "Chime of Opening", description: "Sounding this small chime opens any door, even if the door is barred or Wizard Locked. Usable by: All Classes.", action: "Sounding this small chime opens any door, even if the door is barred or Wizard Locked. Usable by: All Classes."},
    {item: "Cloak of Elvenkind", description: "The wearer is almost, but not quite, invisible. Usable by: All Classes.", action: ""},
    {item: "Cloak of Protection, +1", description: "This cloak improves the wearer's AC by 1, and grants a bonus of +1 on saving throws. Usable by: All but Fighters.", action: ""},
    {item: "Cursed Item", description: "NOT FIXED!"},
    {item: "Decanter of Endless Water", description: "This jug pours out one gallon of water per minute when unstoppered. Usable by: All Classes.", action: ""},
    {item: "Dust of Appearance or Disappearance", description: "Dust of Appearance is tossed in a radius of 10 feet around the user, and makes any invisible, astral, displaced, out-of-phase, or dimensional thing completely visible. The dust generally comes in a pouch, with enough for 20-30 uses. Dust of Disappearance works in the opposite way: when it is sprinkled in a 10 foot radius, everything therein becomes invisible for 5d6 turns. Normal means of detecting invisibility (such as a Detect Invisibility spell) are not strong enough to work against the dust's powerful enchantment. Usable by: All Classes.", action: ""},
    {item: "Dust of Sneezing and Choking", description: "Pouches containing this dust ordinarily contain only enough for one “dose.” When scattered in a radius of 10 feet, the dust causes all in the area to make a saving throw or die. If the nature of the dust is identified before it is experimented with, it can be used as a devastating thrown weapon. Usable by: All Classes.", action: ""},
    {item: "Gauntlets of Swimming and Climbing", description: "These gloves permit the wearer to swim at a rate of 18, and climb sheer walls with a 95% chance of success per ten feet of climbing. Usable by: all but Magic-users.", action: ""},
    {item: "Horseshoes of Speed", description: "Double a horse's movement rate. Usable by: Horses.", action: ""},
    {item: "Luckstone (+1 to saving throws and “to-hit” rolls)", description: "This stone grants +1 to saving throws and “to-hit” rolls. Usable by: All Classes.", action: ""},
    {item: "Manual of Beneficial Exercise", description: "Reading this tome increases the reader's strength by 1 point (to a maximum of 18). Usable by: All Classes.", action: ""},
    {item: "Pipes of the Sewers", description: "These pipes summon 10d6 giant rats. The piper does not need to concentrate once the rats arrive (which takes 1d4 x 10 minutes), but it is wise to do so. When the rats arrive, there is a 5% chance that they will not obey him, and if he ceases to concentrate on his tune there is a 10% chance that he will lose control of them. Every subsequent round in which he fails to concentrate there is another chance to lose control, and the chance increases by 10% each time it is made (first round, 10%, second round 20%, etc.). Usable by: All Classes.", action: ""},
    {item: "Rope of Climbing", description: "A 50 foot length of rope that leaps magically upward and can tie and untie itself upon command. Usable by: All Classes.", action: ""},
    {item: "Rope of Entanglement", description: "This rope, on command, twines itself around as many as 2d4+1 human-sized foes. The rope cannot be hit except with a natural roll of 20 (it is magical), and can sustain 20 hit points of damage before fraying and becoming useless. Usable by: All Classes.", action: ""},
    {item: "Spade of Excavation", description: "This ordinary-looking spade digs by itself when commanded, shoveling out 1 cubic yard (3 x 3 x 3) per ten minutes. Usable by: Fighters.", action: ""}
];

const miscItemsMedium = [
    {item: "Amulet Against Scrying", description: "Protects the wearer from all scrying, such as Detect Thoughts or being viewed through a crystal ball. Usable by: All Classes."},
    {item: "Boots of Levitation", description: "These boots allow the wearer to Levitate (as per the spell) with unlimited duration. Usable by: All Classes."},
    {item: "Bracers of Defense, AC 4 [15] or 2 [17]", description: "These bracers improve the wearer's armor class (whatever part of it is due to actual armor) to the stated level—there is no effect if the wearer is already armored to the same or higher degree. The AC granted by the bracers can be increased by magical rings or other protective magics. Usable by: All Classes."},
    {item: "Carpet of Flying", description: "The carpet can carry as many as three people, and travels at a speed of 18 when it has more than one passenger. With only one rider, the carpet moves at a rate of 30. Usable by: All Classes."},
    {item: "Cloak of Displacement", description: "The wearer appears to be in a slightly different location than he really is. His AC improves by 2, and he gains a +2 saving throw against any targeted attack upon him. Usable by: All Classes."},
    {item: "Cloak of Protection, +2 or +3", description: "This cloak improves the wearer's armor class by 2 (or 3), and grants a bonus of +2 (or +3) on saving throws. Usable by: All but Fighters."},
    {item: "Deck of Many Things", description: "(See WBFMAG, p. 134.)"},
    {item: "Figurine of the Onyx Dog", description: "This stone figure transforms into a living hound of stone when its command word is spoken. It will seek whatever the owner tells it to find, without stopping until it succeeds or is killed. It has a 75% chance to detect objects that are invisible or hidden (and of course its sense of smell detects invisible and hidden creatures with almost perfect success). For purposes of defense and attack, the stone dog is treated as a wolf. It may be used twelve times before the statuette becomes non-magical. Usable by: All Classes."},
    {item: "Gauntlets of Ogre Power", description: "These gauntlets raise the wearer's strength to that of an ogre. Hit probability is not increased above normal, but damage bonuses from strength are increased to +4 (not cumulative with the wearer's existing strength bonus, if any). Usable by: all but Magic-users."},
    {item: "Helm of Read Magic and Languages", description: "The wearer can read all languages, including magic script. Usable by: All Classes."},
    {item: "Hole, portable", description: "A piece of dark cloth about five feet in diameter. It is actually the mouth of an inter-dimensional hole 10 feet deep—items and people can fall through it or climb down into it once it is placed on the ground. The piece of cloth can actually be pulled in from the inside to close the hole off entirely, although there is no source of fresh air within, and staying inside will asphyxiate the inhabitant in a short time. The piece of cloth can be picked up and carried off whenever desired—hence the name “portable.” Usable by: All Classes."},
    {item: "Horn of Valhalla, bronze", description: "Summons 2d4 berserk warriors (3 HD) to assist the one who winded the horn. Usable by: Fighters and Clerics only."},
    {item: "Horn of Valhalla, silver", description: "Summons 2d4 berserk warriors (2 HD) to assist the one who winded the horn. Usable by: All Classes."},
    {item: "Jug of Alchemy", description: "This jug produces whatever liquid is desired, in a commonly used large quantity (e.g., 10 gallons of water, but only five gallons of wine). It may be used no more than 7 times per day, and will only produce the liquid first requested in that day. It does not produce magical liquids. Usable by: All Classes."},
    {item: "Manual of Quickness", description: "Reading this tome increases the reader's dexterity by 1 point (to a maximum of 18). Usable by: All Classes."},
    {item: "Medallion of Detect Thoughts (ESP)", description: "Functions as a Detect Thoughts (ESP) spell within 30 feet (75%) or 90 feet (25%). Usable by: All Classes."},
    {item: "Mirror of Mental Scrying", description: "This hand-mirror (it might also be found as a smaller mirror on a necklace) allows the user to cast Clairaudience, Clairvoyance, and Detect Thoughts (ESP), with the normal range, but for an unlimited time. The mirror will also answer a question about what it portrays (the answer is likely to be quite cryptic), but only one question per week is possible. Usable by: All Classes."},
    {item: "Robe of Blending", description: "These robes make the wearer appear to be a part of his surroundings, including the ability to appear as another one of a group of nearby creatures. He will appear to be a small tree when in forest surroundings, a sand formation in the desert, etc. Creatures with 10+ hit dice (or levels of experience) have a 10% chance per level (or HD) above 9th to perceive the wearer as a robed figure rather than a part of the surroundings. Usable by: All Classes."},
    {item: "Robe of Eyes", description: "Hundreds of eyes are woven and embroidered into the fabric of these magical robes, granting the wearer tremendous powers of supernatural perception. In a radius of 240 feet, anything he looks upon is seen for what it is: he sees invisible creatures, he perceives illusions, and his sight even extends into the astral plane. He cannot be ambushed or otherwise taken by surprise, and he can follow the trail of anything that has passed by within the last day. Usable by: Magic-users only."},
    {item: "Robe of Wizardry", description: "This robe grants the wearer the ability to cast Charm, Polymorph, and Hold Person with a 95% chance of success. The robes may be tied to specific alignments. Usable by: Magic-users only."}
];

const miscItemsGreater = [
    {item: "Amulet of Demon Control", description: "Functions as a Protection from Chaos spell, and allows the wearer to attempt to cast Charm Monster upon a demon. Success means that the demon is enslaved for 1d6 weeks, whereupon it becomes free. Usable by: Magic-users and Clerics."},
    {item: "Beaker of Potions", description: "This small jug fills itself with the requested potion, out of the 1d4+1 potions it is able to produce. The jug can be used as many times per week as it can create potions. Usable by: All Classes."},
    {item: "Censer, Bowl, Brazier, or Stone of Controlling Elementals", description: "Censers control air elementals, bowls (when filled) control water elementals, braziers control fire elementals, and Stones control earth elementals. These items can be used to summon a 12 HD elemental of the appropriate type. Generally, it takes 10 minutes to prepare the object for use. Usable by: Magic-users."},
    {item: "Crystal Ball", description: "Allows the user to see what he desires to see, over a considerable distance. A crystal ball may not be used more than thrice per day, or the user will be driven mad. Certain spells and other precautions may be used to prevent being seen through a crystal ball. Some crystal balls communicate sound or even thoughts from the area being scryed, although these are rare. Usable by: Magic-users."},
    {item: "Efreeti Bottle", description: "The efreeti of the bottle will serve the bottle's owner for a year and a day unless it is accidentally released from servitude. Usable by: All Classes."},
    {item: "Figurine of the Golden Lions", description: "A small stone figurine that transforms into a lion when the command word is spoken, fighting at the owner's orders. If it is slain, it turns back into a figurine, but may be used again. The figurine may be used once per week, and no more. Usable by: All Classes."},
    {item: "Gauntlets of Dexterity", description: "When worn, these gloves grant a bonus of +2 to the wearer's dexterity (to a maximum of 18). Usable by: All Classes."},
    {item: "Gem of Seeing", description: "A gem of seeing is used as a lens, and shows the truth of what it sees, cutting through illusions of all kinds, even very powerful ones. Usable by: All Classes."},
    {item: "Girdle of Giant Strength", description: "This wide belt grants the wearer the strength of a hill giant (+8 strength damage, not cumulative with any existing strength bonuses). It does not increase “to-hit” probability. Usable by: All Classes."},
    {item: "Helm of Fiery Brilliance", description: "This prodigiously powerful helm grants many benefits to the wearer. He gains a +10 on saving throws against fire damage, and can create a Wall of Fire himself. Fighters wearing the helm may command a weapon in hand to flame (+1d6 damage). Magic-users wearing the helm can add +1 to each die of damage inflicted by a Fireball spell. Clerics wearing the helm can ignite objects within 30 feet at will, and may cast two Light or Continual Light spells for each one actually prepared. The wearer of this helm is likely to be attacked by any air elemental creatures, but fire elemental types (such as efreet or salamanders) will be favorably disposed toward the wearer. Usable by: All Classes."},
    {item: "Helm of Teleportation", description: "When the wearer casts a Teleportation spell on himself, while wearing the helm, he may teleport himself without error, anywhere he desires. The helm does not permit the casting of a Teleportation spell on anyone other than the wearer. Usable by: Magic-users."},
    {item: "Horn of Blasting", description: "This horn, when blown, has the same effect on structures as a catapult, and causes 2d6 points of damage to creatures, deafening them for 10 minutes as well. The cone of sound is 100 feet long, and widens to a base of 20 feet (the “point” of the cone, at the horn's mouth, is 10 feet wide). Usable by: All Classes."},
    {item: "Horn of Valhalla, iron", description: "Summons 2d4 berserk warriors (4 HD) to assist the one who winded the horn. Usable by: Fighters."},
    {item: "Lenses of Charming", description: "These lenses, when placed over the eyes, give the wearer the ability to charm those who look into his eyes (as per a Charm Person spell). The saving throw against the power of the lenses is made at -2. Usable by: All Classes."},
    {item: "Libram, magical (level gain)", description: "Magical librams grant a level of experience to the reader, if the reader is of the right class. Randomly determine the class for which the libram is written."},
    {item: "Manual of the Golems", description: "This book contains the basic instructions and formulae for creating a single type of golem. The process is expensive, and the creator must have achieved a certain level of magical expertise in order to use the book, but these are priceless repositories of forgotten lore. Such books are often warded, by the original owner, from the touch of anyone not of the Magic-user class, enchanted to inflict damage or even the loss of a level. Usable by: Magic-users only."},
    {item: "Manual of Intelligence", description: "Reading this tome increases the reader's intelligence by 1 point (to a maximum of 18). Usable by: All Classes."},
    {item: "Manual of Wisdom", description: "Reading this tome increases the reader's wisdom by 1 point (to a maximum of 18). Usable by: All Classes."},
    {item: "Necklace of Fireballs", description: "This necklace is hung with 3d4 little baubles. When thrown, the baubles explode into 6d6 fireballs (per the spell). Usable by: All Classes."},
    {item: "Symbol—Scarab of Insanity", description: "This is a carving of a scarab-beetle, or perhaps the petrified remains of a real one. When the scarab is displayed, all creatures with 9 or fewer hit dice, within a radius of 30 feet, fall into temporary insanity lasting for 2 hours. Creatures with 10+ hit dice still do not receive a saving throw, but have a 1 in 4 chance to overcome the scarab's insidious influence. The scarab may be used 12 times, after which it crumbles to dust. At the option of the Referee, it might be recharged but with a 5% chance per charge that the item will be destroyed. Usable by: All Classes."}
];

const staves = [
    {item: "Healing", description: "Cures 1d6+1 hit points of damage per charge."},
    {item: "Command", description: "A charge can be used to control humans (as per Charm Person), plants, or animals."},
    {item: "Snake, the", description: "+1 “to-hit” and +1 damage. When commanded (by using a charge) the staff coils around the target with a successful hit and pinions the victim for 1d4 x 10 minutes. The victim must be about the size of a human or smaller to use this power. The staff will slither back to its owner afterwards at a speed of 24. Only Clerics can employ a Staff of the Snake."},
    {item: "Striking", description: "Inflicts 2d6 points of damage with a successful hit (does not use charges)."},
    {item: "Withering", description: "Adds ten years of physical aging with a successful hit."},
    {item: "Power", description: "Casts Light (no charge used), casts Fireball (4d6 damage), cold as a Wand of Cold, Lightning Bolt (4d6 damage), acts as a ring of Telekinesis (costs one charge) and hits for 2d6 damage (no charge used)."},
    {item: "Wizardry", description: "The most powerful of staves. It is a staff of power with additional abilities. At the cost of one charge, it allows invisibility, summoning elementals (calling 1d4 at a time), Hold Person, a Wall of Fire, Passwall, a Web spell, or Fly."},
    {item: "Beguiling", description: "Casts Charm Person in a radius of 20 feet from the wielder (uses one charge). The duration of the charm is 1 hour."},
    {item: "Absorption", description: "Absorbs spells cast directly at the wielder and allows the wielder to cast a spell from his own memory using that power (and thus not losing the spell from memory). Once the staff has absorbed 50 levels of spells (whether or not the power has been cast back out again), it no longer absorbs spells."},
    {item: "Lordly Might", description: "These staves only carry 10 charges, but a charge may be used to cast Raise Dead."}
];

// WBFMAG Recommends adding more custom cursed items!
const cursedItems = [
    {item: "Bag of Devouring", description: "Functions as a bag of holding, but devours any item placed into it within 1d4+1 hours."},
    {item: "Censer of Hostile Elementals", description: "A censer (or brazier, bowl, or stone) that summons elementals—but the elementals are hostile instead of under the summoner's control."},
    {item: "Cloak of Poison", description: " Upon donning this cloak, the wearer's body is suffused with magical poisons of many kinds, and dies instantly, without the chance of a saving throw."},
    {item: "Crystal Ball of Suggestion", description: "Does not function as a crystal ball, but implants a suggestion in the viewer's mind. Powerful versions of this item might even implant a Quest."},
    {item: "Dancing Boots", description: "These boots function as boots of Elvenkind or speed, until the wearer is in combat or fleeing. Suddenly at that point he will begin to dance a jig, or perhaps a stately waltz."},
    {item: "Flask of Stoppered Curses", description: "This flask releases a curse of some kind when its seal is broken."},
    {item: "Horn of Collapse", description: "When sounded, this horn causes a blast of destruction straight upwards, destroying any ceiling overhead and causing it to collapse."},
    {item: "Medallion of Projecting Thoughts", description: "The wearer's thoughts can be “heard” by all nearby."},
    {item: "Mirror of Opposition", description: "All persons looking into this mirror are attacked by evil versions of themselves, exact duplicates including spells and magic items. When the mirror-opposites are slain, their bodies and equipment disappear into mist, and return to the mirror."},
    {item: "Robe of Feeblemindedness", description: "Anyone donning this cloak has his intelligence reduced to that of a garden snail."}
];

const miscItems = [
    {start: 1, end: 1, type: "Lesser Wand", action: getWandLesser},
    {start: 2, end: 2, type: "Lesser Ring", action: getRingLesser},
    {start: 3, end: 20, type: "Misc. Lesser Magical Item", action: getMiscItemLesser},
    {start: 21, end: 22, type: "Lesser Wand", action: getWandLesser},
    {start: 23, end: 23, type: "Greater Wand", action: getWandGreater},
    {start: 24, end: 25, type: "Lesser Ring", action: getRingLesser},
    {start: 26, end: 26, type: "Greater Ring", action: getRingGreater},
    {start: 27, end: 40, type: "Misc. Medium Magical Item", action: getMiscItemMedium},
    {start: 41, end: 42, type: "Greater Wand", action: getWandGreater},
    {start: 43, end: 44, type: "Greater Ring", action: getRingGreater},
    {start: 45, end: 45, type: "Staff", action: getStaff},
    {start: 46, end: 60, type: "Misc. Greater Magical Item", action: getMiscItemGreater}
];


function getMiscItem() {   
    
    //console.log(`🎁 Treasure Quality: ${treasureType.quality}, Treasure Type: Misc.`);
    
    die_roll = roll1dx(20) + treasureType.miscModifier;
    //die_roll = 21; // !!!! FOR TESTING ONLY !!!!! DELETE THIS.

    const item = miscItems.find( i => die_roll >= i.start && die_roll <= i.end );

    if (!item) {
        console.log("No match.")
    }

    const actionValue = typeof item.action === "function" ? item.action() : item.action;
};

function getWandLesser() {
    die_roll = roll1dx(6);
    const wandLesserItem = wandLesser.find( i => die_roll == i.roll );
    if (!wandLesserItem) {
        console.log("No match. Check your code!");
    }
    const wandLesserItemLevel = wandLesserItem.level;
    const actionValue = typeof wandLesserItem.action === "function" ? wandLesserItem.action() : wandLesserItem.action;
    console.log(`Type: ${wandLesserItem.type}`);
    console.log(`Spell Level: ${wandLesserItemLevel}`);
    generateRandomScrolls(1, wandLesserItemLevel, wandLesserItemLevel);
    displayTreasureQuality.innerHTML = `<h3>☄ Magic Wand ${wandLesserItem.type}</h3>`;
};

function getWandGreater() {
    displayTreasureQuality.innerHTML = "<h3>☄ Magic Wand</h3>";
    die_roll = roll1dx(10);  // TESTING ONLY !!!!! DEFAULT die_roll = roll1dx(10)
    const wandGreaterItem = wandGreater.find( i => die_roll == i.roll );
    if (!wandGreaterItem) {
        console.log("No match. Check your code!");
    }

    console.log(`Type (test): ${wandGreaterItem.type}`);
    displayTreasureName.innerHTML = `<b>🌠 ${wandGreaterItem.type}</b>`;
    displayTreasureDescription.innerHTML = `${wandGreaterItem.description}`;

    if (wandGreaterItem.roll <= 2) {
        generateRandomScrolls(1, wandGreaterItem.level, wandGreaterItem.level);
        
        // STUCK HERE. CALLING SCROLLS. MESSES UP DISPLAY !!!!!!!!!!!
        //displayTreasureDescription.innerHTML = `<b>🌠 Wand of ${wandGreaterItem.type} Magic ${wandGreaterItem.description}</b>`;
        //displayTreasureDescription.innerHTML = `${wandGreaterItem.description}`;
    } else {
        console.log(wandGreaterItem.type);
        console.log(wandGreaterItem.description);
        displayTreasureName.innerHTML = `<b>🌠 ${wandGreaterItem.type}</b>`;
        displayTreasureDescription.innerHTML = `${wandGreaterItem.description}`;
    }
};

function getRingLesser() {
    die_roll = roll1dx(6);
    const ringLesserItem = ringLesser.find( i => die_roll == i.roll );
    if (!ringLesserItem) {
        console.log("No match.");
    }
    //const actionValue = typeof ringLesserItem.action === "function" ? ringLesserItem.action() : ringLesserItem.action;
    console.log(`Type: ${ringLesserItem.type}`);
    console.log(`Description: ${ringLesserItem.desription}`);
    displayTreasureName.innerHTML = `<h4>💍 Ring of ${ringLesserItem.type}</h4>`;
    displayTreasureDescription.innerHTML = `${ringLesserItem.description}`;
};

function getRingGreater() {
    die_roll = roll1dx(10);
    const ringGreaterItemIndex = Math.floor(Math.random() * ringGreater.length);
    const ringGreaterItem = ringGreater[ringGreaterItemIndex];
    console.log(`Type: ${ringGreaterItem.type}`);
    console.log(`Description: ${ringGreaterItem.description}`);
    displayTreasureName.innerHTML = `<h4>💍 Ring of ${ringGreaterItem.type}</h4>`;
    displayTreasureDescription.innerHTML = `${ringGreaterItem.description}`;
};

function getMiscItemLesser() {
    
    const miscItemLesserIndex = Math.floor(Math.random() * miscItemsLesser.length);
    //const miscItemLesserIndex = 5; // !!!! TESTING ONLY !!!!
    const miscItemLesser = miscItemsLesser[miscItemLesserIndex];

    //const actionValue = typeof miscItemLesser.action === "function" ? miscItemLesser.action() : miscItemLesser.action;
    
    if (miscItemLesser.item == "Cursed Item") {
        getCursedItem();

    } else if (miscItemLesser.item == "Boots of Speed or Leaping") {
        die_roll = roll1dx(2);
        if (die_roll == 1) {
            displayTreasureName.innerHTML = "<h4>🥾 Boots of Speed";
            displayTreasureDescription.innerHTML = "Boots of Speed double the wearer's movement rate, but require complete rest for a period of time equivalent to the amount of time they were used. Usable by: All Classes.";
        } else {
            displayTreasureName.innerHTML = "<h4>🥾 Boots of Leaping";
            displayTreasureDescription.innerHTML = "Boots of Leaping allow the wearer to make prodigious leaps 10 feet high and up to 30 feet horizontally. These boots also double movement rates, but outdoors only. They do not require the wearer to rest after using them. Usable by: All Classes.";
        }

    } else if (miscItemLesser.item == "Dust of Appearance or Disappearance") {
        die_roll = roll1dx(2);
        if (die_roll == 1) {
            displayTreasureName.innerHTML = "<h4>🌪 Dust of Appearance";
            displayTreasureDescription.innerHTML = "Tossed in a radius of 10 feet around the user, and makes any invisible, astral, displaced, out-of-phase, or dimensional thing completely visible. The dust generally comes in a pouch, with enough for 20-30 uses. Usable by: All Classes.";
        } else {
            displayTreasureName.innerHTML = "<h4>🌪 Dust of Disappearance";
            displayTreasureDescription.innerHTML = "When sprinkled in a 10 foot radius, everything therein becomes invisible for 5d6 turns. Normal means of detecting invisibility (such as a Detect Invisibility spell) are not strong enough to work against the dust's powerful enchantment. Usable by: All Classes.";
        }
    } else {
        displayTreasureName.innerHTML = `<h4>🎁 ${miscItemLesser.item}</h4>`;
        displayTreasureDescription.innerHTML = `${miscItemLesser.description}`;
    }
};

function getMiscItemMedium() {
    const miscItemMediumIndex = Math.floor(Math.random() * miscItemsMedium.length);
    const miscItemMedium = miscItemsMedium[miscItemMediumIndex];

    if (miscItemMedium.item == "Bracers of Defense, AC 4 [15] or 2 [17]") {
        die_roll = roll1dx(2);
        if (die_roll == 1) {
            displayTreasureName.innerHTML = "<h4>🎁 Bracers of Defense, AC 4 [15]";
        } else {
            displayTreasureName.innerHTML = "<h4>🎁 Bracers of Defense, AC 2 [17]";
        }
        displayTreasureDescription.innerHTML = "These bracers improve the wearer's armor class (whatever part of it is due to actual armor) to the stated level—there is no effect if the wearer is already armored to the same or higher degree. The AC granted by the bracers can be increased by magical rings or other protective magics. Usable by: All Classes.";
    } else {
        console.log(`Item: ${miscItemMedium.item}`);
        console.log(`Description: ${miscItemMedium.description}`);
        displayTreasureName.innerHTML = `<h4>🎁 ${miscItemMedium.item}</h4>`;
        displayTreasureDescription.innerHTML = `${miscItemMedium.description}`;
    }
};

function getMiscItemGreater() {
    const miscItemGreaterIndex = Math.floor(Math.random() * miscItemsGreater.length);
    const miscItemGreater = miscItemsGreater[miscItemGreaterIndex];
    displayTreasureName.innerHTML = `<h4>🎁 ${miscItemGreater.item}</h4>`;
    displayTreasureDescription.innerHTML = miscItemGreater.description;
};

function getStaff() {
    const staffIndex = Math.floor(Math.random() * staves.length);
    const staff = staves[staffIndex];
    console.log(`Item: ${staff.item}`);
    console.log(`Description: ${staff.description}`);
    console.log(`Most staves carry 200 charges.`);
    displayTreasureName.innerHTML = `<h4>Staff of ${staff.item}</h4>`;
    displayTreasureDescription.innerHTML = `${staff.description}`;
};

function getCursedItem() {
    const cursedItemIndex = Math.floor(Math.random() * cursedItems.length);
    const cursedItem = cursedItems[cursedItemIndex];
    
    displayTreasureName.innerHTML = `💀 <b>Cursed Item! ${cursedItem.item}</b>`;
    displayTreasureDescription.innerHTML = `${cursedItem.description}`;
};


