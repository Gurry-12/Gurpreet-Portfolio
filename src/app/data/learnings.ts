export interface Learning {
  id: string;
  topic: string;
  category: 'Backend' | 'Database' | 'Security' | 'Architecture' | 'Frontend';
  whyItMattered: string;
  whatIDiscovered: string;
  appliedIn: string;
  date: string;
}

export const LEARNINGS: Learning[] = [
  {
    id: 'spring-security-filter-chain',
    topic: 'Stateless JWT & Role-Based Filter Chains',
    category: 'Security',
    whyItMattered: 'Session-based authentication creates server-side memory bottlenecks and requires sticky sessions in distributed environments.',
    whatIDiscovered: 'Stateless JWT validation must occur early in the Spring Security filter chain (`OncePerRequestFilter`). Token revocation is best solved with short-lived access tokens (15m) paired with database-backed refresh tokens, eliminating the need to hit the database on every single protected API call.',
    appliedIn: 'Insurance Policy & Claim Management System',
    date: '2026'
  },
  {
    id: 'db-concurrency-locks',
    topic: 'Pessimistic vs. Optimistic Concurrency Control',
    category: 'Database',
    whyItMattered: 'Simultaneous borrowing requests on the last remaining book copy caused negative inventory anomalies under high traffic simulation.',
    whatIDiscovered: 'Optimistic locking (`@Version`) works well for low-contention entities, but high-contention inventory checkout requires explicit row-level locking (`SELECT ... FOR UPDATE` or isolation level tuning) to prevent race conditions before decrementing count.',
    appliedIn: 'Online Book Management System',
    date: '2025'
  },
  {
    id: 'state-machine-vs-if-chains',
    topic: 'State Machine Pattern for Multi-Party Workflows',
    category: 'Architecture',
    whyItMattered: 'Claim statuses transitioned across 6 distinct states (Submitted, Under Review, Recommended, Approved, Rejected, Settled). Scattered `if/else` checks across controllers created unreachable states and validation bugs.',
    whatIDiscovered: 'Modeling transitions as an explicit State Machine with strict `(CurrentState, Event) -> NextState` rules guarantees that invalid transitions (e.g. going directly from Draft to Settled) are rejected deterministically at the domain layer.',
    appliedIn: 'Insurance Policy & Claim Management System',
    date: '2026'
  },
  {
    id: 'dto-boundary-validation',
    topic: 'Strict DTO Validation at Controller Boundaries',
    category: 'Backend',
    whyItMattered: 'Allowing JPA entities to be exposed directly to request bodies leads to mass-assignment security vulnerabilities and coupling between API contracts and schema.',
    whatIDiscovered: 'Using strict DTO records with Bean Validation (`@NotNull`, `@Size`, custom business validators) at controller entry points ensures invalid inputs are rejected with standardized RFC 7807 error responses before touching service business logic.',
    appliedIn: 'Insurance & ASP.NET Core APIs',
    date: '2025'
  },
  {
    id: 'rxjs-realtime-streams',
    topic: 'RxJS BehaviorSubjects for Reactive Client State',
    category: 'Frontend',
    whyItMattered: 'Polling APIs every few seconds creates unnecessary HTTP overhead and causes inconsistent UI state across sibling components.',
    whatIDiscovered: 'Centralizing WebSocket/event feeds into RxJS `BehaviorSubject` streams with operators like `distinctUntilChanged()`, `debounceTime()`, and `shareReplay(1)` allows multiple subscribers to render live updates without re-fetching.',
    appliedIn: 'Disaster Response Coordinator UI',
    date: '2025'
  },
  {
    id: 'canvas-mobile-perf',
    topic: 'Canvas Pixel Ratio & Data Density on Mobile',
    category: 'Frontend',
    whyItMattered: 'Rendering 1,000+ data points on Chart.js canvas caused noticeable UI lag and battery drain on mobile devices.',
    whatIDiscovered: 'Downsampling dataset points using LTTB (Largest-Triangle-Three-Buckets) algorithms and adjusting device pixel ratio to capped thresholds keeps canvas animations smooth at 60fps on mobile without sacrificing trend accuracy.',
    appliedIn: 'Disaster Response UI',
    date: '2025'
  }
];
