import os

STARLIGHT_TAGS = [
    "CardGrid", "Card", "Badge", "Aside", "Tabs", "TabItem", "Icon", 
    "FileTree", "LinkCard", "LinkButton", "Steps", "Code"
]

for root, dirs, files in os.walk('src/content/docs'):
    for file in files:
        if file.endswith('.mdx'):
            p = os.path.join(root, file)
            with open(p, 'r', encoding='utf-8') as f:
                content = f.read()
            
            for tag in STARLIGHT_TAGS:
                content = content.replace(f"`<{tag}>`", f"<{tag}>")
                content = content.replace(f"`<{tag} `", f"<{tag} ")
                content = content.replace(f"`<{tag}`", f"<{tag}")
                content = content.replace(f"`</{tag}>`", f"</{tag}>")
                content = content.replace(f"`</{tag}`", f"</{tag}")
            
            with open(p, 'w', encoding='utf-8') as f:
                f.write(content)

print("Cleaned backticks from all Starlight tags!")
