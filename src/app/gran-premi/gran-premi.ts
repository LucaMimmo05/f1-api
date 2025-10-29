import { Component, inject, OnInit } from '@angular/core';
import { F1Service } from '../service/f1-service';
import { GranPremio } from '../gran-premio/gran-premio';
import { CardModule } from 'primeng/card';
import { Meeting } from '../models/metting';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gran-premi',
  imports: [GranPremio, CardModule, CommonModule, SelectModule, FormsModule, ButtonModule],
  templateUrl: './gran-premi.html',
  styleUrl: './gran-premi.css',
})
export class GranPremi implements OnInit {
  f1Service = inject(F1Service);
  meetings: Meeting[] = [];
  years: number[] = [2024, 2023];
  selectedYear: number = 2024;
  router = inject(Router);

  ngOnInit() {
    this.getMeetings(this.selectedYear);
  }

  async getMeetings(year: number) {
    this.meetings = await this.f1Service.getMeetings(year);
  }

  onYearChange() {
    this.getMeetings(this.selectedYear);
  }

  onDetailsClick(meeting : Meeting) {
    this.router.navigate(['/gran-premio', meeting.meeting_key]);
  }
}
