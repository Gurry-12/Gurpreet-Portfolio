import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  totalSolved = 606;
  globalRank = '#3,797 (Codolio C-Score)';

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
