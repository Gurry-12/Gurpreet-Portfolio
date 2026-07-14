import { Injectable } from '@angular/core';

export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

export interface TechStackItem {
  name: string;
  purpose: string;
  category: string;
}

export interface ApiEndpoint {
  method: string;
  endpoint: string;
  description: string;
}

export interface WorkflowStep {
  icon: string;
  label: string;
  description: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface EngineeringDecision {
  technology: string;
  why: string;
  alternatives?: string;
}

export interface Tradeoff {
  decision: string;
  rationale: string;
  whatIdChange?: string;
}

export interface UserJourneyStep {
  icon: string;
  label: string;
  description: string;
}

export interface PermissionFeature {
  feature: string;
  customer: boolean;
  staff: boolean;
  admin: boolean;
}

export interface LifecycleState {
  label: string;
  color: string;
  description: string;
}

export interface FlowStep {
  icon: string;
  label: string;
  description: string;
}

export interface FolderNode {
  name: string;
  type: 'folder' | 'file';
  children?: FolderNode[];
}

export interface DevTimelineItem {
  week: string;
  title: string;
  tasks: string[];
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
  icon: string;
}

export interface BeforeAfter {
  before: string[];
  after: string[];
}

export interface ServerArchNode {
  label: string;
  icon: string;
  color: string;
  description: string;
}

export interface DbEntity {
  name: string;
  color: string;
  fields: string[];
  relations?: { entity: string; type: string }[];
}

export interface AuthFlowStep {
  actor: string;
  action: string;
  target: string;
  description: string;
  icon: string;
}

export interface StateTransition {
  from: string;
  to: string;
  label: string;
  color: string;
}

export interface StateNode {
  id: string;
  label: string;
  color: string;
  x: number;
  y: number;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  status: 'completed' | 'in-progress';
  year: string;
  heroGradient: string;

  overview: string;
  problemStatement: string;

  features: ProjectFeature[];
  techStack: TechStackItem[];
  architecture: { layers: string[]; description: string };
  database: { tables: string[]; relationships: string; description: string };
  apiShowcase: ApiEndpoint[];
  workflow: WorkflowStep[];
  challenges: string[];
  learnings: string[];
  futureImprovements: ProjectFeature[];
  metrics: ProjectMetric[];

  engineeringDecisions: EngineeringDecision[];
  tradeoffs: Tradeoff[];
  failureStory: string;
  sequenceDiagrams: { title: string; description: string; steps: string[] }[];

  techBadges: string[];
  github?: string;
  live?: string;
  linkedin?: string;
  documentation?: string;

  screenshots: { alt: string; label: string }[];
  videoUrl?: string;

  userJourney?: { customer: UserJourneyStep[]; staff?: UserJourneyStep[] };
  permissionMatrix?: PermissionFeature[];
  claimLifecycle?: LifecycleState[];
  paymentFlow?: FlowStep[];
  apiFlow?: FlowStep[];
  folderStructure?: FolderNode[];
  devTimeline?: DevTimelineItem[];
  challengeSolutions?: ChallengeSolution[];
  beforeAfter?: BeforeAfter;
  dbTree?: string;
  serverArch?: ServerArchNode[];
  dbEntities?: DbEntity[];
  authFlow?: AuthFlowStep[];
  stateMachine?: { nodes: StateNode[]; transitions: StateTransition[] };
}

@Injectable({ providedIn: 'root' })
export class ProjectDataService {

