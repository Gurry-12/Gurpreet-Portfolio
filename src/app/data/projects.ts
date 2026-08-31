/**
 * Project data — Selected real-world engineering projects with deep architectural focus.
 * Categorized into Tier 1 (Major Case Studies) and Tier 2 (Supporting Systems).
 */

export interface ArchitectureLayer {
  id: string;
  name: string;
  badge: string;
  description: string;
  tech: string;
  role: string;
  keyResponsibilities: string[];
}

export interface StateMachineNode {
  id: string;
  name: string;
  role: 'Customer' | 'Staff / Agent' | 'Admin' | 'System';
  desc: string;
  badgeClass: string;
}

export interface StateTransition {
  from: string;
  to: string;
  action: string;
  actor: string;
  guard?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface RequestLifecycleStep {
  step: string;
  title: string;
  layer: string;
  detail: string;
  method?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  tier: 1 | 2;
  featured: boolean;

  // Overview
  problem: string;
  solution: string;
  tags: string[];

  // Deep Case Study (Tier 1)
  overview: string;
  problemStatement: string;
  architecture: string[];
  architectureLayers?: ArchitectureLayer[];
  stateMachine?: {
    nodes: StateMachineNode[];
    transitions: StateTransition[];
  };
  metrics?: ProjectMetric[];
  requestLifecycle?: RequestLifecycleStep[];
  techStack: { name: string; purpose: string }[];
  engineeringDecisions: { decision: string; why: string; alternative: string }[];
  challenges: { challenge: string; solution: string }[];
  failureStory: string;
  keyLearnings: string[];

  // Links & Docs
  github?: string;
  live?: string;
  srsDoc?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'insurance-system',
    title: 'Insurance Policy & Claim Management System',
    subtitle: 'Enterprise Backend REST API & Workflow Engine',
    category: 'Enterprise Backend',
    year: '2026',
    tier: 1,
    featured: true,

    metrics: [
      { label: 'REST API Endpoints', value: '35+', detail: 'Secured via RBAC' },
      { label: 'FSM Approval Stages', value: '6 Stages', detail: 'Strict zero-bypass state machine' },
      { label: 'Authorization Tiers', value: '3 Roles', detail: 'Customer · Agent · Admin' },
      { label: 'Database Integrity', value: '100% ACID', detail: 'Foreign keys & composite indexing' }
    ],

    problem: 'Standard academic projects usually stop at simple CRUD without modeling real enterprise lifecycle complexities like role hierarchies, multi-state claim processing, and payment idempotency.',
    solution: 'Engineered a full-featured Spring Boot 3 REST API managing policy lifecycles, simulated premium payments, and a 6-stage claim approval state machine across 3 user roles (Admin, Agent, Customer) with 35+ secure endpoints.',
    tags: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JPA / Hibernate', 'SQL Server', 'JWT', 'Docker', 'Swagger'],

    overview: 'A production-inspired insurance platform that enables customers to purchase policies, pay premiums, and raise claims, while allowing staff/agents to verify documentation and admins to execute final settlement decisions through a secure role-based workflow. Built with layered architecture, centralized exception handling, and full Swagger/OpenAPI documentation.',
    problemStatement: 'In the insurance domain, business workflows are non-linear and security-sensitive. A customer must not approve their own claim; an agent cannot settle payments; and policies cannot transition to active status before verified premium settlement. This project tackles those exact constraints using strict DTO boundaries, declarative transaction boundaries, and state-machine transitions.',

    architecture: [
      'Client Layer (REST Client / Swagger UI / Web SPA)',
      'Security Filter Chain (JWT Authentication & Role Authorization)',
      'Controller Boundary (DTO Ingestion, Input Sanitization & RFC 7807 Error Handling)',
      'Service Layer (Claim State Machine, Payment Idempotency, Policy Lifecycle Logic)',
      'Repository Layer (Spring Data JPA with Custom Queries & Pagination)',
      'ORM Layer (Hibernate with Lazy Loading & Optimistic Locking)',
      'Relational Database (SQL Server with Foreign Keys & B-Tree Indexes)'
    ],

    architectureLayers: [
      {
        id: 'client',
        name: 'Client Interface & API Consumer',
        badge: 'Layer 01 · Ingress',
        description: 'Single-page web applications, external systems, and Swagger/OpenAPI interactive client tooling dispatching HTTPS JSON payloads.',
        tech: 'HTTPS / JSON / OpenAPI 3.0',
        role: 'Client Gateway',
        keyResponsibilities: [
          'Transmits Bearer JWT tokens in Authorization headers',
          'Supplies UUID idempotency keys on payment submissions',
          'Consumes standardized RFC 7807 problem details error responses'
        ]
      },
      {
        id: 'security',
        name: 'Spring Security Filter Chain & JWT Gateway',
        badge: 'Layer 02 · Security Gate',
        description: 'Stateless authentication filter validating cryptographic JWT signatures, expiry stamps, and claims before requests reach controller handlers.',
        tech: 'Spring Security 6 / OncePerRequestFilter / HMAC-SHA256',
        role: 'Authentication & RBAC',
        keyResponsibilities: [
          'Intercepts request and extracts Bearer JWT token from header',
          'Validates token integrity and populates SecurityContextHolder',
          'Enforces pre-authorization annotations (@PreAuthorize("hasRole(\'ADMIN\')"))'
        ]
      },
      {
        id: 'controller',
        name: 'Controller Boundary & DTO Ingestion',
        badge: 'Layer 03 · Boundary',
        description: 'Strict REST controllers accepting immutable record DTOs, validating constraints via Jakarta Validation, and masking internal database entities.',
        tech: 'Spring MVC / Jakarta Bean Validation (@Valid)',
        role: 'Contract Enforcement',
        keyResponsibilities: [
          'Prevents mass-assignment vulnerabilities with typed request DTOs',
          'Centralized GlobalExceptionHandler for predictable error envelopes',
          'URI versioning and clean HTTP response code mappings (201, 200, 400, 403)'
        ]
      },
      {
        id: 'service',
        name: 'Domain Service Engine & State Machine',
        badge: 'Layer 04 · Business Logic',
        description: 'Encapsulates business invariants, claim state transitions, payment verification rules, and transactional consistency boundaries.',
        tech: 'Spring Framework @Transactional / Finite State Machine',
        role: 'Core Engine',
        keyResponsibilities: [
          'Executes 6-stage claim state transition checks against actor role',
          'Atomic multi-table orchestrations with automatic rollback on runtime error',
          'Payment reference idempotency verification to block duplicate billing'
        ]
      },
      {
        id: 'repository',
        name: 'Data Access & ORM Persistence',
        badge: 'Layer 05 · Persistence',
        description: 'Spring Data JPA repositories providing type-safe query execution, dynamic pagination, and lazy relationship loading.',
        tech: 'Spring Data JPA / Hibernate 6 / JPQL',
        role: 'Data Access',
        keyResponsibilities: [
          'Paginated cursor retrieval for high-volume claim and policy queries',
          'Optimistic locking (@Version) for concurrent claim status updates',
          'N+1 query avoidance through explicit JOIN FETCH patterns'
        ]
      },
      {
        id: 'database',
        name: 'Relational Database Engine (SQL Server)',
        badge: 'Layer 06 · Storage',
        description: 'ACID-compliant relational store with foreign key enforcement, custom check constraints, and composite indexing strategies.',
        tech: 'Microsoft SQL Server / B-Tree Indexes / Foreign Keys',
        role: 'Source of Truth',
        keyResponsibilities: [
          'Strict referential integrity preventing orphaned claim or policy records',
          'Composite index on (customer_id, status) for sub-20ms lookup latency',
          'Audit trail timestamps on all mutation events'
        ]
      }
    ],

    stateMachine: {
      nodes: [
        { id: 'draft', name: '01 / DRAFT', role: 'Customer', desc: 'Customer initiates claim & attaches damage details', badgeClass: 'badge-customer' },
        { id: 'submitted', name: '02 / SUBMITTED', role: 'Customer', desc: 'Claim locked from client edits; queued for review', badgeClass: 'badge-customer' },
        { id: 'under_review', name: '03 / UNDER REVIEW', role: 'Staff / Agent', desc: 'Agent inspects documents & policy coverage', badgeClass: 'badge-agent' },
        { id: 'recommended', name: '04 / RECOMMENDED', role: 'Staff / Agent', desc: 'Agent submits recommendation & estimated payout', badgeClass: 'badge-agent' },
        { id: 'approved', name: '05 / APPROVED / REJECTED', role: 'Admin', desc: 'Admin executes final decision & authorizes payout', badgeClass: 'badge-admin' },
        { id: 'settled', name: '06 / SETTLED', role: 'System', desc: 'Payment simulated & policy ledger updated', badgeClass: 'badge-system' }
      ],
      transitions: [
        { from: '01 / DRAFT', to: '02 / SUBMITTED', action: 'Submit Claim', actor: 'Customer', guard: 'Valid Policy Active' },
        { from: '02 / SUBMITTED', to: '03 / UNDER REVIEW', action: 'Claim Assignment', actor: 'Staff / Agent', guard: 'Document Attached' },
        { from: '03 / UNDER REVIEW', to: '04 / RECOMMENDED', action: 'Assess Coverage', actor: 'Staff / Agent', guard: 'Surveyor Report OK' },
        { from: '04 / RECOMMENDED', to: '05 / APPROVED', action: 'Final Approval', actor: 'Admin', guard: 'Within Claim Limit' },
        { from: '05 / APPROVED', to: '06 / SETTLED', action: 'Disburse Payout', actor: 'System Engine', guard: 'Ledger Reconciled' }
      ]
    },

    requestLifecycle: [
      { step: '01', title: 'HTTP Request Ingress', layer: 'Client -> Network', method: 'POST /api/v1/claims', detail: 'Client sends Bearer token + JSON payload with idempotency UUID' },
      { step: '02', title: 'JWT Authentication', layer: 'Security Filter Chain', detail: 'Token signature verified, username & role permissions parsed into SecurityContext' },
      { step: '03', title: 'DTO Validation', layer: 'Controller Boundary', detail: 'Jakarta @Valid asserts non-null policyId, valid incidentDate, and positive claimAmount' },
      { step: '04', title: 'FSM Transition Guard', layer: 'Service State Machine', detail: 'Service checks if current claim status allows the requested transition for the authenticated role' },
      { step: '05', title: 'Transactional DB Commit', layer: 'JPA & SQL Server', detail: 'Claim state, audit history, and policy balance updated atomically inside @Transactional boundary' },
      { step: '06', title: 'Standardized Response', layer: 'Response Pipeline', detail: 'Returns 201 Created with updated claim representation & HATEOAS state transitions' }
    ],

    techStack: [
      { name: 'Java 17', purpose: 'Primary language — strong type safety, records, and enterprise ecosystem' },
      { name: 'Spring Boot 3', purpose: 'Core REST framework — dependency injection, auto-configuration' },
      { name: 'Spring Security', purpose: 'Stateless JWT filter chain and method-level RBAC' },
      { name: 'Hibernate / JPA', purpose: 'ORM mapping, query optimization, relationship management' },
      { name: 'SQL Server', purpose: 'ACID-compliant relational database with complex joins and indexes' },
      { name: 'JWT (JSON Web Tokens)', purpose: 'Stateless authentication with claims and refresh token rotation' },
      { name: 'Docker', purpose: 'Containerized environment for reproducible deployment' },
      { name: 'Swagger / OpenAPI 3', purpose: 'Interactive API documentation for all 35+ endpoints' }
    ],

    engineeringDecisions: [
      {
        decision: 'State Machine Pattern for Claim Processing',
        why: 'Claims transition through Draft → Submitted → Under Review → Recommended → Approved/Rejected → Settled. Encapsulating this in a state machine prevents invalid state jumps that occurred with scattered if/else checks.',
        alternative: 'Boolean status flags in controllers — rejected due to high bug frequency and inability to enforce audit transitions.'
      },
      {
        decision: 'Stateless JWT with Token Rotation over Server Sessions',
        why: 'Stateless tokens eliminate server-side session memory and sticky routing requirements. Short 15-minute access tokens paired with refresh tokens maintain security.',
        alternative: 'Sticky HTTP Sessions — rejected because it limits horizontal scalability and complicates API client integrations.'
      },
      {
        decision: 'Layered Architecture (Controller → Service → Repository)',
        why: 'Standard enterprise mental model. Ensures that business logic is completely isolated from HTTP concerns and database drivers, enabling pure unit testing.',
        alternative: 'Hexagonal Architecture — considered but rejected as unnecessary overhead for a single backend service.'
      },
      {
        decision: 'SQL Server with Foreign Key Enforcement',
        why: 'Financial systems require strict referential integrity. Stored relational schemas prevent orphaned claims and invalid policy references.',
        alternative: 'Document Database (MongoDB) — rejected because relational joins and ACID constraints are critical in insurance policy lifecycles.'
      }
    ],

    challenges: [
      {
        challenge: 'Duplicate Premium Payments',
        solution: 'Implemented client-side idempotency keys alongside database unique constraints on payment reference numbers to prevent duplicate billing.'
      },
      {
        challenge: 'Claim State Bypass Vulnerabilities',
        solution: 'Enforced state transition rules at the service layer: only staff can move to Recommended, only admin can trigger Approve/Reject, and Customer cannot modify under-review claims.'
      },
      {
        challenge: 'High Query Latency on Policy Lists',
        solution: 'Applied composite indexing on (customer_id, status) and enforced cursor/page-based pagination across all collection endpoints.'
      },
      {
        challenge: 'Atomic Multi-Step Transactions',
        solution: 'Annotated critical operations (e.g. policy purchase + payment verification + notification dispatch) with @Transactional with rollback-on-error rules.'
      }
    ],

    failureStory: 'During initial testing, I handled claim status changes with ad-hoc conditionals across four different controllers. When adding the "Agent Review" role, edge cases allowed claims to jump directly from Draft to Settled. I tore down the implementation and rebuilt it using a strict State Machine with declarative event transitions. The experience taught me that domain workflows should always be modeled explicitly before writing controller routes.',

    keyLearnings: [
      'Layered architectures must have one-way data flow: Controllers should never touch Repositories directly.',
      'DTOs at API boundaries prevent over-posting and protect internal database schema from client exposure.',
      'Stateless tokens work best when coupled with proactive refresh token rotation.'
    ],

    github: 'https://github.com/Gurry-12/insurance-system',
    live: 'https://insurance-demo.onrender.com'
  },

