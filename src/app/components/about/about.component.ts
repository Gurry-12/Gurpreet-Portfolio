import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  bio = `Backend engineer who builds reliable, performant systems. Currently contributing at Monocept, with prior experience at Anviam Solutions and Codehop Interfusion — where I architected scalable APIs, optimized database queries for 30% performance gains, and shipped production features.

My approach is engineering-first: understand the problem deeply, design for the constraints, then build incrementally with measurability built in. I care about code that is readable, tests that are meaningful, and systems that are operable.

Actively seeking full-time backend roles where I can work on distributed systems, high-throughput APIs, and data-intensive applications.`;

  education = {
    degree: 'B.Tech in Computer Science & Engineering',
    specialization: 'IoT & Cyber Security with Blockchain',
    university: 'Punjab Technical University',
    institute: 'Gulzar Group of Institutes',
    duration: '2021 — 2025',
    status: 'Final Year'
  };

  skillGroups = [
    {
      category: 'Backend',
      icon: 'bi-server',
      skills: [
        { name: 'Java', level: 'primary' },
        { name: 'Spring Boot', level: 'primary' },
        { name: 'ASP.NET Core', level: 'primary' },
        { name: 'Python', level: 'primary' },
        { name: 'REST APIs', level: 'primary' },
        { name: 'Microservices', level: 'secondary' },
        { name: 'JWT Auth', level: 'secondary' },
        { name: 'Flask', level: 'secondary' }
      ]
    },
    {
      category: 'Frontend',
      icon: 'bi-window',
      skills: [
        { name: 'Angular', level: 'primary' },
        { name: 'TypeScript', level: 'primary' },
        { name: 'JavaScript', level: 'primary' },
        { name: 'HTML/CSS', level: 'secondary' },
        { name: 'Bootstrap', level: 'secondary' }
      ]
    },
    {
      category: 'Database',
      icon: 'bi-database',
      skills: [
        { name: 'SQL Server', level: 'primary' },
        { name: 'MySQL', level: 'primary' },
        { name: 'Oracle', level: 'secondary' },
        { name: 'Entity Framework', level: 'secondary' },
        { name: 'SQL Optimization', level: 'primary' }
      ]
    },
    {
      category: 'DevOps & Cloud',
      icon: 'bi-cloud',
      skills: [
        { name: 'Docker', level: 'secondary' },
        { name: 'Git', level: 'primary' },
        { name: 'CI/CD', level: 'secondary' },
        { name: 'Linux', level: 'secondary' }
      ]
    },
    {
      category: 'Tools',
      icon: 'bi-tools',
      skills: [
        { name: 'VS Code', level: 'primary' },
        { name: 'Visual Studio', level: 'primary' },
        { name: 'Postman', level: 'primary' },
        { name: 'IntelliJ IDEA', level: 'secondary' },
        { name: 'Jupyter', level: 'secondary' }
      ]
    },
    {
      category: 'Concepts',
      icon: 'bi-lightbulb',
      skills: [
        { name: 'System Design', level: 'primary' },
        { name: 'OOP', level: 'primary' },
        { name: 'Data Structures', level: 'primary' },
        { name: 'MVC', level: 'primary' },
        { name: 'Design Patterns', level: 'secondary' }
      ]
    }
  ];

  timeline = [
    {
      year: '2026',
      title: 'Software Intern',
      company: 'Monocept',
      description: 'Contributing to production software development. Collaborating with engineering teams to design and build scalable features with clean, maintainable code.',
      current: true,
      type: 'work'
    },
    {
      year: '2025',
      title: 'Software Developer Intern',
      company: 'Anviam Solutions Pvt. Ltd.',
      description: 'Built production-ready backend modules with ASP.NET Core. Implemented JWT authentication, optimized SQL queries for 30% performance improvement, and developed scalable APIs serving real users.',
      current: false,
      type: 'work'
    },
    {
      year: '2025',
      title: 'Student Placement Coordinator',
      company: 'Gulzar Group of Institutes',
      description: 'Led placement operations for 2000+ students across 10+ drives. Automated Excel workflows saving hours of manual processing.',
      current: false,
      type: 'leadership'
    },
    {
      year: '2024',
      title: 'Software Engineer Intern',
      company: 'Codehop Interfusion',
      description: 'Built microservices with Python and Flask. Developed API endpoints with comprehensive BDD testing and CI/CD pipeline integration.',
      current: false,
      type: 'work'
    },
    {
      year: '2024',
      title: 'Technical Club Chairperson',
      company: 'CodeForge Club',
      description: 'Led technical events and peer learning sessions. Organized coding workshops and hackathons for the college developer community.',
      current: false,
      type: 'leadership'
    },
    {
      year: '2021',
      title: 'Started B.Tech CSE',
      company: 'Gulzar Group of Institutes',
      description: 'Began computer science studies with focus on IoT, Cyber Security, and Blockchain. Discovered passion for backend development and system architecture.',
      current: false,
      type: 'education'
    }
  ];

  achievements = [
    {
      title: 'Academic Excellence Award',
      description: 'Highest academic score in Computer Science Department',
      organization: 'Gulzar Group of Institutes',
      year: '2024',
      icon: 'bi-trophy'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimized SQL Server queries achieving 30% improvement in API response times across production systems',
      organization: 'Anviam Solutions',
      year: '2025',
      icon: 'bi-speedometer2'
    },
    {
      title: 'Placement Coordinator',
      description: 'Coordinated 10+ placement drives facilitating career opportunities for 2000+ students',
      organization: 'Gulzar Group of Institutes',
      year: '2024-2025',
      icon: 'bi-people'
    },
    {
      title: 'Backend Systems Development',
      description: 'Architected and developed 6+ scalable backend modules using ASP.NET Core and Python',
      organization: 'Anviam Solutions',
      year: '2025',
      icon: 'bi-server'
    },
    {
      title: 'Club Chairperson',
      description: 'Led CodeForge Club initiatives, organizing technical events and peer learning sessions',
      organization: 'College Technical Society',
      year: '2023-2024',
      icon: 'bi-code-slash'
    },
    {
      title: 'Workflow Automation',
      description: 'Developed automated Excel workflows resulting in 25% efficiency improvement in manual processes',
      organization: 'Gulzar Group of Institutes',
      year: '2024',
      icon: 'bi-gear'
    }
  ];

  certifications = [
    { name: 'Java Programming', issuer: 'Coursera', year: '2024', icon: 'bi-cup-hot' },
    { name: 'SQL & Database Design', issuer: 'Microsoft Learn', year: '2024', icon: 'bi-database' },
    { name: 'RESTful API Design', issuer: 'Postman Academy', year: '2024', icon: 'bi-plug' },
    { name: 'Docker Fundamentals', issuer: 'Docker Hub', year: '2024', icon: 'bi-box-seam' }
  ];

  githubStats = {
    contributions: '200+',
    repositories: '12+',
    stars: '15+',
    streak: '30+ days'
  };
}
