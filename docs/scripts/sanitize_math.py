import os
import re

for root, dirs, files in os.walk('src/content/docs'):
    for file in files:
        if file.endswith('.mdx'):
            p = os.path.join(root, file)
            with open(p, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace $<2\%$ or $< 2%$ or $>98\%$ with plain text
            content = content.replace('$<2\\%$', 'less than 2%')
            content = content.replace('$<2%$', 'less than 2%')
            content = content.replace('$< 2%', 'less than 2%')
            content = content.replace('$<2%', 'less than 2%')
            content = content.replace('$>98\\%$', 'more than 98%')
            content = content.replace('$>98%$', 'more than 98%')
            content = content.replace('$> 98%', 'more than 98%')
            content = content.replace('$>98%', 'more than 98%')
            content = content.replace('$N \times \text{-Xss}$', 'N * (-Xss)')
            content = content.replace('$N \\times \\text{-Xss}$', 'N * (-Xss)')
            content = content.replace('$N \times \text{-Xss}', 'N * (-Xss)')
            
            # Also look for any $< or $> or <number
            content = re.sub(r'<(\d+)', r'less than \1', content)
            content = re.sub(r'>(\d+)', r'greater than \1', content)
            
            with open(p, 'w', encoding='utf-8') as f:
                f.write(content)

print("Sanitized mathematical comparison operators in MDX files!")
