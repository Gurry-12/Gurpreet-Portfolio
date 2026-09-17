import os
import re

def fix_frontmatters():
    for root, dirs, files in os.walk('src/content/docs'):
        for file in files:
            if file.endswith('.mdx') or file.endswith('.md'):
                p = os.path.join(root, file)
                with open(p, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check frontmatter
                if content.startswith('---'):
                    parts = content.split('---', 2)
                    if len(parts) >= 3:
                        fm = parts[1]
                        body = parts[2]
                        
                        lines = fm.split('\n')
                        new_lines = []
                        for line in lines:
                            if line.startswith('title:') and not line.startswith('title: "') and not line.startswith("title: '"):
                                val = line[6:].strip()
                                # escape internal quotes
                                val = val.replace('"', '\\"')
                                new_lines.append(f'title: "{val}"')
                            elif line.startswith('description:') and not line.startswith('description: "') and not line.startswith("description: '"):
                                val = line[12:].strip()
                                val = val.replace('"', '\\"')
                                new_lines.append(f'description: "{val}"')
                            else:
                                new_lines.append(line)
                        
                        new_fm = '\n'.join(new_lines)
                        new_content = f"---{new_fm}---{body}"
                        with open(p, 'w', encoding='utf-8') as f:
                            f.write(new_content)

fix_frontmatters()
print("Fixed all YAML frontmatters with quoted strings!")
