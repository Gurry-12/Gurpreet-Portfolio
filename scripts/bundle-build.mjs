import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const angularDist = path.join(rootDir, 'dist', 'gurpreet-portfolio', 'browser');
const astroDist = path.join(rootDir, 'docs', 'dist');
const targetDocs = path.join(angularDist, 'docs');
const targetEnglish = path.join(angularDist, 'english');

console.log('--- Bundling Multi-App Artifacts for Netlify ---');

if (!fs.existsSync(angularDist)) {
  console.error(`Error: Angular build output not found at ${angularDist}`);
  process.exit(1);
}

if (!fs.existsSync(astroDist)) {
  console.error(`Error: Astro documentation build output not found at ${astroDist}`);
  process.exit(1);
}

// 1. Copy docs/dist to dist/gurpreet-portfolio/browser/docs
console.log(`Copying Astro docs build to ${targetDocs}...`);
fs.cpSync(astroDist, targetDocs, { recursive: true });

// 2. Also copy to dist/gurpreet-portfolio/browser/english so /english/ URLs also work seamlessly!
console.log(`Creating /english/ compatibility mirror at ${targetEnglish}...`);
fs.cpSync(astroDist, targetEnglish, { recursive: true });

// 3. Ensure _redirects file is placed in publish root
const redirectsContent = `# Netlify Redirects for Dual-App Deployment
# 1. Aliases & Redirects for Documentation Portal
/docs  /docs/  301!
/docs/*  /docs/:splat  200
/english  /docs/  301!
/english/*  /docs/:splat  200
/documentation  /docs/  301!
/documentation/*  /docs/:splat  200
/kb  /docs/  301!
/kb/*  /docs/:splat  200
/knowledge-base  /docs/  301!
/knowledge-base/*  /docs/:splat  200
/roadmap/*  /docs/roadmap/:splat  301
/modules/*  /docs/modules/:splat  301
/notes/*  /docs/notes/:splat  301
/reference/*  /docs/reference/:splat  301
/getting-started/*  /docs/getting-started/:splat  301
/learning-path/*  /docs/learning-path/:splat  301
/progress/*  /docs/progress/:splat  301
/resources/*  /docs/resources/:splat  301
/speaking/*  /docs/speaking/:splat  301
/pronunciation/*  /docs/pronunciation/:splat  301
/vocabulary/*  /docs/vocabulary/:splat  301
/grammar/*  /docs/grammar/:splat  301
/professional/*  /docs/professional/:splat  301
/practice/*  /docs/practice/:splat  301

# 2. Angular SPA Fallback for all other routes
/*  /index.html  200
`;

const redirectsPath = path.join(angularDist, '_redirects');
fs.writeFileSync(redirectsPath, redirectsContent, 'utf-8');
console.log(`Wrote _redirects file to ${redirectsPath}`);

console.log('✓ Unified build bundling completed successfully!');
