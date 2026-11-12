import type { Project, TechnologyCategory, MusicTrack, Achievement, Milestone } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Prianshu Mitra",
  title: "Engineer · Founder · Builder · Musician",
  tagline: "I build real-world products, explore technology, and create beyond code.",
  location: "Kolkata & Haldia, West Bengal, India",
  email: "prianshumitra.official@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Haldia Institute of Technology",
    year: "3rd Year (Class of 2026)",
    cgpa: "9.03 (through 4th Semester)",
    target: "GATE 2027 CSE Preparation"
  },
  stats: [
    { label: "B.Tech CSE CGPA", value: "9.03", note: "Top 5% Departmental Standing" },
    { label: "Active Users Impacted", value: "100+", note: "Debi-Dorshon Real-Time Users" },
    { label: "NPTEL Java Certification", value: "94%", note: "Elite + Gold Top Pan-India" },
    { label: "Hackathon Accolades", value: "3+", note: "Avalon, Odoo & Tata Finalist" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "debi-dorshon",
    title: "Debi-Dorshon",
    tagline: "Durga Puja Discovery & Navigation Platform",
    role: "Founder & Lead Developer",
    category: "Founder & Full Stack",
    period: "2024 - Present",
    featured: true,
    metrics: [
      "100+ Concurrent Real-Time Users",
      "150+ Mapped Pandals across Kolkata",
      "Real-Time Transit & Metro Routing"
    ],
    description: "A comprehensive digital companion for Kolkata's UNESCO-recognized Durga Puja, mapping grand heritage and community pandals with live route navigation, crowd heatmaps, and transport integration.",
    longDescription: [
      "Built from the ground up to solve the acute navigational chaos experienced by millions during Kolkata's Durga Puja. Debi-Dorshon unifies pandal schedules, thematic insights, nearest metro/bus routes, and emergency assistance.",
      "Engineered an offline-first caching layer ensuring travelers maintain navigation even through severe network congestion around crowded pandal perimeters.",
      "Served over 100 concurrent real-time festival explorers during its inaugural release with zero downtime."
    ],
    highlights: [
      "Interactive map engine with optimized SVG markers and cluster rendering",
      "Kolkata Metro line overlay with station gate exits closest to pandals",
      "Crowd density estimation powered by real-time visitor check-ins",
      "Bilingual interface (Bengali & English) honoring regional heritage"
    ],
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Leaflet", "Tailwind CSS", "Docker"],
    architecture: [
      "High-throughput FastAPI microservice serving geo-spatial queries",
      "PostgreSQL with PostGIS extension for distance radius searches",
      "Vite + React single-page application with PWA offline caching"
    ],
    liveUrl: "#",
    githubUrl: "#",
    bannerGradient: "from-amber-950/60 via-stone-900 to-stone-950",
    accentColor: "#D99A35"
  },
  {
    id: "rentify",
    title: "Rentify",
    tagline: "Next-Generation Rental Commerce & Lifecycle Management",
    role: "Full Stack Architect",
    category: "Full Stack System",
    period: "2024",
    featured: true,
    metrics: [
      "Automated Return Condition Auditing",
      "Multi-Day Dynamic Availability Engine",
      "Automated Security Escrow Calculation"
    ],
    description: "An enterprise-grade rental commerce system providing dynamic inventory scheduling, security deposit management, and strict condition check-in/check-out workflows.",
    longDescription: [
      "Rentify bridges the operational gap between peer-to-peer and commercial rental services. Rather than simple sales checkout, it governs complex multi-day time-slotted bookings with damage penalty assessments.",
      "Implemented a structured state-machine for item lifecycles: Available -> Reserved -> Active Rent -> In-Transit Return -> Inspection -> Cleared/Penalized.",
      "Integrated automated condition reports with image uploads and timestamped inspection checklists to eliminate landlord-tenant disputes."
    ],
    highlights: [
      "Real-time calendar matrix preventing overlapping reservations",
      "Automated damage penalty and deposit refund calculation engine",
      "Role-based dashboards for renters, item hosts, and service inspectors",
      "Detailed invoice generation with dynamic tax and deposit accounting"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT Auth", "Cloudinary"],
    architecture: [
      "Modular REST backend structured around idempotent booking transactions",
      "MongoDB aggregation pipelines for time-window intersection matching",
      "Optimistic UI updates for high-response booking reservations"
    ],
    liveUrl: "#",
    githubUrl: "#",
    bannerGradient: "from-emerald-950/60 via-stone-900 to-stone-950",
    accentColor: "#526B39"
  },
  {
    id: "quizreto",
    title: "Quizreto",
    tagline: "High-Concurrency Real-Time Assessment Platform",
    role: "Full Stack Developer",
    category: "Web Platform",
    period: "2024",
    featured: true,
    metrics: [
      "Sub-50ms Synchronized Score Updates",
      "Automated Anti-Tab Switching Detection",
      "Dynamic Question Randomization"
    ],
    description: "An intuitive online examination and quiz ecosystem enabling dynamic question generation, timed assessments, strict proctoring signals, and instant analytics.",
    longDescription: [
      "Designed for institutions, clubs, and peer competitions requiring dependable live evaluation with tamper resistance.",
      "Built with a responsive client-side exam shell that gracefully handles sudden packet drops while continuously validating timer heartbeats against server-side epoch records.",
      "Includes an administrative test builder with mathematical LaTeX expression rendering, code snippet syntax highlighting, and batch CSV imports."
    ],
    highlights: [
      "Strict proctoring monitor flagging focus-loss, window blur, and key combos",
      "Live leaderboards updating instantaneously upon quiz conclusion",
      "Comprehensive performance breakdown analyzing accuracy by topic",
      "Adaptive question pacing with customizable penalty matrices"
    ],
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "Tailwind CSS"],
    architecture: [
      "FastAPI asynchronous event loops delivering low-latency quiz submissions",
      "SQLAlchemy ORM with Alembic schema migrations",
      "Structured JWT authentication with session timeout enforcement"
    ],
    liveUrl: "#",
    githubUrl: "#",
    bannerGradient: "from-amber-950/40 via-stone-900 to-stone-950",
    accentColor: "#F5B94F"
  }
];

