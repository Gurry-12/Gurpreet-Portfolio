import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JOURNEY, JourneyMilestone } from '../../data/journey';
import { TechIconComponent } from '../../visuals/technology-icon.component';

export interface DetailedExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  impact: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule, TechIconComponent],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {
  experiences: DetailedExperience[] = [
    {
      period: '2026 — Present',
      role: 'Software Engineer',
      company: 'Monocept',
      location: 'Hyderabad / Remote · India',
      summary: 'Engineering enterprise backend architectures using Java 17, Spring Boot 3, and SQL Server. Designing secure, multi-role transaction workflows, stateless JWT authentication pipelines, and optimizing relational query performance.',
      responsibilities: [
        'Architected and implemented RESTful microservices following Layered and Clean Architecture patterns.',
        'Enforced stateless JWT security boundaries with granular role-based access control (RBAC) across endpoints.',
        'Designed normalized relational schemas and tuned query performance in Microsoft SQL Server.',
        'Built deterministic finite state machines to eliminate illegal business state transitions in complex domain workflows.'
      ],
      technologies: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JPA / Hibernate', 'SQL Server', 'REST APIs', 'Git'],
      impact: 'Eliminated state bypass vulnerabilities by replacing boolean flag logic with deterministic state machine transitions.'
    },
    {
      period: '2025',
      role: 'Software Developer Intern',
      company: 'Anviam Solutions',
      location: 'Chandigarh · India',
      summary: 'Developed and optimized 6+ backend modules using ASP.NET Core and Python. Designed secure APIs, authored OpenAPI specifications, and integrated backend services with Angular client applications.',
      responsibilities: [
        'Developed REST APIs using ASP.NET Core 8 and Python Flask following MVC patterns.',
        'Implemented JWT authentication filters and role-based permissions for protected administrative routes.',
        'Authored comprehensive Swagger / OpenAPI documentation for seamless cross-team integration.',
        'Optimized SQL queries and database indexes to minimize query latency on multi-table joins.'
      ],
      technologies: ['ASP.NET Core', 'C#', 'Python', 'Entity Framework Core', 'SQL Query Tuning', 'Swagger', 'Angular'],
      impact: 'Streamlined API integration cycles by delivering strict contract documentation and reducing query response times.'
    },
    {
      period: '2024',
      role: 'Software Engineer Intern',
      company: 'Codehop Interfusion',
      location: 'India',
      summary: 'Built automated backend tooling, verification utilities, and test suites using Python and Flask. Integrated Behaviour-Driven Development (BDD) workflows to enforce strict regression safety.',
      responsibilities: [
        'Developed automated testing pipelines using Python, Flask, and Behave for BDD scenario validation.',
        'Automated database seeding and state verification for repeatable continuous integration testing.',
        'Refactored legacy script routines into modular, reusable service classes.'
      ],
      technologies: ['Python', 'Flask', 'BDD / Behave', 'Test Automation', 'Git', 'Linux'],
      impact: 'Automated repetitive manual testing processes, improving test execution reliability across internal backend utilities.'
    }
  ];

  milestones: JourneyMilestone[] = [];

  ngOnInit(): void {
    this.milestones = JOURNEY;
  }
}
