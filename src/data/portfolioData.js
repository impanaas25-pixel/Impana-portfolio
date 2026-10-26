export const personalInfo = {
  name: "Impana A S",
  monogram: "IS",
  eyebrow: "Full-Stack Developer • 5th Sem (3rd Year) CSE • Problem Solver",
  headlineMain: "Engineering Ideas Into",
  headlineGradient: "Meaningful Digital Solutions.",
  role: "Computer Science Engineering Student • 5th Sem, 3rd Year (8.65 CGPA)",
  institution: "Bapuji Institute of Engineering & Technology (BIET), Davangere",
  bio: "I’m Impana A S, currently in my 5th semester (3rd Year) pursuing B.E. in Computer Science & Engineering at BIET Davangere (8.65 CGPA upto 4th Sem). I enjoy building practical web applications with the PERN stack, intelligent AI-powered solutions, and algorithm-driven systems that solve real-world problems.",
  availability: "Open to Learning & Internship Opportunities",
  email: "impanaas25@gmail.com",
  github: "https://github.com/impanaas25-pixel",
  linkedin: "https://www.linkedin.com/in/impana-a-s-2b5571341?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  location: "Davangere, Karnataka, India",
  tagline: "Designed with curiosity. Built with code.",
  academicSummary: {
    beCollege: "Bapuji Institute of Engineering & Technology (BIET), Davangere",
    beDegree: "B.E. in Computer Science & Engineering",
    currentSem: "5th Semester (3rd Year)",
    cgpa: "8.65 CGPA (upto 4th Sem)",
    puCollege: "Anubhava Mantapa PU College, Davangere",
    puScore: "91.33% (12th Grade)",
    school: "Sri Taralabalu Jagadguru Residential School, Davangere",
    schoolScore: "93.12% (10th Grade)"
  }
};

export const authenticStats = [
  { value: "8.65", label: "Current CGPA", detail: "Upto 4th Sem (5th Sem, 3rd Year)" },
  { value: "4+", label: "Engineered Projects", detail: "PERN & AI algorithmic solutions" },
  { value: "2", label: "BIET Hackathons", detail: "Internal SIH & Hackarena 1.0" },
  { value: "PERN", label: "Core Stack Focus", detail: "PostgreSQL, Express, React, Node" },
];

export const whatIEnjoy = [
  {
    id: "web-apps",
    title: "Intelligent Web Applications (PERN)",
    description: "Architecting responsive, resilient frontends paired with robust Express REST APIs, PostgreSQL data modeling, and Supabase integration.",
    icon: "LayoutGrid",
    gradient: "from-violet-500/20 to-purple-500/20",
    borderGlow: "group-hover:border-violet-500/40",
    tags: ["React", "Node.js", "Express", "PERN Stack", "PostgreSQL", "Supabase"]
  },
  {
    id: "ai-experiences",
    title: "AI-Powered Experiences",
    description: "Integrating generative AI and smart prompts into real-world applications to empower artisans, automate workflows, and enhance user productivity.",
    icon: "Sparkles",
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderGlow: "group-hover:border-cyan-500/40",
    tags: ["Generative AI", "Prompt Design", "AI Integration"]
  },
  {
    id: "problem-solving",
    title: "Practical Problem-Solving Tools",
    description: "Translating algorithmic thinking—such as greedy job schedulers and collaborative waste collection tracking—into impactful digital tools.",
    icon: "Cpu",
    gradient: "from-teal-500/20 to-emerald-500/20",
    borderGlow: "group-hover:border-teal-500/40",
    tags: ["Greedy Algorithms", "Optimization", "Database Schema"]
  }
];

export const projectCategories = [
  "All Projects",
  "Full-Stack Development",
  "AI & Innovation"
];

