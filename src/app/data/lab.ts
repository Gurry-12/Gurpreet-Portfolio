export interface LabExperiment {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Reactive UI' | 'Backend Sandbox' | 'Systems';
  description: string;
  learnings: string;
  tech: string[];
  status: 'Completed' | 'Research' | 'Prototype';
  github?: string;
  live?: string;
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'disaster-severity-ml',
    title: 'Disaster Severity & Impact Predictor',
    category: 'Machine Learning',
    description: 'Trained classification and regression models using Python (Scikit-Learn, Pandas) to forecast incident response priority and relief resource requirements based on historical disaster metrics.',
    learnings: 'Discovered that feature scaling and handling class imbalances (SMOTE) had 3x more impact on recall for high-severity events than tuning hyper-parameters.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Flask'],
    status: 'Completed',
    github: 'https://github.com/Gurry-12'
  },
  {
    id: 'reactive-stream-simulator',
    title: 'Real-time Event Stream Simulator',
    category: 'Reactive UI',
    description: 'Built a lightweight client-side event bus simulating WebSocket packet drops, reconnection jitter, and state reconciliation across multiple UI dashboards.',
    learnings: 'RxJS `retryWhen` with exponential backoff and custom jitter prevents thundering-herd issues when simulating reconnecting client sockets.',
    tech: ['Angular 18', 'TypeScript', 'RxJS', 'Signals'],
    status: 'Completed',
    github: 'https://github.com/Gurry-12/Disaster-Ready-UI'
  },
  {
    id: 'dynamic-qr-payment-sandbox',
    title: 'Dynamic QR Payment & Receipt Engine',
    category: 'Backend Sandbox',
    description: 'Simulated UPI/QR payment generation with cryptographic payload signing, webhook verification, and automated email receipt dispatch.',
    learnings: 'Simulating webhook retries taught me to always verify incoming payment signatures before mutating invoice status in the database.',
    tech: ['Java', 'Spring Boot', 'Crypto', 'REST'],
    status: 'Completed',
    github: 'https://github.com/Gurry-12/insurance-policy-claim-capstone-project'
  },
  {
    id: 'concurrency-benchmark-lab',
    title: 'Row Lock vs Optimistic Concurrency Benchmark',
    category: 'Systems',
    description: 'Benchmarked throughput and deadlock frequency between optimistic versioning and pessimistic `SELECT FOR UPDATE` under 50+ concurrent requests.',
    learnings: 'Under 80%+ write contention on a single row, pessimistic locks produce lower latency variance than optimistic retry loops which thrash under contention.',
    tech: ['C#', 'SQL Server', 'EF Core', 'JMeter'],
    status: 'Completed',
    github: 'https://github.com/Gurry-12/OnlineBookManagementSystem'
  }
];
