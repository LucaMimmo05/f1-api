import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { F1Service } from '../service/f1-service';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from '../models/metting';
import { Session } from '../models/session';
import { Driver } from '../models/driver';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gran-premio',
  imports: [CardModule, CommonModule],
  templateUrl: './gran-premio.html',
  styleUrl: './gran-premio.css',
})
export class GranPremio implements OnInit {
  f1Service = inject(F1Service);
  route = inject(ActivatedRoute);
  meetingKey: string | null = this.route.snapshot.paramMap.get('id');
  meeting: Meeting | null = null;
  sessions: Session[] | null = null;
  drivers: Driver[] | null = null;

  ngOnInit() {
    if (this.meetingKey) {
      this.getMeetingDetails(this.meetingKey);
      this.getSessionDetails(this.meetingKey);
      this.getDriverDetails(this.meetingKey);
    }
  }

  async getMeetingDetails(meetingKey: string) {
    this.meeting = await this.f1Service.getMeeting(meetingKey);
  }

  async getSessionDetails(meetingKey: string) {
    this.sessions = await this.f1Service.getSessions(meetingKey);
  }

  async getDriverDetails(meetingKey: string) {
    this.drivers = await this.f1Service.getDrivers(meetingKey);
  }
}
