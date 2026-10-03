import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Principle {
  title: string;
  description: string;
}

interface Interest {
  title: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  specialization: string;
  period: string;
  leadership: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  education: Education = {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    institution: 'Gulzar College of Engineering (Punjab Technical University)',
    specialization: 'Internet of Things (IoT) & Cyber Security',
    period: '2021 – 2025',
    leadership: 'Chairperson — CodeForge Student Technical Community (Led technical hackathons, workshops, and peer programming initiatives)'
  };

  principles: Principle[] = [
    {
      title: 'Understand Before Implementing',
      description: 'I trace data flows, review edge cases, and define domain constraints before writing code. Moving fast on a flawed mental model creates more rework than taking time to model properly upfront.'
    },
    {
      title: 'Build, Don\'t Just Study',
      description: 'Tutorials deliberately bypass real-world failure modes. Only by building working software — and diagnosing it under real constraints — do you develop authentic engineering intuition.'
    },
    {
      title: 'Validate at Every Boundary',
      description: 'Business rules belong in the domain service layer, request contracts at controller boundaries, and data integrity constraints directly in the database schema.'
    },
    {
      title: 'Write for the Next Engineer',
      description: 'Code that works is table stakes. Code that is structured, testable, and easily reasoned about six months later by another engineer is the actual mark of craftsmanship.'
    }
  ];

  interests: Interest[] = [
    {
      title: 'Backend Systems & API Architecture',
      description: 'Designing RESTful services, transactional workflows, and clean layered boundaries in Java and Spring Boot.'
    },
    {
      title: 'Relational Database Optimization',
      description: 'Schema normalization, indexing strategy, transaction isolation levels, and eliminating N+1 bottlenecks in SQL Server.'
    },
    {
      title: 'Algorithmic Problem Solving',
      description: 'Practicing DSA as an engineering discipline to build strong mental models for performance and complexity trade-offs.'
    }
  ];
}
