import { faker } from '@faker-js/faker';

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `<div>
    <h3>${this.name}</h3>
    <p>Latitude: ${this.location.lat}</p>
    <p>Longitude: ${this.location.lng}</p>
  </div>`;
  }
}

export { User };
