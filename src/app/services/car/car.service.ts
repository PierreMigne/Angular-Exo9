import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Array<any>;

  constructor() {
    this.cars = [
      {
        id: 0,
        picturePath: 'assets/images/208.jpg',
        brandName: 'Peugeot',
        modelName: '208',
        status: 'louée'
      },
      {
        id: 1,
        picturePath: 'assets/images/clio.jpg',
        brandName: 'Renault',
        modelName: 'Clio',
        status: 'louée'
      },
      {
        id: 2,
        picturePath: 'assets/images/s.jpg',
        brandName: 'Tesla',
        modelName: 'S',
        status: 'pas louée'
      },
      {
        id: 3,
        picturePath: 'assets/images/tt.jpg',
        brandName: 'Audi',
        modelName: 'TT',
        status: 'louée'
      },
      {
        id: 4,
        picturePath: 'assets/images/taycan.jpg',
        brandName: 'Porsche',
        modelName: 'Taycan',
        status: 'louée'
      },
      {
        id: 5,
        picturePath: 'assets/images/twingo.jpg',
        brandName: 'Renault',
        modelName: 'Twingo',
        status: 'pas louée'
      },
    ];
  }

  switchAllCarsStatus(newStatus: string) {
    for (const car of this.cars) {
      car.status = newStatus;
    }
  }

  switchCarStatus(carId: number) {
    for (const car of this.cars) {
      if (car.id === carId) {
        car.status = car.status === 'louée' ? 'pas louée' : 'louée';
        break;
      }
    }
  }
}
