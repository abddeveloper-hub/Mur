// AI Nexus Academy - Student Hub Portal (Feature 5A)

const StudentHub = {
  countdownInterval: null,

  init: function() {
    this.render();
    this.startLiveCountdown();
  },

  render: function() {
    const student = StorageService.getCurrentStudent();
    const container = document.getElementById('studentHubContent');
    if (!container) return;

    if (!student) {
      container.innerHTML = `
        <div class="glass-panel" style="padding:60px 20px; text-align:center; max-width:600px; margin:0 auto;">
          <i class="fas fa-user-graduate" style="font-size:3.5rem; color:var(--neon-cyan); margin-bottom:20px;"></i>
          <h3 style="font-size:1.6rem; margin-bottom:12px;">No Active Enrollment Found</h3>
          <p style="color:var(--text-muted); margin-bottom:24px;">You haven't registered for an AI course yet. Browse our cutting-edge AI tracks and enroll in just a few minutes!</p>
          <button class="btn btn-primary" onclick="App.showView('register')">
            <i class="fas fa-sparkles"></i> Enroll in AI Course
          </button>
        </div>
      `;
      return;
    }

    // Render Digital ID Card inside the student hub sidebar
    IDCardGenerator.renderCard(student, 'hubStudentIdCardSlot');

    // Render Official Google Professional Certificate inside the student hub
    AICertificateGenerator.renderCertificate(student, 'hubCertificateEmbedSlot');

    // Render Faculty Mentorship Chat Stream
    if (typeof MessagingPortal !== 'undefined') {
      MessagingPortal.renderStudentChat('studentMentorshipChatContainer', student.id);
    }

    // Render Capstone Project Submission & Status Desk
    if (typeof CapstonePortal !== 'undefined') {
      CapstonePortal.renderStudentCapstoneDesk('studentCapstoneDeskContainer', student.id);
    }

    // Update Hub Details
    const hubStudentName = document.getElementById('hubStudentName');
    const hubTrackTitle = document.getElementById('hubTrackTitle');
    const hubBatchName = document.getElementById('hubBatchName');
    const hubStatusBadge = document.getElementById('hubStatusBadge');
    const hubEnrolledDate = document.getElementById('hubEnrolledDate');

    if (hubStudentName) hubStudentName.textContent = student.fullName;
    if (hubTrackTitle) hubTrackTitle.textContent = student.trackTitle;
    if (hubBatchName) hubBatchName.textContent = student.batchName;
    if (hubEnrolledDate) hubEnrolledDate.textContent = `Enrolled on ${student.registeredAt}`;

    if (hubStatusBadge) {
      hubStatusBadge.textContent = student.status || "Confirmed";
      hubStatusBadge.className = `status-badge ${
        student.status === 'Confirmed' ? 'status-confirmed' :
        student.status === 'Payment Verified' ? 'status-payment' :
        student.status === 'Pending' ? 'status-pending' : 'status-waitlisted'
      }`;
    }
  },

  // Live countdown to next class session
  startLiveCountdown: function() {
    if (this.countdownInterval) clearInterval(this.countdownInterval);

    // Target: Upcoming Sunday at 9:00 AM EST (or 2 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(9, 0, 0, 0);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        document.getElementById('cdDays').textContent = '00';
        document.getElementById('cdHours').textContent = '00';
        document.getElementById('cdMinutes').textContent = '00';
        document.getElementById('cdSeconds').textContent = '00';
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const dEl = document.getElementById('cdDays');
      const hEl = document.getElementById('cdHours');
      const mEl = document.getElementById('cdMinutes');
      const sEl = document.getElementById('cdSeconds');

      if (dEl) dEl.textContent = String(days).padStart(2, '0');
      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
      if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
    };

    updateTimer();
    this.countdownInterval = setInterval(updateTimer, 1000);
  },

  // Launch mock live classroom
  joinLiveSession: function() {
    const student = StorageService.getCurrentStudent();
    if (!student) return;
    
    App.showToast(
      "Connecting to Live Class...",
      `Authenticating Student ID: ${student.id}. Launching Zoom / Meet secure room...`,
      "info"
    );

    setTimeout(() => {
      window.open('https://meet.google.com', '_blank');
    }, 1200);
  },

  // Download Starter Resources
  downloadResource: function(type) {
    let title = "";
    let content = "";

    if (type === 'syllabus') {
      title = "AI_Nexus_Complete_Curriculum_Syllabus.txt";
      content = `=====================================================
AI NEXUS ACADEMY - OFFICIAL MASTER CURRICULUM
=====================================================
Track 1: AI Literacy & GenAI for Beginners & Business (AI-101)
- Week 1: Prompt Engineering Foundations & Advanced LLM Tactics
- Week 2: Multimodal AI: Audio, Vision & Creative Generation (Midjourney)
- Week 3: No-Code AI Automation with Zapier, Make & Custom GPTs
- Week 4: Capstone: Building an Automated AI Business System

Track 2: Applied Machine Learning & Data Science (AI-201)
- Week 1-2: Modern Python for AI & Exploratory Data Analysis
- Week 3-4: Classical ML Algorithms & Production Scikit-Learn
- Week 5-6: Neural Networks & PyTorch Deep Learning Pipelines
- Week 7-8: Capstone: Production ML Model on Cloud (FastAPI + Streamlit)

Track 3: Generative AI, LLMs & Autonomous AI Agents (AI-301)
- Week 1-2: Deep Dive into LLM Architecture & Embeddings
- Week 3-4: Enterprise RAG: Chunking, Vectors & Re-ranking (Pinecone/ChromaDB)
- Week 5-7: Autonomous Multi-Agent Architecture (CrewAI & LangGraph)
- Week 8-10: Capstone: Enterprise Autonomous AI Copilot in Production

Track 4: Full-Stack AI Engineer & MLOps Masterclass (AI-401)
- Week 1-4: Core ML & Modern Generative AI Engineering
- Week 5-8: Full-Stack AI Interfaces & Async FastAPI Backends
- Week 9-11: MLOps, Containerization, Model Monitoring & Scaling
- Week 12-14: Grand Capstone & Career Placement Accelerator
`;
    } else if (type === 'python-guide') {
      title = "Python_and_GPU_Setup_Guide.txt";
      content = `=====================================================
AI NEXUS ACADEMY - PYTHON & GPU SETUP GUIDE
=====================================================
Step 1: Install Python 3.11+
Download from python.org and ensure "Add Python to PATH" is checked.

Step 2: Create a Virtual Environment
$ python -m venv ai_env
$ source ai_env/bin/activate (Mac/Linux) or ai_env\\Scripts\\activate (Windows)

Step 3: Install Essential AI Libraries
$ pip install numpy pandas scikit-learn torch torchvision openai langchain chromadb

Step 4: Verify GPU Acceleration (CUDA)
python -c "import torch; print('CUDA Available:', torch.cuda.is_available())"

Step 5: Access Cloud GPU Lab (A100/H100)
Log in with your Student ID credentials at: https://lab.ainexus.edu
`;
    } else {
      title = "AI_Cheatsheet_and_Tools.txt";
      content = `=====================================================
TOP AI TOOLS & CHEATSHEET 2026
=====================================================
- LLMs: OpenAI GPT-4o, Claude 3.5 Sonnet, Llama 3.1 70B
- Vector Databases: Pinecone, ChromaDB, Weaviate, Qdrant
- Multi-Agent Orchestrators: CrewAI, LangGraph, AutoGen
- Embeddings: text-embedding-3-small, BAAI/bge-large-en
`;
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = title;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    App.showToast("Resource Downloaded", `Saved ${title}`, "success");
  }
};
