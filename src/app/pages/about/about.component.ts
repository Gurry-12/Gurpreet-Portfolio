import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JOURNEY, JourneyMilestone } from '../../data/journey';
import { CAREER_GOALS, CURRENT_PRIORITIES, CareerGoal, Priority } from '../../data/goals';
import { TechIconComponent } from '../../visuals/technology-icon.component';
import { PageHeaderArtComponent } from '../../visuals/page-header-art.component';

interface PlatformStat {
  name: string;
  handle: string;
  solved: number;
  rating?: string;
  detail: string;
  url: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
}

interface Principle {
  title: string;
  description: string;
}

interface EngineeringInterest {
  title: string;
  description: string;
}

interface TrajectoryStep {
  label: string;
  current: boolean;
}

interface ContactChannel {
  label: string;
  value: string;
  url: string;
  isEmail: boolean;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderArtComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  totalSolved = 606;
  globalRank = '#3,797 Codolio C-Score';

  milestones: JourneyMilestone[] = [];
  goals: CareerGoal[] = [];
  priorities: Priority[] = [];

  ngOnInit(): void {
    this.milestones = JOURNEY;
    this.goals = CAREER_GOALS;
    this.priorities = CURRENT_PRIORITIES;
  }

  contactStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  contactMessage = '';

  async onContactSubmit(event: Event): Promise<void> {
    event.preventDefault();
    if (this.contactStatus === 'sending') return;

    const form = event.target as HTMLFormElement;
    const body = new FormData(form);
    this.contactStatus = 'sending';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' }
      });
      const data = await res.json();
      if (data && data.success) {
        this.contactStatus = 'success';
        form.reset();
      } else {
        this.contactStatus = 'error';
        this.contactMessage = data?.message
          ? String(data.message)
          : 'Something went wrong. Please try again or email me directly.';
      }
    } catch {
      this.contactStatus = 'error';
      this.contactMessage = 'Network error — your message was not sent. Please try again.';
    }
  }

  channels: ContactChannel[] = [
    {
      label: 'PRIMARY EMAIL',
      value: 'work.gurpreetsw@gmail.com',
      url: 'mailto:work.gurpreetsw@gmail.com',
      isEmail: true
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/gurpreet-singh57',
      url: 'https://www.linkedin.com/in/gurpreet-singh57/',
      isEmail: false
    },
    {
      label: 'GITHUB',
      value: 'github.com/Gurry-12',
      url: 'https://github.com/Gurry-12',
      isEmail: false
    },
    {
      label: 'CODOLIO',
      value: 'codolio.com/profile/Guriii',
      url: 'https://codolio.com/profile/Guriii',
      isEmail: false
    }
  ];

  engineeringInterests: EngineeringInterest[] = [
    {
      title: 'Backend Engineering',
      description: 'Building APIs, services, and data pipelines that are secure, maintainable, and honest about their constraints.'
    },
    {
      title: 'Database Design',
      description: 'Schema modeling, indexing strategy, transaction boundaries, and the data integrity decisions that make systems reliable.'
    },
    {
      title: 'Systems Architecture',
      description: 'How components connect, where failures happen, and what trade-offs actually matter in real production environments.'
    },
    {
      title: 'Machine Learning',
      description: 'End-to-end pipelines from data exploration to model evaluation to deployment — not just notebook demos.'
    },
    {
      title: 'Software Security',
      description: 'Authentication, authorization, boundary enforcement, and the attack surfaces that emerge when you skip design.'
    },
    {
      title: 'Algorithmic Problem Solving',
      description: 'DSA as engineering discipline — building the mental models that make complex problems tractable.'
    }
  ];

  principles: Principle[] = [
    {
      title: 'Understand Before Implementing',
      description: 'I read the documentation, draw the data flow, and understand the constraints before writing the first line of code. Moving fast on a wrong mental model costs more time than taking it slow upfront.'
    },
    {
      title: 'Build, Don\'t Just Study',
      description: 'Tutorials don\'t teach you how a technology actually behaves under constraints. Only building something real — and watching it fail — teaches that. Every project I start is meant to expose me to decisions tutorials skip.'
    },
    {
      title: 'Debug Systematically, Not by Guessing',
      description: 'When something breaks, I reproduce it consistently before attempting a fix. I read error messages carefully. I isolate the surface area. Guessing wastes time and teaches nothing.'
    },
    {
      title: 'Validate at Every Boundary',
      description: 'Business rules belong in the service layer. API contracts belong at the controller boundary. Database constraints belong in the schema. Relying on any single layer for correctness is how bugs escape to production.'
    },
    {
      title: 'Write for the Next Engineer',
      description: 'Code that works is table stakes. Code that can be understood, tested, and changed six months later by someone who wasn\'t there when it was written — that\'s the actual goal.'
    },
    {
      title: 'Document What I Learn',
      description: 'Writing forces clarity. A debugging note that explains what failed, why, and how I fixed it is worth more than just patching the code. The next time I or someone else sees the same issue, the investigation starts at the answer.'
    }
  ];

  careerTrajectory: TrajectoryStep[] = [
    { label: 'Backend Engineering', current: true },
    { label: 'Distributed Systems', current: false },
    { label: 'AI/ML Engineering', current: false },
    { label: 'Full-Stack Production Systems', current: false }
  ];

  platformStats: PlatformStat[] = [
    {
      name: 'CodeChef',
      handle: 'guru231',
      solved: 307,
      rating: '1467',
      detail: '18 Contests attended · 3 Awards',
      url: 'https://www.codechef.com/users/guru231'
    },
    {
      name: 'LeetCode',
      handle: 'Guriii',
      solved: 162,
      rating: '1475',
      detail: '104 Easy · 51 Medium · 7 Hard · Top 34.66%',
      url: 'https://leetcode.com/u/Guriii'
    },
    {
      name: 'GeeksforGeeks',
      handle: 'singhsarpreet234',
      solved: 65,
      detail: '53 DSA (33 Easy, 19 Med, 1 Hard) + 12 Basic',
      url: 'https://www.geeksforgeeks.org/user/singhsarpreet234'
    },
    {
      name: 'HackerRank',
      handle: 'singhsarpreet234',
      solved: 43,
      detail: '5 Skill Badges: Problem Solving, Java, Python, C++, C',
      url: 'https://www.hackerrank.com/profile/singhsarpreet234'
    }
  ];

  certifications: Certification[] = [
    {
      name: 'Programming in Java',
      issuer: 'NPTEL (IIT)',
      date: 'Apr 2023',
      credentialId: 'NOC23CS49S34360341'
    },
    {
      name: 'Python for Data Science',
      issuer: 'NPTEL (IIT)',
      date: 'Aug 2023',
      credentialId: 'NOC23CS121S64360211'
    },
    {
      name: 'Developing Cloud Apps with Node.js and React',
      issuer: 'IBM',
      date: 'Sep 2022',
      credentialId: '4T8C2SL5NZE6'
    }
  ];
}
