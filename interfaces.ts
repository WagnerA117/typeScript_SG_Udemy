//Syntax for interface

interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

//only checks if the type in the interface is satisfied by the function you're using

const oldCivic = {
  name: "Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has a sugar content of ${40}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
