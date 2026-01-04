function calculateTreasure() {
    let treasure_value = 0;
    let percentage_copper = 0;
    let percentage_silver = 0;
    let percentage_gold = 0;
    let copper_pieces = 0;
    let silver_pieces = 0;
    let gold_pieces = 0;
    let inputXp = inputMonsterXp.value;
    let inputXpAsInteger = Number(inputXp);
    let die_roll = roll1dx(6);
    
    if ( die_roll == 1 ) {
        treasure_value = inputXpAsInteger * 1;
        percentage_copper = 50;
        percentage_silver = 30;
        percentage_gold = 20;
    } else if ( die_roll == 2 || die_roll == 3 ) {
        treasure_value = inputXpAsInteger * 2;
        percentage_copper = 20;
        percentage_silver = 50;
        percentage_gold = 30;
    } else if ( die_roll == 4 || die_roll == 5 ) {
        treasure_value = inputXpAsInteger * 3;
        percentage_copper = 10;
        percentage_silver = 40;
        percentage_gold = 50;
    } else {
        treasure_value = inputXpAsInteger * 4;
        percentage_copper = 0;
        percentage_silver = 25;
        percentage_gold = 75;
    } 
    copper_pieces = get_percentage(treasure_value, percentage_copper);
    silver_pieces = get_percentage(treasure_value, percentage_silver);
    gold_pieces = get_percentage(treasure_value, percentage_gold);

    displayTreasure.innerText =
        `Teasure Value: ${treasure_value}gp. (Copper Pieces: ${copper_pieces}, Silver Pieces: ${silver_pieces}, Gold Pieces: ${gold_pieces})`;
};