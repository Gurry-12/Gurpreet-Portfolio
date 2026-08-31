import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { getFeaturedProjects, Project } from '../../data/projects';
import { FINDINGS, Finding } from '../../data/findings';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];
  notes: Finding[] = [];

  exploringTopics: string[] = [
    'Java 17',
    'Spring Boot 3',
    'Spring Security',
    'SQL Indexing & ACID',
    'Data Structures & Algorithms',
    'System Design',
    'Concurrency & Locks'
  ];

  ngOnInit(): void {
    this.projects = getFeaturedProjects();
    this.notes = FINDINGS.slice(0, 4);
  }
}
