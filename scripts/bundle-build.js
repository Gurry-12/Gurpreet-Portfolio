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
# 1. Allow Astro Starlight docs & assets to be served statically
/docs/*  /docs/:splat  200
/english/*  /english/:splat  200

# 2. Angular SPA Fallback for all other routes
/*  /index.html  200
`;

const redirectsPath = path.join(angularDist, '_redirects');
fs.writeFileSync(redirectsPath, redirectsContent, 'utf-8');
console.log(`Wrote _redirects file to ${redirectsPath}`);

console.log('✓ Unified build bundling completed successfully!');
