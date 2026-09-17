import os
import re
import json

docs_dir = "src/content/docs"

# 1. Collect all valid routes from filesystem
valid_routes = set()
for root, dirs, files in os.walk(docs_dir):
    for f in files:
        if f.endswith('.mdx') or f.endswith('.md'):
            rel = os.path.relpath(os.path.join(root, f), docs_dir)
            # Normalize to web route
            route = rel.replace('\\', '/')
            if route.endswith('/index.mdx') or route.endswith('/index.md'):
                route = route[:-9]
            elif route == 'index.mdx' or route == 'index.md':
                route = ''
            else:
                route = os.path.splitext(route)[0]
            
            # Formats: '', 'roadmap', 'roadmap/phase-1-foundation', etc.
            valid_routes.add('/' + route if route else '/')
            if route:
                valid_routes.add('/' + route + '/')

print(f"Total valid routes found: {len(valid_routes)}")

# 2. Check all sidebar entries in astro.config.mjs
with open("astro.config.mjs", "r", encoding="utf-8") as f:
    config_content = f.read()

sidebar_slugs = re.findall(r"slug:\s*['\"]([^'\"]+)['\"]", config_content)
missing_sidebar_slugs = []
for slug in sidebar_slugs:
    clean_slug = slug.strip('/')
    expected_path_1 = os.path.join(docs_dir, clean_slug + ".mdx")
    expected_path_2 = os.path.join(docs_dir, clean_slug + ".md")
    expected_path_3 = os.path.join(docs_dir, clean_slug, "index.mdx")
    expected_path_4 = os.path.join(docs_dir, clean_slug, "index.md")
    
    if clean_slug == "index":
        continue
    
    if not (os.path.exists(expected_path_1) or os.path.exists(expected_path_2) or os.path.exists(expected_path_3) or os.path.exists(expected_path_4)):
        missing_sidebar_slugs.append(slug)

print(f"\nMissing sidebar slugs ({len(missing_sidebar_slugs)}):")
for s in missing_sidebar_slugs:
    print(f"  - {s}")

# 3. Check all markdown links in all doc files
broken_links = []
for root, dirs, files in os.walk(docs_dir):
    for f in files:
        if f.endswith('.mdx') or f.endswith('.md'):
            file_path = os.path.join(root, f)
            with open(file_path, 'r', encoding='utf-8') as file_obj:
                content = file_obj.read()
            
            # Find markdown links [text](/some/path)
            md_links = re.findall(r'\[(?:[^\]]+)\]\((/[^\)]+)\)', content)
            # Find href links href="/some/path"
            href_links = re.findall(r'href=["\'](/[^"\']+)["\']', content)
            # Find link: /some/path
            yaml_links = re.findall(r'link:\s*(/[^\s]+)', content)
            
            all_links = md_links + href_links + yaml_links
            for link in all_links:
                # remove hash anchors and query params
                clean_link = link.split('#')[0].split('?')[0]
                if not clean_link:
                    continue
                # Normalize trailing slash
                if clean_link not in valid_routes and (clean_link + '/') not in valid_routes and clean_link.rstrip('/') not in valid_routes:
                    broken_links.append((file_path, link, clean_link))

print(f"\nBroken in-page links ({len(broken_links)}):")
for src, raw, clean in broken_links:
    print(f"  In {src}: {raw} (resolved to {clean})")
