import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TechIconComponent } from '../../visuals/technology-icon.component';

interface SkillGroup {
  category: string;
  description: string;
  items: { name: string; note?: string }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule, TechIconComponent],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      category: 'LANGUAGES',
      description: 'Core languages used for backend services, algorithmic problem solving, and scripting.',
      items: [
        { name: 'Java 17', note: 'Primary enterprise language (OOP, Streams, Concurrency)' },
        { name: 'SQL', note: 'Relational query design, indexing, and execution plans' },
        { name: 'Python', note: 'Backend scripting, Flask APIs, and algorithmic prototypes' },
        { name: 'C#', note: 'ASP.NET Core REST API development' },
        { name: 'TypeScript / JavaScript', note: 'Angular integration and frontend state' }
      ]
    },
    {
      category: 'BACKEND & FRAMEWORKS',
      description: 'Frameworks and runtimes for building resilient, layered web services.',
      items: [
        { name: 'Spring Boot 3', note: 'Service layer orchestration, Dependency Injection, Auto-configuration' },
        { name: 'Spring Security', note: 'Stateless JWT filters, authorization rules, and role hierarchies' },
        { name: 'Spring Data JPA / Hibernate', note: 'Entity lifecycle, JPQL queries, caching, and transactions' },
        { name: 'ASP.NET Core 8', note: 'Clean Architecture, middleware pipelines, and EF Core' },
        { name: 'RESTful API Architecture', note: 'HTTP status semantics, DTO boundaries, and versioning' }
      ]
    },
    {
      category: 'DATABASES & PERSISTENCE',
      description: 'Relational storage engines, transaction management, and query optimization.',
      items: [
        { name: 'Microsoft SQL Server', note: 'Stored procedures, indexing strategies, and locking behavior' },
        { name: 'PostgreSQL', note: 'ACID transaction control, constraints, and JSONB queries' },
        { name: 'MySQL', note: 'Relational schema design and foreign key integrity' },
        { name: 'Query Optimization', note: 'Index analysis, eliminating N+1 queries, and connection pooling' }
      ]
    },
    {
      category: 'SECURITY & ARCHITECTURE',
      description: 'Defensive engineering, access control boundaries, and architectural patterns.',
      items: [
        { name: 'Stateless JWT Authentication', note: 'Token signing, claims validation, and blacklisting' },
        { name: 'Role-Based Access Control (RBAC)', note: 'Granular resource permissions and method-level security' },
        { name: 'Finite State Machines', note: 'Deterministic lifecycle transitions and invariant enforcement' },
        { name: 'Layered / Clean Architecture', note: 'Decoupled domain models, service rules, and repository interfaces' }
      ]
    },
    {
      category: 'TOOLS & DEVOPS',
      description: 'Development tooling, automated testing, and version control.',
      items: [
        { name: 'Git & GitHub', note: 'Feature branching, pull requests, and commit discipline' },
        { name: 'Docker', note: 'Containerization for localized reproducible service testing' },
        { name: 'JUnit 5 & Mockito', note: 'Unit and integration testing of business logic' },
        { name: 'Postman & Swagger / OpenAPI', note: 'API contract definition, verification, and documentation' }
      ]
    },
    {
      category: 'CURRENT FOCUS',
      description: 'Active technical deep-dives and continuous engineering practice.',
      items: [
        { name: 'Data Structures & Algorithms', note: '600+ solved problems across LeetCode & CodeChef' },
        { name: 'High-Concurrency Backend Systems', note: 'Thread safety, optimistic locking, and idempotent transactions' },
        { name: 'Distributed Systems Patterns', note: 'Event-driven communication, message queues, and partitioning' }
      ]
    }
  ];
}
