const carMakers = ["ford", "toyota", "chevy"];

const carModels = [];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camara"]];

//Flexible type

const importantDates: (Date | string)[] = [new Date(), "20"];

importantDates.push("2030-10-10");
importantDates.push(new Date());

//When to use typed arrays?
//Anytime we need to represent a collection of records
//with some arbitrary sort order
