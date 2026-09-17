import os
import re

for root, dirs, files in os.walk('src/content/docs'):
    for file in files:
        if file.endswith('.mdx') or file.endswith('.md'):
            p = os.path.join(root, file)
            with open(p, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace LaTeX \text{...} or \times or $...$ with clean plain text
            content = re.sub(r'\\text\{\s*([^}]+)\s*\}', r'\1', content)
            content = re.sub(r'\$\s*([^\$]+)\s*\$', r'\1', content)
            
            with open(p, 'w', encoding='utf-8') as f:
                f.write(content)

print("Stripped all raw LaTeX formulas and braces across all MDX files!")