export const projects = [
  {
    id: "studio-yield",
    title: "StudioYield",
    subtitle: "Job Schedule Optimizer",
    category: "Full-Stack Development",
    shortDescription: "An algorithm-driven web application designed to improve job scheduling and resource allocation.",
    highlight: "Implemented greedy algorithms to determine an efficient execution sequence.",
    role: "Lead Developer",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Greedy Algorithms"],
    githubUrl: "https://github.com/impanaas25-pixel",
    demoUrl: null,
    statusBadge: "Pushed to GitHub",
    statusType: "active",
    gitStatus: "Public GitHub Repository",
    gradient: "from-violet-600/30 via-indigo-600/20 to-cyan-600/20",
    problem: "In industrial and operational environments, arbitrary task allocation causes idle processor time, bottlenecks, and missed job deadlines.",
    solution: "StudioYield introduces an algorithmic optimizer utilizing greedy sequencing with deadline constraints to maximize resource throughput and eliminate scheduling latency.",
    architecture: "Three-tier PERN architecture: React dashboard with real-time timeline visualization, Node/Express backend coordinating scheduling routines, and PostgreSQL on Supabase storing task parameters.",
    contribution: "Spearheaded the algorithmic design, formulated the greedy job sequencing logic, structured relational database tables, and crafted the responsive queue management interface."
  },
  {
    id: "urban-flow",
    title: "Urban Flow",
    subtitle: "Eco-Tracker Platform",
    category: "Full-Stack Development",
    shortDescription: "A waste management platform designed to streamline disposal requests, collection workflows, and sustainability tracking.",
    highlight: "Collaborative development of a waste management workflow with location-aware tracking (Collaborative Git Push).",
    role: "Frontend & UI Developer",
    technologies: ["React", "JavaScript", "Node.js", "Vercel"],
    githubUrl: "https://github.com/impanaas25-pixel",
    demoUrl: null,
    statusBadge: "Collaborative Git Push",
    statusType: "active",
    gitStatus: "Collaborative Git Push to Repository",
    gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/20",
    problem: "Urban communities face uncoordinated waste disposal, lack of collection transparency, and zero direct insights into environmental footprints.",
    solution: "Urban Flow unifies residents and sanitation coordinators into a unified digital portal featuring location-aware disposal requests and community eco-metrics.",
    architecture: "Modular React frontend with stateful workflow dispatching, integrated map coordinates, and collaborative repository deployment on Vercel.",
    contribution: "Collaborated on team Git repository workflows, implemented responsive UI components, and integrated location-aware pickup request forms."
  },
  {
    id: "kalasetu-ai",
    title: "KalaSetu-AI",
    subtitle: "Generative AI Artisan Marketplace",
    category: "AI & Innovation",
    shortDescription: "An AI-assisted platform designed to help traditional artisans digitize their crafts, create product catalogues, and connect with wider markets.",
    highlight: "Contributed with Team Code Coven as a Team Member at the Smart India Internal Hackathon at BIET Davangere.",
    role: "Team Member — Team Code Coven",
    technologies: ["React", "Node.js", "Express.js", "Supabase", "Generative AI"],
    githubUrl: null,
    demoUrl: null,
    statusBadge: "SIH Hackathon (Internal)",
    statusType: "hackathon",
    gitStatus: "Internal Hackathon Build (Not Pushed to Git)",
    gradient: "from-purple-600/30 via-violet-600/20 to-pink-600/20",
    problem: "Traditional rural artisans lack technical literacy to write commercial product descriptions and translate craft heritage into modern e-commerce formats.",
    solution: "KalaSetu-AI harnesses generative AI to synthesize captivating multilingual product catalogs and marketplace listings directly from simple artisan voice/text inputs.",
    architecture: "React frontend interfacing with an Express backend, Supabase asset storage, and LLM-powered prompt pipelines for real-time storytelling and catalog generation.",
    contribution: "Active team member in Team Code Coven at BIET SIH: contributed to full-stack integration, assisted in generative AI prompt pipelines, and presented the solution to the evaluation panel."
  },
  {
    id: "craftsetu",
    title: "CraftSetu",
    subtitle: "Artisan Workspace Platform",
    category: "Full-Stack Development",
    shortDescription: "A digital storefront concept that helps traditional artisans showcase handmade products and connect directly with consumers.",
    highlight: "Collaborated with Team Amethyst as a Full-Stack Developer during Hackarena 1.0 at BIET Davangere.",
    role: "Full-Stack Developer — Team Amethyst",
    technologies: ["React", "JavaScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: null,
    demoUrl: null,
    statusBadge: "Hackarena 1.0 (Internal)",
    statusType: "hackathon",
    gitStatus: "Internal Hackathon Build (Not Pushed to Git)",
    gradient: "from-cyan-600/30 via-blue-600/20 to-indigo-600/20",
    problem: "Excessive platform commissions and complex onboarding processes prevent independent artisans from having direct creator-to-consumer relationships.",
    solution: "CraftSetu offers an intuitive digital storefront allowing creators to manage craft inventories, display artisan stories, and sell directly.",
    architecture: "PERN stack architecture optimized with Tailwind CSS for clean layout rendering and PostgreSQL for relational catalog and order records.",
    contribution: "Collaborated with Team Amethyst on relational schema modeling in PostgreSQL, implemented responsive product gallery cards in Tailwind CSS, and optimized the checkout flow."
  }
];

export const skillCategories = [
  {
    name: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "C", context: "Data structures, memory concepts, pointer arithmetic" },
      { name: "Java", context: "Object-oriented architecture, collection frameworks" },
      { name: "Python", context: "Algorithm prototyping, scripting, data automation" }
    ]
  },
  {
    name: "Web & Backend (PERN Stack)",
    icon: "Globe",
    skills: [
      { name: "PERN Stack", context: "PostgreSQL, Express.js, React, Node.js core full-stack focus" },
      { name: "React", context: "Hooks, component lifecycles, interactive state, responsive UI" },
      { name: "Node.js", context: "Event-driven asynchronous backend services and APIs" },
      { name: "Express.js", context: "RESTful API design, routing middleware, endpoint controllers" },
      { name: "Generative AI Integration", context: "Prompt orchestration, LLM API integration" }
    ]
  },
  {
    name: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", context: "Relational database modeling, SQL indexing, tables, integrity constraints" },
      { name: "Supabase", context: "Cloud PostgreSQL hosting, Authentication, storage, and real-time APIs" }
    ]
  },
  {
    name: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", context: "Version control, branching, PR collaboration, team git push" },
      { name: "Visual Studio 2022 Community", context: "IDE workflows, C/C++ debugging & tools" },
      { name: "Railway", context: "Cloud deployment and database orchestration" },
      { name: "Render", context: "Web service hosting and cloud staging" },
      { name: "Lovable", context: "Rapid frontend prototyping and interface iteration" },
      { name: "Replit", context: "Collaborative cloud development environment" },
      { name: "Vercel", context: "Edge deployments and frontend CI/CD automation" },
      { name: "OpenGL", context: "Computer graphics pipeline, shaders, 2D/3D rendering" }
    ]
  }
];

