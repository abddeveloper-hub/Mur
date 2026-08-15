// AI Nexus Academy - Platform Data & Configuration

const ACADEMY_DATA = {
  academyName: "AI Nexus Academy",
  tagline: "Empowering the Next Generation of AI Innovators & Leaders",
  contactEmail: "abddeveloper@gmail.com",
  contactPhones: ["+91 9844691633", "+91 9061106019", "+91 9061106009"],
  contactPhone: "+91 9844691633 / +91 9061106019 / +91 9061106009",
  
  // 1. Pure AI Course Tracks & Specializations
  courses: [
    {
      id: "ai-beginners",
      code: "AI-101",
      tier: "Low Tier (Foundation)",
      title: "Generative AI & No-Code AI Automation",
      category: "Generative AI & Prompt Engineering",
      level: "Beginner",
      badge: "🌱 Low Tier · Foundation AI",
      duration: "4 Weeks (32 Hours)",
      format: "Live Interactive AI Cohort",
      price: 1500,
      originalPrice: 2200,
      rating: 4.9,
      reviewCount: 340,
      icon: "fa-robot",
      gradient: "linear-gradient(135deg, #00f0ff 0%, #0072ff 100%)",
      accentColor: "#00f0ff",
      description: "Master everyday Generative AI tools for productivity, creative multimodal generation, business workflows, and building custom AI bots without writing code.",
      highlights: [
        "Advanced Prompt Engineering with ChatGPT-4o, Claude 3.5 & Perplexity AI",
        "Multimodal AI Generation: High-res visual & video creation with Midjourney v6",
        "No-Code AI Automation: Connect LLMs to workflows with Zapier & Make AI",
        "Build Custom Enterprise AI Chatbots & Vector Knowledge Bases"
      ],
      syllabus: [
        { week: "Week 1", title: "Prompt Engineering & Advanced Large Language Model Strategies" },
        { week: "Week 2", title: "Multimodal AI: Image, Video & Voice Generation (Midjourney v6)" },
        { week: "Week 3", title: "Autonomous No-Code AI Agents & Business Automation" },
        { week: "Week 4", title: "Capstone: Deploying a Multi-Tool AI Business Assistant" }
      ],
      prerequisites: "No coding or math required. Designed for all professionals and creators."
    },
    {
      id: "applied-ml-ds",
      code: "AI-201",
      tier: "Mid Tier (Professional)",
      title: "Applied Machine Learning & Deep Learning AI",
      category: "Core AI Algorithms & Neural Networks",
      level: "Intermediate",
      badge: "⭐ Mid Tier · Professional ML",
      duration: "8 Weeks (64 Hours)",
      format: "Live AI Cohort + Cloud GPU Mentorship",
      price: 2500,
      originalPrice: 3500,
      rating: 4.95,
      reviewCount: 520,
      icon: "fa-brain",
      gradient: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
      accentColor: "#a855f7",
      description: "Learn to build, train, and optimize machine learning and deep learning neural networks using Python, PyTorch, Scikit-learn, and computer vision / NLP models.",
      highlights: [
        "Python for AI: Vectorized computation with NumPy, Pandas & Data Pipelines",
        "Classical Machine Learning: Supervised, Unsupervised & XGBoost Models",
        "Deep Neural Networks & Backpropagation with PyTorch",
        "Computer Vision & NLP: Image classification, object detection & text embeddings",
        "Deploying Predictive AI Models via Cloud REST APIs (FastAPI)"
      ],
      syllabus: [
        { week: "Week 1-2", title: "Python for AI & High-Performance Data Processing" },
        { week: "Week 3-4", title: "Supervised & Unsupervised Machine Learning Algorithms" },
        { week: "Week 5-6", title: "Deep Learning Foundations & PyTorch Neural Networks" },
        { week: "Week 7-8", title: "Capstone: Production Deep Learning AI System on Cloud" }
      ],
      prerequisites: "Basic programming logic (any language) and high-school math."
    },
    {
      id: "genai-agents",
      code: "AI-301",
      tier: "High Tier (Advanced)",
      title: "LLMs, Enterprise RAG & Autonomous AI Agents",
      category: "Advanced Generative AI & Multi-Agent Swarms",
      level: "Advanced",
      badge: "🔥 High Tier · Enterprise LLMs",
      duration: "10 Weeks (80 Hours)",
      format: "Live AI Lab + 1-on-1 AI Architecture Reviews",
      price: 3500,
      originalPrice: 4800,
      rating: 4.98,
      reviewCount: 710,
      icon: "fa-network-wired",
      gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
      accentColor: "#ec4899",
      description: "Architect cutting-edge enterprise AI systems: Retrieval-Augmented Generation (RAG), Vector DBs, LangChain, LangGraph, and Autonomous Multi-Agent Swarms with CrewAI.",
      highlights: [
        "Enterprise RAG Architecture: Chunking strategies, hybrid search & re-ranking",
        "Vector Databases in Production: Pinecone, ChromaDB, Qdrant & Embeddings",
        "Multi-Agent AI Swarms: Autonomous reasoning with CrewAI & LangGraph",
        "Open-Source LLM Fine-Tuning with LoRA / QLoRA (Llama 3 & Mistral)",
        "Real-time Multimodal AI Agents with Voice, Vision & Function Calling"
      ],
      syllabus: [
        { week: "Week 1-2", title: "LLM Architectures, Attention Mechanisms & Token Optimization" },
        { week: "Week 3-4", title: "Production RAG Pipelines: Vector Search & Knowledge Retrieval" },
        { week: "Week 5-7", title: "Autonomous Multi-Agent AI Systems (CrewAI & LangGraph)" },
        { week: "Week 8-10", title: "Capstone: Enterprise Autonomous AI Copilot in Production" }
      ],
      prerequisites: "Python proficiency and basic understanding of REST APIs."
    },
    {
      id: "fullstack-ai-engineer",
      code: "AI-401",
      tier: "Highest Tier (Masterclass)",
      title: "Full-Stack AI Engineering & Cloud MLOps",
      category: "Production AI Infrastructure & AI SaaS",
      level: "All Levels to AI Pro",
      badge: "🚀 Highest Tier · Full-Stack AI Pro",
      duration: "14 Weeks (120 Hours)",
      format: "Intensive Live AI Bootcamp + Career Placement",
      price: 5000,
      originalPrice: 6800,
      rating: 5.0,
      reviewCount: 430,
      icon: "fa-microchip",
      gradient: "linear-gradient(135deg, #10b981 0%, #00f0ff 100%)",
      accentColor: "#10b981",
      description: "Master the complete lifecycle of production AI software: from training and fine-tuning models to building full-stack AI web interfaces, containerization, and cloud GPU MLOps.",
      highlights: [
        "Full AI Stack: Async FastAPI Backends + Next.js React AI SDK Interfaces",
        "Production AI MLOps: Docker, Kubernetes, Weights & Biases, MLflow",
        "Low-Latency Cloud GPU Serving: vLLM, TensorRT-LLM on AWS & GCP GPUs",
        "AI Safety, Guardrails, Latency Optimization & Token Cost Management",
        "1-on-1 AI Portfolio Review, Mock AI Tech Interviews & Hiring Referrals"
      ],
      syllabus: [
        { week: "Week 1-4", title: "Core ML & Modern Generative AI Engineering" },
        { week: "Week 5-8", title: "Full-Stack AI SaaS: FastAPI, Next.js & Streaming UI" },
        { week: "Week 9-11", title: "Production MLOps: Cloud GPU Inference, Docker & Scaling" },
        { week: "Week 12-14", title: "Grand Capstone & AI Career Placement Accelerator" }
      ],
      prerequisites: "Open to all motivated learners. Includes complete AI foundation module."
    }
  ],

  // 2. Available Batches with Live Capacity
  batches: [
    {
      id: "batch-weekend-am",
      name: "Weekend Cohort - Morning",
      schedule: "Sat & Sun | 09:00 AM - 01:00 PM EST",
      mode: "Live Interactive Zoom + Recording Access",
      startDate: "Sept 05, 2026",
      maxSeats: 30,
      enrolledSeats: 0,
      status: "Open Enrollment"
    },
    {
      id: "batch-weekday-pm",
      name: "Weekday Cohort - Evening",
      schedule: "Tue & Thu | 07:00 PM - 10:00 PM EST",
      mode: "Live Interactive Zoom + Recording Access",
      startDate: "Sept 08, 2026",
      maxSeats: 30,
      enrolledSeats: 0,
      status: "Open Enrollment"
    },
    {
      id: "batch-hybrid-flex",
      name: "Hybrid Self-Paced + Weekly Office Hours",
      schedule: "Flexible Hours + Sunday Live Mentor Sync (11 AM EST)",
      mode: "On-Demand Video Modules + Weekly Live Lab",
      startDate: "Instant Access Upon Enrollment",
      maxSeats: 50,
      enrolledSeats: 0,
      status: "Open Enrollment"
    }
  ],

  // 3. Add-on Options for Customizer Wizard (4B)
  addons: [
    {
      id: "addon-gpu",
      name: "Dedicated Cloud GPU Lab Pass (A100/H100 Credits)",
      price: 499,
      description: "50 hours of cloud GPU compute for training models without needing high-end local hardware."
    },
    {
      id: "addon-mentorship",
      name: "3x 1-on-1 VIP Mentor Strategy Sessions",
      price: 799,
      description: "Direct 45-minute private code & project review sessions with senior AI engineers."
    },
    {
      id: "addon-career",
      name: "AI Portfolio & Career Placement Accelerator",
      price: 999,
      description: "AI resume tailoring, LinkedIn optimization, mock tech interview, and hiring partner referrals."
    }
  ],

  // 4. Promo Vouchers (3C)
  vouchers: {
    "FUTUREAI20": { discountPercent: 20, description: "20% Early Bird AI Innovator Discount" },
    "STUDENT50": { discountPercent: 50, description: "50% University / Student Scholarship Voucher" },
    "LAUNCH100": { flatDiscount: 500, description: "₹500 Flat Launch Special Voucher" }
  },

  // 5. Initial Registrations (Starting at 0)
  initialStudents: [],

  // 6. Testimonials
  testimonials: [
    {
      name: "Marcus Vance",
      role: "AI Product Specialist at TechVentures",
      text: "The AI for Beginners track completely transformed how our business team operates. We automated 15+ hours of repetitive research weekly using custom GPTs and Zapier.",
      avatar: "MV",
      rating: 5
    },
    {
      name: "Dr. Priya Sharma",
      role: "ML Researcher & Lead Engineer",
      text: "The GenAI & Agents curriculum is the most up-to-date program anywhere. We built actual multi-agent systems and RAG pipelines that landed me senior AI offers.",
      avatar: "PS",
      rating: 5
    },
    {
      name: "Liam O'Connor",
      role: "Full-Stack AI Developer",
      text: "From zero neural network experience to deploying an end-to-end LLM application on cloud GPUs. The instructor mentorship was world-class.",
      avatar: "LO",
      rating: 5
    }
  ],

  // 7. Initial Capstone Projects (Starting at 0)
  initialCapstones: [],

  // 8. Initial Mentorship Messages (Starting at 0)
  initialMessages: []
};

