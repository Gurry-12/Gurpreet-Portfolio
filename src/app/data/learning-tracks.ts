/**
 * Learning Tracks — Structured engineering learning dashboard.
 * Status progression: Exploring → Learning → Practicing → Building → Applying
 *
 * Update this file when topics are picked up, practiced, or applied in projects.
 * Do NOT use fake progress percentages. Status + notes is the honest alternative.
 */

export type LearningStatus =
  | 'Exploring'
  | 'Learning'
  | 'Practicing'
  | 'Building'
  | 'Applying';

export interface LearningTopic {
  id: string;
  name: string;
  status: LearningStatus;
  notes?: string;
  relatedProjects?: string[];
  resources?: string[];
  lastUpdated: string;
}

export interface LearningTrack {
  id: string;
  name: string;
  description: string;
  topics: LearningTopic[];
}

export const LEARNING_TRACKS: LearningTrack[] = [
  {
    id: 'backend',
    name: 'Backend Engineering',
    description:
      'The core of my current focus. Building production-grade REST APIs, understanding security boundaries, and designing systems that can be maintained over time.',
    topics: [
      {
        id: 'java',
        name: 'Java 17',
        status: 'Applying',
        notes:
          'Working in Java daily at Monocept. Comfortable with records, sealed classes, switch expressions, and the enterprise module system.',
        relatedProjects: ['Insurance System', 'Department Expense Approval'],
        lastUpdated: 'Sep 2026'
      },
      {
        id: 'spring-boot',
        name: 'Spring Boot 3',
        status: 'Applying',
        notes:
          'Production use. Auto-configuration, dependency injection, application events, lifecycle management. Still learning deeper Spring internals.',
        relatedProjects: ['Insurance System', 'Department Expense Approval'],
        lastUpdated: 'Sep 2026'
      },
      {
        id: 'spring-security',
        name: 'Spring Security 6',
        status: 'Building',
        notes:
          'Implemented stateless JWT filter chains and method-level RBAC with @PreAuthorize. Currently exploring OAuth2 resource server configuration.',
        relatedProjects: ['Insurance System'],
        resources: ['Spring Security docs', 'Baeldung Spring Security series'],
        lastUpdated: 'Aug 2026'
      },
      {
        id: 'rest-apis',
        name: 'REST API Design',
        status: 'Applying',
        notes:
          'Versioning, resource naming, HTTP semantics, RFC 7807 problem details, idempotency keys, pagination strategies.',
        relatedProjects: ['Insurance System', 'Book Management System'],
        lastUpdated: 'Sep 2026'
      },
      {
        id: 'jpa-hibernate',
        name: 'JPA / Hibernate',
        status: 'Practicing',
        notes:
          'N+1 avoidance via JOIN FETCH, optimistic locking with @Version, lazy vs eager loading trade-offs, JPQL custom queries. Still deepening knowledge of Hibernate internals.',
        relatedProjects: ['Insurance System'],
        lastUpdated: 'Aug 2026'
      },
      {
        id: 'system-design',
        name: 'System Design',
        status: 'Learning',
        notes:
          'Studying through Designing Data-Intensive Applications. Covering consistency models, CAP theorem, replication strategies, and sharding. Applying concepts in architecture decisions for projects.',
        resources: ['Designing Data-Intensive Applications (Kleppmann)', 'ByteByteGo'],
        lastUpdated: 'Sep 2026'
      }
    ]
  },

  {
    id: 'computer-science',
    name: 'Computer Science',
    description:
      'Fundamentals that make everything else make sense. DSA, systems, databases, and the theory behind the tools I use every day.',
    topics: [
      {
        id: 'dsa',
        name: 'Data Structures & Algorithms',
        status: 'Practicing',
        notes:
          '606+ problems solved across CodeChef and LeetCode. Strong in arrays, trees, graphs, dynamic programming. Active practice to maintain and improve.',
        resources: ['LeetCode', 'CodeChef', 'NeetCode roadmap'],
        lastUpdated: 'Sep 2026'
      },
      {
        id: 'sql-databases',
        name: 'SQL & Relational Databases',
        status: 'Applying',
        notes:
          'Index design, composite indexes, query planning, transaction isolation levels, ACID properties, foreign key enforcement, pagination strategies.',
        relatedProjects: ['Insurance System', 'Book Management System'],
        lastUpdated: 'Sep 2026'
      },
      {
        id: 'oop',
        name: 'OOP & Design Patterns',
        status: 'Applying',
        notes:
          'State machine pattern, repository pattern, factory, strategy. Applied daily in Spring Boot service architecture.',
        relatedProjects: ['Insurance System', 'Book Management System'],
        lastUpdated: 'Sep 2026'
      },
      {
        id: 'operating-systems',
        name: 'Operating Systems',
        status: 'Learning',
        notes:
          'Concurrency, threading models, memory management, process scheduling. Studying to understand Java threading, connection pool behavior, and Docker resource limits.',
        lastUpdated: 'Jul 2026'
      },
      {
        id: 'networking',
        name: 'Computer Networking',
        status: 'Learning',
        notes:
          'HTTP/HTTPS, TCP/IP, DNS, TLS handshake, REST over HTTP/1.1 vs HTTP/2. Relevant for understanding API performance and load balancer behavior.',
        lastUpdated: 'Jun 2026'
      }
    ]
  },

  {
    id: 'ai-ml',
    name: 'AI / Machine Learning',
    description:
      'Parallel track alongside backend engineering. Started with Python ML pipelines and am building toward understanding how ML systems are engineered and deployed.',
    topics: [
      {
        id: 'python',
        name: 'Python',
        status: 'Applying',
        notes:
          'Used for ML pipelines, Flask APIs, scripting, and backend utilities during Codehop and Anviam internships.',
        relatedProjects: ['Disaster Severity Predictor', 'Wine Quality ML'],
        lastUpdated: 'Aug 2026'
      },
      {
        id: 'scikit-learn',
        name: 'scikit-learn',
        status: 'Practicing',
        notes:
          'Classification, regression, cross-validation, feature engineering, SMOTE for class imbalance. Applied in disaster severity prediction project.',
        relatedProjects: ['Disaster Severity Predictor'],
        lastUpdated: 'Jul 2026'
      },
      {
        id: 'ml-fundamentals',
        name: 'Machine Learning Fundamentals',
        status: 'Practicing',
        notes:
          'Supervised learning, bias-variance tradeoff, regularization, ensemble methods (Random Forest, Gradient Boosting), evaluation metrics.',
        relatedProjects: ['Disaster Severity Predictor', 'Wine Quality ML'],
        lastUpdated: 'Jul 2026'
      },
      {
        id: 'nlp',
        name: 'NLP',
        status: 'Exploring',
        notes:
          'Beginning exploration of tokenization, embeddings, and transformer-based text classification. No project applied yet.',
        resources: ['Hugging Face NLP course', 'fast.ai practical NLP'],
        lastUpdated: 'Jun 2026'
      },
      {
        id: 'ai-engineering',
        name: 'AI System Engineering',
        status: 'Exploring',
        notes:
          'How ML models go from Jupyter notebooks to production APIs. Studying model serving, feature stores, and evaluation pipelines.',
        lastUpdated: 'Jun 2026'
      }
    ]
  },

  {
    id: 'tools',
    name: 'Engineering Tools',
    description:
      'The craft around the code. Version control, containerization, testing infrastructure, and the operational side of software engineering.',
    topics: [
      {
        id: 'git',
        name: 'Git & GitHub',
        status: 'Applying',
        notes:
          'Branch strategies, rebasing, merge conflict resolution, PR workflows, GitHub Actions basics.',
        lastUpdated: 'Sep 2026'
      },
      {
        id: 'docker',
        name: 'Docker',
        status: 'Practicing',
        notes:
          'Containerized the insurance system backend. Writing Dockerfiles, docker-compose for multi-service setups (app + SQL Server). Learning image optimization.',
        relatedProjects: ['Insurance System'],
        lastUpdated: 'Aug 2026'
      },
      {
        id: 'testing',
        name: 'Testing (Unit & Integration)',
        status: 'Learning',
        notes:
          'JUnit 5, Mockito, Spring Boot Test, Testcontainers (exploring). Understanding the difference between unit, integration, and contract tests.',
        relatedProjects: ['Insurance System'],
        lastUpdated: 'Sep 2026'
      },
      {
        id: 'postman',
        name: 'Postman & API Testing',
        status: 'Applying',
        notes:
          'Collection organization, environment variables, automated test scripts for API validation.',
        lastUpdated: 'Aug 2026'
      },
      {
        id: 'ci-cd',
        name: 'CI/CD',
        status: 'Learning',
        notes:
          'Understanding pipeline concepts via GitHub Actions. Basic build + test + deploy pipelines. Want to implement for insurance system.',
        lastUpdated: 'Jul 2026'
      },
      {
        id: 'cloud',
        name: 'Cloud (AWS / Render)',
        status: 'Exploring',
        notes:
          'Deployed projects on Render. Beginning to study AWS fundamentals: EC2, S3, RDS, IAM basics.',
        resources: ['AWS Cloud Practitioner materials'],
        lastUpdated: 'Jun 2026'
      }
    ]
  }
];

export function getTrackById(id: string): LearningTrack | undefined {
  return LEARNING_TRACKS.find(t => t.id === id);
}

export const STATUS_ORDER: LearningStatus[] = [
  'Exploring',
  'Learning',
  'Practicing',
  'Building',
  'Applying'
];

export function getStatusIndex(status: LearningStatus): number {
  return STATUS_ORDER.indexOf(status);
}
