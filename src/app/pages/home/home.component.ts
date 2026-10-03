import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PROJECTS, Project } from '../../data/projects';
import { TechIconComponent } from '../../visuals/technology-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TechIconComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  featuredProject: Project | null = null;
  supportingProject: Project | null = null;

  currentFocus: string[] = [
    'Java 17',
    'Spring Boot 3',
    'SQL Server & Indexing',
    'High-Concurrency Backend Architecture',
    'Data Structures & Algorithms (600+ Solved)',
    'Stateless JWT Security & RBAC',
    'Deterministic State Machines'
  ];

  ngOnInit(): void {
    this.featuredProject = PROJECTS.find(p => p.id === 'insureflow') || PROJECTS[0];
    this.supportingProject = PROJECTS.find(p => p.id === 'cloudwatch-log-sentinel') || PROJECTS[1];
  }
}