// Storage helper to persist data
const StorageService = {
  init: function() {
    if (!localStorage.getItem("nexus_clean_zero_v2")) {
      localStorage.setItem("nexus_students", JSON.stringify([]));
      localStorage.removeItem("nexus_current_student");
      localStorage.setItem("nexus_capstones", JSON.stringify([]));
      localStorage.setItem("nexus_messages", JSON.stringify([]));
      localStorage.setItem("nexus_batches", JSON.stringify(ACADEMY_DATA.batches));
      localStorage.setItem("nexus_clean_zero_v2", "true");
    }
    this.getStudents();
    this.getBatches();
    this.getCapstones();
    this.getMessages();
  },

  getStudents: function() {
    const data = localStorage.getItem("nexus_students");
    let rawList = ACADEMY_DATA.initialStudents;
    if (data) {
      try {
        rawList = JSON.parse(data);
      } catch(e) {
        rawList = ACADEMY_DATA.initialStudents;
      }
    }

    // De-duplicate by unique student ID and email
    const seenIds = new Set();
    const seenEmails = new Set();
    const uniqueStudents = [];

    rawList.forEach(s => {
      if (!s || !s.id) return;
      const emailLower = (s.email || '').toLowerCase();
      if (!seenIds.has(s.id) && (!emailLower || !seenEmails.has(emailLower))) {
        seenIds.add(s.id);
        if (emailLower) seenEmails.add(emailLower);

        if (s.certificateAllotted === undefined) {
          s.certificateAllotted = s.status === 'Confirmed';
          s.certificateId = s.certificateId || `G-NEX-2026-${s.id.split('-').pop()}`;
          s.certificateGrade = s.certificateGrade || "Distinction (98%)";
          s.certificateDate = s.certificateDate || new Date().toISOString().slice(0, 10);
        }
        uniqueStudents.push(s);
      }
    });

    localStorage.setItem("nexus_students", JSON.stringify(uniqueStudents));
    return uniqueStudents;
  },
  
  saveStudent: function(student) {
    let students = this.getStudents();
    const emailLower = (student.email || '').toLowerCase();
    
    // Remove any duplicate records matching ID or Email
    students = students.filter(s => s.id !== student.id && (!emailLower || s.email.toLowerCase() !== emailLower));

    if (student.certificateAllotted === undefined) {
      student.certificateAllotted = false;
      student.certificateId = "";
      student.certificateGrade = "";
      student.certificateDate = "";
    }
    students.unshift(student);
    localStorage.setItem("nexus_students", JSON.stringify(students));
    localStorage.setItem("nexus_current_student", JSON.stringify(student));
    this.incrementBatchSeat(student.batchId);

    // Sync to Firebase Cloud Firestore & Realtime DB
    if (typeof FirebaseService !== 'undefined' && FirebaseService.isInitialized) {
      FirebaseService.saveStudentAdmission(student);
    }

    return student;
  },

  getCurrentStudent: function() {
    const data = localStorage.getItem("nexus_current_student");
    if (data) {
      try { return JSON.parse(data); } catch(e) {}
    }
    const students = this.getStudents();
    return students.length > 0 ? students[0] : null;
  },

  setCurrentStudent: function(student) {
    localStorage.setItem("nexus_current_student", JSON.stringify(student));
  },

  updateStudentStatus: function(studentId, newStatus) {
    const students = this.getStudents();
    const target = students.find(s => s.id === studentId);
    if (target) {
      target.status = newStatus;
      localStorage.setItem("nexus_students", JSON.stringify(students));
      
      const current = this.getCurrentStudent();
      if (current && current.id === studentId) {
        current.status = newStatus;
        localStorage.setItem("nexus_current_student", JSON.stringify(current));
      }
      return true;
    }
    return false;
  },

  // Allot certificate to a student by Admin
  allotCertificate: function(studentId, certDetails = {}) {
    const students = this.getStudents();
    const target = students.find(s => s.id === studentId);
    if (target) {
      target.certificateAllotted = true;
      target.certificateId = certDetails.id || `G-NEX-2026-${target.id.split('-').pop()}`;
      target.certificateGrade = certDetails.grade || "Distinction (98%)";
      target.certificateDate = certDetails.date || new Date().toISOString().slice(0, 10);
      target.status = target.status === 'Pending' ? 'Confirmed' : target.status;
      
      localStorage.setItem("nexus_students", JSON.stringify(students));

      const current = this.getCurrentStudent();
      if (current && current.id === studentId) {
        current.certificateAllotted = true;
        current.certificateId = target.certificateId;
        current.certificateGrade = target.certificateGrade;
        current.certificateDate = target.certificateDate;
        localStorage.setItem("nexus_current_student", JSON.stringify(current));
      }
      return target;
    }
    return null;
  },

  // Revoke certificate allotment
  revokeCertificate: function(studentId) {
    const students = this.getStudents();
    const target = students.find(s => s.id === studentId);
    if (target) {
      target.certificateAllotted = false;
      localStorage.setItem("nexus_students", JSON.stringify(students));

      const current = this.getCurrentStudent();
      if (current && current.id === studentId) {
        current.certificateAllotted = false;
        localStorage.setItem("nexus_current_student", JSON.stringify(current));
      }
      return true;
    }
    return false;
  },

  // Allot certificates in bulk to all students
  allotAllCertificates: function() {
    const students = this.getStudents();
    students.forEach(s => {
      s.certificateAllotted = true;
      s.certificateId = s.certificateId || `G-NEX-2026-${s.id.split('-').pop()}`;
      s.certificateGrade = s.certificateGrade || "Distinction (98%)";
      s.certificateDate = s.certificateDate || new Date().toISOString().slice(0, 10);
      s.status = "Confirmed";
    });
    localStorage.setItem("nexus_students", JSON.stringify(students));
    return students;
  },

  // ------------------------------------------------------------------------
  // CAPSTONE PROJECT PORTAL STORAGE
  // ------------------------------------------------------------------------
  getCapstones: function() {
    const data = localStorage.getItem("nexus_capstones");
    let rawList = ACADEMY_DATA.initialCapstones;
    if (data) {
      try {
        rawList = JSON.parse(data);
      } catch(e) {
        rawList = ACADEMY_DATA.initialCapstones;
      }
    }
    
    // De-duplicate capstones by ID
    const seen = new Set();
    const unique = [];
    rawList.forEach(c => {
      if (c && c.id && !seen.has(c.id)) {
        seen.add(c.id);
        unique.push(c);
      }
    });

    localStorage.setItem("nexus_capstones", JSON.stringify(unique));
    return unique;
  },

  submitCapstone: function(capstone) {
    let capstones = this.getCapstones();
    const newEntry = {
      id: `CAP-${Date.now().toString().slice(-4)}`,
      submittedAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      status: "Under Review",
      grade: "",
      facultyNotes: "Received by Faculty. Dr. Sarah Sterling and the academic board are reviewing your model code and architecture.",
      reviewedBy: "",
      reviewedAt: "",
      ...capstone
    };
    // De-duplicate any matching project title or ID
    capstones = capstones.filter(c => c.id !== newEntry.id && (c.projectTitle || '').toLowerCase() !== (newEntry.projectTitle || '').toLowerCase());
    capstones.unshift(newEntry);
    localStorage.setItem("nexus_capstones", JSON.stringify(capstones));
    return newEntry;
  },

  gradeCapstone: function(capstoneId, grade, notes, autoAllotCert = true) {
    const capstones = this.getCapstones();
    const target = capstones.find(c => c.id === capstoneId);
    if (target) {
      target.status = "Approved";
      target.grade = grade || "Distinction (98%)";
      target.facultyNotes = notes || "Capstone verified and approved for graduation.";
      target.reviewedBy = "Dr. Sarah Sterling";
      target.reviewedAt = new Date().toISOString().slice(0, 10);
      localStorage.setItem("nexus_capstones", JSON.stringify(capstones));

      // Auto allot Google certificate if requested
      if (autoAllotCert && target.studentId) {
        this.allotCertificate(target.studentId, {
          grade: target.grade,
          date: target.reviewedAt
        });
      }
      return target;
    }
    return null;
  },

  // ------------------------------------------------------------------------
  // MESSAGING & MENTORSHIP STORAGE
  // ------------------------------------------------------------------------
  getMessages: function(studentId) {
    const data = localStorage.getItem("nexus_messages");
    let allMsgs = ACADEMY_DATA.initialMessages;
    if (data) {
      try { allMsgs = JSON.parse(data); } catch(e) {}
    }

    // De-duplicate messages by ID
    const seen = new Set();
    const unique = [];
    allMsgs.forEach(m => {
      if (m && m.id && !seen.has(m.id)) {
        seen.add(m.id);
        unique.push(m);
      }
    });

    localStorage.setItem("nexus_messages", JSON.stringify(unique));

    if (studentId) {
      return unique.filter(m => m.studentId === studentId);
    }
    return unique;
  },

  sendMessage: function(msg) {
    let allMsgs = this.getMessages();
    const newMsg = {
      id: `msg-${Date.now()}`,
      timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
      ...msg
    };
    allMsgs = allMsgs.filter(m => m.id !== newMsg.id);
    allMsgs.push(newMsg);
    localStorage.setItem("nexus_messages", JSON.stringify(allMsgs));
    return newMsg;
  },

  getBatches: function() {
    const data = localStorage.getItem("nexus_batches");
    let rawList = ACADEMY_DATA.batches;
    if (data) {
      try {
        rawList = JSON.parse(data);
      } catch(e) {
        rawList = ACADEMY_DATA.batches;
      }
    }

    // De-duplicate batches by ID
    const seen = new Set();
    const unique = [];
    rawList.forEach(b => {
      if (b && b.id && !seen.has(b.id)) {
        seen.add(b.id);
        unique.push(b);
      }
    });

    localStorage.setItem("nexus_batches", JSON.stringify(unique));
    return unique;
  },

  saveBatch: function(batch) {
    let batches = this.getBatches();
    batches = batches.filter(b => b.id !== batch.id);
    batches.push(batch);
    localStorage.setItem("nexus_batches", JSON.stringify(batches));
    return batch;
  },

  incrementBatchSeat: function(batchId) {
    const batches = this.getBatches();
    const batch = batches.find(b => b.id === batchId);
    if (batch && batch.enrolledSeats < batch.maxSeats) {
      batch.enrolledSeats += 1;
      localStorage.setItem("nexus_batches", JSON.stringify(batches));
    }
  },

  resetToDefault: function() {
    localStorage.setItem("nexus_students", JSON.stringify([]));
    localStorage.setItem("nexus_batches", JSON.stringify(ACADEMY_DATA.batches));
    localStorage.removeItem("nexus_current_student");
    localStorage.setItem("nexus_capstones", JSON.stringify([]));
    localStorage.setItem("nexus_messages", JSON.stringify([]));
  }
};
