import { faker } from '@faker-js/faker';

class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `<div>
    <h3>${this.companyName}</h3>
    <h3>${this.catchPhrase}</h3>
    <p>Latitude: ${this.location.lat}</p>
    <p>Longitude: ${this.location.lng}</p>
  </div>`;
  }
}

export { Company };
