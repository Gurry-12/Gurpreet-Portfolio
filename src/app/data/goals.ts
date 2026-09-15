/**
 * Goals — Career direction, current objectives, and measurable metrics.
 * Only real data. No fabricated statistics or invented achievements.
 * Update this file as goals are reached or priorities shift.
 */

export interface CareerGoal {
  id: string;
  horizon: 'Long-Term' | 'Current' | 'Next 6 Months';
  title: string;
  description: string;
}

export interface Priority {
  area: string;
  detail: string;
  status: 'Active' | 'Building' | 'Planned';
}

export interface RealMetric {
  label: string;
  value: string;
  source: string;
  note?: string;
}

export const CAREER_GOALS: CareerGoal[] = [
  {
    id: 'long-term',
    horizon: 'Long-Term',
    title: 'Strong Software Engineer — Production Systems Capable',
    description:
      'Become capable of designing, building, debugging, and maintaining production-grade software systems. Backend engineering, distributed systems, and AI/ML systems are the core direction. The goal is engineering depth — not surface-level knowledge of many technologies.'
  },
  {
    id: 'current',
    horizon: 'Current',
    title: 'Secure a Strong Software Engineering Role',
    description:
      'Land a software engineering position that offers real engineering challenges — backend systems, APIs, databases, distributed systems. Not just a role, but a place where I can build meaningful things and grow through hard problems.'
  },
  {
    id: 'next-6-months',
    horizon: 'Next 6 Months',
    title: 'Deepen Backend + Build Distributed Systems Foundations',
    description:
      'Complete a production-grade microservices project with Spring Boot. Achieve strong DSA consistency. Study distributed systems through DDIA. Complete AWS Cloud Practitioner. Build one end-to-end ML pipeline deployed to production.'
  }
];

export const CURRENT_PRIORITIES: Priority[] = [
  { area: 'Backend Engineering', detail: 'Java, Spring Boot, REST APIs, security, database design', status: 'Active' },
  { area: 'Data Structures & Algorithms', detail: 'Daily problem solving — LeetCode + CodeChef', status: 'Active' },
  { area: 'SQL & Database Design', detail: 'Indexing, transactions, schema design, query optimization', status: 'Active' },
  { area: 'System Design', detail: 'DDIA, distributed systems concepts, architecture trade-offs', status: 'Building' },
  { area: 'Projects', detail: 'Production-oriented projects with real engineering depth', status: 'Active' },
  { area: 'Communication', detail: 'Technical writing, engineering notes, documentation practice', status: 'Building' }
];

export const REAL_METRICS: RealMetric[] = [
  {
    label: 'DSA Problems Solved',
    value: '606+',
    source: 'Codolio — CodeChef + LeetCode + GFG + HackerRank',
    note: 'Codolio rank #3,797 · CodeChef 1467 · LeetCode 1475'
  },
  {
    label: 'REST API Endpoints Built',
    value: '35+',
    source: 'Insurance System — secured via JWT + RBAC'
  },
  {
    label: 'Engineering Roles',
    value: '3',
    source: 'Monocept (current) · Anviam Solutions · Codehop Interfusion'
  },
  {
    label: 'Production Projects',
    value: '4',
    source: 'Insurance System, Book Management, Disaster Dashboard, Expense Approval'
  }
];
