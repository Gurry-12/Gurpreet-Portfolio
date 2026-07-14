import { Component, OnInit, Inject, PLATFORM_ID, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('revealElement') revealElements!: QueryList<ElementRef>;

  profile = {
    name: 'Gurpreet Singh',
    role: 'Software Engineer',
    headline: 'Building scalable backend systems and enterprise applications using Java, Spring Boot, React, SQL, and Machine Learning.',
    status: 'Open to work'
  };

  experience = [
    {
      company: 'Monocept',
      role: 'Software Engineering Intern',
      period: 'Feb 2026 - Present',
      current: true,
      responsibilities: [
        'Contributing to software development and collaborating with the team to design and build scalable features.',
        'Writing robust, maintainable code for enterprise systems.'
      ],
      impact: 'Improving system reliability and accelerating feature delivery.'
    },
    {
      company: 'Anviam Solutions',
      role: 'Software Developer Intern',
      period: 'Jan - Aug 2025',
      current: false,
      responsibilities: [
        'Architected scalable APIs with ASP.NET Core and Python.',
        'Optimized database performance by 30%.'
      ],
      impact: 'Built production-ready backend modules handling real user traffic.'
    }
  ];

  skills = [
    {
      category: 'Backend',
      icon: 'bi-server',
      items: ['Java', 'Spring Boot', 'REST API', 'Hibernate', 'JWT', 'SQL']
    },
    {
      category: 'Frontend',
      icon: 'bi-window',
      items: ['React', 'Bootstrap', 'JavaScript']
    },
    {
      category: 'Machine Learning',
      icon: 'bi-cpu',
      items: ['Python', 'Flask', 'scikit-learn']
    },
    {
      category: 'Tools',
      icon: 'bi-tools',
      items: ['Git', 'Postman', 'Docker', 'Cloudinary', 'Swagger']
    }
  ];

  featuredProjects = [
    {
      id: 'enterprise-insurance',
      title: 'Enterprise Insurance Policy & Claim Management',
      type: 'Flagship Project',
      description: 'A comprehensive system managing policy workflows, claim lifecycles, and role-based access.',
      tags: ['Java', 'Spring Boot', 'React', 'JWT'],
      metrics: [
        { label: 'Uptime', value: '99.9%' },
        { label: 'Latency', value: '<50ms' }
      ]
    },
    {
      id: 'payment-simulator',
      title: 'Insurance Payment Flow Simulator',
      type: 'Interactive Tool',
      description: 'Simulates payment processing with QR, status polling, and workflow animation.',
      tags: ['React', 'WebSockets'],
      metrics: []
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      this.revealElements.forEach(el => observer.observe(el.nativeElement));
    }
  }

  copyEmail(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText('work.gurpreetsw@gmail.com');
    }
  }
}