export const TECHNOLOGIES: TechnologyCategory[] = [
  {
    name: "Core Languages",
    description: "Foundational languages used for systems programming, data structures, and enterprise logic.",
    skills: [
      { name: "Java", level: "94% Elite+Gold", tag: "Enterprise & OOP", details: "Certified NPTEL Gold & Elite (IIT Kharagpur). Advanced OOP, multithreading, collections, memory management." },
      { name: "Python", level: "Advanced", tag: "Backends & Scripting", details: "FastAPI, async IO, data handling, automation pipelines, algorithmic scripting." },
      { name: "C", level: "Proficient", tag: "Systems & Memory", details: "Pointers, memory allocation, OS concepts, fundamental data structures & algorithms." },
      { name: "TypeScript", level: "Advanced", tag: "Type-Safe Web", details: "Strict generics, union types, React component interfaces, full-stack safety." },
      { name: "JavaScript", level: "Advanced", tag: "ES6+ & Async", details: "Event loops, DOM manipulation, async/await, closures, modern build tooling." }
    ]
  },
  {
    name: "Frontend Development",
    description: "Modern interactive web applications engineered for performance, beauty, and accessibility.",
    skills: [
      { name: "React", level: "Advanced", tag: "Component Architecture", details: "React 19, custom hooks, context, state optimization, component lifecycles." },
      { name: "Tailwind CSS", level: "Advanced", tag: "Design Systems", details: "Utility-first design, dark mode architecture, custom responsive tokens, fluid typography." },
      { name: "HTML5 & Semantic Web", level: "Mastery", tag: "Standards & SEO", details: "Accessible landmarks, SEO metadata, semantic DOM layout, canvas fundamentals." },
      { name: "CSS3 / Modern CSS", level: "Advanced", tag: "Layout & Motion", details: "Flexbox, CSS Grid, custom properties, keyframe animations, 3D transforms, glassmorphism." },
      { name: "Vite", level: "Proficient", tag: "Fast Tooling", details: "Hot module reloading, bundle optimization, environment variables, tree-shaking." }
    ]
  },
  {
    name: "Backend Architecture",
    description: "Robust, scalable API services and asynchronous server environments.",
    skills: [
      { name: "FastAPI", level: "Advanced", tag: "Async Python APIs", details: "High-throughput asynchronous routes, Pydantic schemas, OpenAPI docs, dependency injection." },
      { name: "Node.js", level: "Proficient", tag: "Server Runtime", details: "RESTful architecture, event emitters, stream processing, middleware pipelines." },
      { name: "Express", level: "Proficient", tag: "Microservices", details: "Route structuring, error handlers, secure CORS, authentication middlewares." },
      { name: "RESTful APIs", level: "Advanced", tag: "Protocol Design", details: "Stateless architecture, idempotent methods, HTTP status semantics, payload compression." }
    ]
  },
  {
    name: "Databases & ORM",
    description: "Reliable relational models, document stores, and schema evolution.",
    skills: [
      { name: "PostgreSQL", level: "Proficient", tag: "Relational Power", details: "Relational schema design, complex joins, index optimization, JSONB fields, constraints." },
      { name: "MongoDB", level: "Proficient", tag: "Document Store", details: "BSON schemas, indexing strategies, aggregation pipelines, flexible collection models." },
      { name: "SQLAlchemy", level: "Proficient", tag: "Python ORM", details: "Declarative models, relationship mapping, session scoping, query optimizations." },
      { name: "Alembic", level: "Proficient", tag: "Database Migrations", details: "Version-controlled database schema migrations, revision branches, non-destructive rollbacks." }
    ]
  },
  {
    name: "Engineering & DevOps",
    description: "Containerization, version control, and production development workflows.",
    skills: [
      { name: "Docker", level: "Proficient", tag: "Containerization", details: "Multi-stage Dockerfiles, docker-compose orchestration, reproducible environment parity." },
      { name: "Git & GitHub", level: "Advanced", tag: "Version Control", details: "Branching strategies, interactive rebasing, merge resolution, PR reviews, release tagging." },
      { name: "Linux / Shell", level: "Proficient", tag: "Environments", details: "Bash scripting, process monitoring, permissions, package managers, server deployment." },
      { name: "Postman", level: "Proficient", tag: "API Testing", details: "Automated test collections, environment variables, mock servers, pre-request scripts." }
    ]
  }
];