  private projects: Record<string, ProjectCaseStudy> = {
    'insurance-system': {
      id: 'insurance-system',
      title: 'Insurance Policy & Claim Management System',
      subtitle: 'Enterprise Backend Application',
      tagline: 'A production-inspired insurance platform that handles the complete policy lifecycle — from purchase to claim settlement.',
      category: 'Enterprise',
      status: 'completed',
      year: '2026',
      heroGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',

      overview: 'A production-inspired insurance platform that enables customers to purchase policies, pay premiums, raise claims, and allows staff to review and approve claims through a secure role-based workflow. Built entirely as a Backend REST API with Spring Boot layered architecture and JWT authentication.',
      problemStatement: 'Most college CRUD projects don\'t simulate real enterprise workflows. This project solves that by implementing complete insurance lifecycle management — including role-based access control, claim status transitions, document management, payment simulation, and automated notifications — the kind of complexity recruiters expect from backend engineers.',

      features: [
        { icon: 'bi-shield-lock', title: 'JWT Authentication', description: 'Secure token-based auth with refresh tokens and role-based access control for 3 user roles.' },
        { icon: 'bi-people', title: 'Role Based Access', description: 'Customer, Staff, and Admin roles with distinct permissions and route-level protection.' },
        { icon: 'bi-clipboard-check', title: 'Claim Workflow', description: 'State machine for claim lifecycle: Submitted → Under Review → Approved/Rejected → Settled.' },
        { icon: 'bi-file-earmark-text', title: 'Policy Purchase', description: 'End-to-end policy buying flow with plan selection, premium calculation, and instant activation.' },
        { icon: 'bi-credit-card', title: 'Premium Payment', description: 'QR code payment simulation with receipt generation and payment history tracking.' },
        { icon: 'bi-file-text', title: 'Document Reference', description: 'Store references for claim verification documents linked to policies.' },
        { icon: 'bi-check-circle', title: 'Validation', description: '100+ server-side validations using Bean Validation with custom validators for business rules.' },
        { icon: 'bi-exclamation-triangle', title: 'Exception Handling', description: 'Global exception handler with custom error responses, structured error codes, and logging.' },
        { icon: 'bi-book', title: 'Swagger Documentation', description: 'Interactive API documentation with Swagger UI for all 35+ REST endpoints.' },
        { icon: 'bi-envelope', title: 'Email Notification', description: 'Automated email notifications for policy purchase, claim updates, and payment confirmations.' },
        { icon: 'bi-qr-code', title: 'QR Payment', description: 'Dynamic QR code generation for premium payments with simulated payment gateway.' }
      ],

      techStack: [
        { name: 'Java 17', purpose: 'Primary language — strong typing, enterprise ecosystem, Spring Boot native', category: 'Backend' },
        { name: 'Spring Boot 3', purpose: 'REST API framework — dependency injection, auto-configuration, security', category: 'Backend' },
        { name: 'Spring Security', purpose: 'Authentication & authorization — JWT filter chain, role-based access', category: 'Security' },
        { name: 'Hibernate / JPA', purpose: 'ORM layer — entity mapping, lazy loading, query optimization', category: 'Data Access' },
        { name: 'SQL Server', purpose: 'Relational database — complex joins, stored procedures, indexing', category: 'Database' },
        { name: 'JWT', purpose: 'Stateless authentication — token generation, validation, refresh flow', category: 'Security' },
        { name: 'Docker', purpose: 'Containerization — consistent dev environment, deployment readiness', category: 'DevOps' },
        { name: 'Swagger / OpenAPI', purpose: 'API documentation — auto-generated interactive docs for all endpoints', category: 'Tooling' }
      ],

      architecture: {
        layers: [
          'Client (Postman/Swagger)',
          'REST API Gateway',
          'Spring Security Filter Chain',
          'JWT Authentication',
          'Controller Layer',
          'Service Layer (Business Logic)',
          'Repository Layer (Data Access)',
          'Hibernate ORM',
          'SQL Server Database'
        ],
        description: 'Layered architecture following SOLID principles. Each layer has a single responsibility and communicates through well-defined interfaces. The service layer contains all business logic, making the system testable and maintainable.'
      },

      database: {
        tables: [
          'Users', 'Roles', 'Customers', 'Staff',
          'Plans', 'Policies', 'PremiumPayments',
          'Claims', 'ClaimDocuments', 'Documents',
          'Notifications', 'AuditLogs', 'Payments',
          'Plans', 'Policies', 'Claims'
        ],
        relationships: 'Customer → has many → Policies → belongs to → Plan. Policy → has many → Claims. Claim → has many → Documents. Customer → has many → Payments.',
        description: 'Normalized database schema with 15+ tables. Foreign key constraints ensure referential integrity. Indexes on frequently queried columns for performance.'
      },

      apiShowcase: [
        { method: 'POST', endpoint: '/api/auth/register', description: 'Register new user account' },
        { method: 'POST', endpoint: '/api/auth/login', description: 'Authenticate and receive JWT' },
        { method: 'GET', endpoint: '/api/policies', description: 'List all policies (filtered by role)' },
        { method: 'POST', endpoint: '/api/policies/purchase', description: 'Purchase a new policy' },
        { method: 'GET', endpoint: '/api/policies/{id}', description: 'Get policy details' },
        { method: 'POST', endpoint: '/api/claims/raise', description: 'Raise a new insurance claim' },
        { method: 'PUT', endpoint: '/api/claims/{id}/approve', description: 'Staff approves a claim' },
        { method: 'PUT', endpoint: '/api/claims/{id}/reject', description: 'Staff rejects a claim' },
        { method: 'POST', endpoint: '/api/payments/premium', description: 'Pay premium via QR simulation' },
        { method: 'POST', endpoint: '/api/documents/upload', description: 'Upload claim documents to Cloudinary' },
        { method: 'GET', endpoint: '/api/customers', description: 'Admin: list all customers' },
        { method: 'GET', endpoint: '/api/dashboard/stats', description: 'Dashboard analytics data' }
      ],

      workflow: [
        { icon: 'bi-person-plus', label: 'Register', description: 'Customer creates account with email verification' },
        { icon: 'bi-box-arrow-in-right', label: 'Login', description: 'JWT authentication with role-based routing' },
        { icon: 'bi-file-earmark-plus', label: 'Buy Policy', description: 'Select plan, review terms, confirm purchase' },
        { icon: 'bi-credit-card', label: 'Pay Premium', description: 'QR code generation and payment simulation' },
        { icon: 'bi-clipboard-data', label: 'Raise Claim', description: 'Submit claim with details and supporting documents' },
        { icon: 'bi-cloud-arrow-up', label: 'Upload Docs', description: 'Upload medical bills, photos, reports via Cloudinary' },
        { icon: 'bi-person-check', label: 'Staff Review', description: 'Staff reviews claim, requests additional info if needed' },
        { icon: 'bi-check2-all', label: 'Approve', description: 'Claim approved — settlement amount calculated' },
        { icon: 'bi-cash-stack', label: 'Settlement', description: 'Payment processed, customer notified via email' }
      ],

      challenges: [
        'Implementing a state machine for claim status transitions without introducing circular dependencies',
        'Preventing duplicate premium payments when users click submit multiple times',
        'Securing file uploads — validating file types, scanning for malware, and restricting access to document owners',
        'Designing role-based access that scales from 3 roles to potentially dozens without rewriting controllers',
        'Handling transaction rollback when a multi-step operation (policy creation + payment + notification) fails midway',
        'Managing JWT token refresh without breaking active user sessions or exposing tokens to XSS'
      ],

      learnings: [
        'Designing layered architecture with clear separation of concerns makes testing and maintenance dramatically easier',
        'DTO validation at the API boundary prevents invalid data from reaching the service layer',
        'Service layer abstraction allows swapping implementations (e.g., Cloudinary to S3) without changing controllers',
        'State machines are the right pattern for complex status workflows — not if/else chains',
        'Enterprise exception handling is not just try/catch — it\'s a structured system with error codes, logging, and user-friendly messages',
        'REST conventions matter — proper HTTP methods, status codes, and resource naming make APIs self-documenting'
      ],

      futureImprovements: [
        { icon: 'bi-box-seam', title: 'Docker Deployment', description: 'Multi-stage Docker build with docker-compose for local development' },
        { icon: 'bi-cloud', title: 'AWS Deployment', description: 'Deploy to EC2 with RDS, S3 for documents, and CloudFront CDN' },
        { icon: 'bi-database', title: 'Redis Cache', description: 'Cache frequently accessed data like policy plans and dashboard stats' },
        { icon: 'bi-megaphone', title: 'Kafka Notifications', description: 'Event-driven notification system with Kafka for async email/SMS delivery' },
        { icon: 'bi-folder2-open', title: 'AWS S3 Migration', description: 'Move document storage from Cloudinary to S3 for cost optimization' },
        { icon: 'bi-credit-card', title: 'Payment Gateway', description: 'Real payment integration with Razorpay or Stripe for actual transactions' },
        { icon: 'bi-journal-text', title: 'Audit Logs', description: 'Comprehensive audit trail for all data modifications and user actions' },
        { icon: 'bi-gear', title: 'CI/CD Pipeline', description: 'GitHub Actions workflow with automated testing, building, and deployment' }
      ],

      metrics: [
        { value: '35+', label: 'REST APIs' },
        { value: '15+', label: 'Database Tables' },
        { value: 'JWT', label: 'Authentication' },
        { value: 'RBAC', label: 'Security' },
        { value: '100+', label: 'Validations' },
        { value: '3', label: 'User Roles' },
        { value: 'Cloudinary', label: 'Doc Upload' },
        { value: 'Swagger', label: 'API Docs' }
      ],

      techBadges: ['Java', 'Spring Boot', 'React', 'SQL Server', 'JWT', 'Docker', 'Cloudinary', 'Swagger'],
      github: 'https://github.com/Gurry-12/insurance-system',
      live: 'https://insurance-demo.onrender.com',
      linkedin: 'https://linkedin.com/posts/gurpreet-singh57-insurance',
      documentation: '/assets/docs/Insurance Policy and Claim Management System.md',

      engineeringDecisions: [
        { technology: 'JWT over Session-based Auth', why: 'Stateless tokens eliminate server-side session storage. Critical for a system with 3 user roles where session management would add unnecessary complexity.', alternatives: 'Session-based auth was considered but rejected — requires sticky sessions or shared cache, adds latency on every request for session lookup.' },
        { technology: 'Spring Boot over Node.js', why: 'Spring Security provides battle-tested JWT filter chains and role-based access control out of the box. Java\'s type system catches data mapping errors at compile time — essential for 15+ database tables.', alternatives: 'Node.js was considered for faster prototyping but rejected — less mature security ecosystem, runtime type errors in JS would be costly with complex domain models.' },
        { technology: 'Layered Architecture over Hexagonal', why: 'Controller → Service → Repository is the standard mental model for Java backend teams. Adding ports/adapters would increase complexity without proportional benefit for a 3-role system.', alternatives: 'Hexagonal architecture was considered for future-proofing but rejected — overkill for the current scope, would slow down onboarding for collaborators.' },
        { technology: 'SQL Server over PostgreSQL', why: 'Enterprise standard for insurance systems. Stored procedures and ACID compliance are non-negotiable for financial transactions.', alternatives: 'PostgreSQL was considered for cost but rejected — client\'s existing infrastructure uses SQL Server, migration cost would be prohibitive.' }
      ],

      tradeoffs: [
        { decision: 'Local Document References over Cloudinary', rationale: 'For this mini project, maintaining database references for documents simplifies the architecture and avoids third-party rate limits.', whatIdChange: 'For production, integrate S3 or Cloudinary for actual document blob storage.' }
      ],

      failureStory: 'The hardest part was claim status transitions. My first implementation used if/else chains scattered across controllers — when a claim could go from 5 different states to 3 others, this became unmaintainable. I rewrote it as a state machine pattern with explicit transition rules. The second failure was duplicate premium payments — users clicking submit twice would create duplicate records. Fixed with idempotency keys and optimistic locking. The biggest lesson: enterprise patterns exist because the problems they solve are real, not theoretical.',

      sequenceDiagrams: [
        {
          title: 'Claim Submission Flow',
          description: 'How a customer submits a claim and it moves through the review pipeline',
          steps: [
            'Customer → Controller: POST /api/claims/raise',
            'Controller → Service: validateClaim(claimDto)',
            'Service → Repository: save(claim)',
            'Repository → Database: INSERT INTO Claims',
            'Service → NotificationService: sendClaimSubmitted()',
            'NotificationService → EmailService: sendEmail()',
            'Controller → Customer: 201 Created + claimId'
          ]
        },
        {
          title: 'JWT Authentication Flow',
          description: 'How login works with role-based routing',
          steps: [
            'Client → AuthController: POST /api/auth/login',
            'AuthController → AuthService: authenticate(email, password)',
            'AuthService → UserRepository: findByEmail()',
            'AuthService → PasswordEncoder: matches()',
            'AuthService → JwtProvider: generateToken(userId, role)',
            'AuthController → Client: 200 OK + JWT token',
            'Client → ProtectedEndpoint: Authorization: Bearer <token>'
          ]
        }
      ],

      screenshots: [
        { alt: 'Dashboard', label: 'Dashboard' },
        { alt: 'Login', label: 'Login' },
        { alt: 'Customer Portal', label: 'Customer Portal' },
        { alt: 'Claims', label: 'Claims' },
        { alt: 'Payment', label: 'Payment' },
        { alt: 'Admin Panel', label: 'Admin Panel' },
        { alt: 'Mobile View', label: 'Mobile View' },
        { alt: 'Swagger', label: 'Swagger' },
        { alt: 'Database Diagram', label: 'DB Schema' },
        { alt: 'Additional View', label: 'System View' }
      ],

      userJourney: {
        customer: [
          { icon: 'bi-person-plus', label: 'Register', description: 'Create account with email verification' },
          { icon: 'bi-box-arrow-in-right', label: 'Login', description: 'JWT authentication with role-based routing' },
          { icon: 'bi-file-earmark-plus', label: 'Buy Policy', description: 'Select plan, review terms, confirm purchase' },
          { icon: 'bi-credit-card', label: 'Pay Premium', description: 'QR code generation and payment simulation' },
          { icon: 'bi-clipboard-data', label: 'Raise Claim', description: 'Submit claim with details and documents' },
          { icon: 'bi-eye', label: 'Track Status', description: 'Real-time claim status tracking' }
        ],
        staff: [
          { icon: 'bi-box-arrow-in-right', label: 'Login', description: 'Staff JWT authentication' },
          { icon: 'bi-clipboard-check', label: 'Review Claims', description: 'Review pending claims with documents' },
          { icon: 'bi-file-earmark-check', label: 'Verify', description: 'Validate claim documents and details' },
          { icon: 'bi-chat-dots', label: 'Recommend', description: 'Submit recommendation report' },
          { icon: 'bi-check2-all', label: 'Approve', description: 'Final approval with settlement calculation' },
          { icon: 'bi-cash-stack', label: 'Settle', description: 'Process payment and notify customer' }
        ]
      },

      permissionMatrix: [
        { feature: 'Login', customer: true, staff: true, admin: true },
        { feature: 'Buy Policy', customer: true, staff: false, admin: false },
        { feature: 'Pay Premium', customer: true, staff: false, admin: false },
        { feature: 'Raise Claim', customer: true, staff: false, admin: false },
        { feature: 'Upload Documents', customer: true, staff: true, admin: true },
        { feature: 'Review Claims', customer: false, staff: true, admin: true },
        { feature: 'Approve / Reject', customer: false, staff: true, admin: false },
        { feature: 'Manage Products', customer: false, staff: false, admin: true },
        { feature: 'Manage Users', customer: false, staff: false, admin: true },
        { feature: 'View Dashboard', customer: true, staff: true, admin: true }
      ],

      claimLifecycle: [
        { label: 'Draft', color: '#71717a', description: 'Claim created, not yet submitted' },
        { label: 'Submitted', color: '#60a5fa', description: 'Claim submitted for review' },
        { label: 'Under Review', color: '#fbbf24', description: 'Staff reviewing claim documents' },
        { label: 'Recommended', color: '#a78bfa', description: 'Staff recommendation submitted' },
        { label: 'Approved', color: '#34d399', description: 'Claim approved by management' },
        { label: 'Settled', color: '#10b981', description: 'Payment processed to customer' }
      ],

      paymentFlow: [
        { icon: 'bi-person', label: 'Customer', description: 'Initiates payment' },
        { icon: 'bi-file-earmark-text', label: 'Choose Policy', description: 'Select insurance plan' },
        { icon: 'bi-qr-code', label: 'Generate QR', description: 'Dynamic QR code created' },
        { icon: 'bi-phone', label: 'Scan QR', description: 'Mobile payment scan' },
        { icon: 'bi-check-circle', label: 'Payment Success', description: 'Payment confirmed' },
        { icon: 'bi-server', label: 'Backend Verify', description: 'Server-side validation' },
        { icon: 'bi-shield-check', label: 'Policy Activated', description: 'Policy goes live' }
      ],

      apiFlow: [
        { icon: 'bi-window', label: 'Client App', description: 'Any REST client' },
        { icon: 'bi-arrow-down-up', label: 'POST /login', description: 'Authentication request' },
        { icon: 'bi-key', label: 'JWT Token', description: 'Stateless auth token' },
        { icon: 'bi-lock', label: 'Protected APIs', description: 'Authorization header' },
        { icon: 'bi-database', label: 'SQL Server', description: 'Data persistence' }
      ],

      folderStructure: [
        { name: 'src', type: 'folder', children: [
          { name: 'controller', type: 'folder', children: [
            { name: 'AuthController.java', type: 'file' },
            { name: 'PolicyController.java', type: 'file' },
            { name: 'ClaimController.java', type: 'file' },
            { name: 'PaymentController.java', type: 'file' }
          ]},
          { name: 'service', type: 'folder', children: [
            { name: 'AuthService.java', type: 'file' },
            { name: 'PolicyService.java', type: 'file' },
            { name: 'ClaimService.java', type: 'file' },
            { name: 'PaymentService.java', type: 'file' },
            { name: 'NotificationService.java', type: 'file' }
          ]},
          { name: 'repository', type: 'folder', children: [
            { name: 'UserRepository.java', type: 'file' },
            { name: 'PolicyRepository.java', type: 'file' },
            { name: 'ClaimRepository.java', type: 'file' }
          ]},
          { name: 'entity', type: 'folder', children: [
            { name: 'User.java', type: 'file' },
            { name: 'Policy.java', type: 'file' },
            { name: 'Claim.java', type: 'file' },
            { name: 'Payment.java', type: 'file' }
          ]},
          { name: 'dto', type: 'folder', children: [
            { name: 'AuthRequest.java', type: 'file' },
            { name: 'PolicyRequest.java', type: 'file' },
            { name: 'ClaimRequest.java', type: 'file' }
          ]},
          { name: 'config', type: 'folder', children: [
            { name: 'SecurityConfig.java', type: 'file' },
            { name: 'JwtConfig.java', type: 'file' },
            { name: 'CorsConfig.java', type: 'file' }
          ]},
          { name: 'security', type: 'folder', children: [
            { name: 'JwtTokenProvider.java', type: 'file' },
            { name: 'JwtAuthFilter.java', type: 'file' }
          ]},
          { name: 'exception', type: 'folder', children: [
            { name: 'GlobalExceptionHandler.java', type: 'file' },
            { name: 'ResourceNotFoundException.java', type: 'file' }
          ]}
        ]}
      ],

      devTimeline: [
        { week: 'Week 1', title: 'Planning & Setup', tasks: ['Database schema design', 'Entity relationships', 'Project scaffolding', 'Git repository setup'] },
        { week: 'Week 2', title: 'Authentication', tasks: ['JWT token generation', 'Spring Security config', 'Role-based access', 'Registration flow'] },
        { week: 'Week 3', title: 'Policy Module', tasks: ['Plan CRUD operations', 'Policy purchase flow', 'Premium calculation', 'Payment simulation'] },
        { week: 'Week 4', title: 'Claims Module', tasks: ['Claim submission', 'Status state machine', 'Document upload', 'Staff review workflow'] },
        { week: 'Week 5', title: 'Integration', tasks: ['Email notifications', 'Cloudinary integration', 'Swagger documentation', 'Error handling'] },
        { week: 'Week 6', title: 'Testing & Deploy', tasks: ['Unit testing', 'API testing', 'Docker containerization', 'Production deployment'] }
      ],

      challengeSolutions: [
        { challenge: 'Duplicate Payments', solution: 'Implemented idempotency keys and optimistic locking to prevent double-submit', icon: 'bi-credit-card' },
        { challenge: 'Unauthorized Access', solution: 'JWT + RBAC with route-level protection and Spring Security filter chain', icon: 'bi-shield-lock' },
        { challenge: 'Document Storage', solution: 'Cloudinary integration with file type validation and access control', icon: 'bi-cloud-arrow-up' },
        { challenge: 'Invalid Claims', solution: 'State machine pattern with explicit transition rules and validation', icon: 'bi-clipboard-check' },
        { challenge: 'Token Refresh', solution: 'Refresh token rotation with short-lived access tokens', icon: 'bi-key' },
        { challenge: 'Role Escalation', solution: 'Server-side role validation on every protected endpoint', icon: 'bi-people' }
      ],

      beforeAfter: {
        before: ['Manual paper-based process', 'No role-based access', 'Email-based claim tracking', 'Physical document storage', 'No audit trail'],
        after: ['Digital automated workflow', 'JWT + 3-role RBAC', 'Real-time status dashboard', 'Cloudinary document management', 'Complete audit logging']
      },

      serverArch: [
        { label: 'React Client', icon: 'bi-window', color: '#60a5fa', description: 'SPA with component-based architecture, Axios HTTP client, React Router for navigation' },
        { label: 'REST API Gateway', icon: 'bi-arrow-left-right', color: '#60a5fa', description: 'Spring Boot embedded server, CORS configuration, request routing to controllers' },
        { label: 'Security Filter Chain', icon: 'bi-shield-lock', color: '#a78bfa', description: 'Spring Security filter chain, JWT validation, role-based access control' },
        { label: 'Controller Layer', icon: 'bi-usb-plug', color: 'var(--accent)', description: 'REST endpoints, request/response mapping, input validation, DTO conversion' },
        { label: 'Service Layer', icon: 'bi-gear', color: 'var(--accent)', description: 'Business logic, transaction management, cross-cutting concerns, notification triggers' },
        { label: 'Repository Layer', icon: 'bi-database', color: 'var(--accent)', description: 'JPA repositories, custom queries, pagination, entity relationship management' },
        { label: 'SQL Server', icon: 'bi-database', color: '#fbbf24', description: 'ACID transactions, indexed queries, stored procedures, referential integrity' }
      ],

      dbEntities: [
        { name: 'User', color: '#60a5fa', fields: ['id (PK)', 'email', 'password', 'role', 'createdAt'], relations: [{ entity: 'Customer', type: '1:1' }, { entity: 'Staff', type: '1:1' }] },
        { name: 'Customer', color: '#34d399', fields: ['id (PK)', 'userId (FK)', 'name', 'phone', 'address'], relations: [{ entity: 'Policy', type: '1:N' }, { entity: 'Payment', type: '1:N' }] },
        { name: 'Policy', color: '#a78bfa', fields: ['id (PK)', 'customerId (FK)', 'planId (FK)', 'startDate', 'endDate', 'status'], relations: [{ entity: 'Claim', type: '1:N' }, { entity: 'PremiumPayment', type: '1:N' }] },
        { name: 'Plan', color: '#fbbf24', fields: ['id (PK)', 'name', 'premium', 'coverage', 'duration'], relations: [{ entity: 'Policy', type: '1:N' }] },
        { name: 'Claim', color: '#f87171', fields: ['id (PK)', 'policyId (FK)', 'amount', 'status', 'createdAt'], relations: [{ entity: 'ClaimDocument', type: '1:N' }] },
        { name: 'ClaimDocument', color: '#fb923c', fields: ['id (PK)', 'claimId (FK)', 'documentId (FK)', 'uploadedAt'], relations: [] },
        { name: 'PremiumPayment', color: '#2dd4bf', fields: ['id (PK)', 'policyId (FK)', 'amount', 'paidAt', 'method'], relations: [] }
      ],

      authFlow: [
        { actor: 'Client', action: 'POST /api/auth/login', target: 'AuthController', description: 'User submits email + password', icon: 'bi-window' },
        { actor: 'AuthController', action: 'authenticate()', target: 'AuthService', description: 'Controller delegates to service layer', icon: 'bi-usb-plug' },
        { actor: 'AuthService', action: 'findByEmail()', target: 'UserRepository', description: 'Lookup user in database', icon: 'bi-gear' },
        { actor: 'AuthService', action: 'matches()', target: 'PasswordEncoder', description: 'Verify password against BCrypt hash', icon: 'bi-key' },
        { actor: 'AuthService', action: 'generateToken()', target: 'JwtProvider', description: 'Create JWT with userId + role + expiry', icon: 'bi-shield-check' },
        { actor: 'AuthController', action: '200 OK', target: 'Client', description: 'Return JWT token + refresh token', icon: 'bi-check-circle' },
        { actor: 'Client', action: 'Authorization: Bearer <token>', target: 'Protected API', description: 'Attach JWT to all subsequent requests', icon: 'bi-lock' }
      ],

      stateMachine: {
        nodes: [
          { id: 'draft', label: 'Draft', color: '#71717a', x: 0, y: 0 },
          { id: 'submitted', label: 'Submitted', color: '#60a5fa', x: 1, y: 0 },
          { id: 'review', label: 'Under Review', color: '#fbbf24', x: 2, y: 0 },
          { id: 'recommended', label: 'Recommended', color: '#a78bfa', x: 3, y: 0 },
          { id: 'approved', label: 'Approved', color: '#34d399', x: 4, y: 0 },
          { id: 'settled', label: 'Settled', color: '#10b981', x: 5, y: 0 },
          { id: 'rejected', label: 'Rejected', color: '#f87171', x: 2, y: 1 }
        ],
        transitions: [
          { from: 'draft', to: 'submitted', label: 'Submit', color: '#60a5fa' },
          { from: 'submitted', to: 'review', label: 'Assign', color: '#fbbf24' },
          { from: 'review', to: 'recommended', label: 'Recommend', color: '#a78bfa' },
          { from: 'review', to: 'rejected', label: 'Reject', color: '#f87171' },
          { from: 'recommended', to: 'approved', label: 'Approve', color: '#34d399' },
          { from: 'approved', to: 'settled', label: 'Settle', color: '#10b981' }
        ]
      }
    },

    'book-management': {
      id: 'book-management',
      title: 'Online Book Management System',
      subtitle: 'Enterprise Library Platform',
      tagline: 'Full-stack library management with role-based access, CRUD operations, and automated fine calculations.',
      category: 'Web Application',
      status: 'completed',
      year: '2024',
      heroGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',

      overview: 'Full-stack library management platform with role-based authentication and CRUD operations. Features admin dashboard, user registration, book inventory tracking, and automated fine calculations using ASP.NET Core MVC architecture.',
      problemStatement: 'Libraries need a centralized digital system to manage inventory, track borrowing patterns, handle role-based access, and automate fine calculations — replacing error-prone manual spreadsheet tracking.',

      features: [
        { icon: 'bi-shield-lock', title: 'JWT Authentication', description: 'Secure login with role-based access for admin and member users.' },
        { icon: 'bi-people', title: 'Role-Based Access', description: 'Admin manages inventory; members browse and borrow books.' },
        { icon: 'bi-book', title: 'Book Inventory', description: 'Full CRUD operations with search, filter, and pagination.' },
        { icon: 'bi-arrow-left-right', title: 'Borrowing System', description: 'Borrow/return workflow with automatic due date tracking.' },
        { icon: 'bi-calculator', title: 'Fine Calculation', description: 'Automated overdue fine computation with configurable rates.' },
        { icon: 'bi-speedometer2', title: 'Admin Dashboard', description: 'Analytics view with borrowing stats and inventory health.' }
      ],

      techStack: [
        { name: 'ASP.NET Core 8', purpose: 'Backend MVC framework — dependency injection, middleware pipeline', category: 'Backend' },
        { name: 'C#', purpose: 'Primary language — strong typing, LINQ, async/await patterns', category: 'Backend' },
        { name: 'Entity Framework Core', purpose: 'ORM — Code-First migrations, LINQ queries, change tracking', category: 'Data Access' },
        { name: 'SQL Server', purpose: 'Relational database — transactions, indexing, stored procedures', category: 'Database' },
        { name: 'Bootstrap 5', purpose: 'Responsive UI — grid system, components, utility classes', category: 'Frontend' },
        { name: 'Razor Views', purpose: 'Server-side rendering — typed models, tag helpers, layouts', category: 'Frontend' }
      ],

      architecture: {
        layers: [
          'Razor Views (UI)',
          'Controller Layer',
          'Service Layer',
          'Repository Pattern',
          'Entity Framework Core',
          'SQL Server'
        ],
        description: 'Clean Architecture with repository pattern for data access abstraction and service layer for business logic separation.'
      },

      database: {
        tables: ['Users', 'Books', 'Borrowings', 'Fines', 'Categories'],
        relationships: 'Users → borrow → Books. Borrowings → generate → Fines. Books belong to → Categories.',
        description: 'Normalized schema with foreign keys, indexes on ISBN and user email for fast lookups.'
      },

      apiShowcase: [
        { method: 'POST', endpoint: '/api/auth/login', description: 'User authentication' },
        { method: 'GET', endpoint: '/api/books', description: 'List books with pagination' },
        { method: 'POST', endpoint: '/api/books', description: 'Add book (admin)' },
        { method: 'PUT', endpoint: '/api/books/{id}', description: 'Update book details' },
        { method: 'POST', endpoint: '/api/borrow/{bookId}', description: 'Borrow a book' },
        { method: 'POST', endpoint: '/api/return/{borrowId}', description: 'Return and calculate fine' }
      ],

      workflow: [
        { icon: 'bi-box-arrow-in-right', label: 'Login', description: 'Authenticate with email and password' },
        { icon: 'bi-search', label: 'Browse', description: 'Search and filter book catalog' },
        { icon: 'bi-bookmark-plus', label: 'Borrow', description: 'Reserve and borrow available books' },
        { icon: 'bi-calendar-check', label: 'Track', description: 'Monitor due dates and borrowing history' },
        { icon: 'bi-arrow-return-left', label: 'Return', description: 'Return books with automatic fine calculation' }
      ],

      challenges: [
        'Implementing concurrent borrowing prevention when multiple users try to borrow the last copy',
        'Designing the fine calculation logic to handle edge cases like holidays and extensions',
        'Repository pattern abstraction enabling unit testing with in-memory database'
      ],

      learnings: [
        'Clean Architecture is worth the upfront investment for long-term maintainability',
        'Repository pattern significantly improves testability of data access layers',
        'JWT token refresh strategy is critical for production auth systems'
      ],

      futureImprovements: [
        { icon: 'bi-box-seam', title: 'Docker', description: 'Containerized deployment for consistent environments' },
        { icon: 'bi-graph-up', title: 'Analytics', description: 'Advanced borrowing pattern analytics and recommendations' },
        { icon: 'bi-bell', title: 'Notifications', description: 'Email/SMS reminders for upcoming due dates' }
      ],

      metrics: [
        { value: '<200ms', label: 'API Response' },
        { value: '78%', label: 'Test Coverage' },
        { value: '50+', label: 'Concurrent Users' },
        { value: '99.5%', label: 'Uptime' }
      ],

      techBadges: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework', 'Bootstrap'],
      github: 'https://github.com/Gurry-12/OnlineBookManagementSystem',

      engineeringDecisions: [
        { technology: 'Repository Pattern over Direct DbContext', why: 'Clean separation between business logic and data access. Enables unit testing with in-memory database without touching SQL Server.', alternatives: 'Direct DbContext was considered for speed but rejected — couples business logic to EF Core, makes testing require a real database.' },
        { technology: 'ASP.NET Core MVC over Razor Pages', why: 'MVC provides explicit controller routing and model binding. More familiar to .NET teams, clearer separation of concerns for a multi-role system.', alternatives: 'Razor Pages was considered for simpler page-based routing but rejected — less flexible for API endpoints alongside MVC views.' },
        { technology: 'JWT over Cookie Auth', why: 'Stateless authentication scales horizontally. No session state means any server instance can handle any request.', alternatives: 'Cookie auth was considered for simplicity but rejected — adds session management overhead, problematic for API consumption.' }
      ],

      tradeoffs: [
        { decision: 'Server-side rendering over SPA', rationale: 'Better SEO for a library system where books need to be discoverable. Simpler deployment without Node.js build step.', whatIdChange: 'Would add a lightweight SPA layer for the admin dashboard — full page reloads for dashboard interactions feel dated.' },
        { decision: 'Fine calculation in service layer over database triggers', rationale: 'Business logic belongs in code, not database. Easier to test, modify, and version control.', whatIdChange: 'Add a background job for batch fine calculations during peak hours — real-time calculation on every return creates unnecessary load.' }
      ],

      failureStory: 'The concurrency bug was humbling. Two users borrowing the last copy simultaneously would both succeed — overbooking the inventory. I tried database locks first (deadlocks), then optimistic concurrency (version columns), finally settled on a SELECT FOR UPDATE pattern. The real lesson: concurrency is not a theoretical concern, it\'s a production incident waiting to happen.',

      sequenceDiagrams: [
        {
          title: 'Book Borrowing Flow',
          description: 'How a member borrows a book with concurrency protection',
          steps: [
            'Member → BorrowController: POST /api/borrow/{bookId}',
            'BorrowController → BorrowService: borrowBook(userId, bookId)',
            'BorrowService → BookRepository: findByIdWithLock(bookId)',
            'BorrowService → BorrowingRepository: save(borrowing)',
            'BookRepository → Database: SELECT FOR UPDATE',
            'BorrowService → FineService: calculateDueDate()',
            'BorrowController → Member: 201 Created + dueDate'
          ]
        }
      ],

      screenshots: [
        { alt: 'Dashboard', label: 'Admin Dashboard' },
        { alt: 'Book List', label: 'Book Catalog' },
        { alt: 'Borrowing', label: 'Borrowing Flow' }
      ]
    },

    'disaster-dashboard': {
      id: 'disaster-dashboard',
      title: 'Disaster Response Dashboard',
      subtitle: 'Real-Time Emergency Coordination',
      tagline: 'Angular 18 emergency management platform with real-time alerts, resource tracking, and data visualization.',
      category: 'Web Application',
      status: 'completed',
      year: '2025',
      heroGradient: 'linear-gradient(135deg, #1a1a2e 0%, #0d1b2a 50%, #1b2838 100%)',

      overview: 'Emergency management web application built with Angular 18 for coordinating disaster response efforts. Features real-time alerts, resource tracking, responsive design for mobile field workers, and interactive data visualization.',
      problemStatement: 'Emergency response teams need a centralized dashboard to coordinate disaster relief efforts across multiple locations, track resource allocation in real-time, and visualize impact data — accessible on low-bandwidth mobile devices.',

      features: [
        { icon: 'bi-bell', title: 'Real-Time Alerts', description: 'RxJS-powered alert system simulating WebSocket data streams.' },
        { icon: 'bi-geo-alt', title: 'Resource Tracking', description: 'Geographic resource allocation with status indicators.' },
        { icon: 'bi-bar-chart', title: 'Data Visualization', description: 'Chart.js interactive charts for impact analysis.' },
        { icon: 'bi-phone', title: 'Mobile-First', description: 'Responsive design optimized for low-bandwidth field devices.' },
        { icon: 'bi-layers', title: 'Lazy Loading', description: 'Code-split feature modules for fast initial load.' },
        { icon: 'bi-palette', title: 'Theme System', description: 'CSS custom properties for light/dark mode switching.' }
      ],

      techStack: [
        { name: 'Angular 18', purpose: 'Frontend framework — standalone components, signals, SSR-ready', category: 'Frontend' },
        { name: 'TypeScript', purpose: 'Type safety — interfaces, generics, strict mode', category: 'Frontend' },
        { name: 'RxJS', purpose: 'Reactive data streams — BehaviorSubjects, operators, subscriptions', category: 'Reactive' },
        { name: 'Chart.js', purpose: 'Data visualization — bar, line, pie charts with responsive sizing', category: 'Visualization' },
        { name: 'Bootstrap 5', purpose: 'Responsive grid — mobile-first breakpoints, utility classes', category: 'Styling' },
        { name: 'SCSS', purpose: 'Maintainable styles — variables, nesting, mixins', category: 'Styling' }
      ],

      architecture: {
        layers: [
          'Angular Standalone Components',
          'Service Layer (RxJS)',
          'HttpClient (Data Access)',
          'Chart.js (Visualization)',
          'CSS Custom Properties (Theming)'
        ],
        description: 'Component-based architecture with standalone components for tree-shaking. RxJS services manage state and simulate real-time data streams.'
      },

      database: {
        tables: ['Incidents', 'Resources', 'Alerts', 'Teams', 'Locations'],
        relationships: 'Incidents → at → Locations. Resources → assigned to → Teams. Alerts → broadcast for → Incidents.',
        description: 'Mock data layer using RxJS BehaviorSubjects — designed to swap with REST API backend.'
      },

      apiShowcase: [
        { method: 'GET', endpoint: '/api/incidents', description: 'List active incidents' },
        { method: 'GET', endpoint: '/api/resources', description: 'Resource inventory' },
        { method: 'POST', endpoint: '/api/alerts', description: 'Broadcast alert' },
        { method: 'GET', endpoint: '/api/analytics', description: 'Impact metrics' }
      ],

      workflow: [
        { icon: 'bi-eye', label: 'Monitor', description: 'View real-time incident feed and alerts' },
        { icon: 'bi-geo-alt', label: 'Locate', description: 'Identify affected areas and resource positions' },
        { icon: 'bi-arrow-left-right', label: 'Allocate', description: 'Assign resources to incident locations' },
        { icon: 'bi-graph-up', label: 'Analyze', description: 'Review impact data and response metrics' }
      ],

      challenges: [
        'Simulating real-time data updates without a backend using RxJS BehaviorSubjects',
        'Ensuring Chart.js performance with 1000+ data points on mobile devices',
        'Making complex data visualizations accessible to users with visual impairments'
      ],

      learnings: [
        'RxJS is powerful for client-side data simulation and testing reactive patterns',
        'Angular Standalone Components significantly reduce boilerplate and improve tree-shaking',
        'Chart.js needs careful configuration for mobile performance — dataset limits matter'
      ],

      futureImprovements: [
        { icon: 'bi-wifi', title: 'WebSocket Integration', description: 'Real-time backend with WebSocket for live incident updates' },
        { icon: 'bi-phone', title: 'PWA', description: 'Offline support for field workers in low-connectivity areas' },
        { icon: 'bi-map', title: 'Map Integration', description: 'Leaflet/OpenStreetMap for geographic incident visualization' }
      ],

      metrics: [
        { value: '142KB', label: 'Bundle (gzip)' },
        { value: '96', label: 'Lighthouse' },
        { value: '94', label: 'Mobile Score' },
        { value: '<1.2s', label: 'FCP' }
      ],

      techBadges: ['Angular 18', 'TypeScript', 'RxJS', 'Chart.js', 'Bootstrap'],
      github: 'https://github.com/Gurry-12/Disaster-Ready-UI',
      live: 'https://disaster-ready-ui.onrender.com',

      engineeringDecisions: [
        { technology: 'RxJS BehaviorSubjects over REST polling', why: 'BehaviorSubjects provide a reactive data stream that components subscribe to. Better than polling because: (1) no wasted HTTP requests when data hasn\'t changed, (2) automatic cache invalidation, (3) composable operators for filtering/transforming streams.', alternatives: 'setInterval + HTTP polling was considered but rejected — 3-second polling creates unnecessary network traffic, no way to know when data actually changes.' },
        { technology: 'Angular Standalone Components over NgModules', why: 'Standalone components eliminate the need for NgModule declarations. Each component imports only what it needs — better tree-shaking, faster builds, cleaner mental model.', alternatives: 'NgModules were considered for consistency with existing Angular projects but rejected — standalone is the direction Angular is moving, better to demonstrate modern patterns.' },
        { technology: 'Chart.js over D3.js', why: 'Chart.js provides 80% of visualization needs with 20% of the complexity. For a dashboard showing bar/line/pie charts, D3 would be overkill.', alternatives: 'D3.js was considered for custom visualizations but rejected — steep learning curve, overkill for standard chart types, larger bundle size.' }
      ],

      tradeoffs: [
        { decision: 'Mock data over real backend', rationale: 'Focus was on frontend architecture and reactive patterns, not backend development. RxJS BehaviorSubjects simulate real-time data realistically.', whatIdChange: 'Add a Spring Boot backend with WebSocket support — the mock data doesn\'t test network latency, disconnections, or data synchronization issues.' },
        { decision: 'Chart.js canvas rendering over SVG', rationale: 'Canvas performs better with 1000+ data points. SVG would create 1000+ DOM nodes, causing memory issues on mobile.', whatIdChange: 'Add virtual scrolling for the incident list — rendering 500+ incidents still causes jank on low-end devices.' }
      ],

      failureStory: 'The Chart.js performance issue taught me that "it works on my machine" is not a testing strategy. On my MacBook, 1000 data points rendered in 50ms. On a mid-range Android phone, it was 2 seconds. The fix was dataset limiting and canvas pixel ratio adjustment, but the real lesson was: test on target devices, not development machines.',

      sequenceDiagrams: [
        {
          title: 'Real-Time Alert Flow',
          description: 'How alerts propagate through the RxJS reactive system',
          steps: [
            'AlertService → BehaviorSubject: next(alert)',
            'BehaviorSubject → DashboardComponent: subscribe(alert$)',
            'DashboardComponent → ChartService: updateIncidentCount()',
            'DashboardComponent → NotificationService: showAlert()',
            'NotificationService → ToastComponent: show(message)'
          ]
        }
      ],

      screenshots: [
        { alt: 'Dashboard', label: 'Incident Dashboard' },
        { alt: 'Charts', label: 'Analytics View' },
        { alt: 'Mobile', label: 'Mobile Layout' },
        { alt: 'Additional View', label: 'System View' }
      ]
    },

    'sentiment-api': {
      id: 'sentiment-api',
      title: 'Sentiment Analysis API',
      subtitle: 'ML-Powered NLP Service',
      tagline: 'RESTful API for real-time text sentiment analysis using NLTK and scikit-learn with confidence scoring.',
      category: 'API / ML',
      status: 'completed',
      year: '2024',
      heroGradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)',

      overview: 'RESTful API for real-time text sentiment analysis using NLTK and machine learning models. Processes user input to classify emotions as positive, negative, or neutral with confidence scores and detailed analytics.',
      problemStatement: 'Businesses need automated sentiment analysis at scale to process customer feedback, social media mentions, and support tickets — requiring an API that classifies text with confidence scores while handling high throughput.',

      features: [
        { icon: 'bi-chat-dots', title: 'Text Analysis', description: 'Real-time sentiment classification with confidence scores.' },
        { icon: 'bi-layers', title: 'Batch Processing', description: 'Process up to 100 texts in a single API call.' },
        { icon: 'bi-graph-up', title: 'Confidence Scoring', description: 'Detailed probability breakdown for each sentiment class.' },
        { icon: 'bi-speedometer', title: 'High Throughput', description: 'Optimized for 200+ requests per second.' }
      ],

      techStack: [
        { name: 'Python', purpose: 'Primary language — NLTK, scikit-learn, pandas ecosystem', category: 'Backend' },
        { name: 'Flask', purpose: 'Lightweight API framework — minimal overhead, fast development', category: 'Backend' },
        { name: 'NLTK', purpose: 'NLP preprocessing — tokenization, stopword removal, stemming', category: 'ML/NLP' },
        { name: 'scikit-learn', purpose: 'ML pipeline — TF-IDF vectorizer, classifier training', category: 'ML/NLP' },
        { name: 'TF-IDF', purpose: 'Feature extraction — text to numerical vectors for classification', category: 'ML/NLP' }
      ],

      architecture: {
        layers: [
          'Flask REST API',
          'NLTK Preprocessing',
          'TF-IDF Vectorizer',
          'ML Classifier Pipeline',
          'JSON Response'
        ],
        description: 'Pipeline architecture: Raw text → NLTK preprocessing → TF-IDF transformation → ML classification → JSON response with confidence scores.'
      },

      database: {
        tables: ['analysis_logs', 'model_versions'],
        relationships: 'analysis_logs stores every prediction. model_versions tracks trained models.',
        description: 'Minimal persistence — analysis logs for monitoring, model versions for rollback capability.'
      },

      apiShowcase: [
        { method: 'POST', endpoint: '/api/analyze', description: 'Analyze single text' },
        { method: 'POST', endpoint: '/api/batch', description: 'Batch analyze up to 100 texts' },
        { method: 'GET', endpoint: '/api/health', description: 'Service health with model status' }
      ],

      workflow: [
        { icon: 'bi-input-cursor-text', label: 'Input', description: 'Submit text for analysis' },
        { icon: 'bi-gear', label: 'Process', description: 'NLTK tokenization and cleaning' },
        { icon: 'bi-braces', label: 'Vectorize', description: 'TF-IDF feature extraction' },
        { icon: 'bi-cpu', label: 'Classify', description: 'ML model prediction' },
        { icon: 'bi-check-circle', label: 'Result', description: 'Sentiment with confidence scores' }
      ],

      challenges: [
        'Achieving acceptable accuracy on domain-specific text without large training datasets',
        'Handling multilingual text and mixed-language inputs gracefully',
        'Optimizing ML inference latency for real-time API responses'
      ],

      learnings: [
        'Feature engineering matters more than model complexity for small datasets',
        'Classical ML can outperform deep learning when data is limited',
        'API versioning is essential for ML services due to model updates'
      ],

      futureImprovements: [
        { icon: 'bi-brain', title: 'Deep Learning', description: 'Transformer-based models for higher accuracy' },
        { icon: 'bi-globe', title: 'Multi-Language', description: 'Support for Hindi, Spanish, and other languages' },
        { icon: 'bi-cloud', title: 'Model Serving', description: 'ONNX Runtime for optimized inference' }
      ],

      metrics: [
        { value: '87%', label: 'Accuracy' },
        { value: '<50ms', label: 'Latency' },
        { value: '200', label: 'req/s' },
        { value: '12MB', label: 'Model Size' }
      ],

      techBadges: ['Python', 'Flask', 'NLTK', 'scikit-learn', 'REST API'],
      github: 'https://github.com/Gurry-12/sentiment_analyzer',

      engineeringDecisions: [
        { technology: 'TF-IDF + Classical ML over Transformers', why: 'For a sentiment API handling short text (tweets, reviews), TF-IDF with a trained classifier achieves 87% accuracy with <50ms latency. A BERT model would add 500MB+ and 200ms+ inference time for 5-8% accuracy gain — not worth it for this use case.', alternatives: 'BERT/DistilBERT was considered but rejected — model size prohibitive for lightweight API deployment, inference latency too high for real-time use cases.' },
        { technology: 'Flask over FastAPI', why: 'Flask has a larger ecosystem, simpler debugging, and sufficient performance for the expected load. The 200 req/s target doesn\'t require async framework overhead.', alternatives: 'FastAPI was considered for async support and automatic OpenAPI docs — but Flask + gunicorn with multiple workers meets the performance requirement.' },
        { technology: 'NLTK over spaCy', why: 'NLTK provides more control over tokenization steps — important for understanding and debugging the preprocessing pipeline. spaCy\'s "black box" approach hides details that matter for NLP learning.', alternatives: 'spaCy was considered for faster preprocessing — but the educational value of seeing each tokenization step outweighs the speed benefit.' }
      ],

      tradeoffs: [
        { decision: 'Model caching in memory over Redis', rationale: 'For a single-instance deployment, in-memory caching is simpler and faster. No network hop to Redis, no serialization overhead.', whatIdChange: 'Add Redis for multi-instance deployments — in-memory caching doesn\'t scale horizontally, each instance would load its own copy.' },
        { decision: 'Single analysis endpoint over streaming', rationale: 'Synchronous request/response is simpler to implement and debug. For 200 req/s, synchronous processing with gunicorn workers is sufficient.', whatIdChange: 'Add WebSocket streaming for batch analysis — waiting for 100 texts to process sequentially is poor UX for large batches.' }
      ],

      failureStory: 'The accuracy problem was frustrating. My first model had 62% accuracy — barely better than random. The issue wasn\'t the algorithm, it was feature engineering. Adding n-grams (bigrams and trigrams) boosted accuracy to 81%. Adding stopword removal and stemming pushed it to 87%. The lesson: in ML, data quality and feature engineering matter more than model complexity.',

      sequenceDiagrams: [
        {
          title: 'Text Analysis Pipeline',
          description: 'How text flows through the ML pipeline to produce sentiment',
          steps: [
            'Client → Flask API: POST /api/analyze',
            'Flask → NLTK: tokenize(text)',
            'NLTK → TFIDF: transform(tokens)',
            'TFIDF → Classifier: predict(vector)',
            'Classifier → Flask: {sentiment, confidence}',
            'Flask → Client: 200 OK + JSON response'
          ]
        }
      ],

      screenshots: [
        { alt: 'API Response', label: 'API Response' },
        { alt: 'Swagger', label: 'API Docs' }
      ]
    },

