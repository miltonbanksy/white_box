const spellsCleric = [
    {name: "Cure Light Wounds or Cause Light Wounds", level: 1, range: "Touch", duration: "Instant", description: "Cures 1d6+1 HP<br><br>Causes 1d6+1 HP."},
    {name: "Detect Chaos or Detect Law", level: 1, range: "120ft", duration: "1 hour", description: "Detect Chaotic creatures and evil enchantments, intentions, thoughs, auras.<br><br>Detect Lawful..."},
    {name: "Detect Magic", level: 1, range: "60ft", duration: "20 mins", description: "The caster perceives in places, people, or things, the presence of magical spells or enchantments. magical items or secretly placed charms may be discovered with this spell."},
    {name: "Light or Dark", level: 1, range: "120ft", duration: "2 hours", description: "🔆 Produces a light as bright as a torch with a radius of 20ft around a person or object."},
    {name: "Protection from Chaos or Protection from Law", level: 1, range: "Caster only", duration: "2 hours", description: "Creates a ward around the caster that blocks attacks from magical monsters (like invisible stalkers, elementals, and demons. Other attackers suffer a -1 penalty to hit, and the caster gains +1 on saving throws."},
    {name: "Purify or Putrefy Food & Drink", level: 1, range: "Close / Touch", duration: "Instant", description: "Removes spoilage and poisons from enough food and water for up to a dozen people."},
    {name: "Bless or Curse", level: 2, range: "Target Character", duration: "1 hour", description: "The recipient of this spell cannot be in combat when it is cast.<br><br>Bless: the recipient gets a +1 bonus to all attack rolls and, if the target is not a Player Character, improved overall morale.<br><br>Curse: the recipient suffers a -1 penalty to all attack rolls and, if the target is not a Player Character, decreased morale."},
    {name: "Find Traps", level: 2, range: "30ft", duration: "Instant", description: "Reveals both magical and non-magical traps."},
    {name: "Hold Person", level: 2, range: "180ft", duration: "90 mins", description: "The caster targets either 1d4 persons (with the same parameters as Charm Person; saving throw applies) or a single creature who must make their save at a -2 penalty."},
    {name: "Speak with Animals", level: 2, range: "30ft", duration: "1 hour", description: "The caster can speak with animals within range. The animals might assist him, and they will not attack him or his party (unless he says something particularly offensive)."},
    {name: "Cure or Cause Disease", level: 3, range: "Touch", duration: "Instant", description: "🔆 As a Cure Disease spell, the recipient is cured of all diseases—including those magically inflicted.<br><br>🌒 As a Cause Disease spell, the recipient is inflicted with a disease to be determined by the Referee."},
    {name: "Light or Dark, Continual", level: 3, range: "120ft", duration: "Permanent (until dispelled)", description: "🔆 Light, Continual: produces a light as bright as a torch with a radius of 20 feet around a person or object.<br><br>🌒 Dark, Continual: causes night-time darkness in an area with a 20 foot radius."},
    {name: "Locate Object", level: 3, range: "90ft", duration: "1 min/level", description: "Directs the caster (as the crow flies) toward an object the caster describes. The caster must have seen the object or an object of its general type: staris, gold, etc."},
    {name: "Remove Curse", level: 3, range: "Close / Touch", duration: "Instant", description: "Removes one curse from a person or object."},
    {name: "Cure or Cause Serious Wounds", level: 4, range: "Touch", duration: "Instant", description: "🔆 Cure: The caster cures 3d6+3 HP.<br><br>🌒 Cause: The caster causes 3d6+3 damage."},
    {name: "Neutralize Poison", level: 4, range: "Ref's discretion", duration: "10 mins", description: "Counteracts poison, but does not bring the dead back to life."},
    {name: "Protection from Chaos or Law, 10ft radius", level: 4, range: "10ft radius around caster", duration: "2 hours", description: "As a Protection from Chaos, 10ft. radius spell, it has the same effect as Protection from Chaos—except that its effect covers an area rather than an individual. / As a Protection from Law, 10 ft. radius spell, it has the same effect as Protection from Law—except that its effect covers an area rather than an individual."},
    {name: "Speak with Plants", level: 4, range: "30ft", duration: "1 hour", description: "The caster can speak to and understand the replies of plants. Plants will obey his commands as far as they are able (e.g. twisting or bending aside to ease his passage, etc.)."},
    {name: "Sticks to Snakes", level: 4, range: "120ft", duration: "1 hour", description: "The caster may turn as many as 2d8 normal sticks into snakes, each one having a 50% chance of being venomous. The snakes follow his commands, but turn back into sticks at the end of the spell (or when killed)."},
    {name: "Commune", level: 5, range: "Caster", duration: "3 questions", description: "Higher powers grant answers to three questions the caster poses. Higher powers don't like being constantly interrogated by mere mortals, so the spell should be limited to one casting per week. The Referee may rule that a caster may cast a double strength Commune spell composed of six questions once per year."},
    {name: "Create Food & Drink", level: 5, range: "Close", duration: "Instant", description: "This spell creates a one-day supply of simple food and drinking water for 24 humans (or horses, which drink the same amount as a man for game purposes)."},
    {name: "Dispel Chaos or Dispel Law", level: 5, range: "30ft", duration: "10 minutes", description: "Dispel Chaos: The spell is similar to the arcane spell Dispel Magic, but works against items, spells, or agents of Chaos. However, unlike Dispel Magic, this spell also functions against chaotic sendings, possibly including dreams or supernatural hunting-beasts. // Dispel Law: As a Dispel Law spell, the spell works exactly like Dispel Chaos, except that it will dispel Law."},
    {name: "Insect Plague", level: 5, range: "480ft", duration: "1 day", description: "This spell only works outdoors. A storm of insects gathers, and goes wherever the caster directs. The cloud is approximately 400 square feet (20 x 20 feet, with roughly corresponding height). Any creature with fewer than 2 HD exposed to the cloud of insects will flee in terror (no saving throw)."},
    {name: "Quest", level: 5, range: "30ft", duration: "Until completed", description: "If the victim fails his saving throw, the caster may set a task for him. If a Magic-user casts this spell the victim will die if he ignores the Quest altogether. If a Cleric casts this spell the victim's failure to obey will result in a curse to be determined by the Referee."},
    {name: "Raise Dead", level: 5, range: "Line of Sight", duration: "See description", description: "Raise Dead allows the Cleric to raise a corpse from the dead, provided it has not been dead too long. The normal time limit is 4 days, but for every caster level higher than 8th, the time limit extends another 4 days. Characters with low constitution might not survive the ordeal; and even for those with a strong constitution, a period of two weeks is required before they can function normally. This spell only functions on races that can be used for Player Characters (i.e., “human-like”)."}
    //{name: "", level: 1, range: "", duration: "", description: ""}
];

