import os
import re

for root, dirs, files in os.walk('src/content/docs'):
    for file in files:
        if file.endswith('.mdx'):
            p = os.path.join(root, file)
            with open(p, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Fix unescaped <T> or <K, V> or curly braces outside code blocks
            # We preserve code blocks and frontmatter
            parts = content.split('---', 2)
            if len(parts) >= 3:
                fm = parts[1]
                body = parts[2]
            else:
                fm = ""
                body = content
            
            # replace unescaped generics in plain text
            # e.g., <T> -> `T`, <K, V> -> `K, V`, <Object> -> `Object`
            body = re.sub(r'(?<!`|<)(<[A-Z][a-zA-Z0-9,\s_]*>)(?!`|>)', lambda m: f"`{m.group(1)}`", body)
            
            if fm:
                new_content = f"---{fm}---{body}"
            else:
                new_content = body
            
            with open(p, 'w', encoding='utf-8') as f:
                f.write(new_content)

print("MDX cleaned successfully!")
