import re

with open("generate_pdf_16x9.py", "r") as f:
    text = f.read()

text = re.sub(
    r'<div class="page"(.*?)>\s*<div class="pos-abs inset-0"><img src="(.*?)" class="img-cover"></div>',
    r'<div class="page"\1 style="background-image: url(\'\2\'); background-size: cover; background-position: center;">',
    text
)

text = re.sub(
    r'<div style="position:relative; border-radius: 20px; overflow:hidden; border: 1px solid var\(--c-border\);">\s*<img src="(.*?)" class="img-cover pos-abs inset-0">',
    r'<div style="position:relative; border-radius: 20px; overflow:hidden; border: 1px solid var(--c-border); background-image: url(\'\1\'); background-size: cover; background-position: center;">',
    text
)

with open("generate_pdf_16x9.py", "w") as f:
    f.write(text)

print("Images fixed!")