export const MUSIC_TRACKS: MusicTrack[] = [
  {
    id: "dil-ki-arzoon",
    title: "Dil Ki Arzoon",
    subtitle: "Acoustic Vocal Cover & Cinematic Reimagination",
    type: "Vocal Cover",
    genre: "Acoustic Ballad / Contemporary Hindi",
    duration: "3:42",
    releaseYear: "2024",
    daw: "Steinberg Cubase Pro",
    description: "A warm, soul-stirring vocal reinterpretation layered over warm fingerpicked acoustic guitar, subtle ambient synth pads, and analog room reverb. Produced, tracked, and engineered in my home workspace.",
    tags: ["Vocals", "Acoustic Guitar", "Cubase", "Vocal Production"],
    waveformPoints: [20, 35, 55, 40, 70, 85, 95, 60, 45, 80, 90, 75, 60, 85, 100, 90, 70, 50, 65, 80, 95, 85, 45, 30]
  },
  {
    id: "sudhu-tomari-jonyo",
    title: "Sudhu Tomari Jonyo",
    subtitle: "Soulful Bengali Melody & Harmonized Layers",
    type: "Vocal Cover",
    genre: "Bengali Modern Romance / Indie Acoustic",
    duration: "4:15",
    releaseYear: "2024",
    daw: "Steinberg Cubase Pro",
    description: "A heartfelt Bengali ballad showcasing dynamic vocal range, delicate falsetto transitions, and stereo vocal harmonies. Recorded with studio condenser mic through high-fidelity preamps.",
    tags: ["Bengali Indie", "Vocals", "Stereo Harmonies", "Acoustic"],
    waveformPoints: [15, 25, 45, 65, 80, 75, 90, 100, 85, 70, 60, 85, 95, 90, 80, 65, 75, 90, 85, 70, 50, 35, 25, 15]
  },
  {
    id: "midnight-raga-jam",
    title: "Midnight Raga Explorations",
    subtitle: "Acoustic Fingerstyle & Ambient Synthesis",
    type: "Original Arrangement",
    genre: "Ambient Fusion / Eastern Acoustic",
    duration: "2:58",
    releaseYear: "2025",
    daw: "Steinberg Cubase Pro",
    description: "An evocative instrumental fusion born from late-night studio sessions: open-tuning acoustic guitar melodic runs paired with warm 25-key MIDI synth basslines and gentle Kolkata rain textures.",
    tags: ["Fingerstyle Guitar", "MIDI Synthesizer", "Ambient", "Original"],
    waveformPoints: [10, 20, 30, 50, 60, 75, 80, 85, 90, 80, 65, 55, 70, 80, 85, 75, 60, 45, 35, 25, 20, 15, 10, 5]
  }
];

