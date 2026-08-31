import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JOURNEY, JourneyMilestone } from '../../data/journey';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './journey.component.html'
})
export class JourneyComponent implements OnInit {
  milestones: JourneyMilestone[] = [];

  ngOnInit(): void {
    this.milestones = JOURNEY;
  }
}
