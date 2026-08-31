import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ContactChannel {
  index: string;
  label: string;
  value: string;
  actionText: string;
  url: string;
  isExternal: boolean;
  isEmail: boolean;
  annotation?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  copied = false;

  channels: ContactChannel[] = [
    {
      index: '01',
      label: 'PRIMARY EMAIL',
      value: 'work.gurpreetsw@gmail.com',
      actionText: 'Send Email',
      url: 'mailto:work.gurpreetsw@gmail.com',
      isExternal: false,
      isEmail: true,
      annotation: 'Direct channel · Response usually within 24h'
    },
    {
      index: '02',
      label: 'LINKEDIN',
      value: 'linkedin.com/in/gurpreet-singh57',
      actionText: 'Connect on LinkedIn',
      url: 'https://www.linkedin.com/in/gurpreet-singh57/',
      isExternal: true,
      isEmail: false,
      annotation: 'Professional background & career history'
    },
    {
      index: '03',
      label: 'GITHUB',
      value: 'github.com/Gurry-12',
      actionText: 'Explore Repositories',
      url: 'https://github.com/Gurry-12',
      isExternal: true,
      isEmail: false,
      annotation: '64 public repos · Java, Spring, SQL, Python, Angular'
    },
    {
      index: '04',
      label: 'CODOLIO',
      value: 'codolio.com/profile/Guriii',
      actionText: 'View Problem Solving Profile',
      url: 'https://codolio.com/profile/Guriii',
      isExternal: true,
      isEmail: false,
      annotation: '606+ verified solved problems (CodeChef, LeetCode, GFG)'
    },
    {
      index: '05',
      label: 'CURRICULUM VITAE',
      value: 'Gurpreet_Singh_Resume.pdf',
      actionText: 'Download Resume (PDF)',
      url: '/assets/resume/Gurpreet_Singh_Resume.pdf',
      isExternal: true,
      isEmail: false,
      annotation: 'Updated February 2026 · 1-page technical summary'
    }
  ];

  currentFocus: string[] = [
    'Java 17',
    'Spring Boot 3',
    'Spring Security (JWT / RBAC)',
    'SQL Schema Design & ACID',
    'Data Structures & Algorithms (DSA)',
    'RESTful API Architecture'
  ];

  copyEmail(): void {
    navigator.clipboard.writeText('work.gurpreetsw@gmail.com');
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2500);
  }
}