const spellsMage = [
    {name: "Charm Person", level: 1, range: "120ft", duration: "Until dispelled", description: "This spell affects living bipeds of human size or smaller, such as goblins or dryads. If the spell succeeds (saving throw allowed), the unfortunate creature falls under the caster's influence."},
    {name: "Detect Magic", level: 1, range: "60ft", duration: "20 mins", description: "The caster perceives in places, people, or things, the presence of magical spells or enchantments. magical items or secretly placed charms may be discovered with this spell."},
    {name: "Hold Portal", level: 1, range: "Ref's discretion", duration: () => roll2d6(), description: "This spell magically holds a door or gate in position for the spell's duration (or until dispelled). Creatures with magic resistance can shatter the spell without much effort."},
    {name: "Light or Dark", level: 1, range: "120ft", duration: "1 hour + 10 mins per level", description: "🔆 Light: As a Light spell, the caster targets a person or object which then produces a light about as bright as a torch with a radius of 20 feet.<br><br>🌒 Dark: As a Dark spell, the caster instead causes night-time darkness to fall upon the area with a radius of 20 feet."},
    {name: "Protection from Chaos or Law", level: 1, range: "10ft radius around caster", duration: "2 hours", description: "Protection from Chaos: As a Protection from Chaos, 10ft. radius spell, it has the same effect as Protection from Chaos — except that its effect covers an area rather than an individual.<br><br>Protection from Law: As a Protection from Law, 10 ft. radius spell, it has the same effect as Protection from Law — except that its effect covers an area rather than an individual."},
    {name: "Read Languages", level: 1, range: "Reading distance", duration: "1 or 2 readings", description: "This spell allows the caster to read directions, instructions, and similar notations that are written in unfamiliar or even unknown languages. It is especially useful for treasure maps."},
    {name: "Read Magic", level: 1, range: "Caster only", duration: "2 scrolls or other writings", description: "This spell allows the caster to read magical writings on items and scrolls. Magical writing cannot be read without the use of this spell."},
    {name: "Sleep", level: 1, range: "240ft", duration: "Ref's discretion", description: "This spell puts creatures into an enchanted slumber (no saving throw is permitted). It can affect a number of creatures based on their hit dice. Less than 1 to 1 HD: 2d6+3, 1+ to 2+ HD: 2d6, 3 to 4+ HD: 1d6."},
    {name: "Detect Chaos or Detect Law", level: 2, range: "120ft", duration: "20 mins", description: "Detect Chaotic creatures and evil enchantments, intentions, thoughs, auras.<br><br>Detect Lawful..."},
    {name: "Detect Invisibility", level: 2, range: "10ft/caster level", duration: "1 hour", description: "Caster can perceive invisible creatures and objects."},
    {name: "Detect Thoughts (ESP)", level: 2, range: "60ft", duration: "2 hours", description: "The caster can detect the thoughts of other beings. The spell cannot penetrate more than two feet of stone and is blocked by even a thin sheet of lead."},
    {name: "Invisibility", level: 2, range: "240ft", duration: "Until dispelled or an attack is made", description: "The object of this spell, whether a person or a thing, becomes invisible to both normal vision and to darkvision. If the Referee is using the invisibility rules unchanged, the result is that an invisible creature cannot be attacked unless its approximate location is known, and all attacks are made at -4 to-hit."},
    {name: "Knock", level: 2, range: "60ft", duration: "Instant", description: "This spell unlocks and unbars all doors, gates, and portals within its range, including those held or locked by normal magic."},
    {name: "Levitate", level: 2, range: "20ft per level", duration: "10 minutes per level", description: "This spell allows the Magic-user to levitate himself, moving vertically up or down, but the spell itself provides no assistance with lateral movement. A wall, cliff side, or ceiling could be used to move along hand-over-hand. Levitation allows up or downward movement at a rate of up to 6 feet per minute (60 feet per turn), and the caster cannot levitate more than 20 feet per level from the ground level where the spell was cast (such range being applied both to movement into the air and to downward movement into a pit or chasm)."},
    {name: "Light or Dark, Continual", level: 2, range: "120ft", duration: "1 hour + 10 minutes per level", description: "🔆 As a Light spell, the caster targets a person or object which then produces a light about as bright as a torch with a radius of 20 feet. <br><br>🌒 As a Dark spell, the caster instead causes night-time darkness to fall upon the area with a radius of 20 feet."},
    {name: "Locate Object", level: 2, range: "60ft + 10ft per level", duration: "1 min per level", description: "This spell gives the caster the correct direction (as the crow flies) toward an object the caster specifies with a description. The object cannot be something the caster has never seen, although the spell can detect an object in a general class of items known to the caster: stairs, gold, etc."},
    {name: "Phantasmal Force", level: 2, range: "240ft", duration: "Until negated or dispelled", description: "This spell creates a realistic illusion in the sight of all who view it. The illusion disappears when it is touched, but if the viewer believes the illusion is real he can take damage from it."},
    {name: "Web", level: 2, range: "30ft", duration: "8 hours", description: "Fibrous, sticky webs fill an area up to 10 x 10 x 20 feet. It is extremely difficult to get through the mass of strands—it takes one turn if a torch and sword (or a flaming sword) are used, and creatures larger than a horse can break through in 2 turns. Humans take longer to break through — perhaps 3 to 4 turns or longer at the Referee's discretion."},
    {name: "Wizard Lock", level: 2, range: "Close", duration: "Permanent until dispelled", description: "As with a Hold Portal spell, but it is permanent until dispelled. Creatures with magic resistance can shatter the spell without effort. Any Magic-user three levels or higher than the caster can open the portal, and a Knock spell will open it as well (although the spell is not permanently destroyed in these cases)."},
    {name: "Alter Time", level: 3, range: "240ft", duration: "30 mins", description: "The caster must announce which of the two options is being cast. Both options have a 60 foot radius area of effect: 1) As a Haste spell, as many as 24 creatures may move and attack at double normal speed. 2) As a Slow spell, as many as 24 creatures failing a saving throw may only move and attack at half speed."},
    {name: "Crystal Ball", level: 3, range: "60ft", duration: "2 hours", description: "The caster must announce which of the two options is being cast. A two foot thickness of solid stone or a thin layer of lead blocks both options. 1) As a Clairaudience spell, the caster can hear through solid obstacles. 2) As a Clairvoyance spell, the caster can see through solid obstacles."},
    {name: "Darkvision", level: 3, range: "Touch", duration: "1 day", description: "The recipient of the spell can see in total darkness. The recipient should roll 1d6 on the table to determine the range of his vision. 1-2: 40ft, 3-4: 50ft, 5-6: 60ft."},
    {name: "Dispel Magic", level: 3, range: "120ft", duration: "10 mins", description: "Dispel magic can be used to completely dispel most spells and enchantments. As an example of how one might referee this spell, the chance of dispelling magic could be a percentage based on the ratio of the level of the caster trying to dispel over the level of the caster (or HD of the monster) who hurled the original magic. Thus, a 6th level Magic-user attempting to dispel a charm cast by a 12th level Magic-user has a 50% chance of success (6 / 12 = 1/2). If the 12th level Magic-user were dispelling the 6th level Magic-user's charm, the dispelling caster's chance of success would be 200% (12 / 6 = 2)."},
    {name: "Fireball", level: 3, range: "240ft", duration: "Instant", description: "A missile shoots from the caster's finger to explode at the targeted location in a furnace-like blast of fire. It has a burst radius of 20 feet and damage is 1d6 per level of the caster. The blast shapes itself to the available volume. A successful saving throw means that the target only takes half damage."},
    {name: "Fly", level: 3, range: "Touch", duration: "1d6 turns + 1 turn/level", description: "This spell grants the power of flight, with a movement rate of 120 feet per round. The Referee rolls for the duration of the spell in secret and does not disclose this information to the Player."},
    {name: "Hold Person", level: 3, range: "120ft", duration: "1 hour + 10 minutes per level", description: "The caster can target either 1d4 persons of human size or smaller (saving throw applies) or may instead target a single creature who must make their save at a -2 penalty."},
    {name: "Invisibility, 10ft radius", level: 3, range: "240ft", duration: "Until dispelled or an attack is made.", description: "The object of this spell, whether a person or a thing, becomes invisible to both normal vision and to darkvision. If the Referee is using the invisibility rules unchanged, the result is that an invisible creature cannot be attacked unless its approximate location is known, and all attacks are made at -4 to-hit. It also throws a sphere of invisibility (with a 10 foot radius) around the recipient, which moves along with the target."},
    {name: "Lightning Bolt", level: 3, range: "60ft", duration: "Instant", description: "A nearly ten foot wide bolt of lightning extends 60 feet from the fingertip of the caster. Anyone in its path suffers 1d6 points of damage per level of the caster, though a successful saving throw halves damage. The bolt always extends 60 feet, even if this means that it ricochets backward from something that blocks its path."},
    {name: "Protection from Chaos or Law, 10ft radius", level: 3, range: "10ft radius around caster", duration: "2 hours", description: "As a Protection from Chaos, 10ft. radius spell, it has the same effect as Protection from Chaos — except that its effect covers an area rather than an individual.<br><br>As a Protection from Law, 10 ft. radius spell, it has the same effect as Protection from Law—except that its effect covers an area rather than an individual."},
    {name: "Protection from Normal Missiles", level: 3, range: "30ft", duration: "2 hours", description: "The recipient becomes invulnerable to small non-magical missiles. Only those missiles projected by normal humans and/or weapons are affected."},
    {name: "Water Breathing", level: 3, range: "30ft", duration: "2 hours", description: "This spell grants the ability to breathe underwater until the spell's duration expires."},
    {name: "Charm Monster", level: 4, range: "60ft", duration: "Until dispelled", description: "If the spell succeeds (saving throw allowed), up to 3d6 monsters of fewer than 3 HD fall under the caster's influence."},
    {name: "Confusion", level: 4, range: "120ft", duration: "2 hours", description: "This spell confuses people and monsters, making them act randomly. The effects of the confusion may shift every 10 minutes, and the dice are rolled again to determine any change. Roll 2d6 to determine the creature's behavior: 2-5: Attack the caster (and his allies), 6-8: Stand baffled and inactive, 9-12: Attack each other. The spell affects 2d6 creatures, plus an additional creature for every caster level above 8th. Creatures of 3 HD or fewer are automatically affected by the spell, and it takes effect immediately. Creatures of 4 HD or more automatically resist the confusion effect until it reaches its full power, which takes a number of minutes equal to 1d4. These creatures must make a saving throw when the effect reaches full power and every 10 minutes thereafter or become confused for the remainder of the spell's duration."},
    {name: "Dimension Portal", level: 4, range: "10ft. casting, 360ft. teleport", duration: "Instant", description: "Dimensional Portal is a weak form of the Teleport spell that can be managed by lesser magicians. The caster can teleport himself, an object, or another person with perfect accuracy to the stated location, as long as it is within the spell's given range."},
    {name: "Hallucinatory Terrain", level: 4, range: "240ft", duration: "Until touched by an enemy or dispelled.", description: "This spell changes the appearance of the terrain into the semblance of what the caster desires. A hill can be made to disappear, or could be replaced with an illusory forest, for example."},
    {name: "Massmorph", level: 4, range: "240ft", duration: "Until negated or dispelled.", description: "One hundred or fewer human-sized creatures are changed to appear like innocent trees. The illusion is so perfect that creatures moving through the “forest” will not detect the deception."},
    {name: "Plant Growth", level: 4, range: "120ft", duration: "Permanent until dispelled", description: "Up to 300 square feet of ground can be affected by this spell; undergrowth in the area suddenly grows into an impassable forest of thorns and vines. The caster can decide the shape of the area to be enchanted. An alternate version (Referee's decision) would allow the spell to affect an area of 300 x 300 feet, for a total of 90,000 square feet."},
    {name: "Polymorph", level: 4, range: "", duration: "", description: ""},
    {name: "Remove Curse", level: 4, range: "", duration: "", description: ""},
    {name: "Wall of Fire or Ice", level: 4, range: "", duration: "", description: ""},
    {name: "Wizard Eye", level: 4, range: "", duration: "", description: ""},
    {name: "Animal Growth", level: 5, range: "", duration: "", description: ""},
    {name: "Animate Dead", level: 5, range: "", duration: "", description: ""},
    {name: "Cloudkill", level: 5, range: "", duration: "", description: ""},
    {name: "Conjure Elemental", level: 5, range: "", duration: "", description: ""},
    {name: "Contact Other Plane", level: 5, range: "", duration: "", description: ""},
    {name: "Feeblemind", level: 5, range: "", duration: "", description: ""},
    {name: "Hold Monster", level: 5, range: "", duration: "", description: ""},
    {name: "Magic Jar", level: 5, range: "", duration: "", description: ""},
    {name: "Passwall", level: 5, range: "", duration: "", description: ""},
    {name: "Telekinesis", level: 5, range: "", duration: "", description: ""},
    {name: "Teleport", level: 5, range: "", duration: "", description: ""},
    {name: "Transform Rock-Mud", level: 5, range: "", duration: "", description: ""},
    {name: "Wall of Stone or Iron", level: 5, range: "", duration: "", description: ""},
    {name: "Anti-Magic Shell", level: 6, range: "", duration: "", description: ""},
    {name: "Control Weather", level: 6, range: "", duration: "", description: ""},
    {name: "Death Spell", level: 6, range: "", duration: "", description: ""},
    {name: "Disintegrate", level: 6, range: "", duration: "", description: ""},
    {name: "Invisible Stalker", level: 6, range: "", duration: "", description: ""},
    {name: "Move Earth", level: 6, range: "", duration: "", description: ""},
    {name: "Move Water", level: 6, range: "", duration: "", description: ""},
    {name: "Project Image", level: 6, range: "", duration: "", description: ""},
    {name: "Quest", level: 6, range: "", duration: "", description: ""},
    {name: "Reincarnation", level: 6, range: "", duration: "", description: ""},
    {name: "Stone to Flesh", level: 6, range: "", duration: "", description: ""}
];

