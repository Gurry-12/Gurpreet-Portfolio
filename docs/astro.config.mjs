// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://gurpreetdev.netlify.app',
	base: '/docs',
	integrations: [
		starlight({
			title: 'Engineering & English Knowledge Base',
			description: 'Comprehensive developer roadmap, deep architectural notes, authoritative reading resources, and professional workplace English.',
			social: {
				github: 'https://github.com/Gurry-12'
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: '🚀 Navigation & Core Resources',
					items: [
						{ label: '← Back to Portfolio', link: 'https://gurpreetdev.netlify.app/' },
						{ label: 'Platform Home', slug: 'index' },
						{ label: '📚 In-Depth Reading Library', slug: 'resources/in-depth-reading-library' },
						{ label: 'Roadmap Overview', slug: 'roadmap' },
						{ label: 'Prerequisites & Flow', slug: 'learning-path/prerequisites' },
						{ label: 'Dependency Graph (DAG)', slug: 'learning-path/dependency-map' },
						{ label: 'Recommended Study Order', slug: 'learning-path/recommended-order' },
						{ label: 'Progress Tracker', slug: 'progress' },
					],
				},
				{
					label: '🗺️ Curriculum Roadmap (10 Phases)',
					items: [
						{ label: 'Phase 1: Foundation', slug: 'roadmap/phase-1-foundation' },
						{ label: 'Phase 2: Core Programming', slug: 'roadmap/phase-2-core-programming' },
						{ label: 'Phase 3: Data & Databases', slug: 'roadmap/phase-3-data-databases' },
						{ label: 'Phase 4: Web Fundamentals', slug: 'roadmap/phase-4-web-fundamentals' },
						{ label: 'Phase 5: Persistence & Adv Java', slug: 'roadmap/phase-5-persistence-advanced-java' },
						{ label: 'Phase 6: Spring Ecosystem', slug: 'roadmap/phase-6-spring-ecosystem' },
						{ label: 'Phase 7: Frontend Engineering', slug: 'roadmap/phase-7-frontend-engineering' },
						{ label: 'Phase 8: Architecture & Ops', slug: 'roadmap/phase-8-architecture-ops' },
						{ label: 'Phase 9: Microservices & Mobile', slug: 'roadmap/phase-9-microservices-mobile' },
						{ label: 'Phase 10: Professional & AI', slug: 'roadmap/phase-10-professional-ai' },
					],
				},
				{
					label: '📦 Curriculum Modules (28 Modules)',
					autogenerate: { directory: 'modules' },
				},
				{
					label: '🧠 Engineering Notes & Deep Dives',
					items: [
						{
							label: 'Core Java & JVM Internals',
							items: [
								{ label: 'JVM Architecture & Memory Model', slug: 'notes/java/jvm-architecture-memory-model' },
								{ label: 'HashMap Internals & Hashing', slug: 'notes/java/hashmap-internals-hashing' },
								{ label: 'Java Concurrency & Memory Model', slug: 'notes/java/concurrency-and-memory-model' },
								{ label: 'Generics & Type Erasure', slug: 'notes/java/generics-and-type-erasure' },
							],
						},
						{
							label: 'Spring Framework & Microservices',
							items: [
								{ label: 'Spring IoC & Bean Lifecycle', slug: 'notes/spring/spring-ioc-bean-lifecycle' },
								{ label: 'Spring Boot Auto-Configuration', slug: 'notes/spring/spring-boot-autoconfiguration' },
								{ label: 'Spring Transaction Management', slug: 'notes/spring/spring-transaction-management' },
							],
						},
						{
							label: 'Databases & Storage Engines',
							items: [
								{ label: 'MySQL InnoDB & B-Tree Indexing', slug: 'notes/databases/database-indexing-btree' },
								{ label: 'ACID Isolation Levels & MVCC', slug: 'notes/databases/acid-and-isolation-levels' },
								{ label: 'JPA / Hibernate N+1 Problem', slug: 'notes/databases/jpa-hibernate-n-plus-one' },
							],
						},
						{
							label: 'Web, Frontend & DevOps',
							items: [
								{ label: 'REST API & HTTP Internals', slug: 'notes/architecture/rest-api-http-internals' },
								{ label: 'JavaScript Event Loop & Async', slug: 'notes/frontend/javascript-event-loop-async' },
								{ label: 'React Fiber Reconciler', slug: 'notes/frontend/react-fiber-reconciliation' },
								{ label: 'Docker Container Internals', slug: 'notes/devops/docker-container-internals' },
							],
						},
					],
				},
				{
					label: '⚖️ Architectural Decision Guides',
					items: [
						{ label: 'Database: SQL vs NoSQL', slug: 'reference/decision-guides/sql-vs-nosql-database-selection' },
						{ label: 'Communication: REST vs Event-Driven', slug: 'reference/decision-guides/rest-vs-event-driven-messaging' },
						{ label: 'Map: HashMap vs Concurrent vs Tree', slug: 'reference/decision-guides/hashmap-vs-treemap-vs-concurrenthashmap' },
						{ label: 'Processing: Sync vs Async', slug: 'reference/decision-guides/synchronous-vs-asynchronous-processing' },
					],
				},
				{
					label: '🗣️ Professional English Academy',
					items: [
						{
							label: 'Getting Started & Foundations',
							items: [
								{ label: 'Assessment & 90-Day Plan', slug: 'getting-started/assessment-learning-plan' },
								{ label: 'How to Learn English', slug: 'getting-started/how-to-learn-english' },
								{ label: 'Level Assessment & Goals', slug: 'getting-started/level-assessment' },
								{ label: 'Basic Sentence Structure', slug: 'foundation/basic-sentence-structure' },
								{ label: 'Parts of Speech in Context', slug: 'foundation/parts-of-speech' },
								{ label: 'Everyday Expressions & Flow', slug: 'foundation/everyday-expressions' },
							],
						},
						{
							label: 'Grammar Masterclass',
							items: [
								{ label: 'Tenses Masterclass', slug: 'grammar/tenses-masterclass' },
								{ label: 'Sentence Structure & Clauses', slug: 'grammar/sentence-structure-and-clauses' },
								{ label: 'Articles & Determiners', slug: 'grammar/articles-and-determiners' },
								{ label: 'Prepositions Mastery', slug: 'grammar/prepositions-mastery' },
								{ label: 'Modals & Politeness', slug: 'grammar/modals-and-politeness' },
								{ label: 'Conditionals Mastery', slug: 'grammar/conditionals-mastery' },
								{ label: 'Active & Passive Voice', slug: 'grammar/active-and-passive-voice' },
								{ label: 'Direct & Indirect Speech', slug: 'grammar/direct-and-indirect-speech' },
								{ label: 'Question Formation & Intonation', slug: 'grammar/question-formation' },
							],
						},
						{
							label: 'Vocabulary & Pronunciation',
							items: [
								{ label: 'Phrasal Verbs in Context', slug: 'vocabulary/phrasal-verbs-in-context' },
								{ label: 'High-Impact Collocations', slug: 'vocabulary/high-impact-collocations' },
								{ label: 'Commonly Confused Words', slug: 'vocabulary/commonly-confused-words' },
								{ label: 'Professional & Academic Lexicon', slug: 'vocabulary/professional-and-academic-vocabulary' },
								{ label: 'Idioms & Natural Phrases', slug: 'vocabulary/idioms-and-natural-phrases' },
								{ label: 'Sounds & IPA Guide', slug: 'pronunciation/sounds-and-ipa-guide' },
								{ label: 'Syllable Stress & Rhythm', slug: 'pronunciation/syllable-stress-and-rhythm' },
								{ label: 'Schwa & Vowel Reduction', slug: 'pronunciation/schwa-and-vowel-reduction' },
								{ label: 'Connected Speech & Linking', slug: 'pronunciation/connected-speech-and-linking' },
							],
						},
						{
							label: 'Workplace & Deliberate Practice',
							items: [
								{ label: 'Thinking in English', slug: 'speaking/thinking-in-english' },
								{ label: 'Fluency & Signposting', slug: 'speaking/fluency-and-signposting' },
								{ label: 'Conversations & Small Talk', slug: 'speaking/conversations-and-small-talk' },
								{ label: 'Opinions & Professional Disagreement', slug: 'speaking/opinions-and-disagreement' },
								{ label: 'Standups & Status Updates', slug: 'professional/standups-and-status-updates' },
								{ label: 'Email & Incident Writing', slug: 'professional/email-and-incident-writing' },
								{ label: 'Meetings & Technical Discussions', slug: 'professional/meetings-and-discussions' },
								{ label: 'Interview English (STAR Method)', slug: 'professional/interview-english-star-method' },
								{ label: 'Constructive Feedback & Reviews', slug: 'professional/constructive-feedback' },
								{ label: 'Indian English L1 Transfer Corrections', slug: 'common-errors/indian-english-l1-transfer' },
								{ label: 'Redundancy & Wordiness', slug: 'common-errors/redundancy-and-wordiness' },
								{ label: 'Formal vs Natural English', slug: 'common-errors/formal-vs-natural-english' },
								{ label: 'Daily 30-Day Routine', slug: 'practice/daily-30-day-routine' },
								{ label: 'Error Log System', slug: 'practice/error-log-system' },
								{ label: 'Review & Long-Term Retention', slug: 'practice/review-and-retention' },
							],
						},
					],
				},
			],
		}),
	],
});
