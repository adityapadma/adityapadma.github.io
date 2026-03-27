export const heroImages = [
  { src: "/portfolio/media/conference/IndiaHCI23_1.png", alt: "KaavadBits", caption: "KaavadBits" },
  { src: "/portfolio/media/conference/IndiaHCI23_3.jpg", alt: "Future Work", caption: "Future Work" },
  { src: "/portfolio/media/conference/IndiaHCI23_2.jpg", alt: "VR Lagori", caption: "VR Lagori" },
  { src: "/portfolio/media/conference/IndiaHCI23_5.jpg", alt: "Indian Vernacular Artefacts", caption: "Indian Vernacular Artefacts" },
  { src: "/portfolio/media/conference/IndiaHCI23_4.jpg", alt: "UDXR Sandbox", caption: "UDXR Sandbox" },
  { src: "/portfolio/media/conference/IndiaHCI23_6.jpg", alt: "Exhibition View", caption: "Exhibition View" },
  { src: "/portfolio/media/conference/IndiaHCI23_7.jpg", alt: "Interaction Detail", caption: "Interaction Detail" },
  { src: "/portfolio/media/conference/TEI24_1.jpg", alt: "Tangible Interaction", caption: "Tangible Interaction" },
];

export const CHIP_COLORS: Record<string, string> = {
  "Case Study": "#f6e2cf",
  "Research": "#f0e8f8",
  "XR Prototype": "#e8f4e8",
  "Speculative XR": "#e8eef8",
};

export const workExperience = [
  {
    title: "Creative Interfaces Lab, IIIT Delhi | Undergraduate Researcher",
    period: "May 2023 - Current",
    points: [
      "Led R&D on tangible storytelling systems using LLMs as narrative agents.",
      "Designed prototypes and ran user evaluations focused on South Asian and non-Western storytelling in XR and tangible interfaces."
    ]
  },
  {
    title: "IWay Plus, IIT Delhi | UX Researcher",
    reportUrl: "https://drive.google.com/file/d/1_m2VBJhabFb9w3-NbQ-mMSN0b9FYDLGx/view?usp=sharing",
    period: "Sep 2024 - Dec 2024",
    points: [
      "Researched accessibility and navigation behaviors and translated findings into LLM-enabled UX solutions.",
      "Mapped IRCH-AIIMS patient journeys (1,500+ daily outpatients), proposing interventions that could reduce waiting time by 20-30% and improve clinical throughput."
    ]
  },
  {
    title: "IMXD Lab, IDC School of Design, IIT Bombay | Research Intern",
    period: "May 2024 - Jul 2024",
    points: [
      "Conducted immersive media research and built a Unity VR prototype for contemporary art translation.",
      "Developed a Rhino-Grasshopper to G-code workflow for 4D printing and co-authored research on affordances in shape-changing interfaces."
    ]
  }
];

export const researchProjects = [
  {
    title: "Studying Behaviour in Gacha Games | Course Project",
    period: "Github",
    url: "https://github.com/arorashivoy/gatcha_otree",
    points: [
      "Designed a controlled behavioral experiment to analyze <strong>loss aversion</strong> and <strong>sunk cost effects</strong> in gacha-style risk environments.",
      "Simulated mechanics across 3 conditions to test the impact of <strong>pity system disclosure</strong> and outcome framing.",
      "Applied <strong>Prospect Theory</strong> to bridge theoretical behavioral economics with observed player data and emotional drivers.",
      "Conducted thematic analysis on post-task surveys to identify drivers such as <strong>regret, satisfaction, and fairness</strong>."
    ]
  },
  {
    title: "Design Affordances in 4D Printed Objects | Internship Project",
    period: "Research Project",
    points: [
      "Built an automated <strong>Rhino and Grasshopper</strong> pipeline to convert 3D designs into G-code for 4D printing.",
      "Conducted user studies with <strong>40+ participants</strong> to evaluate perceived affordances and signifiers of shape-changing objects.",
      "Analyzed qualitative and quantitative feedback to identify usability gaps in <strong>non-static physical interactions</strong>.",
      "Co-authored a research paper proposing <strong>5+ actionable guidelines</strong> for intuitive interaction with 4D printed interfaces."
    ]
  },
  {
    title: "Navigating Indoor Spaces for the BVI | Independent Project",
    period: "Independent Project",
    points: [
      "Designed a smartphone-based indoor navigation system to support independence for <strong>blind and visually impaired (BVI)</strong> users.",
      "Evaluated <strong>10+ accessibility tools</strong> through interviews and competitive analysis to identify and address unmet needs.",
      "Developed non-visual navigation using <strong>tactile feedback, audio cues,</strong> and a conversational <strong>NLP-based chatbot</strong>.",
      "Planned usability protocols focused on reducing <strong>cognitive load</strong> and improving spatial awareness across global localizations."
    ]
  }
];

export const skillsData = [
  { title: "Technical Skills", body: "Design Thinking, User Research and Testing, Study Design, Data Analysis, Rapid Design and Prototyping, Programming." },
  { title: "Programming", body: "HTML/CSS, Python, C/C++, SQL, Processing (P5.js), C#, R, oTree, LaTeX." },
  { title: "Tools", body: "Unity, Figma/Adobe XD, Arduino IDE, Rhino Grasshopper, Linux/Unix Shell, Git Workflow, TouchDesigner." },
  { title: "Libraries", body: "Rhino3dm, rhinoscriptsyntax, ARKit, pandas, NumPy, Matplotlib, 3js, scikit, PsychoPy." },
];