const protectionFrom = [
  "Demons",
  "Drowning",
  "Elementals",
  "Lycanthropes",
  "Magic",
  "Metal",
  "Poison",
  "Undead"
];

const protectionFrom2 = [
    {type: "Demons", description: "Everyone within a 10 foot radius around the reader are protected from the attacks of 1 demon per round for a period of 40 minutes."},
    {type: "Drowning", description: "Everyone within a 10 foot radius of the reader gain the ability to breathe underwater for 1 full day."},
    {type: "Elementals", description: "This scroll protects against a single elemental, and lasts for a duration of 40 minutes."},
    {type: "Lycanthropes", description: "All within a 10 foot radius around the reader, for a duration of one hour, are protected from lycanthropes."},
    {type: "Magic", description: "Anti-magic shell surrounds and moves with the reader for 1 hour, having a radius of 10 feet. Spells cannot pass in or out of the shell."},
    {type: "Metal", description: "Metal cannot harm the reader for a duration of 1 hour."},
    {type: "Poison", description: "Poison cannot harm the reader for a period of 6 hours, and any poison in his system is removed."},
    {type: "Undead", description: "All within a 10 foot radius of the reader are protected against undead, but only to a limited degree. In any given round, 2d12 undead with HD fewer than 4, and 2d6 undead with hit dice 4-5, and 1d6 undead with hit dice of 6+ are foiled by the protection of the scroll. Thus, the scroll is effective against all but a true horde of undead."}
];

function roll2d6() {
    const array2d6 = [];
    for ( i = 0; i <= 2; i++ ) {
        let die = Math.floor(Math.random() * 6) +1;
        array2d6.push(die);
    }
    return `${sumArray(array2d6)} turns`;
};

function sumArray(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

