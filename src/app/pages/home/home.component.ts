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
    'Java 8+ / 17',
    'Spring Boot & Spring Data JPA',
    'ASP.NET Core & Entity Framework Core',
    'Python & Flask Microservices',
    'SQL Server & MySQL Query Tuning',
    'GeeksforGeeks 60-Day POTD Challenge',
    'Multithreading & OOP Design Patterns',
    'Stateless JWT Security & RBAC'
  ];

  ngOnInit(): void {
    this.featuredProject = PROJECTS.find(p => p.id === 'insurance-system') || PROJECTS[0];
    this.supportingProject = PROJECTS.find(p => p.id === 'department-expense-approval') || PROJECTS[1];
  }
}
