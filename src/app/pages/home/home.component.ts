import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { getFeaturedProjects, Project } from '../../data/projects';
import { FINDINGS, Finding } from '../../data/findings';

export interface TelemetryMetric {
  label: string;
  value: string;
  detail: string;
  tag: string;
}

export interface PipelineNode {
  step: string;
  name: string;
  tech: string;
  status: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];
  notes: Finding[] = [];

  activePipelineIndex = 1;

  pipelineNodes: PipelineNode[] = [
    { step: '01', name: 'Client Ingress', tech: 'HTTPS / JSON DTOs', status: 'Active' },
    { step: '02', name: 'JWT & RBAC Gate', tech: 'Spring Security 6', status: 'Verified' },
    { step: '03', name: 'FSM Service Engine', tech: 'Spring Boot 3 / Transactions', status: 'Enforced' },
    { step: '04', name: 'JPA & Hibernate', tech: 'Optimistic Locking / JPQL', status: 'Indexed' },
    { step: '05', name: 'ACID Data Store', tech: 'SQL Server / Foreign Keys', status: 'Consistent' }
  ];

  telemetryMetrics: TelemetryMetric[] = [
    { label: 'Verified DSA Solves', value: '606+', detail: 'CodeChef & LeetCode', tag: 'Codolio #3,797' },
    { label: 'Secured REST APIs', value: '35+', detail: 'Enterprise Endpoints', tag: 'Spring Boot 3' },
    { label: 'State Workflow Engine', value: '6-Stage', detail: 'Zero-Bypass FSM Rules', tag: 'Deterministic' },
    { label: 'Database Concurrency', value: '100% ACID', detail: 'Composite Indexing', tag: 'Sub-50ms' }
  ];

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

  selectPipelineStep(idx: number): void {
    this.activePipelineIndex = idx;
  }
}
