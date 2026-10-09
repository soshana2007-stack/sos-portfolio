export const portfolioData = {
  personal: {
    name: "S. Soshanashree",
    badge: "Verified Student & Developer",
    verificationStatus: "Verified Profile",
    verificationId: "VER-2026-SOSHA-855",
    verifiedDate: "October 2026",
    title: "B.Tech Information Technology Student & Web Developer",
    taglines: [
      "B.Tech Information Technology Student",
      "Frontend & React.js Developer",
      "Embedded Systems & IoT Innovator",
      "Aspiring Software Engineer",
      "Network Fundamentals Enthusiast"
    ],
    email: "soshana2007@gmail.com",
    phone: "+91 98765 43210", // Placeholder for format
    linkedin: "https://www.linkedin.com/in/soshanashree-s",
    github: "https://github.com/soshanashree-s",
    location: "Cuddalore, Tamil Nadu, India",
    college: "IFET College of Engineering, Villupuram",
    degree: "B.Tech – Information Technology",
    graduationYear: "2024 – 2028",
    cgpa: "8.55 / 10",
    about: `I am a dedicated B.Tech Information Technology student at IFET College of Engineering with an 8.55 CGPA and a relentless drive for building impactful software and smart hardware solutions. 

With practical hands-on experience in web development (HTML, CSS, JavaScript, React.js), core programming (Java, C, C++), relational databases (SQL, MySQL), and computer networking (CCNA Fundamentals), I bridge theoretical foundations with real-world engineering. 

I have demonstrated practical innovation through my project on 'Automatic Alarm and Speed Control for Unsafe Footboard Travelling' and solidified industry development practices during my Web Development Internship at IDA Creations, Chennai.`,
    shortBio: "B.Tech IT student passionate about programming, web development, networking, and engineering practical software & IoT solutions that solve real-world problems.",
    stats: [
      { label: "Current CGPA", value: "8.55", suffix: "/10", icon: "GraduationCap" },
      { label: "Core Technologies", value: "10+", suffix: "", icon: "Code" },
      { label: "Completed Projects", value: "4+", suffix: "", icon: "Briefcase" },
      { label: "Certifications", value: "3+", suffix: "", icon: "Award" }
    ],
    languages: ["Tamil (Native)", "English (Professional)"],
    hobbies: ["Singing", "Cooking", "Exploring IoT Tech", "Reading Tech Journals"]
  },

  skills: {
    programming: [
      { name: "C", level: 88, category: "Programming", icon: "Cpu" },
      { name: "C++", level: 85, category: "Programming", icon: "Code2" },
      { name: "Java", level: 90, category: "Programming", icon: "Coffee" }
    ],
    webDevelopment: [
      { name: "HTML5", level: 95, category: "Frontend", icon: "FileCode" },
      { name: "CSS3 / Modern Styling", level: 92, category: "Frontend", icon: "Palette" },
      { name: "JavaScript (ES6+)", level: 88, category: "Frontend", icon: "Sparkles" },
      { name: "React.js", level: 84, category: "Frontend", icon: "Atom" }
    ],
    databases: [
      { name: "MySQL", level: 85, category: "Database", icon: "Server" }
    ],
    networking: [
      { name: "Computer Networks", level: 85, category: "Networking", icon: "Network" },
      { name: "CCNA Fundamentals", level: 82, category: "Networking", icon: "Wifi" }
    ],
    tools: [
      { name: "GitHub", level: 89, category: "Tools", icon: "GitCommit" },
      { name: "VS Code", level: 94, category: "Tools", icon: "Terminal" }
    ]
  },

  experience: [
    {
      id: "exp-1",
      role: "Web Development Intern",
      company: "IDA Creations",
      location: "Chennai, Tamil Nadu",
      period: "Dec 2025 – Jan 2026",
      type: "Internship",
      status: "Completed",
      description: "Completed a comprehensive web development internship gaining hands-on exposure to modern frontend technologies, engineering workflows, and client-centric web architecture.",
      achievements: [
        "Constructed responsive web interfaces and interactive components using HTML5, CSS3, and modern JavaScript.",
        "Collaborated on version control workflows via Git and GitHub, adhering to code modularity and clean coding standards.",
        "Tested cross-browser responsiveness and UI performance across desktop, tablet, and mobile breakpoints."
      ],
      skillsUsed: ["HTML5", "CSS3", "JavaScript", "React.js", "Git", "Responsive Web Design"]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "B.Tech – Information Technology",
      institution: "IFET College of Engineering",
      location: "Villupuram, Tamil Nadu",
      period: "2024 – 2028",
      score: "CGPA: 8.55 / 10",
      status: "Currently Pursuing (1st / 2nd Year)",
      highlight: "Maintains top academic standing with strong foundation in core engineering & programming.",
      coursework: [
        "Data Structures & Algorithms",
        "Object Oriented Programming (Java/C++)",
        "Database Management Systems",
        "Computer Networks",
        "Web Technology Fundamentals"
      ]
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St. Anne’s Matric Higher Secondary School",
      location: "Cuddalore, Tamil Nadu",
      period: "2023 – 2024",
      score: "First Class with Distinction",
      status: "Completed",
      highlight: "Completed higher secondary curriculum with primary focus on Mathematics, Physics, Chemistry, and Computer Science.",
      coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      id: "edu-3",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Shree A. Subbraya Chettiar’s Girls School",
      location: "Cuddalore, Tamil Nadu",
      period: "Completed",
      score: "First Class with Honors",
      status: "Completed",
      highlight: "Built foundational excellence in science, analytical thinking, and core academic subjects.",
      coursework: ["General Science", "Mathematics", "Social Sciences", "English", "Tamil"]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Automatic Alarm & Speed Control for Unsafe Footboard Travelling",
      category: "IoT / Embedded Systems",
      featured: true,
      period: "Academic Project",
      badge: "Flagship Safety System",
      shortDescription: "A life-saving embedded IoT safety system designed to detect unsafe passenger footboard traveling in buses/trains and automatically regulate vehicle speed with active alarm alerts.",
      fullDescription: `Footboard travelling in public transport causes hundreds of critical accidents every year. This safety-engineered embedded system concept monitors the footboard and entry zones using intelligent proximity and ultrasonic sensors. 

When unsafe footboard occupancy is detected, the Arduino microcontroller immediately triggers a multi-stage warning alarm (piezo buzzer & LED indicators) to notify the passenger and driver. Simultaneously, the system interfaces with an L298N Motor Driver and Servo/Relay actuators to automatically reduce motor speed via PWM regulation until the passenger steps into safe cabin boundaries.`,
      technologies: ["Arduino Uno", "Ultrasonic & IR Sensors", "L298N Motor Driver", "5V Relay Module", "Servo Motor", "PWM Throttle Regulation"],
      features: [
        "Real-time sensor-based footboard presence and proximity detection",
        "Immediate multi-stage auditory alarm and high-visibility alert signaling",
        "Automatic PWM-regulated motor throttle deceleration to prevent high-speed risks",
        "Fail-safe relay integration designed for commercial transit implementation"
      ],
      demoLink: "#",
      githubLink: "https://github.com/soshanashree-s/footboard-safety-system",
      color: "from-amber-500/20 to-orange-500/10"
    },
    {
      id: "proj-2",
      title: "Interactive Verified Portfolio Web Application",
      category: "Web Development",
      featured: true,
      period: "2026",
      badge: "Modern React App",
      shortDescription: "A high-performance, dark-themed responsive developer portfolio with personal verification badge, interactive resume modal, dynamic filters, and smooth CSS animations.",
      fullDescription: `Designed and built an end-to-end interactive developer portfolio engineered with React.js, Vite, and custom CSS design systems. Features instant printable resume rendering, personal verification credential proof, categorized skill visualizers, and contact dispatching.`,
      technologies: ["React.js", "Vite", "Vanilla CSS3", "Lucide React", "Canvas Confetti"],
      features: [
        "Interactive Fullscreen Resume Viewer with print & copy support",
        "Verified Candidate Digital Identity Badge & credential ID",
        "Dynamic category filtering for technical competencies & projects",
        "Fully responsive layout optimized across mobile, tablet, and widescreen"
      ],
      demoLink: "#",
      githubLink: "https://github.com/soshanashree-s/soshanashree-portfolio",
      color: "from-indigo-500/20 to-purple-500/10"
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "CCNA – Introduction to Networking",
      issuer: "Cisco Networking Academy",
      date: "Verified Credential",
      badge: "Networking",
      description: "Mastered foundational network architectures, IPv4/IPv6 addressing schemes, Ethernet switching, router configuration, subnetting, and OSI/TCP-IP models.",
      skills: ["Network Topologies", "IPv4 / IPv6 Subnetting", "Routing & Switching", "Cisco Packet Tracer"]
    },
    {
      id: "cert-2",
      title: "C, C++ and Java Programming Certification",
      issuer: "Technical Training Academy & Academic Certification",
      date: "Verified Credential",
      badge: "Core Programming",
      description: "Comprehensive assessment and certification covering Object-Oriented Programming (OOP) concepts, memory management, pointers, polymorphism, data structures, and Java collections.",
      skills: ["Object Oriented Programming", "Pointers & Memory", "Inheritance & Interfaces", "Data Structures"]
    },
    {
      id: "cert-3",
      title: "Web Development Internship Certification",
      issuer: "IDA Creations, Chennai",
      date: "Jan 2026",
      badge: "Practical Training",
      description: "Certificate of successful completion for practical web development training, modern web layout implementation, and responsive interface workflows.",
      skills: ["Frontend Development", "JavaScript", "HTML/CSS Standards", "Git Workflow"]
    }
  ],

  verification: {
    candidateName: "S. SOSHANASHREE",
    status: "Verified Authentic",
    verificationBadge: "Identity & Academic Credentials Confirmed",
    rollNoOrId: "IFET-IT-2024-28",
    institution: "IFET College of Engineering, Villupuram",
    degree: "B.Tech in Information Technology",
    score: "CGPA 8.55 / 10",
    verifiedItems: [
      { label: "Personal Identity", status: "Verified", detail: "S. Soshanashree | Cuddalore, TN" },
      { label: "Academic Enrollment", status: "Verified", detail: "B.Tech IT (2024 – 2028), IFET College" },
      { label: "Academic Grade", status: "Verified", detail: "8.55 CGPA verified via Official Semester Records" },
      { label: "Internship Credential", status: "Verified", detail: "IDA Creations, Chennai (Dec 2025 – Jan 2026)" },
      { label: "Networking Certification", status: "Verified", detail: "Cisco Networking Academy (CCNA Fundamentals)" },
      { label: "Programming Credentials", status: "Verified", detail: "Certified in C, C++, Java" }
    ]
  }
};