export const AUDIO_GEAR = [
  { name: "Steinberg Cubase Pro", category: "Digital Audio Workstation", role: "Primary tracking, multitrack mixing, MIDI arrangement & automation" },
  { name: "Studio Condenser Mic", category: "Acoustic Transducer", role: "Detailed vocal tracking with shockmount isolation and pop protection" },
  { name: "Acoustic Cutaway Guitar", category: "Core Instrument", role: "Natural wood tone for fingerstyle arpeggios and rhythmic acoustic beds" },
  { name: "25-Key Mini MIDI Controller", category: "MIDI Controller", role: "Pitch-bend, octave shifting, velocity-sensitive synth bass and chord sequencing" },
  { name: "Yellow-Cone Studio Monitors", category: "Acoustic Monitoring", role: "Accurate nearfield stereo imaging and balanced low-frequency monitoring" },
  { name: "Over-Ear Studio Headphones", category: "Reference Monitoring", role: "Closed-back critical isolation for vocal tracking and detailed EQ balance" }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "avalon-hackathon",
    title: "Avalon International Hackathon",
    organization: "Global Hackathon Community",
    award: "Third Prize Winner (🥉)",
    year: "2024",
    type: "Hackathon",
    badge: "International Recognition",
    description: "Awarded 3rd Prize among hundreds of international developer teams for conceptualizing, engineering, and deploying an innovative technological solution addressing real-world community challenges within 36 hours.",
    stats: "3rd Place · Pan-International Developer Cohort",
    accent: "#D99A35"
  },
  {
    id: "odoo-hackathon",
    title: "Odoo × Adamas University Hackathon",
    organization: "Odoo India & Adamas University",
    award: "Grand Finalist 🏆",
    year: "2024",
    type: "Hackathon",
    badge: "Top Finalist",
    description: "Advanced to the grand finals of the enterprise hackathon, delivering an automated ERP workflow module with real-time inventory synchronization and role-based operational permissions.",
    stats: "Grand Finalist · Enterprise ERP Track",
    accent: "#F5B94F"
  },
  {
    id: "tata-imagination",
    title: "Tata Imagination Challenge 2026",
    organization: "The Tata Group",
    award: "Quarter-Finalist 🌟",
    year: "2026",
    type: "Competition",
    badge: "National Contender",
    description: "Recognized as a Quarter-Finalist in India's prestigious idea and leadership contest organized by the Tata Group, competing against thousands of top engineering and business minds nationwide.",
    stats: "Top Percentile · Pan-India Selection",
    accent: "#D99A35"
  },
  {
    id: "nptel-java",
    title: "Programming in Java (NPTEL)",
    organization: "IIT Kharagpur / Ministry of Education, India",
    award: "Elite + Gold Medalist (94%) 🥇",
    year: "2024",
    type: "National Exam",
    badge: "Top 1% Pan-India",
    description: "Achieved an outstanding score of 94% with Elite + Gold recognition in the comprehensive national exam on Advanced Java, multithreading, OOP paradigms, and standard library internals.",
    stats: "Score: 94% · Elite + Gold Category",
    accent: "#526B39"
  },
  {
    id: "academic-excellence",
    title: "B.Tech CSE Academic Standing",
    organization: "Haldia Institute of Technology",
    award: "CGPA 9.03 / 10.0 📜",
    year: "2023 - Present",
    type: "Academic",
    badge: "Top Departmental Rank",
    description: "Maintained a consistent 9.03 cumulative grade point average across the first 4 semesters in Computer Science & Engineering, with subject masteries across Operating Systems, DBMS, Algorithms, and Discrete Math.",
    stats: "CGPA 9.03 · 4 Semesters Consistent",
    accent: "#F0E8D8"
  }
];

