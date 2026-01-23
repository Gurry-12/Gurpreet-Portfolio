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
      id: 'library-portal',
      title: 'Online Book Management System',
      description: 'Full-stack library management platform with role-based authentication and CRUD operations. Features admin dashboard, user registration, book inventory tracking, and automated fine calculations using ASP.NET Core MVC architecture.',
      tech: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework', 'Bootstrap'],
      github: 'https://github.com/Gurry-12/OnlineBookManagementSystem',
      status: 'completed',
      year: '2024',
      type: 'web'
    },
    {
      id: 'emotion-analyzer',
      title: 'Sentiment Analysis API',
      description: 'RESTful API for real-time text sentiment analysis using NLTK and machine learning models. Processes user input to classify emotions as positive, negative, or neutral with confidence scores and detailed analytics.',
      tech: ['Python', 'Flask', 'NLTK', 'scikit-learn', 'REST API'],
      github: 'https://github.com/Gurry-12/sentiment_analyzer',
      status: 'completed',
      year: '2024',
      type: 'ml'
    },
    {
      id: 'disaster-dashboard',
      title: 'Disaster Response Dashboard',
      description: 'Emergency management web application built with Angular 18 for coordinating disaster response efforts. Features real-time alerts, resource tracking, responsive design for mobile field workers, and interactive data visualization.',
      tech: ['Angular 18', 'TypeScript', 'RxJS', 'Chart.js', 'Bootstrap'],
      github: 'https://github.com/Gurry-12/Disaster-Ready-UI',
      status: 'completed',
      year: '2024',
      type: 'web'
    },
    {
      id: 'wine-quality-ml',
      title: 'Wine Quality Prediction Model',
      description: 'Machine learning system that predicts wine quality ratings using Random Forest algorithm. Includes data preprocessing, feature engineering, model training, and Flask API deployment with comprehensive error handling.',
      tech: ['Python', 'scikit-learn', 'Pandas', 'Flask', 'Jupyter'],
      github: 'https://github.com/Gurry-12/wine_prediction',
      status: 'completed',
      year: '2024',
      type: 'ml'
    },
    {
      id: 'portfolio-v2',
      title: 'Developer Portfolio Website',
      description: 'Modern portfolio website featuring Gen Z aesthetic with dark-first design, live IST clock, theme toggle, and PWA capabilities. Built with Angular 18 standalone components and deployed on Netlify with CI/CD.',
      tech: ['Angular 18', 'TypeScript', 'SCSS', 'PWA', 'Netlify'],
      github: 'https://github.com/Gurry-12/Gurpreet-Portfolio',
      live: 'https://gurpreetdev.netlify.app',
      status: 'completed',
      year: '2025',
      type: 'web'
    },
    {
      id: 'api-testing',
      title: 'API Testing & Documentation Suite',
      description: 'Comprehensive API testing framework with automated test suites, documentation generation, and performance monitoring. Includes Postman collections, BDD testing scenarios, and CI/CD integration.',
      tech: ['Postman', 'Newman', 'BDD', 'JavaScript', 'CI/CD'],
      status: 'completed',
      year: '2024',
      type: 'api'
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