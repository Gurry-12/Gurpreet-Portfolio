import os
import shutil

src_dir = r"E:\Ddrive\05_Learning\Swabhav\Documentation"
dst_dir = r"E:\Ddrive\github\gurpreet-portfolio\docs"

print(f"Copying complete Knowledge Base from {src_dir} to {dst_dir}...")

# Exclude node_modules, .astro, dist, .git
def ignore_patterns(path, names):
    ignored = set()
    for name in names:
        if name in ['node_modules', '.astro', 'dist', '.git', '.system_generated']:
            ignored.add(name)
    return ignored

if os.path.exists(dst_dir):
    shutil.rmtree(dst_dir)

shutil.copytree(src_dir, dst_dir, ignore=ignore_patterns)

print(f"Successfully copied entire Documentation project to {dst_dir}!")