export const JOURNEY_MILESTONES: Milestone[] = [
  {
    year: "2023",
    period: "August 2023",
    title: "Commenced B.Tech in Computer Science & Engineering",
    institution: "Haldia Institute of Technology",
    description: "Began undergraduate engineering journey with a sharp focus on foundational computer science: C programming, discrete mathematics, digital logic, and memory mechanics.",
    tags: ["Algorithms", "C Programming", "Discrete Mathematics", "HIT"],
    badge: "Academic Genesis"
  },
  {
    year: "2024",
    period: "Early 2024",
    title: "NPTEL Gold & Hackathon Triumphs",
    institution: "IIT Kharagpur & Avalon Hackathon",
    description: "Secured 94% Elite + Gold in NPTEL Java. Competed in the Avalon International Hackathon winning 3rd Prize, followed by reaching the grand finals of the Odoo Hackathon.",
    tags: ["Java Elite+Gold", "Avalon 3rd Prize", "Odoo Finalist", "FastAPI"],
    badge: "Competitive Breakthrough"
  },
  {
    year: "2024",
    period: "Festival Season 2024",
    title: "Founded & Deployed Debi-Dorshon",
    institution: "Independent Founder",
    description: "Conceptualized and engineered Debi-Dorshon to solve Kolkata's Durga Puja navigation challenges. Mapped 150+ pandals, served over 100 concurrent real-time explorers, and delivered rock-solid offline routing.",
    tags: ["Debi-Dorshon", "Product Launch", "100+ Users", "PostGIS"],
    badge: "Founder & Shipper"
  },
  {
    year: "2025",
    period: "2025",
    title: "Full-Stack Expansion: Rentify & Quizreto",
    institution: "Engineering Systems",
    description: "Architected Rentify (multi-stage rental lifecycle engine) and Quizreto (low-latency examination platform). Solidified containerization with Docker and schema evolution with Alembic.",
    tags: ["Rentify", "Quizreto", "Docker", "MongoDB", "PostgreSQL"],
    badge: "Systems Architect"
  },
  {
    year: "2026",
    period: "Current Focus",
    title: "Tata Imagination Challenge & Systems Mastery",
    institution: "Tata Group & 3rd Year B.Tech",
    description: "Celebrated Quarter-Finalist recognition in Tata Imagination Challenge. Sustaining 9.03 CGPA while deepening knowledge in distributed operating systems, asynchronous event loops, and audio engineering.",
    tags: ["Tata Quarter-Finalist", "9.03 CGPA", "Distributed Systems", "Audio DSP"],
    badge: "Active Pursuit"
  },
  {
    year: "2027",
    period: "Future Horizon",
    title: "GATE 2027 CSE & Advanced Research Ambitions",
    institution: "Targeting Premier Research Institutions (IISc / IITs)",
    description: "Dedicated preparation for GATE 2027 in Computer Science & Information Technology. Aiming to pursue advanced research in Systems Engineering, Scalable Distributed Networks, and Applied AI.",
    tags: ["GATE 2027 CSE", "Systems Research", "IIT / IISc", "Future Vision"],
    badge: "Vision 2027"
  }
];
