const add = (a: number, b: number): number => {
  return a + b;
};

//This will return an error because annotated type not returned

const minus = (a: number, b: number): number => {
  a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

//void means there will be no return value from this function
//
const logger = (message: string): void => {
  console.log(message);
};

//Only annotate with never when you expect it to return an error/nothing
const throwError = (message: string): never => {
  throw new Error(message);
};

const weatherToday = {
  date: new Date(),
  weather: "sunny",
};

//destructuring and annotation are always seperated by the :
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
