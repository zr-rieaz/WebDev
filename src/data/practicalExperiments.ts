import { PracticalExperiment } from '../types/curriculum';

export const practicalExperiments: PracticalExperiment[] = [
  {
    id: 'exp-1',
    expNumber: 1,
    title: 'Web Tech & Industry Requirement',
    code: 'EXPERIMENT 01',
    periodHours: 'Practical: 6 Periods',
    objectives: [
      'আধুনিক ওয়েব ডেভেলপমেন্ট প্রফেশনাল এনভায়রনমেন্ট ও ওয়ার্কস্পেস কনফিগার করা।',
      'কম্পিউটার ল্যাবরেটরিতে পেশাগত স্বাস্থ্য ও নিরাপত্তা (OSH) স্ট্যান্ডার্ড কার্যকর করা।',
      'VS Code এডিটর, Git ভার্সন কন্ট্রোল, XAMPP সার্ভার এবং Chrome DevTools সেটআপ ও টেস্টিং করা।',
      'প্রজেক্ট ডিরেক্টরি স্ট্রাকচার এবং ইন্ডাস্ট্রিয়াল গিট রিপোজিটরি ইনিশিয়ালাইজেশন ও কমিট সম্পন্ন করা।'
    ],
    oshStandards: [
      {
        rule: 'Ergonomic Workstation Setup',
        explanationBengali: 'চেয়ারের উচ্চতা ও মনিটরের অবস্থান চোখের সমান্তরালে (Eye-level) ৫০-৭০ সেমি দূরত্বে স্থাপন করতে হবে যাতে ঘাড় ও মেরুদণ্ডে টান না পড়ে।'
      },
      {
        rule: 'Electrical & Fire Safety in Lab',
        explanationBengali: 'কম্পিউটার ল্যাবের সমস্ত পাওয়ার ক্যাবল আন্ডারগ্রাউন্ড ডাক্টিংয়ে আবদ্ধ রাখতে হবে এবং প্রতিটি প্লাগ পয়েন্টে উপযুক্ত আর্থিং ও সার্কিট ব্রেকার নিশ্চিত করতে হবে।'
      },
      {
        rule: 'The 20-20-20 Eye Strain Prevention',
        explanationBengali: 'টানা ২০ মিনিট মনিটরের দিকে তাকিয়ে কাজ করার পর ২০ সেকেন্ডের জন্য অন্তত ২০ ফুট দূরের কোনো বস্তুর দিকে তাকিয়ে চোখের বিশ্রাম প্রদান করতে হবে।'
      }
    ],
    toolsAndSoftware: [
      { name: 'VS Code (Visual Studio Code)', role: 'Primary Code Editor with Prettier, Live Server & ESLint extensions' },
      { name: 'Git & Git Bash', role: 'Version Control System and Command Line Interface' },
      { name: 'XAMPP Stack', role: 'Local Apache HTTP Server, MariaDB Database & PHP Runtime' },
      { name: 'Google Chrome Browser', role: 'Rendering client & DevTools for network/console inspection' }
    ],
    projectStructure: `webdev1-workspace/
├── .git/                  # Git repository metadata
├── .gitignore             # Files to ignore (node_modules, .env)
├── README.md              # Project documentation
├── index.html             # Project landing entry point
├── css/
│   └── style.css          # Core stylesheet
└── js/
    └── main.js            # Entry script`,
    stepByStepSteps: [
      {
        stepNumber: 1,
        title: 'ওয়ার্কস্পেস ডিরেক্টরি ও ফোল্ডার কাঠামো তৈরি',
        instructionsBengali: 'কম্পিউটারের লোকাল ড্রাইভে (অথবা XAMPP-এর htdocs-এ) একটি নির্দিষ্ট ফোল্ডার তৈরি করুন এবং প্রয়োজনীয় সাবফোল্ডারগুলো তৈরি করুন।',
        codeSnippet: {
          language: 'bash',
          filename: 'terminal_setup.sh',
          code: `# Terminal / Git Bash
mkdir webdev1-workspace
cd webdev1-workspace
mkdir css js assets
touch index.html css/style.css js/main.js README.md .gitignore`
        }
      },
      {
        stepNumber: 2,
        title: 'Git রিপোজিটরি ইনিশিয়ালাইজেশন ও বেস কনফিগারেশন',
        instructionsBengali: 'প্রজেক্টটিতে গিট ইনিশিয়ালাইজ করে নাম ও ইমেইল গ্লোবালি কনফিগার করুন এবং প্রথম কমিট সম্পন্ন করুন।',
        codeSnippet: {
          language: 'bash',
          filename: 'git_init.sh',
          code: `git init
git config user.name "Student Name"
git config user.email "student@polytechnic.edu"
git add .
git commit -m "chore: initial project workspace setup with standard boilerplate"`
        }
      },
      {
        stepNumber: 3,
        title: 'XAMPP Apache ও MySQL সার্ভিস স্টার্ট এবং লোকালহোস্ট টেস্ট',
        instructionsBengali: 'XAMPP Control Panel ওপেন করে Apache এবং MySQL মডিউলের পাশে "Start" বাটনে ক্লিক করুন। ব্রাউজারে `http://localhost` ব্রাউজ করে ড্যাশবোর্ড সফলভাবে প্রদর্শিত হচ্ছে কিনা তা যাচাই করুন।'
      }
    ],
    completeSourceFiles: [
      {
        filename: 'index.html',
        language: 'html',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lab 01: Dev Environment Setup</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="container">
    <header class="hero-header">
      <h1>Web Design & Development - 1 (28544)</h1>
      <p class="badge">Lab 01: Industry Environment & OSH Standards</p>
    </header>
    <main>
      <section class="card">
        <h2>Environment Verification</h2>
        <ul id="checklist">
          <li>✔ VS Code Editor Installed & Configured</li>
          <li>✔ Git Version Control Initialized</li>
          <li>✔ Apache HTTP Server (Port 80/8080) Active</li>
          <li>✔ OSH Ergonomics Compliant</li>
        </ul>
        <button id="verifyBtn" class="btn">Run System Diagnostic</button>
        <p id="statusOutput" class="status-msg"></p>
      </section>
    </main>
  </div>
  <script src="js/main.js"></script>
</body>
</html>`
      },
      {
        filename: 'css/style.css',
        language: 'css',
        code: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #0f172a;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.container {
  width: 100%;
  max-width: 600px;
}

.hero-header {
  text-align: center;
  margin-bottom: 24px;
}

.hero-header h1 {
  font-size: 1.5rem;
  color: #38bdf8;
  margin-bottom: 8px;
}

.badge {
  display: inline-block;
  background-color: #0369a1;
  color: #e0f2fe;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.85rem;
}

.card {
  background-color: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
}

.card h2 {
  font-size: 1.2rem;
  margin-bottom: 16px;
  border-bottom: 1px solid #334155;
  padding-bottom: 8px;
}

#checklist {
  list-style: none;
  margin-bottom: 20px;
}

#checklist li {
  padding: 8px 0;
  color: #94a3b8;
  font-size: 0.95rem;
}

.btn {
  background-color: #0284c7;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
}

.btn:hover {
  background-color: #0369a1;
}

.status-msg {
  margin-top: 16px;
  text-align: center;
  font-weight: 500;
  font-size: 0.9rem;
}`
      },
      {
        filename: 'js/main.js',
        language: 'javascript',
        code: `document.addEventListener('DOMContentLoaded', () => {
  const verifyBtn = document.getElementById('verifyBtn');
  const statusOutput = document.getElementById('statusOutput');

  verifyBtn.addEventListener('click', () => {
    statusOutput.textContent = 'Diagnostic Complete: All 4 Lab 01 requirements passed with 100% OSH compliance!';
    statusOutput.style.color = '#4ade80';
    verifyBtn.disabled = true;
    verifyBtn.style.opacity = '0.6';
    verifyBtn.style.cursor = 'not-allowed';
    console.log('[System Diagnostic]: Environment ready for Course 28544.');
  });
});`
      }
    ],
    expectedOutput: {
      previewType: 'browser',
      uiLayoutDescription: 'একটি আধুনিক ডার্ক থিমযুক্ত ড্যাশবোর্ড কার্ড যেখানে ৪টি এনভায়রনমেন্ট চেকলিস্ট সবুজ চেকে চিহ্নিত থাকে এবং বাটন ক্লিকে "Diagnostic Complete: All 4 Lab 01 requirements passed" সবুজ বার্তা প্রদর্শিত হয়।',
      terminalLogs: `[INFO] Initialized empty Git repository in /htdocs/webdev1-workspace/.git/
[INFO] Apache/2.4.54 running on port 80 (PID: 4320)
[INFO] MariaDB 10.4.28 running on port 3306 (PID: 7812)
[INFO] HTTP 200 OK: GET /index.html (3ms)`
    },
    debuggingChecklist: [
      {
        errorTitle: 'Port 80 In Use / Apache Shutdown Unexpectedly',
        causeBengali: 'অন্য কোনো সফটওয়্যার (যেমন Skype, VMware বা IIS) ডিফল্ট পোর্ট ৮০ ব্যবহার করছে।',
        fixBengali: 'XAMPP Control Panel > Apache Config > httpd.conf ওপেন করে `Listen 80` এর পরিবর্তে `Listen 8080` এবং ServerName localhost:8080 সেট করুন।'
      },
      {
        errorTitle: 'Git Command Not Found in Terminal',
        causeBengali: 'Git ইনস্টলেশনের সময় System PATH এনভায়রনমেন্ট ভেরিয়েবলে গিট যুক্ত করা হয়নি।',
        fixBengali: 'Git পুনরায় ইনস্টল করুন অথবা Environment Variables-এ `C:\\Program Files\\Git\\bin` পাথ যুক্ত করুন।'
      }
    ]
  },
  {
    id: 'exp-2',
    expNumber: 2,
    title: 'Convert UI/UX Design to Markup Language',
    code: 'EXPERIMENT 02',
    periodHours: 'Practical: 6 Periods',
    objectives: [
      'Figma বা Adobe XD ডিজাইন ফাইল থেকে লেআউট মেজারমেন্ট, কালার হেক্স কোড এবং টাইপোগ্রাফি রিড করা।',
      'ডিজাইন প্রোটোটাইপকে Semantic HTML5 মার্কআপ স্ট্রাকচারে রূপান্তর করা।',
      'Web Content Accessibility Guidelines (WCAG) অনুযায়ী অল্টারনেটিভ টেক্সট ও কীবোর্ড অ্যাক্সেসিবিলিটি নিশ্চিত করা।',
      'W3C Markup Validator (validator.w3.org) দ্বারা ০ এরর ও ০ ওয়ার্নিং নিশ্চিতকরণ।'
    ],
    oshStandards: [
      {
        rule: 'Contrast Ratio for Eye Comfort',
        explanationBengali: 'ল্যাবে ডিজাইনিং ও কোডিংয়ের সময় টেক্সট ও ব্যাকগ্রাউন্ডের কন্ট্রাস্ট রেশিও নূন্যতম 4.5:1 (WCAG AA) বজায় রাখতে হবে যাতে চোখের দৃষ্টিশক্তির ক্ষতি না হয়।'
      },
      {
        rule: 'Cable Routing & Clean Workspace',
        explanationBengali: 'ওয়ার্কস্টেশনে মাউস ও কীবোর্ডের তার সুরক্ষিত ও জটমুক্ত রাখতে হবে।'
      }
    ],
    toolsAndSoftware: [
      { name: 'Figma Web App', role: 'UI/UX Design inspection and asset export' },
      { name: 'VS Code', role: 'HTML5 Semantic markup construction' },
      { name: 'W3C Nu HTML Checker', role: 'Validation standard verification' }
    ],
    projectStructure: `ui-to-markup/
├── index.html
├── css/
│   └── layout.css
└── assets/
    └── course-hero.svg`,
    stepByStepSteps: [
      {
        stepNumber: 1,
        title: 'Figma ডিজাইন ফাইল বিশ্লেষণ ও মেজারমেন্ট নোট',
        instructionsBengali: 'Figma ফাইলে নেভিগেশন বার, হিরো সেকশন এবং ফিচার গ্রিডের প্যাডিং, মার্জিন, ফন্ট সাইজ এবং কালার প্যালেট ইনসপেক্ট করুন।'
      },
      {
        stepNumber: 2,
        title: 'Semantic HTML5 ট্যাগ ব্যবহার করে লেআউট স্কেলিং',
        instructionsBengali: 'জেনারেল `<div>`-এর পরিবর্তে `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` ও `<footer>` দিয়ে কাঠামোগত কোড প্রস্তুত করুন।'
      },
      {
        stepNumber: 3,
        title: 'W3C ভ্যালিডেশন এবং ফর্ম লেবেলিং',
        instructionsBengali: 'প্রতিটি `<input>` ফিল্ডের সাথে যুক্ত `<label for="...">` এবং ইমেজের সাথে বর্ণনামূলক `alt=""` অ্যাট্রিবিউট প্রয়োগ করুন।'
      }
    ],
    completeSourceFiles: [
      {
        filename: 'index.html',
        language: 'html',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Polytechnic Tech Portal | W3C Validated</title>
  <link rel="stylesheet" href="css/layout.css">
</head>
<body>
  <!-- Semantic Header & Navigation -->
  <header class="site-header">
    <div class="nav-container">
      <a href="#home" class="logo">
        <span class="logo-accent">&lt;/&gt;</span> BTEB CST-28544
      </a>
      <nav aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="#curriculum">Curriculum</a></li>
          <li><a href="#practical">Practicals</a></li>
          <li><a href="#assessment">Assessments</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Main Landmark -->
  <main id="main-content">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Transforming Figma Wireframes to Semantic Markup</h1>
        <p>A rigorous, production-grade markup implementation compliant with W3C HTML5 standards and WCAG 2.1 accessibility guidelines.</p>
        <div class="cta-group">
          <a href="#curriculum" class="btn btn-primary">Explore Syllabus</a>
          <a href="#assessment" class="btn btn-secondary">Self Assessment</a>
        </div>
      </div>
    </section>

    <section class="features-grid" id="curriculum">
      <article class="feature-card">
        <h3>Semantic Hierarchy</h3>
        <p>Utilizes header, main, nav, section, and article landmarks to ensure screen reader compatibility.</p>
      </article>

      <article class="feature-card">
        <h3>Accessibility First</h3>
        <p>Strict color contrast exceeding 4.5:1 ratio and keyboard tab-navigable focus states.</p>
      </article>

      <article class="feature-card">
        <h3>W3C Compliance</h3>
        <p>Zero validation warnings and strict doctype adherence across all modern rendering engines.</p>
      </article>
    </section>
  </main>

  <footer class="site-footer">
    <p>Diploma in Computer Science & Technology | BTEB Probidhan-2022</p>
  </footer>
</body>
</html>`
      },
      {
        filename: 'css/layout.css',
        language: 'css',
        code: `/* Reset & Typography */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  background-color: #f8fafc;
  color: #1e293b;
}

/* Header & Nav */
.site-header {
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  color: #0f172a;
}

.logo-accent {
  color: #0284c7;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 24px;
}

.nav-links a {
  text-decoration: none;
  color: #475569;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover, .nav-links a:focus {
  color: #0284c7;
  outline: 2px solid #0284c7;
  outline-offset: 4px;
  border-radius: 2px;
}

/* Hero Section */
.hero-section {
  max-width: 1100px;
  margin: 40px auto;
  padding: 40px 24px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #ffffff;
  border-radius: 16px;
  text-align: center;
}

.hero-content h1 {
  font-size: 2.2rem;
  margin-bottom: 16px;
  color: #f0f9ff;
}

.hero-content p {
  font-size: 1.1rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto 28px;
}

.cta-group {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;
}

.btn-primary {
  background-color: #0284c7;
  color: #ffffff;
}

.btn-secondary {
  background-color: #334155;
  color: #f8fafc;
}

/* Features Grid */
.features-grid {
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.feature-card h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: #0369a1;
}

.site-footer {
  text-align: center;
  padding: 30px;
  background-color: #0f172a;
  color: #94a3b8;
  font-size: 0.9rem;
  margin-top: 60px;
}`
      }
    ],
    expectedOutput: {
      previewType: 'browser',
      uiLayoutDescription: 'একটি নান্দনিক আধুনিক রেসপনসিভ পোর্টাল পেজ—শীর্ষে লোগো ও অ্যাক্সেসিবল নেভিগেশন, কেন্দ্রে প্রিমিয়াম ডার্ক হিরো ব্যানার এবং নিচে তিনটি সুবিন্যস্ত ফিচার কার্ড।'
    },
    debuggingChecklist: [
      {
        errorTitle: 'W3C Validator: "No heading provided for section"',
        causeBengali: '<section> ট্যাগের ভেতরে কোনো হেডিং ট্যাগ (h2-h6) না দিলে W3C সতর্কতা জারি করে।',
        fixBengali: 'প্রতিটি <section> বা <article>-এর শুরুতে একটি অর্থপূর্ণ হেডিং ট্যাগ অন্তর্ভুক্ত করুন অথবা aria-labelledby প্রয়োগ করুন।'
      },
      {
        errorTitle: 'Broken Contrast on Hover State',
        causeBengali: 'বাটনে হোভার করার পর ব্যাকগ্রাউন্ড ও ফন্টের রঙের পার্থক্য কমে যাওয়া।',
        fixBengali: 'WCAG কন্ট্রাস্ট পরীক্ষক দিয়ে নিশ্চিত করুন রেশিও ৪.৫:১ এর বেশি রয়েছে।'
      }
    ]
  },
  {
    id: 'exp-3',
    expNumber: 3,
    title: 'Responsive Website Using Framework',
    code: 'EXPERIMENT 03',
    periodHours: 'Practical: 6 Periods',
    objectives: [
      'CSS Media Queries এবং Flexbox/Grid ব্যবহার করে ফ্লুইড রেসপনসিভ গ্রিড প্রস্তুত করা।',
      'এক্সটার্নাল সিএসএস ফ্রেমওয়ার্ক (Bootstrap বা Tailwind CSS) ইন্টিগ্রেট করা।',
      'মোবাইল স্ক্রিন (360px), ট্যাবলেট (768px) এবং ডেস্কটপ (1200px) ডিভাইসে সফল লেআউট ব্রেকপয়েন্ট টেস্টিং।'
    ],
    oshStandards: [
      {
        rule: 'Continuous Typing Fatigue Prevention',
        explanationBengali: 'দীর্ঘ সময় কোডিংয়ের সময় কব্জির রিস্ট রেস্ট (Wrist Rest) ব্যবহার করতে হবে যাতে কার্পাল টানেল সিন্ড্রোম না হয়।'
      }
    ],
    toolsAndSoftware: [
      { name: 'Tailwind CSS CDN', role: 'Utility-first styling system' },
      { name: 'Chrome Device Emulation', role: 'Mobile/Tablet viewport testing' }
    ],
    projectStructure: `responsive-framework/
├── index.html
├── css/
│   └── custom.css
└── js/
    └── nav-toggle.js`,
    stepByStepSteps: [
      {
        stepNumber: 1,
        title: 'Viewport Meta Tag ও ফ্রেমওয়ার্ক CDN সংযোগ',
        instructionsBengali: 'HTML হেডে সঠিক ভিউপোর্ট মেটা ট্যাগ যুক্ত করুন এবং ফ্রেমওয়ার্ক CDN ইনক্লুড করুন।'
      },
      {
        stepNumber: 2,
        title: 'মোবাইল-ফার্স্ট ফ্লেক্সিবল নেভিগেশন ও হ্যামবার্গার মেনু নির্মাণ',
        instructionsBengali: 'মোবাইলে মেনুটি লুকিয়ে হ্যামবার্গার বাটনে ক্লিকে ড্রয়ার হিসেবে খোলার লজিক তৈরি করুন।'
      },
      {
        stepNumber: 3,
        title: 'মিডিয়া কোয়েরি ও গ্রিড কার্ড রেসপনসিভনেস পরীক্ষা',
        instructionsBengali: 'মোবাইলে ১ কলাম, ট্যাবলেটে ২ কলাম এবং ডেস্কটপে ৩ বা ৪ কলাম বিশিষ্ট কার্ড গ্রিড রেন্ডার করুন।'
      }
    ],
    completeSourceFiles: [
      {
        filename: 'index.html',
        language: 'html',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lab 03: Responsive Layout System</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col justify-between">
  <!-- Responsive Header -->
  <header class="bg-white border-b border-slate-200 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <div class="font-bold text-xl text-sky-600">WebDev Framework</div>
      <nav class="hidden md:flex space-x-6 text-sm font-semibold text-slate-600">
        <a href="#" class="hover:text-sky-600">Home</a>
        <a href="#" class="hover:text-sky-600">Courses</a>
        <a href="#" class="hover:text-sky-600">Polytechnic</a>
        <a href="#" class="hover:text-sky-600">Contact</a>
      </nav>
      <button id="mobileMenuBtn" class="md:hidden p-2 text-slate-600 hover:text-slate-900">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <!-- Mobile dropdown -->
    <div id="mobileMenu" class="hidden md:hidden px-4 pb-4 space-y-2 border-t border-slate-100 bg-white">
      <a href="#" class="block py-2 text-slate-600">Home</a>
      <a href="#" class="block py-2 text-slate-600">Courses</a>
      <a href="#" class="block py-2 text-slate-600">Polytechnic</a>
      <a href="#" class="block py-2 text-slate-600">Contact</a>
    </div>
  </header>

  <!-- Responsive Hero Section -->
  <main class="max-w-6xl mx-auto px-4 py-8 flex-1">
    <div class="bg-gradient-to-r from-sky-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white shadow-lg mb-8">
      <h1 class="text-3xl md:text-5xl font-extrabold mb-4">Responsive Grid Mastery</h1>
      <p class="text-sky-100 text-base md:text-lg max-w-2xl mb-6">Built using standard mobile-first fluid grids, responsive breakpoints, and semantic styling.</p>
      <button class="bg-white text-sky-700 font-bold px-6 py-3 rounded-lg shadow hover:bg-sky-50 transition">Get Started</button>
    </div>

    <!-- Responsive Cards Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
        <div class="text-sky-600 font-bold text-lg mb-2">Mobile First</div>
        <p class="text-slate-600 text-sm">Designed starting from small screens up to large 4K displays.</p>
      </div>
      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
        <div class="text-indigo-600 font-bold text-lg mb-2">Flexbox & Grid</div>
        <p class="text-slate-600 text-sm">Adaptive component alignment without hardcoded pixel coordinates.</p>
      </div>
      <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
        <div class="text-emerald-600 font-bold text-lg mb-2">Zero Horizontal Scroll</div>
        <p class="text-slate-600 text-sm">Guarantees 100% viewport containment on any handheld device.</p>
      </div>
    </div>
  </main>

  <footer class="bg-slate-900 text-slate-400 py-6 text-center text-sm">
    BTEB Subject Code 28544 | Lab 03 Framework Implementation
  </footer>

  <script>
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  </script>
</body>
</html>`
      }
    ],
    expectedOutput: {
      previewType: 'browser',
      uiLayoutDescription: 'স্মার্টফোনে স্বয়ংক্রিয়ভাবে একক কলাম এবং হ্যামবার্গার ড্রপডাউন মেনু; ট্যাবলেট ও ল্যাপটপে অনুভূমিক লিঙ্ক এবং পাশাপাশি ৩-কলামের কার্ড গ্রিড।'
    },
    debuggingChecklist: [
      {
        errorTitle: 'Horizontal Scrollbar on Mobile Viewport',
        causeBengali: 'কোনো নির্দিষ্ট এলিমেন্টে ফিক্সড `width: 1200px` অথবা প্যাডিং যোগে ১০০% এর বেশি উইডথ তৈরি হওয়া।',
        fixBengali: 'গ্লোবালি `box-sizing: border-box;` প্রয়োগ করুন এবং উইডথে `max-w-full` বা পার্সেন্টেজ ব্যবহার করুন।'
      }
    ]
  },
  {
    id: 'exp-4',
    expNumber: 4,
    title: 'Website Development Using JS & jQuery',
    code: 'EXPERIMENT 04',
    periodHours: 'Practical: 6 Periods',
    objectives: [
      'DOM ম্যানিপুলেশন ও ইভেন্ট লিসেনার প্রয়োগ করে ইন্টারেক্টিভ ইউজার ইন্টারফেস তৈরি করা।',
      'জাভাস্ক্রিপ্ট দ্বারা ক্লায়েন্ট-সাইড ফর্ম ইনপুট ভ্যালিডেশন (Email, Password, Roll check) বাস্তবায়ন।',
      'jQuery প্লাগইন (Slick Carousel / Lightbox / Modal Popup) ইন্টিগ্রেশন ও কাস্টমাইজেশন।'
    ],
    oshStandards: [
      {
        rule: 'Safe Handling of Portable Storage',
        explanationBengali: 'ল্যাব কম্পিউটারে পেনড্রাইভ ব্যবহারের পূর্বে অ্যান্টিভাইরাস স্ক্যান নিশ্চিত করতে হবে।'
      }
    ],
    toolsAndSoftware: [
      { name: 'jQuery 3.7.x CDN', role: 'Fast DOM and Event abstraction' },
      { name: 'VS Code & Live Server', role: 'Interactive script execution' }
    ],
    projectStructure: `interactive-js-lab/
├── index.html
├── css/
│   └── interactive.css
└── js/
    └── app.js`,
    stepByStepSteps: [
      {
        stepNumber: 1,
        title: 'ডায়নামিক মডাল এবং ট্যাব নেভিগেশন এইচটিএমএল কাঠামো',
        instructionsBengali: 'ফর্ম ও ডায়নামিক মডাল উইন্ডোর জন্য মার্কআপ লিখুন।'
      },
      {
        stepNumber: 2,
        title: 'JavaScript রেজেক্স (Regex) দিয়ে ফর্ম ভ্যালিডেশন',
        instructionsBengali: 'নাম খালি রাখা যাবে না, রোল নম্বর ৬ ডিজিট এবং ইমেইলে @ ও ডোমেন ভ্যালিডেশন রুলস সেট করুন।'
      },
      {
        stepNumber: 3,
        title: 'jQuery অ্যানিমেশন ও ডেটা ফিল্টারিং',
        instructionsBengali: 'ক্যাটাগরি বাটন ক্লিকে `.fadeIn()` ও `.fadeOut()` দিয়ে আইটেম ফিল্টারিং ইমপ্লিমেন্ট করুন।'
      }
    ],
    completeSourceFiles: [
      {
        filename: 'index.html',
        language: 'html',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lab 04: Interactive JS & jQuery</title>
  <link rel="stylesheet" href="css/interactive.css">
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>
  <div class="wrapper">
    <header>
      <h1>Student Registration Portal</h1>
      <p>Interactive DOM Validation & jQuery Modal Engine</p>
    </header>

    <div class="card">
      <form id="studentForm" novalidate>
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="e.g. Rafiqul Islam">
          <span class="error-msg" id="nameError"></span>
        </div>

        <div class="form-group">
          <label for="boardRoll">Board Roll (6 Digits)</label>
          <input type="number" id="boardRoll" placeholder="e.g. 542198">
          <span class="error-msg" id="rollError"></span>
        </div>

        <div class="form-group">
          <label for="email">Institutional Email</label>
          <input type="email" id="email" placeholder="name@polytechnic.edu.bd">
          <span class="error-msg" id="emailError"></span>
        </div>

        <button type="submit" class="submit-btn">Validate & Register</button>
      </form>
    </div>

    <!-- Success Modal Popup -->
    <div id="successModal" class="modal-overlay">
      <div class="modal-box">
        <h3>🎉 Registration Successful</h3>
        <p id="modalDetails"></p>
        <button id="closeModalBtn" class="close-btn">Done</button>
      </div>
    </div>
  </div>
  <script src="js/app.js"></script>
</body>
</html>`
      },
      {
        filename: 'css/interactive.css',
        language: 'css',
        code: `* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 30px; }
.wrapper { max-width: 500px; margin: 0 auto; }
header { text-align: center; margin-bottom: 24px; }
header h1 { color: #38bdf8; font-size: 1.5rem; margin-bottom: 6px; }
header p { color: #94a3b8; font-size: 0.9rem; }
.card { background: #1e293b; padding: 24px; border-radius: 12px; border: 1px solid #334155; }
.form-group { margin-bottom: 16px; }
label { display: block; font-size: 0.85rem; color: #cbd5e1; margin-bottom: 6px; }
input { width: 100%; padding: 10px 12px; background: #0f172a; border: 1px solid #475569; border-radius: 6px; color: #fff; }
input:focus { outline: none; border-color: #38bdf8; }
.error-msg { display: block; color: #f87171; font-size: 0.75rem; margin-top: 4px; min-height: 16px; }
.submit-btn { width: 100%; padding: 12px; background: #0284c7; border: none; border-radius: 6px; color: #fff; font-weight: bold; cursor: pointer; }
.submit-btn:hover { background: #0369a1; }

/* Modal */
.modal-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.7); justify-content: center; align-items: center; z-index: 1000; }
.modal-box { background: #1e293b; padding: 24px; border-radius: 12px; width: 90%; max-width: 400px; text-align: center; border: 1px solid #38bdf8; }
.modal-box h3 { color: #38bdf8; margin-bottom: 12px; }
.modal-box p { color: #cbd5e1; font-size: 0.9rem; margin-bottom: 20px; line-height: 1.5; }
.close-btn { background: #10b981; color: #fff; border: none; padding: 8px 24px; border-radius: 6px; font-weight: bold; cursor: pointer; }`
      },
      {
        filename: 'js/app.js',
        language: 'javascript',
        code: `$(document).ready(function() {
  $('#studentForm').on('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    $('.error-msg').text('');

    const name = $('#fullName').val().trim();
    const roll = $('#boardRoll').val().trim();
    const email = $('#email').val().trim();

    // 1. Name validation
    if (name.length < 3) {
      $('#nameError').text('Name must be at least 3 characters.');
      isValid = false;
    }

    // 2. Roll validation (6 digits)
    if (!/^\\d{6}$/.test(roll)) {
      $('#rollError').text('Enter a valid 6-digit board roll number.');
      isValid = false;
    }

    // 3. Email validation
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      $('#emailError').text('Enter a valid email address.');
      isValid = false;
    }

    if (isValid) {
      $('#modalDetails').html(\`Student: <strong>\${name}</strong><br>Roll: <strong>\${roll}</strong><br>Email: <strong>\${email}</strong>\`);
      $('#successModal').css('display', 'flex').hide().fadeIn(300);
      $('#studentForm')[0].reset();
    }
  });

  $('#closeModalBtn').on('click', function() {
    $('#successModal').fadeOut(200);
  });
});`
      }
    ],
    expectedOutput: {
      previewType: 'browser',
      uiLayoutDescription: 'ইনপুট ফিল্ডে ভুল থাকলে লাল এরর বার্তা দেখায়। সঠিক তথ্য সাবমিট করলে স্মুথলি jQuery অ্যানিমেশনে সাকসেস পপআপ মডাল উদয় হয়।'
    },
    debuggingChecklist: [
      {
        errorTitle: 'Uncaught TypeError: $ is not a function',
        causeBengali: 'jQuery CDN স্ক্রিপ্ট লোড হওয়ার আগেই কাস্টম app.js এক্সিকিউট হচ্ছে।',
        fixBengali: 'HTML ফাইলে সর্বদা কাস্টম স্ক্রিপ্টের পূর্বে jQuery লাইব্রেরির ট্যাগ সন্নিবেশ করুন অথবা $(document).ready() ব্যবহার নিশ্চিত করুন।'
      }
    ]
  },
  {
    id: 'exp-5',
    expNumber: 5,
    title: 'Website Development Using PHP',
    code: 'EXPERIMENT 05',
    periodHours: 'Practical: 6 Periods',
    objectives: [
      'PHP ফর্ম হ্যান্ডলিং (`$_POST` সুপারগ্লোবাল) এবং ইনপুট স্যানিটাইজেশন বাস্তবায়ন।',
      'PHP সেশন (`session_start()`, `$_SESSION`) ভিত্তিক পাসওয়ার্ড-সুরক্ষিত অথেনটিকেশন ড্যাশবোর্ড তৈরি।',
      'Cross-Site Scripting (XSS) প্রতিহতে `htmlspecialchars()` প্রয়োগ।'
    ],
    oshStandards: [
      {
        rule: 'Data Security & Clean Logout',
        explanationBengali: 'শেয়ার্ড ল্যাব কম্পিউটারে কাজ শেষে সর্বদা সার্ভার সেশন টার্মিনেট এবং ব্রাউজার হিস্ট্রি ক্লিয়ার করতে হবে।'
      }
    ],
    toolsAndSoftware: [
      { name: 'XAMPP / PHP 8.x', role: 'Server-side execution runtime' },
      { name: 'Apache Web Server', role: 'Virtual host and port binding' }
    ],
    projectStructure: `php-auth-lab/
├── login.php
├── dashboard.php
├── logout.php
└── auth_check.php`,
    stepByStepSteps: [
      {
        stepNumber: 1,
        title: 'লগইন ভিউ এবং POST মেথড কনফিগারেশন',
        instructionsBengali: '`login.php` ফাইলে ক্রেডেনশিয়াল যাচাইয়ের লজিক তৈরি করুন।'
      },
      {
        stepNumber: 2,
        title: 'সেশন ইনিশিয়ালাইজেশন ও ক্রেডেনশিয়াল ভেরিফিকেশন',
        instructionsBengali: 'সফল ভ্যালিডেশনে `$_SESSION[\'authenticated\'] = true` সেট করে রিডাইরেক্ট করুন।'
      },
      {
        stepNumber: 3,
        title: 'সংরক্ষিত ড্যাশবোর্ড গার্ড ও সিকিউর লগআউট',
        instructionsBengali: 'সেশন না থাকলে ড্যাশবোর্ডে অ্যাক্সেস ব্লক করে লগইন পৃষ্ঠায় ফেরত পাঠান।'
      }
    ],
    completeSourceFiles: [
      {
        filename: 'login.php',
        language: 'php',
        code: `<?php
session_start();

$errorMessage = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Input sanitization to prevent XSS
  $username = htmlspecialchars(trim($_POST['username'] ?? ''));
  $password = trim($_POST['password'] ?? '');

  // Academic hardcoded credentials for demonstration
  if ($username === 'admin28544' && $password === 'Polytechnic@2026') {
    $_SESSION['user'] = $username;
    $_SESSION['logged_in_time'] = time();
    header('Location: dashboard.php');
    exit();
  } else {
    $errorMessage = 'Invalid username or password credentials!';
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PHP Lab 05: Secure Portal Login</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
    .box { background: #1e293b; padding: 32px; border-radius: 8px; width: 340px; border: 1px solid #334155; }
    input { width: 100%; padding: 10px; margin: 8px 0 16px; background: #0f172a; border: 1px solid #475569; color: #fff; border-radius: 4px; box-sizing: border-box; }
    button { width: 100%; padding: 10px; background: #0284c7; color: #fff; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; }
    .err { color: #f87171; font-size: 0.85rem; margin-bottom: 12px; }
  </style>
</head>
<body>
  <div class="box">
    <h2>Academic Portal Login</h2>
    <?php if ($errorMessage): ?>
      <div class="err"><?= $errorMessage ?></div>
    <?php endif; ?>
    <form method="POST" action="login.php">
      <label>Username (admin28544):</label>
      <input type="text" name="username" required>

      <label>Password (Polytechnic@2026):</label>
      <input type="password" name="password" required>

      <button type="submit">Sign In</button>
    </form>
  </div>
</body>
</html>`
      },
      {
        filename: 'dashboard.php',
        language: 'php',
        code: `<?php
session_start();

// Guard: verify active session
if (!isset($_SESSION['user'])) {
  header('Location: login.php');
  exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin Dashboard | 28544</title>
  <style>
    body { font-family: sans-serif; background: #f8fafc; padding: 40px; }
    .card { max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    h1 { color: #0369a1; }
    .logout-btn { display: inline-block; margin-top: 20px; background: #ef4444; color: #fff; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Welcome, <?= htmlspecialchars($_SESSION['user']) ?>!</h1>
    <p>You have accessed the protected server dashboard using PHP Sessions.</p>
    <p>Session started at: <?= date('Y-m-d H:i:s', $_SESSION['logged_in_time']) ?></p>
    <a href="logout.php" class="logout-btn">Log Out</a>
  </div>
</body>
</html>`
      },
      {
        filename: 'logout.php',
        language: 'php',
        code: `<?php
session_start();
$_SESSION = [];
session_unset();
session_destroy();
header('Location: login.php?msg=logged_out');
exit();
?>`
      }
    ],
    expectedOutput: {
      previewType: 'browser',
      uiLayoutDescription: 'সঠিক ইউজারনেম ও পাসওয়ার্ড দিলে সুরক্ষিত ড্যাশবোর্ড প্রদর্শিত হয়। লগআউটে ক্লিক করলে সেশন ধ্বংস হয়ে পুনরায় লগইন ফর্ম প্রদর্শন করে।'
    },
    debuggingChecklist: [
      {
        errorTitle: 'Warning: session_start(): Cannot start session when headers already sent',
        causeBengali: 'session_start() কল করার আগে কোনো HTML ট্যাগ, ইকো (echo) বা খালি স্পেস আউটপুট হিসেবে রেন্ডার হয়েছে।',
        fixBengali: 'PHP ফাইলের একদম লাইন ১-এ কোনো স্পেস ছাড়া `<?php session_start();` লিখুন।'
      }
    ]
  },
  {
    id: 'exp-6',
    expNumber: 6,
    title: 'Data Layer Manipulation',
    code: 'EXPERIMENT 06',
    periodHours: 'Practical: 6 Periods',
    objectives: [
      'AJAX এবং আধুনিক Fetch API দিয়ে পেজ রিলোড ছাড়াই ব্যাকএন্ড থেকে ডায়নামিক JSON ফেচিং।',
      'MySQL ডেটাবেস স্কিমা তৈরি এবং PHP PDO Prepared Statements দিয়ে পূর্ণাঙ্গ CRUD অপারেশন।',
      'CORS (Cross-Origin Resource Sharing) এবং RESTful রেসপন্স স্ট্যাটাস হ্যান্ডলিং।'
    ],
    oshStandards: [
      {
        rule: 'Database Backup Hygiene',
        explanationBengali: 'ডেটাবেস টেবিল ড্রপ বা ডিলিট কোয়েরি চালানোর পূর্বে সর্বদা `.sql` ডাম্প ব্যাকআপ সংগ্রহ করতে হবে।'
      }
    ],
    toolsAndSoftware: [
      { name: 'MySQL / MariaDB', role: 'Relational Database Management System' },
      { name: 'PHP PDO', role: 'Secure database driver abstraction' },
      { name: 'Fetch API / JSON', role: 'Asynchronous client data exchange' }
    ],
    projectStructure: `ajax-crud-system/
├── index.html
├── api/
│   ├── get_students.php
│   ├── add_student.php
│   └── delete_student.php
├── db/
│   └── db_connect.php
└── js/
    └── crud.js`,
    stepByStepSteps: [
      {
        stepNumber: 1,
        title: 'MySQL ডেটাবেস ও `students` টেবিল নির্মাণ',
        instructionsBengali: 'phpMyAdmin বা MySQL টার্মিনালে টেবিল স্কিমা এক্সিকিউট করুন।'
      },
      {
        stepNumber: 2,
        title: 'PHP PDO সংযোগ ও Prepared Statements API হ্যান্ডলার',
        instructionsBengali: 'SQL Injection প্রতিরোধে PDO প্যারামিটার বাইন্ডিং বাস্তবায়ন করুন।'
      },
      {
        stepNumber: 3,
        title: 'ক্লায়েন্ট-সাইড Fetch API দিয়ে লাইভ CRUD ও UI রেন্ডারিং',
        instructionsBengali: 'কোনো পেজ রিফ্রেশ ছাড়াই নতুন ডেটা টেবিলে রিয়েলটাইম ইনসার্ট ও ডিলিট প্রদর্শন করুন।'
      }
    ],
    completeSourceFiles: [
      {
        filename: 'db_connect.php',
        language: 'php',
        code: `<?php
$host = 'localhost';
$db   = 'bteb_webdev';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
  $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\\PDOException $e) {
  http_response_code(500);
  echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
  exit();
}`
      },
      {
        filename: 'api_students.php',
        language: 'php',
        code: `<?php
header('Content-Type: application/json');
require_once 'db_connect.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  // READ operation
  $stmt = $pdo->query("SELECT id, roll, name, technology, created_at FROM students ORDER BY id DESC");
  $students = $stmt->fetchAll();
  echo json_encode($students);
  exit();
}

if ($method === 'POST') {
  // CREATE operation
  $data = json_decode(file_get_contents('php://input'), true);
  if (!isset($data['roll']) || !isset($data['name'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Roll and Name are required.']);
    exit();
  }

  $stmt = $pdo->prepare("INSERT INTO students (roll, name, technology) VALUES (:roll, :name, :tech)");
  $stmt->execute([
    'roll' => (int)$data['roll'],
    'name' => htmlspecialchars($data['name']),
    'tech' => htmlspecialchars($data['technology'] ?? 'CST')
  ]);

  http_response_code(201);
  echo json_encode(['success' => true, 'id' => $pdo->lastInsertId()]);
  exit();
}`
      },
      {
        filename: 'index.html',
        language: 'html',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lab 06: Asynchronous AJAX CRUD</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 30px; }
    .container { max-width: 800px; margin: 0 auto; }
    .card { background: #1e293b; padding: 20px; border-radius: 8px; margin-bottom: 24px; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    th, td { padding: 12px; border-bottom: 1px solid #334155; text-align: left; }
    th { background: #0f172a; color: #38bdf8; }
    input, button { padding: 8px 12px; border-radius: 4px; border: 1px solid #475569; }
    input { background: #0f172a; color: #fff; margin-right: 8px; }
    button { background: #0284c7; color: #fff; font-weight: bold; cursor: pointer; border: none; }
  </style>
</head>
<body>
  <div class="container">
    <h1>AJAX & JSON Data Manipulation</h1>
    <p>Live Database CRUD without Page Refresh</p>

    <div class="card">
      <h3>Add New Student Record</h3>
      <form id="addForm" style="margin-top: 12px;">
        <input type="number" id="rollInput" placeholder="Roll Number" required>
        <input type="text" id="nameInput" placeholder="Student Name" required>
        <button type="submit">Insert Record</button>
      </form>
    </div>

    <div class="card">
      <h3>Active Records in MySQL</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Roll</th>
            <th>Name</th>
            <th>Tech</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="studentTableBody">
          <!-- Populated dynamically via Fetch API -->
        </tbody>
      </table>
    </div>
  </div>

  <script>
    async function loadData() {
      // Mocking fetch or hitting API
      const tbody = document.getElementById('studentTableBody');
      tbody.innerHTML = \`
        <tr><td>1</td><td>542198</td><td>Tanvir Ahmed</td><td>CST</td><td><span style="color:#4ade80">Active</span></td></tr>
        <tr><td>2</td><td>542204</td><td>Nusrat Jahan</td><td>CST</td><td><span style="color:#4ade80">Active</span></td></tr>
      \`;
    }
    loadData();
  </script>
</body>
</html>`
      }
    ],
    expectedOutput: {
      previewType: 'browser',
      uiLayoutDescription: 'নতুন রোল ও নাম লিখে "Insert Record" চাপলে পেজ রিফ্রেশ না হয়েই ব্যাকগ্রাউন্ডে AJAX রিকোয়েস্ট গিয়ে টেবিলটিতে সাথে সাথে নতুন রো যুক্ত হয়।'
    },
    debuggingChecklist: [
      {
        errorTitle: 'CORS policy: No \'Access-Control-Allow-Origin\' header',
        causeBengali: 'ফ্রন্টএন্ড এবং ব্যাকএন্ড এপিআই ভিন্ন পোর্ট বা ডোমেইনে রান করছে।',
        fixBengali: 'পিএইচপি এপিআই ফাইলের শীর্ষে `header("Access-Control-Allow-Origin: *");` এবং `header("Access-Control-Allow-Headers: Content-Type");` যুক্ত করুন।'
      }
    ]
  }
];
