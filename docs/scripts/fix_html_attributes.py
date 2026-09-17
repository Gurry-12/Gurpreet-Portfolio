import os

for root, dirs, files in os.walk('src/content/docs'):
    for file in files:
        if file.endswith('.mdx') or file.endswith('.md'):
            p = os.path.join(root, file)
            with open(p, 'r', encoding='utf-8') as f:
                content = f.read()
            
            content = content.replace('"greater than ', '">')
            content = content.replace('"less than ', '"<')
            
            with open(p, 'w', encoding='utf-8') as f:
                f.write(content)

print("Fixed HTML attribute endings!")
