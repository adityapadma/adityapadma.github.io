def get_html():
    return """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Aditya Padmagirwar - Portfolio PDF (16x9)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet">
<script src="https://unpkg.com/@phosphor-icons/web"></script>
<style>
  :root {
    --c-terracotta: #C05621;
    --c-dark: #4A2311;
    --c-sand: #F7F4F0;
    --c-white: #FFFFFF;
    --c-charcoal: #1A1A1A;
    --c-mid: #64615D;
    --c-amber: #C59B27;
    --c-cyan: #0891B2;
    --c-border: #E8E3DC;
  }
  body {
    margin: 0; padding: 0; background: #ccc;
    font-family: 'Inter', sans-serif; color: var(--c-charcoal);
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  .page {
    width: 1920px;
    height: 1080px;
    background: var(--c-sand);
    margin: 40px auto; position: relative; box-sizing: border-box;
    page-break-after: always; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.2);
  }
  @media print {
    body { background: white; margin: 0; }
    .page { margin: 0; box-shadow: none; border-radius: 0; }
    @page { size: 1920px 1080px; margin: 0; }
  }
  .p-margin { padding: 80px; height: 100%; box-sizing: border-box; position: relative;}
  h1, h2, h3, h4, h5, p { margin: 0; }
  
  .pill {
    display: inline-block; padding: 8px 16px; border-radius: 999px;
    font-size: 16px; font-weight: 700; letter-spacing: 0.15em;
    text-transform: uppercase; line-height: 1;
  }
  .pill-terracotta { background: var(--c-terracotta); color: #fff; }
  .pill-amber { border: 2px solid var(--c-amber); color: var(--c-amber); }
  .pill-amber-fill { background: var(--c-amber); color: #fff; }
  .pill-gray { border: 2px solid #aaa; color: #888; }
  .pill-cyan { background: var(--c-cyan); color: #fff; }
  
  .pos-abs { position: absolute; }
  .inset-0 { top:0; left:0; right:0; bottom:0; }
  .z-10 { z-index: 10; }
  
  .ts-overlay { background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%); }
  
  .font-lora { font-family: 'Lora', serif; }
  .font-inter { font-family: 'Inter', sans-serif; }
  .font-manrope { font-family: 'Manrope', sans-serif; }
  
  .c-white { color: white; }
  .c-primary-dark { color: var(--c-dark); }
  .c-primary-warm { color: var(--c-terracotta); }
  .c-charcoal { color: var(--c-charcoal); }
  .c-mid { color: var(--c-mid); }
  .c-cyan { color: var(--c-cyan); }
  .c-amber { color: var(--c-amber); }
  
  .ts-meta-bar {
    position: absolute; bottom: 0; left: 0; width: 100%;
    background: rgba(0,0,0,0.8); padding: 30px 80px; box-sizing: border-box;
    display: flex; gap: 60px; color: rgba(255,255,255,0.75);
    font-size: 18px; letter-spacing: 0.1em; text-transform: uppercase;
  }
  .ts-meta-bar strong { color: white; }
  
  .section-headline { font-family: 'Lora', serif; font-size: 56px; color: var(--c-dark); font-weight: 500; line-height: 1.25; margin-top: 20px; margin-bottom: 30px; max-width: 800px; }
  .body-text { font-family: 'Inter', sans-serif; font-size: 24px; color: var(--c-charcoal); line-height: 1.6; margin-bottom: 24px; }
  .body-small { font-family: 'Inter', sans-serif; font-size: 18px; color: var(--c-charcoal); line-height: 1.6; }
  
  .pull-quote {
    border-left: 6px solid var(--c-terracotta); padding: 20px 30px;
    background: var(--c-white); border-radius: 0 12px 12px 0; margin: 40px 0; max-width: 700px;
  }
  .pull-quote p { font-family: 'Lora', serif; font-size: 32px; font-style: italic; color: var(--c-charcoal); line-height: 1.5; margin-bottom: 12px;}
  .pull-quote cite { font-size: 18px; color: var(--c-mid); font-style: normal; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
  
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; height: 100%; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; }
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
  
  .card-box { background: var(--c-white) center/cover no-repeat; border: 1px solid var(--c-border); border-radius: 16px; padding: 30px; overflow: hidden; }
</style>
</head>
<body>

<!-- P1 Cover -->
<div class="page">
  <div class="pos-abs inset-0" style="background: url('media/conference/IndiaHCI23_1.png') center/cover;"></div>
  <div class="pos-abs inset-0 ts-overlay"></div>
  <div class="p-margin z-10" style="display:flex; flex-direction:column; justify-content:space-between; width: 60%;">
    <div>
      <div class="font-inter c-white" style="font-size:24px; text-transform:uppercase; letter-spacing:0.15em; font-weight:500; margin-bottom: 20px; color: #ffb590;">
        HCI Researcher · Interaction Designer · IIIT Delhi
      </div>
      <div class="font-manrope c-white" style="font-size: 140px; font-weight: 800; line-height: 1.05; margin-bottom: 30px;">
        Aditya<br>Padmagirwar
      </div>
      <div class="font-lora c-white" style="font-size: 36px; font-style: italic; opacity: 0.85; max-width: 700px;">
        Designing where culture, the body, and technology meet.
      </div>
    </div>
    <div class="font-inter c-white" style="font-size:20px; text-transform:uppercase; letter-spacing:0.15em; opacity:0.7;">
      adityapadma.github.io · 2025
    </div>
  </div>
</div>

<!-- P2 About -->
<div class="page">
  <div class="grid-2">
    <div style="background: url('media/me.png') center/cover; position: relative; border-radius: 24px;">
    </div>
    <div style="display:flex; flex-direction:column; justify-content:center; padding: 40px 0;">
      <div class="pill pill-terracotta" style="margin-bottom: 30px; align-self:flex-start;">About</div>
      <div class="font-lora c-primary-dark" style="font-size:64px; line-height:1.2; font-weight:500; margin-bottom: 40px;">
        I design for how people remember, feel, and participate.
      </div>
      <div class="body-text">
        I'm Aditya Padmagirwar — a Computer Science and Social Science undergraduate at IIIT Delhi, and an Undergraduate Researcher at the Creative Interfaces Lab.
      </div>
      <div class="body-text">
        My work sits at the intersection of Tangible User Interfaces, Immersive Media, and South Asian cultural contexts. I build systems that don't just display heritage — they let people perform it.
      </div>
      <div class="body-text" style="margin-bottom: 60px;">
        I'm driven by a simple question: what does it feel like to interact with something that knows who you are and where you come from?
      </div>
      
      <div class="font-inter c-mid" style="font-size:20px; font-weight:600; text-transform:uppercase; letter-spacing:0.1em; margin-bottom: 20px;">Research Interests</div>
      <div style="display:flex; flex-wrap:wrap; gap:16px;">
        <span style="border: 2px solid var(--c-border); padding: 12px 20px; border-radius: 60px; font-size: 18px; text-transform:uppercase; letter-spacing:0.05em; color:var(--c-charcoal); background:#fff; font-weight: 500;">Human-Computer Interaction</span>
        <span style="border: 2px solid var(--c-border); padding: 12px 20px; border-radius: 60px; font-size: 18px; text-transform:uppercase; letter-spacing:0.05em; color:var(--c-charcoal); background:#fff; font-weight: 500;">Tangible User Interfaces</span>
        <span style="border: 2px solid var(--c-border); padding: 12px 20px; border-radius: 60px; font-size: 18px; text-transform:uppercase; letter-spacing:0.05em; color:var(--c-charcoal); background:#fff; font-weight: 500;">Ubiquitous Computing</span>
        <span style="border: 2px solid var(--c-border); padding: 12px 20px; border-radius: 60px; font-size: 18px; text-transform:uppercase; letter-spacing:0.05em; color:var(--c-charcoal); background:#fff; font-weight: 500;">Interactive Digital Narratives</span>
        <span style="border: 2px solid var(--c-border); padding: 12px 20px; border-radius: 60px; font-size: 18px; text-transform:uppercase; letter-spacing:0.05em; color:var(--c-charcoal); background:#fff; font-weight: 500;">Immersive Media</span>
        <span style="border: 2px solid var(--c-border); padding: 12px 20px; border-radius: 60px; font-size: 18px; text-transform:uppercase; letter-spacing:0.05em; color:var(--c-charcoal); background:#fff; font-weight: 500;">Design Futures</span>
      </div>
    </div>
  </div>
</div>

<!-- P3 Skills -->
<div class="page">
  <div class="p-margin" style="display:flex; flex-direction:column;">
    <div class="pill pill-terracotta" style="margin-bottom: 40px; align-self: flex-start;">Experience & Skills</div>
    <div class="grid-2" style="flex: 1;">
      <!-- Left: Experience -->
      <div style="display:flex; flex-direction:column; justify-content: center;">
        
        <div style="display:flex; gap: 24px; margin-bottom: 40px;">
          <div style="display:flex; flex-direction:column; align-items:center;">
             <div style="width:16px; height:16px; border-radius:50%; background:var(--c-terracotta); margin-top:8px;"></div>
             <div style="width:2px; flex:1; background:var(--c-border); margin-top:12px;"></div>
          </div>
          <div style="padding-bottom: 10px;">
             <div class="font-inter" style="font-weight:700; font-size:28px; color:var(--c-charcoal);">Undergraduate Researcher</div>
             <div class="font-inter" style="font-weight:600; font-size:20px; color:var(--c-terracotta); margin-top: 4px;">Creative Interfaces Lab, IIIT Delhi</div>
             <div class="font-inter" style="font-weight:500; font-size:16px; color:var(--c-mid); text-transform:uppercase; letter-spacing:0.05em; margin: 8px 0 16px;">May 2023 – Present</div>
             <div class="body-small" style="margin-bottom:8px;">→ Led R&D on tangible storytelling systems using LLMs as narrative agents.</div>
             <div class="body-small">→ Designed prototypes and ran user evaluations focused on South Asian storytelling in XR and tangible interfaces.</div>
          </div>
        </div>
        
        <div style="display:flex; gap: 24px; margin-bottom: 40px;">
          <div style="display:flex; flex-direction:column; align-items:center;">
             <div style="width:16px; height:16px; border-radius:50%; background:var(--c-terracotta); margin-top:8px;"></div>
             <div style="width:2px; flex:1; background:var(--c-border); margin-top:12px;"></div>
          </div>
          <div style="padding-bottom: 10px;">
             <div class="font-inter" style="font-weight:700; font-size:28px; color:var(--c-charcoal);">Research Intern</div>
             <div class="font-inter" style="font-weight:600; font-size:20px; color:var(--c-terracotta); margin-top: 4px;">IMXD Lab, IIT Bombay</div>
             <div class="font-inter" style="font-weight:500; font-size:16px; color:var(--c-mid); text-transform:uppercase; letter-spacing:0.05em; margin: 8px 0 16px;">May – July 2024</div>
             <div class="body-small" style="margin-bottom:8px;">→ Built a Unity VR prototype for contemporary art translation.</div>
             <div class="body-small">→ Developed a Rhino-Grasshopper → G-code pipeline for 4D printing; co-authored research on shape-changing interfaces.</div>
          </div>
        </div>

        <div style="display:flex; gap: 24px; margin-bottom: 40px;">
          <div style="display:flex; flex-direction:column; align-items:center;">
             <div style="width:16px; height:16px; border-radius:50%; background:var(--c-terracotta); margin-top:8px;"></div>
             <div style="width:2px; flex:1; background:var(--c-border); margin-top:12px;"></div>
          </div>
          <div style="padding-bottom: 10px;">
             <div class="font-inter" style="font-weight:700; font-size:28px; color:var(--c-charcoal);">UX Researcher</div>
             <div class="font-inter" style="font-weight:600; font-size:20px; color:var(--c-terracotta); margin-top: 4px;">IWay Plus, IIT Delhi</div>
             <div class="font-inter" style="font-weight:500; font-size:16px; color:var(--c-mid); text-transform:uppercase; letter-spacing:0.05em; margin: 8px 0 16px;">Sep – Dec 2024</div>
             <div class="body-small" style="margin-bottom:8px;">→ Mapped patient journeys at IRCH-AIIMS; proposed LLM-enabled navigation.</div>
             <div class="body-small">→ Projected 20–30% reduction in patient waiting time.</div>
          </div>
        </div>

        <div style="display:flex; gap: 24px;">
          <div style="display:flex; flex-direction:column; align-items:center;">
             <div style="width:16px; height:16px; border-radius:50%; background:var(--c-mid); margin-top:8px;"></div>
          </div>
          <div>
             <div class="font-inter" style="font-weight:700; font-size:28px; color:var(--c-charcoal);">B.Tech, CS & Social Science</div>
             <div class="font-inter" style="font-weight:600; font-size:20px; color:var(--c-terracotta); margin-top: 4px;">IIIT Delhi</div>
             <div class="font-inter" style="font-weight:500; font-size:16px; color:var(--c-mid); text-transform:uppercase; letter-spacing:0.05em; margin: 8px 0;">2022 – 2026 (Expected)</div>
          </div>
        </div>

      </div>
      
      <!-- Right: Skills (use grid-2 inside) -->
      <div style="display:flex; flex-direction:column; justify-content: center; padding-left: 60px;">
        <div class="grid-2" style="height: auto; row-gap: 60px;">
          <div>
            <div class="font-inter" style="font-weight:700; font-size:18px; color:var(--c-mid); text-transform:uppercase; letter-spacing:0.1em; border-bottom:2px solid var(--c-border); padding-bottom:12px; margin-bottom:20px;">Research Methods</div>
            <div class="font-inter" style="font-size:24px; color:var(--c-charcoal); line-height: 2;">Design Thinking<br>User Research & Testing<br>Study Design<br>Data Analysis<br>Affinity Mapping<br>Prospect Theory</div>
          </div>
          <div>
            <div class="font-inter" style="font-weight:700; font-size:18px; color:var(--c-mid); text-transform:uppercase; letter-spacing:0.1em; border-bottom:2px solid var(--c-border); padding-bottom:12px; margin-bottom:20px;">Prototyping & Tools</div>
            <div style="display:flex; flex-direction:column; gap:16px;">
              <div style="display:flex; align-items:center; gap:16px;">
                <img src="https://cdn.simpleicons.org/figma/1A1A1A" width="26">
                <span class="font-inter" style="font-size:24px; color:var(--c-charcoal);">Figma</span>
              </div>
              <div style="display:flex; align-items:center; gap:16px;">
                <img src="https://cdn.simpleicons.org/unity/1A1A1A" width="26">
                <span class="font-inter" style="font-size:24px; color:var(--c-charcoal);">Unity</span>
              </div>
              <div style="display:flex; align-items:center; gap:16px;">
                <img src="https://cdn.simpleicons.org/arduino/1A1A1A" width="26">
                <span class="font-inter" style="font-size:24px; color:var(--c-charcoal);">Arduino IDE</span>
              </div>
              <div style="display:flex; align-items:center; gap:16px;">
                <i class="ph ph-sliders" style="font-size:26px; color:var(--c-charcoal);"></i>
                <span class="font-inter" style="font-size:24px; color:var(--c-charcoal);">TouchDesigner</span>
              </div>
              <div style="display:flex; align-items:center; gap:16px;">
                <i class="ph ph-cube" style="font-size:26px; color:var(--c-charcoal);"></i>
                <span class="font-inter" style="font-size:24px; color:var(--c-charcoal);">Rhino + Grasshopper</span>
              </div>
              <div style="display:flex; align-items:center; gap:16px;">
                <img src="https://cdn.simpleicons.org/linux/1A1A1A" width="26">
                <span class="font-inter" style="font-size:24px; color:var(--c-charcoal);">Linux / Unix Shell</span>
              </div>
            </div>
          </div>
          <div>
            <div class="font-inter" style="font-weight:700; font-size:18px; color:var(--c-mid); text-transform:uppercase; letter-spacing:0.1em; border-bottom:2px solid var(--c-border); padding-bottom:12px; margin-bottom:20px;">Programming</div>
            <div class="font-inter" style="font-size:24px; color:var(--c-charcoal); line-height: 2;">Python<br>C#<br>R<br>HTML / CSS<br>P5.js<br>oTree / LaTeX</div>
          </div>
          <div>
            <div class="font-inter" style="font-weight:700; font-size:18px; color:var(--c-mid); text-transform:uppercase; letter-spacing:0.1em; border-bottom:2px solid var(--c-border); padding-bottom:12px; margin-bottom:20px;">Libraries & Frameworks</div>
            <div class="font-inter" style="font-size:24px; color:var(--c-charcoal); line-height: 2;">YOLOv8<br>ARKit / MediaPipe<br>pandas / NumPy<br>Matplotlib / scikit-learn<br>Three.js / StreamDiffusion</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- P4 Index -->
<div class="page">
  <div class="p-margin" style="display:flex; flex-direction:column; height: 100%;">
    <div style="display:flex; justify-content: space-between; align-items: flex-start;">
      <div>
        <div class="pill pill-terracotta" style="margin-bottom:20px;">Selected Work</div>
        <div class="font-lora c-primary-dark" style="font-size: 64px; line-height: 1.1; margin-bottom: 20px;">
          Four projects. One question.
        </div>
        <div class="font-lora c-mid" style="font-size: 28px; font-style: italic; margin-bottom: 60px;">
          How do we preserve culture through embodied, performative interaction?
        </div>
      </div>
    </div>
    
    <div class="grid-4" style="flex: 1;">
      <!-- Card 1 -->
      <div class="card-box" style="position:relative; padding:0; background-image: url('media/KaavadBits/heroimage.png');">
        <div class="pos-abs inset-0" style="background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%);"></div>
        <div class="pos-abs inset-0 z-10" style="padding: 30px; display:flex; flex-direction:column; justify-content:flex-end;">
          <div style="color:var(--c-terracotta); font-weight:700; font-size:20px; letter-spacing:0.1em;">01</div>
          <div class="font-inter c-white" style="font-weight:700; font-size:32px; margin-bottom:8px;">KaavadBits</div>
          <div class="font-inter" style="color:var(--c-terracotta); font-size:16px; text-transform:uppercase; font-weight:700; letter-spacing:0.1em; margin-bottom:16px;">Tangible Interaction</div>
          <div class="font-inter" style="color:rgba(255,255,255,0.7); font-size:18px; line-height:1.5;">A 400-year-old Rajasthani story tradition, rebuilt as a branching tangible installation.</div>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="card-box" style="position:relative; padding:0; background-image: url('media/playwatchtell/heroimage.png');">
        <div class="pos-abs inset-0" style="background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%);"></div>
        <div class="pos-abs inset-0 z-10" style="padding: 30px; display:flex; flex-direction:column; justify-content:flex-end;">
          <div style="color:var(--c-terracotta); font-weight:700; font-size:20px; letter-spacing:0.1em;">02</div>
          <div class="font-inter c-white" style="font-weight:700; font-size:32px; margin-bottom:8px;">Playing, Watching..</div>
          <div class="font-inter" style="color:var(--c-terracotta); font-size:16px; text-transform:uppercase; font-weight:700; letter-spacing:0.1em; margin-bottom:16px;">Design Research</div>
          <div class="font-inter" style="color:rgba(255,255,255,0.7); font-size:18px; line-height:1.5;">A research framework for reinterpreting Indian vernacular artefacts through digital media.</div>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="card-box" style="position:relative; padding:0; background-image: url('media/vrlagori/heroimage.png');">
        <div class="pos-abs inset-0" style="background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%);"></div>
        <div class="pos-abs inset-0 z-10" style="padding: 30px; display:flex; flex-direction:column; justify-content:flex-end;">
          <div style="color:var(--c-terracotta); font-weight:700; font-size:20px; letter-spacing:0.1em;">03</div>
          <div class="font-inter c-white" style="font-weight:700; font-size:32px; margin-bottom:8px;">VR Lagori</div>
          <div class="font-inter" style="color:var(--c-terracotta); font-size:16px; text-transform:uppercase; font-weight:700; letter-spacing:0.1em; margin-bottom:16px;">XR Prototype</div>
          <div class="font-inter" style="color:rgba(255,255,255,0.7); font-size:18px; line-height:1.5;">A poetic VR reimagining of a traditional street game, activating somatic memory.</div>
        </div>
      </div>
      <!-- Card 4 -->
      <div class="card-box" style="position:relative; padding:0; background-image: url('media/XRSandbox/heroimage.jpg');">
        <div class="pos-abs inset-0" style="background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%);"></div>
        <div class="pos-abs inset-0 z-10" style="padding: 30px; display:flex; flex-direction:column; justify-content:flex-end;">
          <div style="color:var(--c-cyan); font-weight:700; font-size:20px; letter-spacing:0.1em;">04</div>
          <div class="font-inter c-white" style="font-weight:700; font-size:32px; margin-bottom:8px;">XR Sandbox</div>
          <div class="font-inter" style="color:var(--c-cyan); font-size:16px; text-transform:uppercase; font-weight:700; letter-spacing:0.1em; margin-bottom:16px;">Speculative GenAI</div>
          <div class="font-inter" style="color:rgba(255,255,255,0.7); font-size:18px; line-height:1.5;">Tangible sand manipulation fused with real-time GenAI pipelines for participation.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- P5 KaavadBits Title -->
<div class="page">
  <div class="pos-abs inset-0" style="background: url('media/KaavadBits/heroimage.png') center/cover;"></div>
  <div class="pos-abs inset-0 ts-overlay"></div>
  <div class="p-margin z-10" style="display:flex; flex-direction:column; justify-content:center; align-items:flex-start;">
    <div style="display:flex; gap:16px; margin-bottom:40px;">
      <span class="pill" style="background:#fff; color:var(--c-terracotta);">Interaction Design</span>
      <span class="pill" style="background:#fff; color:var(--c-terracotta);">Cultural Heritage</span>
      <span class="pill" style="background:#fff; color:var(--c-terracotta);">Tangible Interfaces</span>
    </div>
    <div class="font-lora c-white" style="font-size: 100px; font-weight: 500; margin-bottom: 16px;">KaavadBits</div>
    <div class="font-lora c-white" style="font-size: 40px; font-style: italic; opacity: 0.8; margin-bottom: 30px;">Reimagining a 400-Year-Old Storytelling Tradition</div>
    <div class="font-inter c-white" style="font-size: 24px; opacity: 0.7; max-width: 900px; line-height: 1.6;">
      An exploration in Tangible Interactive Storytelling presented at ACM TEI '24 — bridging ancient Rajasthani oral heritage and modern multi-sensory interfaces.
    </div>
  </div>
  <div class="ts-meta-bar">
    <span><strong>Year:</strong> 2023</span>
    <span><strong>Venue:</strong> ACM TEI '24 + IndiaHCI '23</span>
    <span><strong>Role:</strong> Researcher, Designer</span>
    <span><strong>Tools:</strong> Arduino · NFC · Servo Motors · LED Matrix</span>
  </div>
</div>

<!-- P6 KaavadBits Problem / Process -->
<div class="page">
  <div class="p-margin">
    <div class="grid-2">
      <!-- Left -->
      <div>
        <div class="pill pill-terracotta">Problem / Objective</div>
        <div class="section-headline">The Kaavad is not an object.<br>It is a performance.</div>
        <div class="body-text">
          The Rajasthani Kaavad is a portable wooden shrine carried by a traveling storyteller (kaavadiya). Its hinged doors open layer by layer, guiding audiences through tales from sacred texts — but meaning lives in the narrator's voice, the patron's attention, and the ritual of unfolding. A museum case kills it.
        </div>
        <div class="body-text">
          The challenge: how can interaction design preserve not the artefact, but the experience of being inside its story?
        </div>
        <div class="pull-quote">
          <p>"Story is perhaps the oldest form of communication known to humankind — it has a way of mesmerising the listeners into silence and the tellers into expressing the deepest desires and anxieties of their society."</p>
          <cite>— Nina Sabnani</cite>
        </div>
      </div>
      <!-- Right -->
      <div>
        <div class="pill pill-terracotta" style="margin-bottom: 24px;">Design Process</div>
        <div class="font-inter" style="font-weight:700; font-size:32px; margin-bottom: 20px;">Research through Design (RtD)</div>
        <div class="body-text">
          We moved through rapid cycles of sketching, cardboard prototyping, and in-person pilot testing. Early iterations included a hand-cranked bioscope allowing users to "wind time backward" through the narrative.
        </div>
        <div class="body-text">
          Pilot testing revealed that bidirectional time flow was cognitively overwhelming and culturally foreign. We pivoted to a simpler, forward-branching tree interaction model.
        </div>
        
        <div class="grid-2" style="gap:24px; margin-top:40px; height: auto;">
          <div class="card-box" style="padding:0; height: 350px; background-image: url('media/KaavadBits/design-process1.png');"></div>
          <div class="card-box" style="padding:0; height: 350px; background-image: url('media/KaavadBits/design-process2.png');"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- P7 KaavadBits System -->
<div class="page">
  <div class="p-margin">
    <div class="grid-2">
      <div>
        <div class="pill pill-terracotta">Installation Overview</div>
        <div class="section-headline">A tree that tells stories.</div>
        <div class="body-text" style="max-width: 800px; margin-bottom: 40px;">
          KaavadBits is a tabletop storytelling installation. The narrator is rendered as a tree — a recurring figure in Panchatantra settings. A servo-motor canopy oscillates during narration to direct attention; an LED matrix lights the currently active story path.
        </div>
        
        <div class="card-box" style="padding:0; height: 500px; background-image: url('media/KaavadBits/installation1.png');"></div>
      </div>
      <div>
        <div class="pill pill-terracotta" style="margin-bottom: 30px;">Interaction Flow</div>
        
        <div style="display:flex; flex-direction:column; gap:24px; margin-bottom:40px;">
          <div style="display:flex; gap: 20px; align-items:flex-start;">
             <div class="font-inter" style="color:var(--c-terracotta); font-weight:700; font-size:28px;">1.</div>
             <div class="body-text" style="margin:0;">User opens the kivads and explores stories + characters.</div>
          </div>
          <div style="display:flex; gap: 20px; align-items:flex-start;">
             <div class="font-inter" style="color:var(--c-terracotta); font-weight:700; font-size:28px;">2.</div>
             <div class="body-text" style="margin:0;">Narrator greets the audience and requests patronage.</div>
          </div>
          <div style="display:flex; gap: 20px; align-items:flex-start;">
             <div class="font-inter" style="color:var(--c-terracotta); font-weight:700; font-size:28px;">3.</div>
             <div class="body-text" style="margin:0;">User places chosen story block on central NFC platform.</div>
          </div>
          <div style="display:flex; gap: 20px; align-items:flex-start;">
             <div class="font-inter" style="color:var(--c-terracotta); font-weight:700; font-size:28px;">4.</div>
             <div class="body-text" style="margin:0;">Narrator activates. User places character figurines at prompted moments.</div>
          </div>
          <div style="display:flex; gap: 20px; align-items:flex-start;">
             <div class="font-inter" style="color:var(--c-terracotta); font-weight:700; font-size:28px;">5.</div>
             <div class="body-text" style="margin:0;">At branching points, user pulls a hanging root to commit to a story path.</div>
          </div>
        </div>
        
        <div class="card-box" style="padding:0; height: 350px; background-image: url('media/KaavadBits/interaction-flow2.jpg');"></div>
      </div>
    </div>
  </div>
</div>

<!-- P8 KaavadBits Outcomes -->
<div class="page">
  <div class="p-margin">
    <div class="pill pill-terracotta" style="margin-bottom: 40px;">Key Findings & Impact</div>
    
    <div class="grid-3" style="margin-bottom: 60px;">
      <div class="card-box" style="text-align:center; padding: 40px;">
        <div class="font-lora c-primary-warm" style="font-size: 80px; font-weight: 600; line-height: 1;">78.75</div>
        <div class="font-inter c-mid" style="font-size:18px; text-transform:uppercase; letter-spacing:0.15em; margin-top:16px;">System Usability<br>Scale Score</div>
      </div>
      <div class="card-box" style="text-align:center; padding: 40px;">
        <div class="font-lora c-primary-warm" style="font-size: 80px; font-weight: 600; line-height: 1;">75%</div>
        <div class="font-inter c-mid" style="font-size:18px; text-transform:uppercase; letter-spacing:0.15em; margin-top:16px;">No prior knowledge<br>of Kaavad tradition</div>
      </div>
      <div class="card-box" style="text-align:center; padding: 40px;">
        <div class="font-lora c-primary-warm" style="font-size: 80px; font-weight: 600; line-height: 1;">100%</div>
        <div class="font-inter c-mid" style="font-size:18px; text-transform:uppercase; letter-spacing:0.15em; margin-top:16px;">Interest in heritage<br>interactive art</div>
      </div>
    </div>
    
    <div class="grid-2">
      <div>
        <div class="font-lora c-primary-dark" style="font-size: 40px; font-weight: 500; margin-bottom: 30px;">What the study revealed.</div>
        <div class="body-text">
          Users found the physical interaction model intuitive and engaging with no prior instruction. The installation successfully sparked genuine cultural interest in a tradition most participants had never encountered.
        </div>
        <div class="body-text">
          Long-term engagement was flagged as a potential weak point. This pivoted our future direction toward a pedagogical tool for children — for whom folklore repetition is a natural learning mechanism.
        </div>
      </div>
      <div>
        <div class="pill pill-amber-fill" style="margin-bottom: 30px;">Publications & Awards</div>
        <div style="margin-bottom: 30px; border-left: 4px solid var(--c-amber); padding-left: 24px;">
          <div class="font-inter" style="font-weight:700; font-size:28px; margin-bottom: 8px;">ACM TEI '24</div>
          <div class="font-inter c-mid" style="font-size: 20px;">ACM International Conference on Tangible, Embedded, and Embodied Interaction — Conference Presentation.</div>
        </div>
        <div style="border-left: 4px solid var(--c-amber); padding-left: 24px;">
          <div class="font-inter" style="font-weight:700; font-size:28px; margin-bottom: 8px;">IndiaHCI '23</div>
          <div class="font-inter c-mid" style="font-size: 20px;">Special Mention Award — indigenous storytelling practices in interactive systems design.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- P9 PWT Title -->
<div class="page" style="background: #1A1A1A;">
  <div class="pos-abs inset-0" style="background: url('media/playwatchtell/heroimage.png') center/cover;"></div>
  <div class="pos-abs inset-0 ts-overlay" style="background: linear-gradient(135deg, rgba(26,26,26,0.9), rgba(26,26,26,0.3));"></div>
  <div class="p-margin z-10" style="display:flex; flex-direction:column; justify-content:center; align-items:flex-start;">
    <div style="display:flex; gap:16px; margin-bottom:40px;">
      <span class="pill" style="border: 2px solid rgba(255,255,255,0.4); color:#fff;">Design Research</span>
      <span class="pill" style="border: 2px solid rgba(255,255,255,0.4); color:#fff;">Cultural Heritage</span>
    </div>
    <div class="font-lora c-white" style="font-size: 110px; font-weight: 500; margin-bottom: 24px; line-height:1.1;">Playing, Watching,<br>Telling.</div>
    <div class="font-inter c-white" style="font-size: 32px; opacity: 0.7; max-width: 1000px; line-height: 1.6; margin-top:20px;">
      Reinterpreting Indian Vernacular Cultures and Artefacts through Digital New Media
    </div>
  </div>
  <div class="ts-meta-bar" style="background: rgba(0,0,0,0.9);">
    <span><strong>Year:</strong> 2023–2024</span>
    <span><strong>Type:</strong> Research Framework</span>
    <span><strong>Role:</strong> Lead Researcher & Designer</span>
  </div>
</div>

<!-- P10 PWT Problem -->
<div class="page" style="background:#FBF9F6;">
  <div class="p-margin">
    <div class="grid-2">
      <div style="padding-right: 40px;">
        <div class="pill pill-terracotta">The Problem</div>
        <div class="section-headline">They are not dying because they are undocumented.</div>
        <div class="body-text">
          Indian vernacular artefacts — the Rajasthani Kaavad, the street Bioscope, the seven-stone game of Lagori — are vanishing not because they lack archives, but because they are no longer experienced.
        </div>
        <div class="body-text">
          A 3D scan cannot capture the soul of the Kaavad. A YouTube upload strips the Bioscope of its shared gaze. Uploading is not preserving. This project reframes heritage as an experiential problem — not an archival one.
        </div>
        <div class="pull-quote">
          <p>"To keep vernacular culture alive, we must design tools that allow us not just to look at the past, but to continuously perform it."</p>
        </div>
      </div>
      <div style="padding-left: 40px;">
        <div class="pill pill-terracotta" style="margin-bottom: 40px;">Three Design Principles</div>
        
        <div style="margin-bottom: 40px;">
          <div class="font-inter c-primary-warm" style="font-weight:700; font-size:28px;">01 / Ritual Gesture as Interface</div>
          <div class="body-text" style="font-size:20px; margin-top:12px;">The interaction must mirror the cultural act. Pulling a root to branch a narrative. Stacking stones. The gesture precedes the content in significance.</div>
        </div>
        <div style="margin-bottom: 40px;">
          <div class="font-inter c-primary-warm" style="font-weight:700; font-size:28px;">02 / Affective Fidelity over Visual</div>
          <div class="body-text" style="font-size:20px; margin-top:12px;">Preserve the emotional and somatic memory of an artefact — the anticipation, the weight, the effort — rather than creating hyper-realistic visual simulations.</div>
        </div>
        <div>
          <div class="font-inter c-primary-warm" style="font-weight:700; font-size:28px;">03 / The Social Contract</div>
          <div class="body-text" style="font-size:20px; margin-top:12px;">Artefacts dictate how we interact with each other. A Bioscope requires shared focus. A Kaavad requires narrator and patron. Heritage design means designing for collective memory.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- P11 PWT Work -->
<div class="page" style="background:#FBF9F6;">
  <div class="p-margin" style="display:flex; flex-direction:column; justify-content:center;">
    <div class="pill pill-terracotta" style="margin-bottom: 30px; align-self: flex-start;">Three Responses to One Question</div>
    <div class="section-headline" style="font-size:48px; margin-top:0; margin-bottom:60px;">Same research thesis. Three very different forms.</div>
    
    <div class="grid-3" style="margin-bottom: 60px;">
      <!-- Item 1 -->
      <div class="card-box" style="display:flex; flex-direction:column; padding:0; overflow:hidden;">
        <div style="height: 250px; background: url('media/playwatchtell/kaavadbits.png') center/cover;"></div>
        <div style="padding: 30px;">
           <span class="font-inter c-primary-warm" style="font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; background:rgba(192,86,33,0.1); padding:6px 12px; border-radius:12px;">✦ Completed</span>
           <div class="font-inter c-charcoal" style="font-weight:700; font-size:32px; margin-top:20px;">KaavadBits</div>
           <div class="font-inter c-mid" style="font-size:18px; font-weight:500; margin-bottom:16px;">Narrative Branching through Tangible Play</div>
           <div class="body-text" style="font-size:18px; margin:0;">A reinterpretation of the Kaavad Baachana tradition. Users pull hanging roots to branch through fables. SUS Score: 78.75 · Published at ACM TEI '24</div>
        </div>
      </div>
      
      <!-- Item 2 -->
      <div class="card-box" style="display:flex; flex-direction:column; padding:0; overflow:hidden;">
        <div style="height: 250px; background: url('media/playwatchtell/vrlagori.jpg') center/cover;"></div>
        <div style="padding: 30px;">
           <span class="font-inter c-amber" style="font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; border:2px solid var(--c-amber); padding:6px 12px; border-radius:12px;">⟳ In Development</span>
           <div class="font-inter c-charcoal" style="font-weight:700; font-size:32px; margin-top:20px;">VR Lagori</div>
           <div class="font-inter c-mid" style="font-size:18px; font-weight:500; margin-bottom:16px;">Activating Somatic Motor Memory</div>
           <div class="body-text" style="font-size:18px; margin:0;">A poetic VR reimagining of the street game. Uses full-body movement and "memory echoes" to evoke childhood nostalgia.</div>
        </div>
      </div>
      
      <!-- Item 3 -->
      <div class="card-box" style="display:flex; flex-direction:column; padding:0; overflow:hidden;">
        <div style="height: 250px; background: url('media/playwatchtell/vrbioscope.png') center/cover;"></div>
        <div style="padding: 30px;">
           <span class="font-inter c-mid" style="font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:0.1em; border:2px solid #aaa; padding:6px 12px; border-radius:12px;">◌ Proposed</span>
           <div class="font-inter c-charcoal" style="font-weight:700; font-size:32px; margin-top:20px;">VR Bioscope</div>
           <div class="font-inter c-mid" style="font-size:18px; font-weight:500; margin-bottom:16px;">Restoring the Collaborative Gaze</div>
           <div class="body-text" style="font-size:18px; margin:0;">A hybrid physical-VR artefact. Animation triggers only through the collaborative gaze of 2–3 users, restoring the social ritual.</div>
        </div>
      </div>
    </div>
    
    <div class="font-lora c-mid" style="text-align:center; font-style:italic; font-size:28px; margin-top:20px;">
      "Nostalgia is not a surface aesthetic. It is a primary interaction modality."
    </div>
  </div>
</div>

<!-- P12 VR Lagori Title -->
<div class="page">
  <div class="pos-abs inset-0" style="background: url('media/vrlagori/heroimage.png') center/cover;"></div>
  <div class="pos-abs inset-0 ts-overlay"></div>
  <div class="p-margin z-10" style="display:flex; flex-direction:column; justify-content:center; align-items:flex-start;">
    <div style="display:flex; gap:16px; margin-bottom:40px;">
      <span class="pill" style="background:#fff; color:var(--c-terracotta);">XR / VR Design</span>
      <span class="pill" style="background:#fff; color:var(--c-terracotta);">Embodied Play</span>
    </div>
    <div class="font-lora c-white" style="font-size: 110px; font-weight: 500; margin-bottom: 20px;">VR Lagori</div>
    <div class="font-inter c-white" style="font-size: 32px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.8; margin-bottom: 30px;">The Nostalgic Stack</div>
    <div class="font-inter c-white" style="font-size: 24px; opacity: 0.7; max-width: 900px; line-height: 1.6;">
      Reimagining a traditional childhood game as a poetic, interactive memory space — where rules guide emotion.
    </div>
  </div>
  <div class="ts-meta-bar">
    <span><strong>Year:</strong> 2024</span>
    <span><strong>Status:</strong> In Development</span>
    <span><strong>Role:</strong> Designer & Developer</span>
    <span><strong>Tools:</strong> Unity · Meta Quest</span>
  </div>
</div>

<!-- P13 VR Lagori Design -->
<div class="page">
  <div class="p-margin">
    <div class="grid-3" style="grid-template-columns: 2fr 1fr 1.5fr; gap: 60px;">
      
      <!-- Col 1 -->
      <div style="padding-right: 20px; border-right: 1px solid var(--c-border);">
        <div class="pill pill-terracotta">Core Goal</div>
        <div class="section-headline" style="font-size: 48px;">Not a game. A memory.</div>
        <div class="body-text">
          Lagori is a seven-stone street game played by South Asian children for generations. As urbanization erodes the physical spaces of play, the game has vanished from city childhoods. VR Lagori does not simulate this game — it reimagines it as a memory space where physical action unlocks somatic recall.
        </div>
        <div class="body-text">
          Actions like bending, reaching, and stacking become triggers for autobiographical memory. The experience relies on the body knowing what the mind has almost forgotten.
        </div>
      </div>
      
      <!-- Col 2 -->
      <div style="padding-right: 20px; border-right: 1px solid var(--c-border);">
        <div class="pill pill-terracotta" style="margin-bottom: 30px;">Why VR?</div>
        <div style="margin-bottom: 40px;">
          <div class="font-inter c-charcoal" style="font-weight:700; font-size:24px;">Embodiment</div>
          <div class="body-text" style="font-size:18px; margin-top:12px;">The player's body is the controller. Standing, reaching, and bending activate muscle memory in ways a screen never could.</div>
        </div>
        <div style="margin-bottom: 20px;">
          <div class="font-inter c-charcoal" style="font-weight:700; font-size:24px;">Spatial Presence</div>
          <div class="body-text" style="font-size:18px; margin-top:12px;">You physically occupy a human-scale childhood environment — you don't watch it on a display, you inhabit it.</div>
        </div>
      </div>
      
      <!-- Col 3 -->
      <div>
        <div class="pill pill-terracotta" style="margin-bottom: 30px;">Interaction</div>
        <div style="display:flex; flex-direction:column; gap: 20px;">
            <div class="card-box" style="padding: 24px;">
              <span class="font-inter c-primary-warm" style="font-size:20px; font-weight:700; margin-right:12px;">01</span>
              <span class="font-inter c-charcoal" style="font-size:20px; font-weight:700;">Movement</span>
              <div class="body-text" style="font-size:16px; margin:8px 0 0;">Natural locomotion encourages reflection over speed.</div>
            </div>
            <div class="card-box" style="padding: 24px;">
              <span class="font-inter c-primary-warm" style="font-size:20px; font-weight:700; margin-right:12px;">02</span>
              <span class="font-inter c-charcoal" style="font-size:20px; font-weight:700;">Gesture</span>
              <div class="body-text" style="font-size:16px; margin:8px 0 0;">Reaching and grabbing stones — precision physically matters.</div>
            </div>
            <div class="card-box" style="padding: 24px;">
              <span class="font-inter c-primary-warm" style="font-size:20px; font-weight:700; margin-right:12px;">03</span>
              <span class="font-inter c-charcoal" style="font-size:20px; font-weight:700;">Gaze & Body</span>
              <div class="body-text" style="font-size:16px; margin:8px 0 0;">Standing up initiates the experience. No explicit UI navigation.</div>
            </div>
        </div>
      </div>
      
    </div>
  </div>
</div>

<!-- P14 VR Lagori Outcomes -->
<div class="page">
  <div class="p-margin">
    <div class="grid-2">
      <!-- Top Left -->
      <div>
        <div class="pill pill-terracotta" style="margin-bottom: 30px;">The Narrative Arc</div>
        <div style="display:flex; background:var(--c-white); border:1px solid var(--c-border); border-radius:16px; margin-bottom:40px; overflow:hidden;">
          <div style="flex:1; padding:20px; border-right:1px solid var(--c-border);">
            <div class="font-inter c-primary-warm" style="font-weight:700; font-size:16px;">I / Arrival</div>
            <div class="body-text" style="font-size:14px; margin-top:8px; line-height:1.4;">Warm, nostalgic backyard.</div>
          </div>
          <div style="flex:1; padding:20px; border-right:1px solid var(--c-border);">
            <div class="font-inter c-primary-warm" style="font-weight:700; font-size:16px;">II / Discovery</div>
            <div class="body-text" style="font-size:14px; margin-top:8px; line-height:1.4;">A glowing path leads forward.</div>
          </div>
          <div style="flex:1; padding:20px; border-right:1px solid var(--c-border);">
            <div class="font-inter c-primary-warm" style="font-weight:700; font-size:16px;">III / The Stack</div>
            <div class="body-text" style="font-size:14px; margin-top:8px; line-height:1.4;">Precision stacking 7 stones.</div>
          </div>
          <div style="flex:1; padding:20px; border-right:1px solid var(--c-border);">
            <div class="font-inter c-primary-warm" style="font-weight:700; font-size:16px;">IV / The Ball</div>
            <div class="body-text" style="font-size:14px; margin-top:8px; line-height:1.4;">An invitation appears.</div>
          </div>
          <div style="flex:1; padding:20px;">
            <div class="font-inter c-primary-warm" style="font-weight:700; font-size:16px;">V / Release</div>
            <div class="body-text" style="font-size:14px; margin-top:8px; line-height:1.4;">Slow-motion throw. Joy.</div>
          </div>
        </div>
        
        <div class="font-lora c-primary-dark" style="font-style:italic; font-size:36px; padding-right:40px; line-height:1.4; margin-top:60px;">
          "VR Lagori preserves the invisible heritage of play by making the user physically perform the heritage."
        </div>
      </div>
      
      <!-- Top Right -->
      <div>
        <div class="pill pill-terracotta" style="margin-bottom: 30px;">Outcomes</div>
        <div class="card-box" style="margin-bottom: 40px; padding: 0; overflow:hidden;">
            <div style="padding:24px 30px; border-bottom:1px solid var(--c-border);">
              <div class="font-inter c-primary-warm" style="font-weight:700; font-size:24px; margin-bottom:8px;">Somatic Memory</div>
              <div class="body-text" style="font-size:18px; margin:0;">Physical actions like bending reactivate long-dormant memories without narrative text.</div>
            </div>
            <div style="padding:24px 30px; border-bottom:1px solid var(--c-border);">
              <div class="font-inter c-primary-warm" style="font-weight:700; font-size:24px; margin-bottom:8px;">Intrinsic Reward</div>
              <div class="body-text" style="font-size:18px; margin:0;">No scores. The emotional payoff of the final throw is the only reward.</div>
            </div>
            <div style="padding:24px 30px;">
              <div class="font-inter c-primary-warm" style="font-weight:700; font-size:24px; margin-bottom:8px;">Spatial Art</div>
              <div class="body-text" style="font-size:18px; margin:0;">Moves from literal game simulation toward a spatial art installation grounded in play.</div>
            </div>
        </div>
      </div>
    </div>
    
    <!-- Bottom Grid -->
    <div class="grid-4" style="margin-top:20px;">
      <div class="card-box" style="padding:0; height: 260px; background-image: url('media/vrlagori/s1.png');"></div>
      <div class="card-box" style="padding:0; height: 260px; background-image: url('media/vrlagori/s2.png');"></div>
      <div class="card-box" style="padding:0; height: 260px; background-image: url('media/vrlagori/s3.png');"></div>
      <div class="card-box" style="padding:0; height: 260px; background-image: url('media/vrlagori/s4.png');"></div>
    </div>
  </div>
</div>

<!-- P15 XR Sandbox Title -->
<div class="page" style="background:#EFF8FB;">
  <div class="pos-abs inset-0" style="background: url('media/XRSandbox/heroimage.jpg') center/cover;"></div>
  <div class="pos-abs inset-0 ts-overlay" style="background: linear-gradient(135deg, rgba(8,145,178,0.95), rgba(15,23,42,0.6));"></div>
  <div class="p-margin z-10" style="display:flex; flex-direction:column; justify-content:center; align-items:flex-start;">
    <div style="display:flex; gap:16px; margin-bottom:40px;">
      <span class="pill" style="background:#fff; color:var(--c-cyan);">Speculative Design</span>
      <span class="pill" style="background:#fff; color:var(--c-cyan);">Generative AI</span>
      <span class="pill" style="background:#fff; color:var(--c-cyan);">Urban Design</span>
    </div>
    <div class="font-lora c-white" style="font-size: 110px; font-weight: 500; margin-bottom: 20px;">XR Sandbox</div>
    <div class="font-inter c-white" style="font-size: 32px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.8; margin-bottom: 30px;">Speculative Design & Real-Time AI Dialogue</div>
    <div class="font-inter c-white" style="font-size: 24px; opacity: 0.7; max-width: 900px; line-height: 1.6;">
      Exploring the fusion of tangible sand manipulation with high-throughput GenAI pipelines to reimagine citizen participation.
    </div>
  </div>
  <div class="ts-meta-bar">
    <span><strong>Year:</strong> 2024</span>
    <span><strong>Lab:</strong> Creative Interfaces Lab</span>
    <span><strong>Role:</strong> Researcher & Developer</span>
  </div>
</div>

<!-- P16 XR Sandbox ARTS -->
<div class="page" style="background:#fff;">
  <div class="p-margin">
    <div class="grid-2">
      <!-- LEft -->
      <div style="padding-right: 40px; border-right: 2px solid var(--c-border);">
        <div class="pill pill-cyan">Sub-Project 1 of 2</div>
        <div class="section-headline">ARTS: AR Tabletop</div>
        <div class="font-lora c-mid" style="font-size:24px; font-style:italic; margin-bottom:30px;">"How can a sandtable become a tool for citizen participation in urban design?"</div>
        <div class="body-text">
          ARTS bridges expert urban planning tools and citizen imagination. By combining a physical sandtable with tangible "Future Cards" as tokens, citizens visualize scenarios for parks and third spaces — powered by a Stable Diffusion pipeline.
        </div>
        <div class="body-text">
          Token detection uses YOLOv8 + ArUco markers. Unity renders the digital twin. ComfyUI pipelines handle image generation, mathematically constrained to prevent hallucination of token counts.
        </div>
        
        <div class="grid-2" style="margin-top:40px; gap: 30px; height: 320px;">
          <div class="card-box" style="padding:0; background-image: url('media/XRSandbox/futurecards.png');"></div>
          <div class="card-box" style="padding:0; background-image: url('media/XRSandbox/genai.png');"></div>
        </div>
      </div>
      <!-- Right -->
      <div style="padding-left: 40px;">
        <div class="pill pill-amber-fill">Sub-Project 2 of 2</div>
        <div class="section-headline">Sculpting Intelligence</div>
        <div class="font-lora c-mid" style="font-size:24px; font-style:italic; margin-bottom:30px;">Real-time dialogue between hand and algorithm.</div>
        <div class="body-text">
          Where ARTS uses tokens, Sculpting Intelligence uses the sand itself. A Kinect sensor captures the table's topography in real time. Our TouchDesigner pipeline converts elevation and slope data into dynamic heatmaps.
        </div>
        <div class="body-text">
          These heatmaps guide StreamDiffusion to generate corresponding biomes: mountains, deserts, coasts — directly reflecting the sand. The loop closes as each image is projected back onto the sandtable surface.
        </div>
        <div class="card-box" style="padding:0; height: 320px; margin-top:40px; background-image: url('media/XRSandbox/sandbox-realties.jpeg');"></div>
      </div>
    </div>
  </div>
</div>

<!-- P17 XR Sandbox Pipeline -->
<div class="page" style="background:#fff;">
  <div class="p-margin">
    <div class="pill pill-cyan" style="margin-bottom: 30px;">Technical Pipeline</div>
    <div class="section-headline" style="margin-top:0;">From sand to AI — in under 2 seconds.</div>
    
    <!-- Pipeline Diagram -->
    <div class="card-box" style="background:var(--c-sand); padding: 50px; margin-bottom:60px;">
      <div style="display:flex; align-items:flex-start;">
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; position:relative;">
          <div style="width:100%; height:4px; background:var(--c-cyan); position:absolute; top:28px; left:50%; z-index:1;"></div>
          <div style="width:60px; height:60px; border-radius:50%; background:var(--c-cyan); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:28px; font-family:'Inter'; position:relative; z-index:2;">1</div>
          <div class="font-inter c-cyan" style="font-weight:700; font-size:24px; margin-top:24px; text-align:center;">Physical Capture</div>
          <div class="body-text" style="font-size:18px; text-align:center; padding:0 16px; margin-top:16px;">Kinect V2 captures Depth + IR. OpenCV reads ArUco. MediaPipe reads hands.</div>
        </div>
        
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; position:relative;">
          <div style="width:100%; height:4px; background:var(--c-cyan); position:absolute; top:28px; left:50%; z-index:1;"></div>
          <div style="width:60px; height:60px; border-radius:50%; background:var(--c-cyan); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:28px; font-family:'Inter'; position:relative; z-index:2;">2</div>
          <div class="font-inter c-cyan" style="font-weight:700; font-size:24px; margin-top:24px; text-align:center;">Digital Mapping</div>
          <div class="body-text" style="font-size:18px; text-align:center; padding:0 16px; margin-top:16px;">Python streams coordinates to Unity via TCP/JSON. Digital twin aligns.</div>
        </div>
        
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; position:relative;">
          <div style="width:100%; height:4px; background:var(--c-cyan); position:absolute; top:28px; left:50%; z-index:1;"></div>
          <div style="width:60px; height:60px; border-radius:50%; background:var(--c-cyan); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:28px; font-family:'Inter'; position:relative; z-index:2;">3</div>
          <div class="font-inter c-cyan" style="font-weight:700; font-size:24px; margin-top:24px; text-align:center;">Gen Synthesis</div>
          <div class="body-text" style="font-size:18px; text-align:center; padding:0 16px; margin-top:16px;">ComfyUI generates render from heatmap mapping + base prompt.</div>
        </div>
        
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; position:relative;">
          <div style="width:60px; height:60px; border-radius:50%; background:var(--c-cyan); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:28px; font-family:'Inter'; position:relative; z-index:2;">4</div>
          <div class="font-inter c-cyan" style="font-weight:700; font-size:24px; margin-top:24px; text-align:center;">Proj Feedback</div>
          <div class="body-text" style="font-size:18px; text-align:center; padding:0 16px; margin-top:16px;">1920×1080 output projected back onto sandtable. Loop closed.</div>
        </div>
      </div>
    </div>
    
    <div class="pill pill-cyan" style="margin-bottom: 30px;">Future Work</div>
    <div class="grid-2">
      <div class="card-box" style="background:var(--c-sand);">
        <div class="font-inter c-primary-warm" style="font-weight:700; font-size:20px; text-transform:uppercase; letter-spacing:0.1em; border-bottom:2px solid var(--c-border); padding-bottom:16px; margin-bottom:20px;">Expert Co-Design</div>
        <div class="body-text" style="font-size:20px; margin:0;">Conduct co-design workshops with Urban Design SMEs at SPA Delhi and IIT Delhi to validate and refine the ARTS prototype.</div>
      </div>
      <div class="card-box" style="background:var(--c-sand);">
        <div class="font-inter c-primary-warm" style="font-weight:700; font-size:20px; text-transform:uppercase; letter-spacing:0.1em; border-bottom:2px solid var(--c-border); padding-bottom:16px; margin-bottom:20px;">Environmental Sim</div>
        <div class="body-text" style="font-size:20px; margin:0;">Incorporate rain and erosion simulations using digital water shaders in Unity to show how the landscape evolves over time.</div>
      </div>
    </div>
  </div>
</div>

<!-- P18 Closing -->
<div class="page" style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
  <div class="p-margin" style="width:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;">
    <div class="font-lora c-primary-dark" style="font-size: 96px; font-weight: 500; text-align:center; margin-bottom: 40px; line-height: 1.1;">Let's build what<br>comes next.</div>
    <div class="body-text" style="text-align:center; font-size:32px; max-width:800px; margin-bottom: 80px;">
      I'm open to research collaborations, design internships, and conversations at the intersection of HCI, immersive media, and cultural design.
    </div>
    
    <div style="display:flex; flex-direction:column; gap:20px; font-family:'Inter'; font-size:32px; color:var(--c-charcoal);">
      <div style="display:flex; gap:60px;"><span style="font-weight:600; width:200px;">Email</span><span style="color:var(--c-mid);">adityapadmagirwar@gmail.com</span></div>
      <div style="display:flex; gap:60px;"><span style="font-weight:600; width:200px;">LinkedIn</span><span style="color:var(--c-mid);">linkedin.com/in/adityapadmagirwar</span></div>
      <div style="display:flex; gap:60px;"><span style="font-weight:600; width:200px;">GitHub</span><span style="color:var(--c-mid);">github.com/adityapadma</span></div>
      <div style="display:flex; gap:60px;"><span style="font-weight:600; width:200px;">Behance</span><span style="color:var(--c-mid);">behance.com/adityapadma</span></div>
      <div style="display:flex; gap:60px;"><span style="font-weight:600; width:200px;">Portfolio</span><span style="color:var(--c-mid);">adityapadma.github.io</span></div>
    </div>
  </div>
</div>

</body>
</html>"""

import os
with open("print_portfolio_16x9.html", "w") as f:
    f.write(get_html())

print("Successfully wrote print_portfolio_16x9.html")