    'portfolio-v2': {
      id: 'portfolio-v2',
      title: 'Developer Portfolio',
      subtitle: 'This Website',
      tagline: 'Angular 18 portfolio with dark-first design, PWA support, and SSR-ready architecture.',
      category: 'Web Application',
      status: 'completed',
      year: '2025',
      heroGradient: 'linear-gradient(135deg, #09090b 0%, #18181b 50%, #09090b 100%)',

      overview: 'Modern portfolio website featuring dark-first design, live IST clock, theme toggle, and PWA capabilities. Built with Angular 18 standalone components, SCSS design tokens, and deployed on Netlify with CI/CD.',
      problemStatement: 'Need a professional, fast-loading portfolio that showcases engineering work with production-grade quality — not a template, but a custom-built system.',

      features: [
        { icon: 'bi-moon', title: 'Dark/Light Theme', description: 'System preference detection with manual toggle and localStorage persistence.' },
        { icon: 'bi-phone', title: 'PWA Support', description: 'Service worker with offline support and app-like experience.' },
        { icon: 'bi-palette', title: 'Design System', description: 'SCSS design tokens with 8-point grid spacing.' },
        { icon: 'bi-search', title: 'SEO Optimized', description: 'Meta tags, structured data, Open Graph, and per-page titles.' }
      ],

      techStack: [
        { name: 'Angular 18', purpose: 'Framework — standalone components, SSR-ready, lazy loading', category: 'Frontend' },
        { name: 'TypeScript', purpose: 'Type safety — interfaces, strict mode, generics', category: 'Frontend' },
        { name: 'SCSS', purpose: 'Styling — design tokens, nesting, variables, mixins', category: 'Styling' },
        { name: 'Netlify', purpose: 'Hosting — CDN, forms, serverless functions', category: 'Infrastructure' }
      ],

      architecture: {
        layers: [
          'Angular Standalone Components',
          'SCSS Design System',
          'Theme Service',
          'Service Worker',
          'Netlify CDN'
        ],
        description: 'Component-driven architecture with standalone components, lazy-loaded routes, and a centralized design token system in SCSS.'
      },

      database: { tables: [], relationships: '', description: 'No database — static site with client-side state management.' },

      apiShowcase: [],
      workflow: [
        { icon: 'bi-house', label: 'Home', description: 'Hero, stats, and quick links' },
        { icon: 'bi-person', label: 'About', description: 'Skills, timeline, and achievements' },
        { icon: 'bi-code-slash', label: 'Work', description: 'Project case studies' },
        { icon: 'bi-envelope', label: 'Contact', description: 'Contact form and social links' }
      ],

      challenges: [
        'Achieving Lighthouse 95+ with Angular\'s framework overhead',
        'Implementing dark/light theme without flash of unstyled content',
        'SCSS design token system that works across all components'
      ],

      learnings: [
        'Design tokens in SCSS provide excellent consistency across components',
        'Angular SSR adds significant SEO value for static portfolios',
        'Performance budgets in angular.json catch bloat early'
      ],

      futureImprovements: [
        { icon: 'bi-translate', title: 'i18n', description: 'Multi-language support with Angular i18n' },
        { icon: 'bi-bar-chart', title: 'Analytics', description: 'Privacy-focused analytics with Plausible' },
        { icon: 'bi-pencil', title: 'CMS', description: 'Content management for easy project updates' }
      ],

      metrics: [
        { value: '97', label: 'Lighthouse' },
        { value: '168KB', label: 'Bundle (gzip)' },
        { value: '<1s', label: 'FCP' },
        { value: '0', label: 'Dependencies' }
      ],

      techBadges: ['Angular 18', 'TypeScript', 'SCSS', 'PWA', 'Netlify'],
      github: 'https://github.com/Gurry-12/Gurpreet-Portfolio',
      live: 'https://gurpreetdev.netlify.app',

      engineeringDecisions: [
        { technology: 'Angular over Next.js', why: 'Angular\'s opinionated structure enforces patterns that scale. TypeScript strict mode catches errors that would be runtime bugs in React/Next.js. SSR support is built-in, not a separate concern.', alternatives: 'Next.js was considered for its ecosystem and Vercel deployment — but Angular\'s enterprise patterns better demonstrate backend engineering discipline.' },
        { technology: 'SCSS Design Tokens over CSS-in-JS', why: 'Custom properties work without JavaScript, enable runtime theme switching, and compile to zero runtime cost. CSS-in-JS adds bundle size and hydration complexity.', alternatives: 'Tailwind CSS was considered for speed — but design tokens provide better consistency documentation and enforce a systematic approach to spacing/color/typography.' },
        { technology: 'Netlify over Vercel', why: 'Netlify Forms provides free backend for contact form without a separate service. Built-in CI/CD, edge functions, and form handling in one platform.', alternatives: 'Vercel was considered for Next.js integration — but since we\'re using Angular, Netlify\'s Angular-specific support and form handling made it the better choice.' }
      ],

      tradeoffs: [
        { decision: 'PWA over traditional SPA', rationale: 'Offline support and app-like experience demonstrate production-ready engineering. Service workers cache static assets for instant repeat visits.', whatIdChange: 'Add push notifications for new project announcements — PWA infrastructure is already in place, just needs the notification API integration.' },
        { decision: 'Static data over CMS', rationale: 'No CMS dependency means faster builds, no API calls, no monthly costs. Project data lives in TypeScript for type safety.', whatIdChange: 'Add headless CMS (Sanity/Contentful) for easier content updates — editing TypeScript files is not scalable for non-technical contributors.' }
      ],

      failureStory: 'The FOUC (Flash of Unstyled Content) during theme switching was the hardest problem. The browser applies the default theme before Angular hydrates and reads localStorage. The fix: inline a script in index.html that reads localStorage and sets data-theme before the first paint. The lesson: perceived performance matters as much as actual performance.',

      sequenceDiagrams: [
        {
          title: 'Theme Switching Flow',
          description: 'How dark/light mode works without FOUC',
          steps: [
            'index.html → inline script: read localStorage("theme")',
            'inline script → html.setAttribute: data-theme',
            'Angular → ThemeService: ngOnInit()',
            'ThemeService → html: update data-theme',
            'User → Toggle: click event',
            'Toggle → ThemeService: toggleTheme()',
            'ThemeService → localStorage: setItem("theme")'
          ]
        }
      ],

      screenshots: [
        { alt: 'Home', label: 'Home Page' },
        { alt: 'Projects', label: 'Projects' },
        { alt: 'About', label: 'About Page' }
      ]
    },

