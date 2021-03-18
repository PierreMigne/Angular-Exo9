import { Component, Input, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cars: Array<any>;

  @Input() id: number;
  @Input() picturePath: string;
  @Input() brandName: string;
  @Input() modelName: string;
  @Input() status: string;

  constructor(private carService: CarService) {
    this.cars = this.carService.cars;
  }

  ngOnInit(): void {}

  onSwitchCarStatus(carId: number){
    this.carService.switchCarStatus(carId);
  }

}
