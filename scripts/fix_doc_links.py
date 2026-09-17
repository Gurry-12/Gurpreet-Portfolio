import os
import re

docs_dirs = [
    r'e:\Ddrive\github\gurpreet-portfolio\docs\src\content\docs',
    r'e:\Ddrive\05_Learning\Swabhav\Documentation\src\content\docs'
]

prefixes = [
    'roadmap', 'modules', 'notes', 'reference', 'getting-started',
    'learning-path', 'progress', 'resources', 'speaking', 'pronunciation',
    'vocabulary', 'grammar', 'professional', 'practice'
]

for docs_dir in docs_dirs:
    if not os.path.exists(docs_dir):
        continue
    stats = {'matches': 0, 'files': 0}

    for root, dirs, files in os.walk(docs_dir):
        for f in files:
            if f.endswith(('.md', '.mdx')):
                path = os.path.join(root, f)
                with open(path, 'r', encoding='utf-8') as fp:
                    content = fp.read()
                
                def replace_md_link(match):
                    target = match.group(2)
                    if target.startswith('/docs/'):
                        return match.group(0)
                    for p in prefixes:
                        if target == f'/{p}' or target.startswith(f'/{p}/') or target.startswith(f'/{p}#'):
                            stats['matches'] += 1
                            return f'[{match.group(1)}](/docs{target})'
                    return match.group(0)

                def replace_href(match):
                    target = match.group(1)
                    if target.startswith('/docs/'):
                        return match.group(0)
                    for p in prefixes:
                        if target == f'/{p}' or target.startswith(f'/{p}/') or target.startswith(f'/{p}#'):
                            stats['matches'] += 1
                            return f'href="/docs{target}"'
                    return match.group(0)

                new_content = re.sub(r'\[([^\]]+)\]\((/[^)]+)\)', replace_md_link, content)
                new_content = re.sub(r'href="(/[^"]+)"', replace_href, new_content)
                
                if new_content != content:
                    stats['files'] += 1
                    with open(path, 'w', encoding='utf-8') as fp:
                        fp.write(new_content)

    print(f"[{docs_dir}] Total links updated: {stats['matches']} across {stats['files']} files.")
