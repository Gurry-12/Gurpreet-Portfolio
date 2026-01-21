import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  status: 'completed' | 'in-progress' | 'archived';
  year: string;
  type: 'web' | 'api' | 'ml' | 'mobile';
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  selectedFilter = 'all';

  projects: Project[] = [
    {
      id: 'enterprise-portal',
      title: 'Enterprise Management Portal',
      description: 'Built a role-based access control system that cut administrative overhead by 40%. Handles user authentication, permissions, and data management for enterprise clients using ASP.NET Core and SQL Server.',
      tech: ['ASP.NET Core', 'C#', 'SQL Server', 'Razor Pages'],
      github: 'https://github.com/Gurry-12/enterprise-portal',
      status: 'completed',
      year: '2024',
      type: 'web'
    },
    {
      id: 'emotion-analyzer',
      title: 'Real-Time Emotion Insight Analyzer',
      description: 'Developed a sentiment analysis engine with 85% accuracy that processes text in real-time. Includes rate limiting, Docker containerization, and handles thousands of requests per minute.',
      tech: ['Python', 'Flask', 'NLTK', 'scikit-learn', 'Docker'],
      github: 'https://github.com/Gurry-12/emotion-analyzer',
      status: 'completed',
      year: '2024',
      type: 'ml'
    },
    {
      id: 'disaster-dashboard',
      title: 'Disaster Response Dashboard',
      description: 'Created a real-time emergency response system that coordinates disaster alerts and resource allocation. Built with Angular 17, featuring live data updates and responsive design for field workers.',
      tech: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap'],
      github: 'https://github.com/Gurry-12/disaster-dashboard',
      live: 'https://disaster-response.netlify.app',
      status: 'completed',
      year: '2024',
      type: 'web'
    },
    {
      id: 'wine-quality-ml',
      title: 'Wine Quality Scoring System',
      description: 'Built an ML pipeline using Random Forest that predicts wine quality with high accuracy. Deployed as a Flask API with proper error handling and input validation for production use.',
      tech: ['Python', 'scikit-learn', 'Pandas', 'Flask', 'ML'],
      github: 'https://github.com/Gurry-12/wine-quality-ml',
      status: 'completed',
      year: '2024',
      type: 'ml'
    },
    {
      id: 'api-gateway',
      title: 'Microservices API Gateway',
      description: 'Architected a secure API gateway with JWT authentication and comprehensive BDD testing. Handles service routing, rate limiting, and request validation for multiple microservices.',
      tech: ['Python', 'Flask', 'JWT', 'BDD Testing', 'Postman'],
      status: 'completed',
      year: '2024',
      type: 'api'
    },
    {
      id: 'portfolio-v2',
      title: 'Developer Portfolio v2',
      description: 'Designed and built this portfolio with a unique Gen Z aesthetic, focusing on performance and user experience. Features PWA capabilities, responsive design, and custom animations.',
      tech: ['Angular', 'TypeScript', 'SCSS', 'PWA'],
      github: 'https://github.com/Gurry-12/Gurpreet-Portfolio',
      live: 'https://gurpreetdev.netlify.app',
      status: 'in-progress',
      year: '2025',
      type: 'web'
    }
  ];

  get filteredProjects() {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.type === this.selectedFilter);
  }

  get projectTypes() {
    const types = [...new Set(this.projects.map(p => p.type))];
    return ['all', ...types];
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'completed': return 'var(--accent)';
      case 'in-progress': return 'var(--warning)';
      case 'archived': return 'var(--text-muted)';
      default: return 'var(--text-dim)';
    }
  }

  trackByProject(index: number, project: Project): string {
    return project.id;
  }
}