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
      title: 'GeeksforGeeks 60-Day POTD Challenge',
      issuer: 'GeeksforGeeks',
      period: 'Completed Challenge',
      badge: '60-Day POTD',
      description: 'Completed daily Data Structures and Algorithms problems covering arrays, intervals, sorting, prefix sums, custom comparators, and mathematical optimization.',
      highlights: [
        'Solved daily problem of the day challenges consistently without interruption',
        'Deep mastery of array manipulation, intervals, sorting, and prefix sum optimizations',
        'Engineered custom comparators and multi-criteria sorting routines'
      ]
    },
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
      title: 'Student Placement Coordinator & Community Leader',
      issuer: 'Gulzar Group of Institutes | Khanna, India',
      period: 'Feb 2024 — Jul 2025',
      badge: 'Coordinator',
      description: 'Coordinated campus placement drives for 2,000+ students across multiple hiring domains, communicating operational updates to university stakeholders and automating workflows with Python.',
      highlights: [
        'Coordinated 10+ placement drives involving 2,000+ students',
        'Automated candidate-data and scheduling workflows using Excel/Python, improving efficiency by 25%',
        'Elected Chairperson of CodeForge Student Technical Community (Mentored 250+ junior peers)'
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
      title: 'B.Tech in Computer Science and Engineering',
      issuer: 'Gulzar College of Engineering · Ludhiana, India',
      period: 'Jun 2021 — Jun 2025',
      badge: 'CGPA: 8.16',
      description: 'Graduated with specialization in IoT & Cyber Security with Blockchain. Coursework emphasized Operating Systems, Database Management Systems (DBMS), Computer Networks, Object-Oriented Software Design, and Distributed Architectures.',
      highlights: [
        'Cumulative Grade Point Average (CGPA): 8.16 / 10',
        'Specialization in IoT & Cyber Security with Blockchain',
        'Student Placement Coordinator and active community leadership'
      ]
    }
  ];
}
