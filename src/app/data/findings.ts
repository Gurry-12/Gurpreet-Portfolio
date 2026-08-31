export interface Finding {
  id: string;
  title: string;
  category: string;
  summary: string;
  body: string;
  date: string;
  tags: string[];
}

export const FINDINGS: Finding[] = [
  {
    id: 'state-machines-in-practice',
    title: 'Why State Machines Beat if/else Chains in Complex Domain Logic',
    category: 'Architecture',
    summary: 'How replacing scattered status checks with a transition matrix eliminated 100% of illegal state bypass bugs.',
    body: 'In insurance claims, a claim cannot jump from "Draft" directly to "Approved". When logic is written with boolean flags like `isApproved && !isRejected`, edge cases proliferate as new roles are added. Creating a declarative transition map `Map<ClaimStatus, Set<ClaimEvent>>` guarantees that every state change is strictly governed by business rules and audit logged.',
    date: 'Feb 2026',
    tags: ['Spring Boot', 'Domain Modeling', 'Clean Code']
  },
  {
    id: 'idempotent-payment-simulation',
    title: 'Preventing Double-Submits in Payment & Checkout APIs',
    category: 'Backend',
    summary: 'Using client-generated idempotency keys and database unique constraints to guarantee exactly-once transaction processing.',
    body: 'When simulating premium payments over simulated network latency, impatient users click the pay button multiple times. Relying solely on UI button disabling fails on flaky connections. Attaching an `Idempotency-Key` header stored in Redis/DB with an expiration window ensures repeat requests return the original receipt instead of creating duplicate payment records.',
    date: 'Jan 2026',
    tags: ['APIs', 'Idempotency', 'Transactions']
  },
  {
    id: 'repository-pattern-testing',
    title: 'Why Repository Abstraction Still Matters with Modern ORMs',
    category: 'Database',
    summary: 'Decoupling EF Core DbContext / JPA Repositories to enable sub-second unit testing without touching disk.',
    body: 'Directly injecting DbContext into controllers makes writing unit tests painful, as you need in-memory SQLite or real databases. Wrapping query boundaries inside repository interfaces allows mock implementations during testing and isolates database-specific quirks (like SQL Server pagination hints) away from core business workflows.',
    date: 'Dec 2025',
    tags: ['ASP.NET Core', 'Testing', 'Architecture']
  },
  {
    id: 'jwt-refresh-rotation',
    title: 'Balancing Stateless Auth with Instant Token Invalidation',
    category: 'Security',
    summary: 'How refresh token rotation provides security against stolen tokens without introducing session server state.',
    body: 'Pure stateless JWT has a flaw: you cannot revoke a stolen token until it expires. By setting access token lifetime to 15 minutes and rotating the refresh token upon every renewal (invalidating old refresh tokens in a lightweight store), we achieve near-instant security revocation with 99% stateless API request handling.',
    date: 'Nov 2025',
    tags: ['Security', 'JWT', 'Spring Security']
  }
];
