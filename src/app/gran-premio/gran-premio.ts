import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { F1Service } from '../service/f1-service';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from '../models/metting';

@Component({
  selector: 'app-gran-premio',
  imports: [CardModule],
  templateUrl: './gran-premio.html',
  styleUrl: './gran-premio.css',
})
export class GranPremio implements OnInit {
  f1Service = inject(F1Service);
  meetingKey: string | null = null;
  route = inject(ActivatedRoute);
  meeting: Meeting | null = null;

  ngOnInit() {
    this.meetingKey = this.route.snapshot.paramMap.get('id');
    if (this.meetingKey) {
      this.f1Service.getMeeting(this.meetingKey).then((meeting) => {
        this.meeting = meeting;
      });
    }
  }
}
