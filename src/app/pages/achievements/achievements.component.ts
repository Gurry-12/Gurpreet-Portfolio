import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface AchievementItem {
  category: 'COMPETITIVE PROGRAMMING' | 'CERTIFICATIONS' | 'LEADERSHIP & COMMUNITY' | 'ACADEMICS';
  title: string;
  issuer: string;
  period: string;
  badge?: string;
  description: string;
  evidenceLink?: { label: string; url: string };
  highlights: string[];
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './achievements.component.html'
})
export class AchievementsComponent {
  achievements: AchievementItem[] = [
    {
      category: 'COMPETITIVE PROGRAMMING',
      title: '600+ Data Structures & Algorithms Problems Solved',
      issuer: 'LeetCode, CodeChef, GeeksforGeeks, HackerRank',
      period: 'Continuous Practice (2022 — Present)',
      badge: '600+ Solved',
      description: 'Systematic problem solving focused on graph algorithms, dynamic programming, binary trees, heaps, and array manipulation. Maintained continuous coding discipline across major competitive platforms.',
      evidenceLink: { label: 'Verify Codolio Profile', url: 'https://codolio.com/profile/Guriii' },
      highlights: [
        'CodeChef: 2-Star Rating (Division 3)',
        'HackerRank: 5-Star Badges in Java and Problem Solving',
        'LeetCode & GeeksforGeeks: 400+ curated problems solved in trees, DP, and graphs'
      ]
    },

    {
      category: 'LEADERSHIP & COMMUNITY',
      title: 'Chairperson — CodeForge Student Technical Community',
      issuer: 'Gulzar Group of Institutes / PTU',
      period: '2022 — 2024',
      badge: 'Chairperson',
      description: 'Elected student chairperson of CodeForge. Organized hackathons, algorithm workshops, and peer-mentoring groups to foster software development culture across university departments.',
      highlights: [
        'Organized 10+ hackathons and hands-on coding workshops',
        'Mentored 250+ junior students in Java, git workflows, and basic algorithm design',
        'Facilitated weekly peer coding review sessions and contest preparation'
      ]
    },
    {
      category: 'CERTIFICATIONS',
      title: 'IBM Professional Certifications',
      issuer: 'IBM',
      period: 'Issued 2023 — 2024',
      badge: 'Certified',
      description: 'Completed technical certifications covering Cloud Computing Foundations and Python for Data Science and Application Development.',
      highlights: [
        'IBM Cloud Computing Practitioner & Architecture Overview',
        'Python for Data Science, APIs, and Backend Utilities'
      ]
    },
    {
      category: 'ACADEMICS',
      title: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
      issuer: 'Gulzar College of Engineering · I.K. Gujral Punjab Technical University',
      period: '2021 — 2025',
      badge: 'B.Tech CSE',
      description: 'Graduated with specialization in Internet of Things (IoT) & Cyber Security. Coursework emphasized Operating Systems, Database Management Systems (DBMS), Computer Networks, and Object-Oriented Software Design.',
      highlights: [
        'Specialization in IoT & Cyber Security',
        'Active leadership in student clubs and technical symposiums'
      ]
    }
  ];
}
