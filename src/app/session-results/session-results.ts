import { Component, inject } from '@angular/core';
import { SessionResult } from '../models/session-result';
import { ActivatedRoute } from '@angular/router';
import { F1Service } from '../service/f1-service';
import { TableModule } from 'primeng/table';

interface SessionResultWithDriver extends SessionResult {
  driverName?: string;
}

@Component({
  selector: 'app-session-results',
  imports: [TableModule],
  templateUrl: './session-results.html',
  styleUrl: './session-results.css',
})
export class SessionResults {
  sessionResults: SessionResultWithDriver[] = [];
  f1Service = inject(F1Service);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  sessionKey: number = Number(this.activeRoute.snapshot.paramMap.get('sessionKey'));

  async ngOnInit() {
    await this.getSessionResults(this.sessionKey);
  }

  async getSessionResults(sessionKey: number) {
    const results = await this.f1Service.getSessionResults(sessionKey);

    for (const result of results) {
      const driver = await this.f1Service.getDriverPerNumber(result.driver_number);
      this.sessionResults.push({
        ...result,
        driverName: driver
          ? `${driver.first_name} ${driver.last_name}`
          : `#${result.driver_number}`,
      });
    }
  }
}
