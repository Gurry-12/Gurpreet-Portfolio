export interface JourneyMilestone {
  year: string;
  phase: string;
  title: string;
  summary: string;
  focus: string[];
  keyShift: string;
}

export const JOURNEY: JourneyMilestone[] = [
  {
    year: '2026 — Present',
    phase: 'Enterprise Backend & Distributed Architecture',
    title: 'Software Engineer · Monocept',
    summary: 'Engineering production-grade Java and Spring Boot backend services, secure RESTful APIs with role-based JWT access controls, database schema optimization, and clean architectural separation.',
    focus: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JPA / Hibernate', 'PostgreSQL / SQL Server', 'REST Architecture'],
    keyShift: 'From building standalone apps to architecting resilient, multi-role enterprise workflows with strict security and transactional boundaries.'
  },
  {
    year: '2025',
    phase: 'Backend APIs & Database Tuning',
    title: 'Software Developer Intern · Anviam Solutions',
    summary: 'Engineered 6+ backend modules using Python and ASP.NET Core following MVC and Clean Architecture. Designed JWT-secured REST APIs, Swagger documentation, and integrated services with Angular frontends.',
    focus: ['ASP.NET Core', 'C#', 'Python', 'Entity Framework Core', 'SQL Query Tuning', 'Angular', 'Swagger / OpenAPI'],
    keyShift: 'Discovered the real-world impact of index design, transaction isolation, and structured logging in multi-tier systems.'
  },
  {
    year: '2024',
    phase: 'Internal Tooling & Test-Driven Automation',
    title: 'Software Engineer Intern · Codehop Interfusion',
    summary: 'Developed mini-services and internal utility backends using Python, Flask, and Behavior-Driven Development (BDD / Behave) testing pipelines.',
    focus: ['Python', 'Flask', 'BDD / Behave', 'API Testing', 'Git Workflows'],
    keyShift: 'Adopted test-driven and behavior-driven verification to catch regression issues early in the development cycle.'
  },
  {
    year: '2023 — 2025',
    phase: 'Technical Leadership & Community Building',
    title: 'Chairperson · CodeForge Club',
    summary: 'Led the student developer community, organizing coding hackathons, technical workshops, and peer-led problem solving initiatives across campus.',
    focus: ['Community Leadership', 'Technical Mentoring', 'Competitive Programming', 'CodeForge Web'],
    keyShift: 'Realized that mentoring others and explaining system concepts solidifies one’s own foundational understanding.'
  },
  {
    year: '2021 — 2025',
    phase: 'Foundations & Computer Science Core',
    title: 'B.Tech in Computer Science & Engineering',
    summary: 'Graduated from Gulzar College of Engineering (Punjab Technical University) with specialization in IoT & Cyber Security with Blockchain. Solved 600+ algorithmic problems across CodeChef and LeetCode.',
    focus: ['Data Structures & Algorithms', 'C / C++', 'Java', 'SQL & Relational DBs', 'Operating Systems', 'Computer Networks'],
    keyShift: 'Built disciplined problem-solving habits and maintained structured learning repositories for every technical domain explored.'
  }
];
