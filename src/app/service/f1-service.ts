import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Meeting } from '../models/metting';
import { Session } from '../models/session';
import { Driver } from '../models/driver';
import { SessionResult } from '../models/session-result';

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

  async getMeeting(meetingKey: number): Promise<Meeting> {
    const meetings = this.httpClient.get<Meeting[]>(
      this.apiUrl + '/meetings?meeting_key=' + meetingKey
    );
    const result = await firstValueFrom(meetings);
    return result[0];
  }

  async getSessions(meetingKey: number): Promise<Session[]> {
    const sessions = this.httpClient.get<Session[]>(
      this.apiUrl + '/sessions?meeting_key=' + meetingKey
    );
    const result = await firstValueFrom(sessions);
    return result;
  }

  async getDriversPerMeetingKey(meetingKey: number): Promise<Driver[]> {
    const drivers = this.httpClient.get<Driver[]>(
      this.apiUrl + '/drivers?meeting_key=' + meetingKey
    );
    const result = await firstValueFrom(drivers);
    return result.slice(0, 4);
  }

  async getDriversPerSessionKey(sessionKey: number): Promise<Driver[]> {
    const drivers = this.httpClient.get<Driver[]>(
      this.apiUrl + '/drivers?session_key=' + sessionKey
    );
    const result = await firstValueFrom(drivers);
    return result;
  }

  async getDrivers(): Promise<Driver[]> {
    const drivers = this.httpClient.get<Driver[]>(this.apiUrl + '/drivers');
    const result = await firstValueFrom(drivers);
    return result.slice(0, 15);
  }

  async getSessionResults(sessionKey: number): Promise<SessionResult[]> {
    const results = this.httpClient.get<SessionResult[]>(
      this.apiUrl + '/session_result?session_key=' + sessionKey
    );
    const result = await firstValueFrom(results);
    return result;
  }

  async getDriverPerNumber(driverNumber: number): Promise<Driver> {
    const drivers = this.httpClient.get<Driver[]>(
      this.apiUrl + '/drivers?driver_number=' + driverNumber
    );
    const result = await firstValueFrom(drivers);
    return result[0];
  }
}
