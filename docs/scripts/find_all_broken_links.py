import os
import re

docs_dir = "src/content/docs"

all_files = {}
for root, dirs, files in os.walk(docs_dir):
    for f in files:
        if f.endswith('.mdx') or f.endswith('.md'):
            rel = os.path.relpath(os.path.join(root, f), docs_dir).replace('\\', '/')
            slug = os.path.splitext(rel)[0]
            if slug.endswith('/index'):
                slug = slug[:-6]
            elif slug == 'index':
                slug = ''
            all_files[slug] = os.path.join(root, f)

print(f"Total valid slugs: {len(all_files)}")

# Check every single file for broken internal links
broken = []
for slug, path in all_files.items():
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Markdown links: [text](/path)
    for match in re.finditer(r'\[([^\]]+)\]\((/[^\)]+)\)', content):
        text, url = match.groups()
        clean = url.split('#')[0].split('?')[0].strip('/')
        if clean not in all_files:
            broken.append((path, url, "md", match.group(0)))
            
    # 2. HTML hrefs: href="/path"
    for match in re.finditer(r'href=["\'](/[^"\']+)["\']', content):
        url = match.group(1)
        clean = url.split('#')[0].split('?')[0].strip('/')
        if clean not in all_files:
            broken.append((path, url, "href", match.group(0)))
            
    # 3. YAML links: link: /path
    for match in re.finditer(r'link:\s*["\']?(/[^"\s\']+)["\']?', content):
        url = match.group(1)
        clean = url.split('#')[0].split('?')[0].strip('/')
        if clean not in all_files:
            broken.append((path, url, "yaml", match.group(0)))

print(f"Total broken links found: {len(broken)}")
for p, u, t, orig in broken:
    print(f"File: {p}\n  Target: {u}\n  Snippet: {orig}\n")
