import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Meeting } from '../models/metting';

@Injectable({
  providedIn: 'root',
})
export class F1Service {
  private readonly apiUrl = 'https://api.openf1.org/v1';
  private readonly httpClient = inject(HttpClient);

  async getMeetings(year: number): Promise<Meeting[]> {
    const meetings = this.httpClient.get<Meeting[]>(this.apiUrl + '/meetings?year=' + year);
    return firstValueFrom(meetings);
  }

  async getMeeting(meetingKey: string): Promise<Meeting> {
    const meetings = this.httpClient.get<Meeting[]>(
      this.apiUrl + '/meetings?meeting_key=' + meetingKey
    );
    const result = await firstValueFrom(meetings);
    return result[0];
  }
}
