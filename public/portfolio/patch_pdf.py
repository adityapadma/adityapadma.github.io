import re

with open('generate_pdf_16x9.py', 'r') as f:
    content = f.read()

content = re.sub(
    r'<div class="pos-abs inset-0"><img src="([^"]+)" class="img-cover"></div>',
    r'<div class="pos-abs inset-0" style="background: url(\'\1\') center/cover;"></div>',
    content
)

content = re.sub(
    r'<img src="([^"]+)" class="img-cover pos-abs inset-0">',
    r'<div class="pos-abs inset-0" style="background: url(\'\1\') center/cover;"></div>',
    content
)

with open('generate_pdf_16x9.py', 'w') as f:
    f.write(content)
