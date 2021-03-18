import { Component } from '@angular/core';
import { CarService } from './services/car/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cars: Array<any>;

  constructor(private carService: CarService){
    this.cars = this.carService.cars;
  }

  onSwitchAllCarsStatus(newStatus: string){
    this.carService.switchAllCarsStatus(newStatus);
  }
}
