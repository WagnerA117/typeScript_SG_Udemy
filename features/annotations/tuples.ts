const drink = { color: "brown", carbonated: true, sugar: 40 };

//Different annotation to create a Tuple

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];

const sprite: Drink = ["clear", true, 40];

const tea: Drink = ["brown", false, 0];

//Throws an error

pepsi[0] = 40;
