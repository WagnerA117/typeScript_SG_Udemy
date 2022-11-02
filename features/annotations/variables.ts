let apples = 5;

apples = 10;

let speed: string = "Fast";

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// Built in objects

let now: Date = new Date();

//Object Literal Annotations

let colors: string[] = ["red", "green", "blue"];
// Bracket after string, an array that contains nothing but strings
let myNumber: number[] = [1, 2, 3];

let truths: boolean[] = [true, true, false];

class Car {}

let car: Car = new Car();

//Object literal

let point: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 20,
};

let logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use Annotations

//
//1) Function that returns the 'any' type

const json = '{"x":10, "y":20}';

const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

//2) When we declare a variable on one line an initialize it later

let words = ["red", "green", "blue"];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

//3) Variables whose value cannot be inferred

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < words.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
