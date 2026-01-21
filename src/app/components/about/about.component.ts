import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  profile = {
    name: 'Gurpreet Singh',
    location: 'Bhiwadi, Rajasthan, India',
    languages: ['English', 'Hindi', 'Punjabi']
  };

  education = {
    degree: 'B.Tech in Computer Science & Engineering',
    specialization: 'IoT & Cyber Security with Blockchain',
    university: 'Punjab Technical University',
    institute: 'Gulzar Group of Institutes',
    duration: '2021 - 2025',
    status: 'Final Year'
  };

  achievements = [
    {
      title: 'Academic Excellence Award',
      description: 'Achieved highest academic score in Computer Science Department',
      organization: 'Gulzar Group of Institutes',
      year: '2024',
      icon: 'bi-trophy'
    },
    {
      title: 'Student Placement Coordinator',
      description: 'Successfully coordinated 10+ placement drives, facilitating career opportunities for 2000+ students',
      organization: 'Gulzar Group of Institutes',
      year: '2024-2025',
      icon: 'bi-people'
    },
    {
      title: 'Technical Club Chairperson',
      description: 'Led CodeForge Club initiatives, organizing technical events and peer learning sessions',
      organization: 'College Technical Society',
      year: '2023-2024',
      icon: 'bi-code-slash'
    },
    {
      title: 'Backend Systems Development',
      description: 'Architected and developed 6+ scalable backend modules using ASP.NET Core and Python',
      organization: 'Anviam Solutions Pvt. Ltd.',
      year: '2025',
      icon: 'bi-server'
    },
    {
      title: 'Performance Optimization',
      description: 'Optimized SQL Server queries achieving 30% improvement in API response times',
      organization: 'Anviam Solutions Pvt. Ltd.',
      year: '2025',
      icon: 'bi-speedometer2'
    },
    {
      title: 'Workflow Automation',
      description: 'Developed automated Excel workflows resulting in 25% efficiency improvement',
      organization: 'Gulzar Group of Institutes',
      year: '2024',
      icon: 'bi-gear'
    }
  ];

  bio = `I'm a backend developer who thrives on solving complex data challenges and building robust systems. Recently completed impactful internships at Anviam Solutions and Codehop Interfusion, where I architected scalable APIs with ASP.NET Core and Python, and optimized database performance by 30%.

My experience spans from building enterprise management portals to developing ML-powered sentiment analysis systems. I've led placement coordination for 2000+ students and created automation tools that significantly improved operational efficiency.

Currently seeking a full-time backend developer role where I can contribute to meaningful projects and continue growing my expertise in system architecture and performance optimization.`;

  skills = {
    languages: ['C#', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    frameworks: ['ASP.NET Core', 'Angular', 'Flask', 'Bootstrap'],
    databases: ['SQL Server', 'MySQL', 'Oracle'],
    tools: ['Git', 'Docker', 'Postman', 'Visual Studio', 'VS Code'],
    concepts: ['REST APIs', 'JWT Auth', 'MVC', 'OOP', 'Data Structures']
  };

  timeline = [
    {
      year: '2025',
      title: 'Software Developer Intern',
      company: 'Anviam Solutions Pvt. Ltd.',
      description: 'Completed successful internship building production-ready backend modules. Implemented JWT authentication systems, optimized SQL queries for 30% performance improvement, and developed scalable APIs handling real user traffic.',
      current: false
    },
    {
      year: '2024',
      title: 'Software Engineer Intern',
      company: 'Codehop Interfusion',
      description: 'Dove deep into microservices architecture with Python and Flask. Built robust API endpoints with comprehensive BDD testing—because broken code in production is not an option.',
      current: false
    },
    {
      year: '2024',
      title: 'Student Placement Coordinator',
      company: 'Gulzar Group of Institutes',
      description: 'Led placement operations for 2000+ students across 10+ drives. Created automated Excel workflows that saved hours of manual work and helped students land their dream jobs.',
      current: false
    },
    {
      year: '2021',
      title: 'Started B.Tech CSE',
      company: 'Gulzar Group of Institutes',
      description: 'Embarked on my computer science journey with a focus on IoT, Cyber Security, and Blockchain. This is where I discovered my love for backend development and system architecture.',
      current: false
    }
  ];
}