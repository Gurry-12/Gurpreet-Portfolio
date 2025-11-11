import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'web' | 'desktop' | 'backend' | 'fullstack' | 'other';
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  selectedCategory: string = 'all';
  
  projects: Project[] = [
  {
    id: 1,
    title: 'Sentiment Analyzer',
    description: 'Machine Learning-powered sentiment analysis app with Flask backend, providing text classification and insights.',
    image: 'assets/images/sentiment-analyzer.jpg',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'NLP', 'ML'],
    githubUrl: 'https://github.com/Gurry-12/Sentimental-Analyzer',
    category: 'fullstack',
    featured: true
  },
  {
    id: 2,
    title: 'Disaster Ready (Full System)',
    description: 'End-to-end disaster management platform with Angular frontend, .NET Web API backend, and Flask ML service.',
    image: 'assets/images/disaster-ready.jpg',
    technologies: ['Angular', '.NET Core', 'Flask', 'SQL Server', 'REST API'],
    githubUrl: 'https://github.com/Gurry-12/Disaster-Ready', // confirm repo name
    category: 'fullstack',
    featured: true
  },
  {
    id: 3,
    title: 'Algebra App',
    description: 'Flask-based web application that solves algebraic equations and provides step-by-step solutions.',
    image: 'assets/images/algebra.jpg',
    technologies: ['Python', 'Flask', 'Math Libraries'],
    githubUrl: 'https://github.com/Gurry-12/Algebra-App',
    category: 'web',
    featured: false
  },
  {
    id: 4,
    title: 'Bookshelf API',
    description: 'RESTful Web API for managing books, authors, and user collections.',
    image: 'assets/images/bookshelf.jpg',
    technologies: ['C#', 'ASP.NET Core Web API', 'SQL Server'],
    githubUrl: 'https://github.com/Gurry-12/BookShelf',
    category: 'backend',
    featured: false
  },
  {
    id: 5,
    title: 'Whispering Pages',
    description: 'A blogging and publishing platform built with ASP.NET MVC.',
    image: 'assets/images/whispering-pages.jpg',
    technologies: ['C#', 'ASP.NET MVC', 'Entity Framework'],
    githubUrl: 'https://github.com/Gurry-12/Whispering-Pages',
    category: 'web',
    featured: false
  },
  {
    id: 6,
    title: 'Sentiment Analyzer (Streamlit)',
    description: 'Interactive web app for text sentiment classification using Streamlit and ML models.',
    image: 'assets/images/streamlit-sentiment.jpg',
    technologies: ['Python', 'Streamlit', 'NLP', 'ML'],
    githubUrl: 'https://github.com/Gurry-12/Sentimental-Streamlit',
    category: 'web',
    featured: false
  },
  {
    id: 7,
    title: 'Wine Quality Prediction',
    description: 'Machine learning project predicting wine quality based on physicochemical properties.',
    image: 'assets/images/wine.jpg',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/Gurry-12/Wine-Prediction',
    category: 'other',
    featured: false
  },
  {
    id: 8,
    title: 'Dry Bean Classification',
    description: 'ML model to classify dry bean varieties from dataset features.',
    image: 'assets/images/dry-beans.jpg',
    technologies: ['Python', 'ML', 'Data Science'],
    githubUrl: 'https://github.com/Gurry-12/Dry-Bean-Classification',
    category: 'other',
    featured: false
  },
  {
    id: 9,
    title: 'Piano App',
    description: 'A virtual piano built with PyQt, providing an interactive GUI for playing notes.',
    image: 'assets/images/piano.jpg',
    technologies: ['Python', 'PyQt'],
    githubUrl: 'https://github.com/Gurry-12/Piano-PyQt',
    category: 'desktop',
    featured: false
  }
];

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  get featuredProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Apps' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'backend', label: 'Backend Apps' },
    { value: 'desktop', label: 'Desktop App'},
    { value: 'other', label: 'Other' }
  ];

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