    'api-testing': {
      id: 'api-testing',
      title: 'API Testing Suite',
      subtitle: 'Automated BDD Testing Framework',
      tagline: 'Postman collections with Newman CLI runner, BDD test scenarios, and CI/CD pipeline integration.',
      category: 'Testing / DevOps',
      status: 'completed',
      year: '2024',
      heroGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',

      overview: 'Automated API testing framework using Postman collections with Newman CLI runner. Implements BDD-style test scenarios, automated regression suites, and CI/CD pipeline integration for systematic, repeatable API validation.',
      problemStatement: 'API testing needs to be systematic, repeatable, and integrated into CI/CD — not ad-hoc Postman requests. Teams need structured test suites that non-developers can understand and maintain.',

      features: [
        { icon: 'bi-collection', title: 'Postman Collections', description: 'Organized test suites with environment variables and data-driven testing.' },
        { icon: 'bi-terminal', title: 'Newman CLI', description: 'Command-line runner for automated test execution in CI/CD pipelines.' },
        { icon: 'bi-check2-square', title: 'BDD Scenarios', description: 'Given/When/Then test structure for non-developer understanding.' },
        { icon: 'bi-arrow-repeat', title: 'Regression Suites', description: 'Automated regression testing with pass/fail reporting.' }
      ],

      techStack: [
        { name: 'Postman', purpose: 'API testing platform — collections, environments, pre-request scripts', category: 'Testing' },
        { name: 'Newman', purpose: 'CLI runner — automated execution, HTML reports, CI/CD integration', category: 'Automation' },
        { name: 'JavaScript', purpose: 'Test scripting — assertions, data transformations, custom validators', category: 'Scripting' },
        { name: 'BDD', purpose: 'Test structure — Given/When/Then scenarios for readability', category: 'Methodology' }
      ],

      architecture: {
        layers: [
          'Postman Collections',
          'Newman CLI Runner',
          'BDD Test Assertions',
          'CI/CD Pipeline',
          'Test Reports'
        ],
        description: 'Collection-driven architecture with Newman for CLI execution. BDD-style assertions improve readability. CI/CD integration ensures tests run on every deployment.'
      },

      database: { tables: [], relationships: '', description: 'No database — test framework operates against external APIs.' },

      apiShowcase: [],
      workflow: [
        { icon: 'bi-pencil', label: 'Author', description: 'Write test scenarios in Postman collections' },
        { icon: 'bi-play', label: 'Execute', description: 'Run tests via Newman CLI or Postman' },
        { icon: 'bi-check-circle', label: 'Validate', description: 'BDD assertions verify expected behavior' },
        { icon: 'bi-file-earmark-bar-graph', label: 'Report', description: 'Generate pass/fail reports for CI/CD' }
      ],

      challenges: [
        'Writing assertions that handle non-deterministic API responses',
        'Managing test data across environments (dev, staging, production)',
        'Integrating Newman into CI/CD without slowing down deployment'
      ],

      learnings: [
        'BDD-style tests improve non-developer understanding of test intent',
        'Newman enables CLI integration for CI/CD pipelines',
        'Collection variables reduce test maintenance overhead'
      ],

      futureImprovements: [
        { icon: 'bi-robot', title: 'Contract Testing', description: 'Pact-based contract testing between services' },
        { icon: 'bi-graph-up', title: 'Performance Testing', description: 'k6 integration for load and stress testing' },
        { icon: 'bi-shield-lock', title: 'Security Scanning', description: 'OWASP ZAP integration for automated security testing' }
      ],

      metrics: [
        { value: '85%', label: 'Test Coverage' },
        { value: '<2min', label: 'Execution Time' },
        { value: '50+', label: 'Test Cases' },
        { value: '3', label: 'Environments' }
      ],

      techBadges: ['Postman', 'Newman', 'JavaScript', 'BDD', 'CI/CD'],
      github: 'https://github.com/Gurry-12/api-testing-suite',

      engineeringDecisions: [
        { technology: 'Postman over Custom Test Framework', why: 'Postman provides environment variables, data-driven testing, and team collaboration out of the box. Writing a custom framework would take 3x longer for the same functionality.', alternatives: 'Custom Jest/Mocha framework was considered — more flexible but requires maintaining test infrastructure, no built-in UI for non-developers to review tests.' },
        { technology: 'BDD Assertions over Standard Assertions', why: 'Given/When/Then format makes test intent clear to non-developers. Product managers can read and validate test scenarios without understanding code.', alternatives: 'Standard assert/expect syntax was considered — more concise but less readable for cross-functional team reviews.' },
        { technology: 'Newman CLI over Postman Cloud', why: 'CLI execution enables CI/CD integration. Tests run in GitHub Actions pipelines without Postman subscription costs.', alternatives: 'Postman Cloud runners were considered — easier setup but vendor lock-in, monthly costs, less control over execution environment.' }
      ],

      tradeoffs: [
        { decision: 'Collection-based testing over code-based', rationale: 'Postman collections are JSON files that can be version controlled, shared, and iterated without code changes. Non-developers can edit collections via Postman UI.', whatIdChange: 'Add contract testing with Pact — collection-based testing validates behavior but not API contracts between services.' },
        { decision: 'Newman over Postman Cloud runners', rationale: 'Free, no vendor lock-in, runs anywhere Docker runs. CI/CD integration is straightforward with any pipeline.', whatIdChange: 'Add performance testing with k6 — Newman validates correctness but doesn\'t measure throughput or latency under load.' }
      ],

      failureStory: 'The non-deterministic API response problem was subtle. Tests would pass locally but fail in CI — the API returned data in different orders. The fix: sort assertions by ID before comparing, use set-based comparisons instead of array index matching. The lesson: deterministic tests require deterministic assertions, not just deterministic inputs.',

      sequenceDiagrams: [
        {
          title: 'CI/CD Test Execution',
          description: 'How tests run in the deployment pipeline',
          steps: [
            'GitHub Actions → Newman: run collection',
            'Newman → Postman Collection: execute requests',
            'Newman → BDD Assertions: validate responses',
            'Newman → HTML Reporter: generate results',
            'GitHub Actions → Deploy: if tests pass'
          ]
        }
      ],

      screenshots: [
        { alt: 'Collections', label: 'Test Collections' },
        { alt: 'Results', label: 'Test Results' }
      ]
    }
  };

  getAll(): ProjectCaseStudy[] {
    return Object.values(this.projects);
  }

  getById(id: string): ProjectCaseStudy | undefined {
    return this.projects[id];
  }

  getRelated(currentId: string): ProjectCaseStudy[] {
    return Object.values(this.projects).filter(p => p.id !== currentId).slice(0, 2);
  }

  getIds(): string[] {
    return Object.keys(this.projects);
  }

  getListingData(): { id: string; title: string; subtitle: string; year: string; status: string; github?: string; live?: string; techBadges: string[]; category: string; featured: boolean; problemStatement: string; overview: string }[] {
    return Object.values(this.projects).map(p => ({
      id: p.id,
      title: p.title,
      subtitle: p.subtitle,
      year: p.year,
      status: p.status,
      github: p.github,
      live: p.live,
      techBadges: p.techBadges,
      category: p.category,
      featured: p.category === 'Enterprise' || p.id === 'disaster-dashboard',
      problemStatement: p.problemStatement,
      overview: p.overview
    }));
  }
}
