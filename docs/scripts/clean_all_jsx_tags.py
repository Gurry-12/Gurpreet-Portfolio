import os
import re

for root, dirs, files in os.walk('src/content/docs'):
    for file in files:
        if file.endswith('.mdx'):
            p = os.path.join(root, file)
            with open(p, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove backticks around any JSX tag like `<CardGrid stagger>` or `</CardGrid>` or `<Steps>`
            content = re.sub(r'`(<(?:/?[A-Z][a-zA-Z0-9]*(?:\s+[^`>]*)?|/?[a-z]+(?:\s+[^`>]*)?)>)`', r'\1', content)
            
            with open(p, 'w', encoding='utf-8') as f:
                f.write(content)

print("Regex removed all backticks around JSX tags!")