  {
    id: 'book-management',
    title: 'Online Book Management System',
    subtitle: 'Full-Stack Library Platform with Concurrency Protection',
    category: 'Full-Stack Web System',
    year: '2024',
    tier: 1,
    featured: true,

    problem: 'Libraries struggle with manual inventory records and race conditions where multiple users simultaneously borrow the last copy of a high-demand book.',
    solution: 'Built a full-stack library management system with ASP.NET Core 8 MVC, implementing repository pattern abstractions, automated overdue fine calculation, and row-level concurrency protection.',
    tags: ['ASP.NET Core 8', 'C#', 'SQL Server', 'Entity Framework Core', 'Bootstrap 5', 'MVC'],

    overview: 'An enterprise library management platform with role-based authorization (Admin vs Member), book inventory tracking, borrow/return history, and automated overdue fine calculation with configurable grace periods.',
    problemStatement: 'Concurrent borrowing is a classic database race condition: two transactions read availableCopies = 1, and both commit availableCopies = 0, causing inventory discrepancy. This project solves this using database locking and repository abstractions.',

    architecture: [
      'Razor Views (Typed UI Models & Tag Helpers)',
      'MVC Controller Layer (Routing, Session & Model Binding)',
      'Service Layer (Fine Calculation & Borrowing Rules)',
      'Repository Layer (Generic & Custom EF Core Repositories)',
      'Entity Framework Core (Code-First Migrations & LINQ Queries)',
      'SQL Server Database (Foreign Keys, Indexes & Row Locks)'
    ],

    techStack: [
      { name: 'ASP.NET Core 8', purpose: 'High-performance backend MVC framework' },
      { name: 'C#', purpose: 'Strongly-typed object-oriented language with async/await patterns' },
      { name: 'Entity Framework Core', purpose: 'ORM with migrations, change tracking, and LINQ' },
      { name: 'SQL Server', purpose: 'Relational data store with ACID transaction guarantees' },
      { name: 'Bootstrap 5', purpose: 'Responsive interface layout for desktop and tablet' }
    ],

    engineeringDecisions: [
      {
        decision: 'Repository Pattern over Direct DbContext Injection',
        why: 'Decoupled data access from controllers, allowing unit testing with in-memory providers without needing a live SQL Server instance.',
        alternative: 'Direct DbContext injection — rejected because it tightly couples business workflows to EF Core implementation details.'
      },
      {
        decision: 'Fine Calculation in Service Layer rather than DB Triggers',
        why: 'Business logic belongs in version-controlled application code with unit tests, not hidden in database triggers.',
        alternative: 'SQL Triggers — rejected due to poor debugging visibility and coupling to database engine.'
      }
    ],

    challenges: [
      {
        challenge: 'Concurrent Inventory Checkout Race Conditions',
        solution: 'Implemented pessimistic row-level locking during checkout to serialize inventory decrement operations.'
      },
      {
        challenge: 'Dynamic Overdue Fine Computation',
        solution: 'Created a configurable holiday calendar and business day calculation engine in the service layer.'
      }
    ],

    failureStory: 'Early in testing, running 20 concurrent borrowing requests resulted in inventory counts dropping to negative numbers (-3). Optimistic concurrency failed because the retry storms caused excessive aborts. Switching to explicit row locking resolved the anomaly completely.',

    keyLearnings: [
      'Concurrency control must be designed for write-heavy hotspots, not added as an afterthought.',
      'Unit testing data access layers is significantly easier when using clean repository abstractions.'
    ],

    github: 'https://github.com/Gurry-12/OnlineBookManagementSystem'
  },