export const spokenLanguages = [
  { name: "Kannada", level: "Native / Mother Tongue", badge: "Native" },
  { name: "English", level: "Professional Working Proficiency", badge: "Fluent" },
  { name: "Hindi", level: "Fluent Working Proficiency", badge: "Fluent" },
  { name: "Marathi", level: "Fluent Spoken & Conversational", badge: "Fluent" },
  { name: "German", level: "Elementary / Basic Conversational", badge: "Basics" }
];

export const certifications = [
  {
    id: "gcp-skill-badges",
    title: "5x Google Cloud Skill Badges",
    issuer: "Google Cloud Platform",
    year: "2026",
    credentialType: "Cloud Competency Badges",
    description: "Earned 5 recognized Google Cloud skill badges demonstrating hands-on proficiency in cloud architecture, security & identity (IAM), and infrastructure management.",
    icon: "Cloud",
    verified: true,
    tags: ["Cloud Architecture", "GCP", "IAM", "Infrastructure"]
  },
  {
    id: "linkedin-ai-ml",
    title: "Introduction to AI & ML",
    issuer: "LinkedIn Learning",
    year: "2026",
    credentialType: "Professional Course Completion",
    description: "Completed comprehensive training on artificial intelligence principles, machine learning paradigms, neural concepts, and modern algorithmic reasoning.",
    icon: "Brain",
    verified: true,
    tags: ["Artificial Intelligence", "Machine Learning", "Data Foundations"]
  }
];

export const timelineEvents = [
  {
    id: "education-current-biet",
    title: "B.E. in Computer Science & Engineering (5th Sem, 3rd Year)",
    institution: "Bapuji Institute of Engineering & Technology (BIET), Davangere",
    role: "Undergraduate Student (5th Sem, 3rd Year)",
    team: "Department of CSE",
    period: "Currently Pursuing • 5th Sem, 3rd Year",
    scoreBadge: "8.65 CGPA (upto 4th Sem)",
    description: "Currently in 5th semester (3rd Year) with an 8.65 CGPA upto 4th semester. Focused on data structures, algorithms, PERN stack web engineering, and artificial intelligence.",
    badge: "Current Degree",
    type: "education"
  },
  {
    id: "sih-hackathon",
    title: "Smart India Internal Hackathon",
    institution: "BIET Davangere",
    role: "Team Member — Team Code Coven",
    team: "Team Code Coven",
    project: "KalaSetu-AI",
    period: "Internal SIH Edition",
    scoreBadge: "Internal Project",
    description: "Contributed as a team member in Team Code Coven, designing KalaSetu-AI to assist traditional artisans in digitizing craft catalogs through generative AI.",
    badge: "Hackathon Milestone",
    type: "hackathon"
  },
  {
    id: "hackarena",
    title: "Hackarena 1.0",
    institution: "BIET Davangere",
    role: "Full-Stack Developer — Team Amethyst",
    team: "Team Amethyst",
    project: "CraftSetu",
    period: "Hackarena 1.0 Edition",
    scoreBadge: "Internal Project",
    description: "Collaborated with Team Amethyst to build CraftSetu, an artisan workspace and direct-to-consumer storefront utilizing the PERN stack and Tailwind CSS.",
    badge: "Hackathon Milestone",
    type: "hackathon"
  },
  {
    id: "education-puc",
    title: "Pre-University Education (PUC / 12th)",
    institution: "Anubhava Mantapa PU College, Davangere",
    role: "PU Science Student",
    team: "PCMB / Science Stream",
    period: "Pre-University Completion",
    scoreBadge: "91.33% in 12th",
    description: "Completed Pre-University Education with an outstanding score of 91.33%, establishing a strong analytical, mathematical, and scientific foundation.",
    badge: "Academic Excellence",
    type: "education"
  },
  {
    id: "education-school",
    title: "Secondary Schooling (10th / SSLC)",
    institution: "Sri Taralabalu Jagadguru Residential School, Davangere",
    role: "High School Student",
    team: "Secondary Education",
    period: "Schooling Completion",
    scoreBadge: "93.12% in 10th",
    description: "Completed secondary education at Sri Taralabalu Jagadguru Residential School with an exemplary 93.12%, cultivating discipline and academic rigor.",
    badge: "Academic Excellence",
    type: "education"
  }
];
