import { faker } from "@faker-js/faker";

export class User {
  name: string;

  //You are responsible for initilization of the object,
  //and it's properties inside

  location: {
    lat: number;
    lng: number;
  };

  colour: string;

  constructor() {
    this.name = faker.name.firstName();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.colour = "blue";
  }

  markerContent(): string {
    return `${this.name}`;
  }
}

const user = new User();

console.log(user);
