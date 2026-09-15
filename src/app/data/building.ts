/**
 * Building data — Active and in-progress engineering work.
 * This is the living status of what Gurpreet is currently building.
 * Update this file when focus shifts or new projects begin.
 */

export type BuildStatus =
  | 'Exploring'
  | 'Building'
  | 'In Progress'
  | 'Iterating'
  | 'Completed'
  | 'Archived';

export interface ActiveChallenge {
  challenge: string;
  approach: string;
}

export interface ActiveDecision {
  decision: string;
  rationale: string;
}

export interface ActiveProject {
  id: string;
  title: string;
  subtitle: string;
  status: BuildStatus;

  // Core framing
  problem: string;
  why: string;

  // Current state
  currentState: string;
  currentWork: string;

  // Engineering depth
  challenges: ActiveChallenge[];
  decisions: ActiveDecision[];

  // Direction
  nextMilestone: string;

  // Tech + links
  tech: string[];
  github?: string;
  live?: string;
  startedDate: string;
}

export const ACTIVE_PROJECTS: ActiveProject[] = [
  {
    id: 'insurance-system-v2',
    title: 'Insurance Policy & Claim Management System',
    subtitle: 'Enterprise REST API — Spring Boot 3 · JWT · SQL Server',
    status: 'Iterating',

    problem:
      'Standard academic projects stop at basic CRUD without modeling real enterprise lifecycle complexities — role hierarchies, multi-state claim processing, payment idempotency, and strict audit trails.',
    why:
      'I wanted to build a system that forces me to solve real backend engineering constraints: state machines, security boundaries, transactional consistency, and API contract design — all in one project.',

    currentState:
      '35+ secured REST endpoints across 3 roles (Customer, Agent, Admin). 6-stage claim FSM with zero-bypass guarantees. JWT auth with refresh token rotation. SQL Server with composite indexing and foreign key enforcement. Swagger/OpenAPI docs.',
    currentWork:
      'Improving error message clarity in GlobalExceptionHandler, adding structured audit log entries per state transition, and exploring integration tests with Testcontainers for SQL Server.',

    challenges: [
      {
        challenge: 'Preventing state machine bypass across role boundaries',
        approach:
          'Encoded every valid (CurrentState, ActorRole, Event) triple explicitly in the service layer — if the combination is not in the map, the operation throws a deterministic domain exception.'
      },
      {
        challenge: 'Idempotent payment simulation under retry conditions',
        approach:
          'Attached client-generated UUID idempotency keys with a database unique constraint on payment_reference_id to guarantee exactly-once processing regardless of retry count.'
      }
    ],

    decisions: [
      {
        decision: 'State Machine over scattered if/else logic',
        rationale:
          'When I added the Agent Review role mid-development, scattered conditionals caused claims to jump from Draft to Settled. Rebuilding as an explicit FSM eliminated every invalid transition.'
      },
      {
        decision: 'Stateless JWT with short-lived tokens over server sessions',
        rationale:
          'Stateless tokens eliminate sticky session requirements and scale horizontally. 15-minute access tokens paired with database-backed refresh rotation gives near-instant revocation capability.'
      }
    ],

    nextMilestone:
      'Integrate Testcontainers for full integration test coverage of the claim workflow. Then write a post-mortem on the state machine redesign.',

    tech: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JPA / Hibernate', 'SQL Server', 'JWT', 'Docker', 'Swagger'],
    github: 'https://github.com/Gurry-12/insurance-policy-claim-capstone-project',
    live: 'https://insurance-demo.onrender.com',
    startedDate: 'Jan 2026'
  },

  {
    id: 'engineering-hub-portfolio',
    title: 'Personal Engineering Hub',
    subtitle: 'This Website — Angular 18 · TypeScript · Tailwind CSS',
    status: 'Building',

    problem:
      'A conventional developer portfolio answers "what do you know?" — but fails to answer "how do you build things, what are you learning right now, and where are you going?"',
    why:
      'I need a living engineering profile that evolves with me — not a static résumé dumped into HTML. It should reflect my current direction, active work, and genuine engineering thinking.',

    currentState:
      'Angular 18 standalone component architecture with editorial design system. Data-driven content via TypeScript models. Routes: home, building, learning, work, notes, lab, journey, about, contact.',
    currentWork:
      'Rebuilding the home page as an engineering dashboard. Adding the Building and Learning pages. Migrating away from glassmorphism bento cards toward an editorial grid system that mirrors how engineers actually document their work.',

    challenges: [
      {
        challenge: 'Two conflicting design systems in one codebase',
        approach:
          'The original home page used glassmorphism Tailwind classes while the rest of the site used a custom editorial SCSS system. Consolidating around the editorial system and phasing out the glass-card pattern page by page.'
      },
      {
        challenge: 'Making content feel current without hardcoding everything',
        approach:
          'All portfolio content lives in TypeScript data files (projects.ts, building.ts, learning-tracks.ts). Pages are just data consumers. Updating the portfolio means editing data files, not redesigning UI.'
      }
    ],

    decisions: [
      {
        decision: 'Keep Angular — do not migrate to React/Next.js',
        rationale:
          'The existing Angular codebase is solid. Migrating frameworks would destroy working architecture for no meaningful benefit. The problem is design and content, not the framework.'
      },
      {
        decision: 'Data-driven content over hardcoded page templates',
        rationale:
          'TypeScript interfaces + data files means I can update what I\'m building or learning without touching component HTML. The portfolio evolves through data changes, not UI rewrites.'
      }
    ],

    nextMilestone:
      'Complete the Learning page with full track status. Add a "currently reading" section to the About page. Write a note on what I learned fixing the CSS cascade conflict.',

    tech: ['Angular 18', 'TypeScript', 'SCSS', 'Tailwind CSS', 'Angular Router'],
    github: 'https://github.com/Gurry-12/Gurpreet-Portfolio',
    startedDate: 'Sep 2026'
  }
];

export function getActiveProjects(): ActiveProject[] {
  return ACTIVE_PROJECTS.filter(
    p => p.status === 'Building' || p.status === 'In Progress' || p.status === 'Iterating' || p.status === 'Exploring'
  );
}
