import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { F1Service } from '../service/f1-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meeting } from '../models/metting';
import { Session } from '../models/session';
import { Driver } from '../models/driver';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SessionResult } from '../models/session-result';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-gran-premio',
  imports: [CardModule, CommonModule, TableModule, ButtonModule],
  templateUrl: './gran-premio.html',
  styleUrl: './gran-premio.css',
})
export class GranPremio implements OnInit {
  f1Service = inject(F1Service);
  route = inject(ActivatedRoute);
  meetingKey: number | null = Number(this.route.snapshot.paramMap.get('id'));
  meeting: Meeting | null = null;
  sessions: Session[] | null = null;
  drivers: Driver[] | null = null;
  sessionResults: SessionResult[] | null = null;
  router = inject(Router);

  ngOnInit() {
    if (this.meetingKey) {
      this.getMeetingDetails(this.meetingKey);
      this.getSessionDetails(this.meetingKey);
      this.getDriverDetails(this.meetingKey);
    }
  }

  async getMeetingDetails(meetingKey: number) {
    this.meeting = await this.f1Service.getMeeting(meetingKey);
  }

  async getSessionDetails(meetingKey: number) {
    this.sessions = await this.f1Service.getSessions(meetingKey);
  }

  async getDriverDetails(meetingKey: number) {
    this.drivers = await this.f1Service.getDriversPerMeetingKey(meetingKey);
  }

  async getSessionResults(sessionKey: number) {
    this.sessionResults = await this.f1Service.getSessionResults(sessionKey);
  }
  

  getDate(dateStart: string): string {
    const date = new Date(dateStart);
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  getTime(dateStart: string): string {
    const date = new Date(dateStart);
    return date.toLocaleTimeString('it-IT', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  goToSessionResults(sessionKey: number) {
    this.router.navigate(['/session-results', sessionKey]);
  }
}
