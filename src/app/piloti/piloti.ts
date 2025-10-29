import { Component, inject } from '@angular/core';
import { F1Service } from '../service/f1-service';
import { Driver } from '../models/driver';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-piloti',
  imports: [CardModule],
  templateUrl: './piloti.html',
  styleUrl: './piloti.css',
})
export class Piloti {
  f1Service = inject(F1Service);
  drivers: Driver[] = [];
  filteredDrivers: Driver[] = [];

  ngOnInit() {
    this.getDrivers();
  }

  async getDrivers() {
    this.drivers = await this.f1Service.getDrivers();
  }
}