  {
    id: 'disaster-dashboard',
    title: 'Disaster Response Coordinator Dashboard',
    subtitle: 'Real-Time Emergency Management & Reactive Streams',
    category: 'Frontend & Reactive Systems',
    year: '2025',
    tier: 1,
    featured: true,

    problem: 'Emergency teams in low-bandwidth field situations need responsive, real-time alert aggregation without heavy page refreshes or sluggish charts.',
    solution: 'Developed an Angular 18 reactive dashboard utilizing RxJS BehaviorSubjects for simulated live data feeds and optimized Chart.js visualization tuned for mobile field devices.',
    tags: ['Angular 18', 'TypeScript', 'RxJS', 'Chart.js', 'Signals', 'CSS Custom Properties'],

    overview: 'Emergency management web application for coordinating disaster response efforts. Features real-time incident feeds, resource allocation tracking, mobile-first responsive layout, and client-side stream coordination.',
    problemStatement: 'Field operators often use lower-spec mobile devices on spotty connections. Heavy SPA frameworks with unoptimized canvas charting create severe memory pressure and frame drops.',

    architecture: [
      'Angular Standalone Components (Tree-shakable structure)',
      'RxJS State Services (BehaviorSubjects & Event Streams)',
      'Chart.js Engine (Canvas-based data visualization)',
      'CSS Custom Properties Design System (High-contrast dark theme)'
    ],

    techStack: [
      { name: 'Angular 18', purpose: 'Standalone component architecture with Signals' },
      { name: 'TypeScript', purpose: 'Strict type safety across event feeds and DTOs' },
      { name: 'RxJS', purpose: 'Reactive streams, operators, and state multicasting' },
      { name: 'Chart.js', purpose: 'Optimized chart rendering with custom decimation' }
    ],

    engineeringDecisions: [
      {
        decision: 'RxJS BehaviorSubjects over Interval HTTP Polling',
        why: 'BehaviorSubjects multicast state to multiple UI components simultaneously without duplicate network calls.',
        alternative: 'Periodic polling — rejected due to wasted bandwidth on unchanged metrics.'
      },
      {
        decision: 'Canvas Charting with Downsampling over SVG DOM Nodes',
        why: 'Canvas maintains consistent memory footprint when plotting 1,000+ points compared to thousands of heavy SVG elements.',
        alternative: 'SVG (D3.js) — rejected due to DOM bloat on low-power mobile devices.'
      }
    ],

    challenges: [
      {
        challenge: 'Mobile Canvas Lag with Large Datasets',
        solution: 'Applied LTTB downsampling algorithm and tuned canvas pixel ratio thresholds on mobile viewports.'
      },
      {
        challenge: 'UI Stutter during Rapid Event Ingestion',
        solution: 'Applied debounceTime() and distinctUntilChanged() operators to batch incident update events.'
      }
    ],

    failureStory: 'Testing the charts on desktop was buttery smooth, but loading on an Android test device produced severe 2-second UI freezes. The root cause was unbounded canvas redraws on every single event. Throttling renders with requestAnimationFrame and data decimation restored 60fps performance.',

    keyLearnings: [
      'Always profile mobile performance on real physical devices rather than desktop emulators.',
      'RxJS stream composition prevents UI components from tightly coupling to data sources.'
    ],

    github: 'https://github.com/Gurry-12/Disaster-Ready-UI',
    live: 'https://disaster-ready-ui.onrender.com'
  },

