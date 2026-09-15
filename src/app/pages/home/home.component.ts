import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ACTIVE_PROJECTS, ActiveProject, getActiveProjects } from '../../data/building';
import { LEARNING_TRACKS, LearningTrack } from '../../data/learning-tracks';
import { FINDINGS, Finding } from '../../data/findings';
import { REAL_METRICS, RealMetric } from '../../data/goals';
import { TechIconComponent } from '../../visuals/technology-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TechIconComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  activeProjects: ActiveProject[] = [];
  learningTracks: LearningTrack[] = [];
  recentNotes: Finding[] = [];
  metrics: RealMetric[] = [];

  currentFocus: string[] = [
    'Java 17',
    'Spring Boot 3',
    'Backend Engineering',
    'SQL & Database Design',
    'DSA',
    'System Design',
    'Machine Learning'
  ];

  ngOnInit(): void {
    this.activeProjects = getActiveProjects().slice(0, 2);
    this.learningTracks = LEARNING_TRACKS;
    this.recentNotes = FINDINGS.slice(0, 4);
    this.metrics = REAL_METRICS;
  }

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      'Applying': 'status-applying',
      'Building': 'status-building',
      'Practicing': 'status-practicing',
      'Learning': 'status-learning',
      'Exploring': 'status-exploring'
    };
    return map[status] ?? 'status-exploring';
  }

  getBuildStatusClass(status: string): string {
    const map: Record<string, string> = {
      'In Progress': 'build-active',
      'Building': 'build-active',
      'Iterating': 'build-iterating',
      'Exploring': 'build-exploring',
      'Completed': 'build-completed',
      'Archived': 'build-archived'
    };
    return map[status] ?? 'build-exploring';
  }

}
