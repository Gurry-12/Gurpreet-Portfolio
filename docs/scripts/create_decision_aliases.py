import os

# Create decision aliases
decisions_map = {
    "src/content/docs/decisions/database-selection-sql-vs-nosql.mdx": "src/content/docs/reference/decision-guides/sql-vs-nosql-database-selection.mdx",
    "src/content/docs/decisions/communication-rest-vs-kafka.mdx": "src/content/docs/reference/decision-guides/rest-vs-event-driven-messaging.mdx",
    "src/content/docs/decisions/map-selection-hashmap-concurrent-treemap.mdx": "src/content/docs/reference/decision-guides/hashmap-vs-treemap-vs-concurrenthashmap.mdx",
    "src/content/docs/decisions/state-management-context-redux-zustand.mdx": "src/content/docs/reference/decision-guides/synchronous-vs-asynchronous-processing.mdx"
}

for dest, src in decisions_map.items():
    if os.path.exists(src):
        with open(src, 'r', encoding='utf-8') as f:
            content = f.read()
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with open(dest, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Created alias: {dest}")