  {
    id: 'department-expense-approval',
    title: 'Department Expense Approval System',
    subtitle: 'Hierarchical Approval Workflow & Budget Audit Engine',
    category: 'Enterprise Backend',
    year: '2025',
    tier: 2,
    featured: false,

    problem: 'Managing departmental expense requests across employee, manager, and finance tiers often results in un-audited budget overruns and approval deadlocks.',
    solution: 'Designed a multi-stage approval workflow with threshold-based routing (auto-approval under limit, dual-manager review above threshold) and immutable audit logging.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'SQL Server', 'RBAC'],

    overview: 'An enterprise expense management service that routes reimbursement requests through role-based approval tiers, validates departmental budget ceilings, and records tamper-evident audit trails for every transaction.',
    problemStatement: 'Threshold-based approval routing requires strict state validation to ensure no claim is disbursed without passing all intermediate approval thresholds.',

    architecture: [
      'REST Controller Tier (Request Validation & DTO Transformation)',
      'Authorization Boundary (Department & Role Scoped Permissions)',
      'Approval Workflow Engine (Stateful routing based on claim amount)',
      'Audit Logging Service (Append-only ledger of approval decisions)'
    ],

    techStack: [
      { name: 'Java 17', purpose: 'Core language' },
      { name: 'Spring Boot 3', purpose: 'REST framework' },
      { name: 'JPA / Hibernate', purpose: 'Entity relationships & audit logs' },
      { name: 'SQL Server', purpose: 'ACID storage' }
    ],

    engineeringDecisions: [
      {
        decision: 'Append-Only Audit Log Tables',
        why: 'Financial compliance requires that no approval or rejection record can be overwritten or updated in place.',
        alternative: 'Updating a status column on the Expense record — rejected due to lack of historical trail.'
      }
    ],

    challenges: [
      {
        challenge: 'Circular Approval Deadlocks',
        solution: 'Implemented hierarchy validation during user assignment to prevent circular reporting manager loops.'
      }
    ],

    failureStory: 'Early implementation allowed managers to approve their own expense submissions. The fix required strict security rules: `principal.id != expense.requesterId` enforced at the method security level via `@PreAuthorize`.',

    keyLearnings: [
      'Never rely on UI assumptions for financial workflows; enforce all multi-party constraints on the server.'
    ],

    github: 'https://github.com/Gurry-12'
  }
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find(p => p.id === id);
}

export function getTier1Projects(): Project[] {
  return PROJECTS.filter(p => p.tier === 1);
}

export function getTier2Projects(): Project[] {
  return PROJECTS.filter(p => p.tier === 2);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter(p => p.featured);
}
