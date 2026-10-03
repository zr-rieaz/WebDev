import { TheoryUnit } from '../../types/curriculum';

export const unit1: TheoryUnit = {
  id: 'theory-1',
  unitNumber: 1,
  title: 'WEB TECHNOLOGY AND INDUSTRY REQUIREMENT',
  code: 'UNIT 01',
  creditHours: 'Theory: 1 Period/Week | Credit: 3',
  overviewBengali: 'এই ইউনিটে আধুনিক Web Technology-র আর্কিটেকচার, ক্লায়েন্ট-সার্ভার নেটওয়ার্কিং ও প্রটোকল কাঠামো, Frontend, Backend এবং Full-Stack ইঞ্জিনিয়ারিংয়ের গভীর তাত্ত্বিক ও ব্যবহারিক পার্থক্য, ইন্ডাস্ট্রি স্ট্যান্ডার্ড রোলস ও দায়িত্ব, উদীয়মান ক্লাউড ও ওয়েব ট্রেন্ডস, ফ্রিল্যান্সিং ও ক্যারিয়ার কৌশল, আন্তর্জাতিক W3C স্ট্যান্ডার্ড ও WCAG অ্যাক্সেসিবিলিটি গাইডলাইন এবং একটি সম্পূর্ণ URL-এর প্রতিটি কম্পোনেন্টের নেটওয়ার্ক মেকানিজম অত্যন্ত বিস্তারিতভাবে আলোচনা করা হয়েছে।',
  subTopics: [
    {
      id: '1.1',
      code: '1.1',
      title: 'Web Technology এবং Web Development-এর বিশদ বিশ্লেষণ',
      englishTitle: 'In-Depth Concept of Web Technology and Development',
      explanationBengali: 'Web Technology হলো এমন একটি বহুস্তরীয় (Multi-layered) কম্পিউটিং অবকাঠামো যার মধ্যে ইন্টারনেট নেটওয়ার্কিং প্রটোকল (TCP/IP, HTTP/HTTPS, DNS), সার্ভার অবকাঠামো (Apache, Nginx, LiteSpeed), ক্লায়েন্ট অ্যাপ্লিকেশন (Web Browsers), মার্কআপ স্পেসিফিকেশন এবং প্রোগ্রামিং ল্যাঙ্গুয়েজসমূহ অন্তর্ভুক্ত থাকে। Web Development হলো সেই সিস্টেমেটিক ইঞ্জিনিয়ারিং শৃঙ্খলা যার মাধ্যমে একটি ধারণাকে বিশ্লেষণ, ইনফরমেশন আর্কিটেকচার প্রণয়ন, ইন্টারফেস কোডিং, ব্যাকএন্ড লজিক নির্মাণ, ডেটাবেস ডিজাইন এবং সিকিউরিটি অডিট করে ইন্টারনেটে সার্বজনীনভাবে ব্যবহারযোগ্য করা হয়।',
      detailedSections: [
        {
          heading: 'Web Request-Response Lifecycle ও আন্ডার-দ্য-হুড মেকানিজম',
          contentBengali: 'যখন একজন ব্যবহারকারী ব্রাউজারের অ্যাড্রেস বারে কোনো URL লিখে Enter চাপেন, তখন পেছনের ইঞ্জিনিয়ারিং ধাপগুলো পর্যায়ক্রমে ঘটে:',
          keyPoints: [
            '১. DNS Resolution (ডোমেন নেম রেজোলিউশন): ব্রাউজার প্রথমে লোকাল ক্যাশ, এরপর OS ক্যাশ এবং পরিশেষে Recursive DNS সার্ভারে কুয়েরি পাঠিয়ে মানবপাঠ্য ডোমেন (যেমন www.example.com)-কে মেশিনের বোধগম্য IP অ্যাড্রেসে (যেমন 93.184.216.34) রূপান্তর করে।',
            '২. TCP Three-Way Handshake: ব্রাউজার ও টার্গেট ওয়েব সার্ভারের মধ্যে SYN, SYN-ACK, এবং ACK প্যাকেট বিনিময়ের মাধ্যমে একটি নির্ভরযোগ্য ট্রান্সপোর্ট চ্যানেল তৈরি হয়।',
            '৩. TLS/SSL Cryptographic Handshake: HTTPS সংযোগের ক্ষেত্রে ক্লায়েন্ট ও সার্ভার সাইফার স্যুট নির্ধারণ করে অ্যাসাইমেট্রিক কী এক্সচেঞ্জ করে এনক্রিপ্টেড সিমেট্রিক সেশন প্রতিষ্ঠা করে।',
            '৪. HTTP Request Dispatch: ব্রাউজার হেডার (User-Agent, Accept, Cookie) সহকারে মেথড (GET/POST) পাঠায়।',
            '৫. Server Processing & Rendering: ওয়েব সার্ভার (Apache) পিএইচপি স্ক্রিপ্ট এক্সিকিউট করে ও ডেটাবেস থেকে ডেটা ফেচ করে HTML স্ট্রিম রেসপন্স হিসেবে পাঠায়, যা ব্রাউজারের Blink বা Gecko ইঞ্জিন পার্স করে DOM ও CSSOM ট্রি তৈরি করে পেইন্ট করে।'
          ]
        },
        {
          heading: 'Stateless HTTP প্রটোকল এবং স্টেট ম্যানেজমেন্টের আবশ্যকতা',
          contentBengali: 'HTTP হলো একটি স্বভাবগতভাবে Stateless প্রটোকল। এর অর্থ হলো সার্ভার একটি রিকোয়েস্ট প্রসেস করে রেসপন্স পাঠানোর সাথে সাথেই ক্লায়েন্টের সাথে সংযোগ বিচ্ছিন্ন করে এবং পূর্ববর্তী রিকোয়েস্টের কোনো মেমরি বা স্টেট ধারণ করে না। ফলে ই-কমার্স কার্ট বা ইউজার লগইন ধরে রাখার জন্য Session, Cookie, LocalStorage এবং JWT (JSON Web Tokens)-এর মতো আধুনিক স্টেট পারসিস্টেন্স মেকানিজম প্রয়োগ করতে হয়।'
        }
      ],
      comparisonTable: {
        caption: 'ওয়েব আর্কিটেকচারের স্তরসমূহ ও তাদের দায়িত্ব',
        headers: ['স্তর (Layer)', 'ব্যবহৃত প্রযুক্তি / প্রটোকল', 'প্রধান দায়িত্ব'],
        rows: [
          ['Application Layer', 'HTTP/HTTPS, WebSockets, DNS', 'ব্যবহারকারীর ডেটা ও বার্তা আদান-প্রদান নির্ধারণ'],
          ['Presentation / UI Layer', 'HTML5, CSS3, JavaScript, SVG', 'ব্রাউজারে ভিজ্যুয়াল রেন্ডারিং ও ইউজার ইন্টারঅ্যাকশন'],
          ['Business Logic Layer', 'PHP, Node.js, Python, Java', 'ডেটা প্রসেসিং, সিকিউরিটি ফিল্টারিং ও রুলস ভ্যালিডেশন'],
          ['Data Persistence Layer', 'MySQL, MariaDB, PostgreSQL, Redis', 'স্থায়ীভাবে টেবিল ও রিলেশনে ডেটা সংরক্ষণ ও কুয়েরি']
        ]
      },
      codeSnippets: [
        {
          language: 'bash',
          filename: 'http_raw_request_response.txt',
          explanation: 'একটি নিখুঁত ক্লায়েন্ট-সার্ভার রিকোয়েস্ট ও রেসপন্স হেডারের অভ্যন্তরীণ গঠন',
          code: `/* 1. Client HTTP GET Request */
GET /courses/28544 HTTP/1.1
Host: polytechnic.edu.bd
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122.0.0.0
Accept: text/html,application/xhtml+xml,application/json
Accept-Language: bn-BD,bn;q=0.9,en-US;q=0.8
Connection: keep-alive

/* 2. Web Server Response */
HTTP/1.1 200 OK
Date: Sat, 03 Oct 2026 12:00:00 GMT
Server: Apache/2.4.54 (Unix) OpenSSL/1.1.1
Content-Type: text/html; charset=UTF-8
Content-Length: 4820
Set-Cookie: PHPSESSID=d94k19fasd8123; path=/; HttpOnly; Secure

<!DOCTYPE html>
<html lang="bn">...</html>`
        }
      ],
      w3cStandards: [
        'ওয়েব সাইটের প্রতিটি পৃষ্ঠায় বাধ্যতামূলকভাবে নিরাপদ HTTPS (Port 443) এনক্রিপশন প্রয়োগ করতে হবে।',
        'ব্রাউজার ইঞ্জিনের জন্য স্ট্যান্ডার্ড ডকটাইপ (<!DOCTYPE html>) এবং ক্যারেক্টার এনকোডিং (<meta charset="UTF-8">) ঘোষণা নিশ্চিত করা।'
      ],
      keyTakeaways: [
        'Web Technology কেবল ওয়েব পেজ তৈরি নয়, এটি নেটওয়ার্কিং, সার্ভার, ব্রাউজার ইঞ্জিন ও ডেটাবেসের সামগ্রিক ইকোসিস্টেম।',
        'HTTP Stateless হওয়ায় আধুনিক ওয়েবে সেশন এবং কুকির মাধ্যমে স্টেট বজায় রাখা হয়।'
      ]
    },
    {
      id: '1.2',
      code: '1.2',
      title: 'Frontend, Backend এবং Full-Stack Development-এর বিস্তৃত বৈসাদৃশ্য',
      englishTitle: 'Deep Comparative Architecture: Frontend vs Backend vs Full-Stack',
      explanationBengali: 'আধুনিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ে ওয়েব অ্যাপ্লিকেশনকে প্রধানত দুটি স্বতন্ত্র প্রান্তে (Frontend ও Backend) ভাগ করা হয় এবং উভয়ের সংযোগস্থলকে Full-Stack ইঞ্জিনিয়ারিং বলা হয়। প্রতিটি প্রান্তের প্রযুক্তিগত দায়িত্ব, মেমরি মডেল, পারফরম্যান্স মেট্রিক ও নিরাপত্তা ঝুঁকি সম্পূর্ণ আলাদা।',
      detailedSections: [
        {
          heading: 'Frontend Engineering-এর গভীরতর পরিধি',
          contentBengali: 'ফ্রন্টএন্ড ইঞ্জিনিয়ার শুধুমাত্র UI ডিজাইন করেন না; তিনি ব্রাউজারের Rendering Pipeline (DOM Construction -> CSSOM Construction -> Render Tree -> Layout / Reflow -> Paint -> Compositing) অপটিমাইজ করেন। মেমরি লিক প্রতিরোধ, বান্ডল সাইজ সংকোচন (Tree Shaking, Minification), Core Web Vitals (LCP, FID/INP, CLS) নিয়ন্ত্রণ এবং রিয়েলটাইম স্টেট ম্যানেজমেন্ট ফ্রন্টএন্ড ইঞ্জিনিয়ারের কেন্দ্রীয় দায়িত্ব।'
        },
        {
          heading: 'Backend Engineering-এর গভীরতর পরিধি',
          contentBengali: 'ব্যাকএন্ড সিস্টেম হাই-কনকারেন্সি রিকোয়েস্ট হ্যান্ডলিং, ডেটাবেস রিড/রাইট অপটিমাইজেশন (Indexing, Query Optimization), ক্যাশিং কৌশল (Redis, Memcached), অথেনটিকেশন ও রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC), এবং ক্রিপ্টোগ্রাফিক সুরক্ষা (Password Hashing via Argon2 / Bcrypt) নিয়ে কাজ করে। ব্যাকএন্ডে কোনো লজিক্যাল বা সিনট্যাক্স এরর ঘটলে পুরো সার্ভার স্টপ বা ডেটাবেস করাপশন হতে পারে।'
        }
      ],
      comparisonTable: {
        caption: 'Frontend বনাম Backend ইঞ্জিনিয়ারিংয়ের তুলনামূলক মেট্রিক্স',
        headers: ['বৈশিষ্ট্য (Parameter)', 'Frontend Development', 'Backend Development'],
        rows: [
          ['এক্সিকিউশন এনভায়রনমেন্ট', 'ক্লায়েন্ট মেশিন / ওয়েব ব্রাউজার (V8, SpiderMonkey)', 'ওয়েব সার্ভার কম্পিউটার (Linux/Unix, Apache, PHP Engine)'],
          ['ব্যবহৃত প্রযুক্তি স্ট্যাক', 'HTML5, CSS3, JavaScript (ES6+), React, Tailwind', 'PHP 8.x, Python, Node.js, MySQL, PostgreSQL, Redis'],
          ['সোর্স কোড গোপনীয়তা', 'পাবলিক (যেকোনো ইউজার Inspect Element-এ দেখতে পারে)', 'শতভাগ গোপন ও এনক্রিপ্টেড (ক্লায়েন্ট সোর্স দেখতে পারে না)'],
          ['প্রধান ঝুঁকি ও আক্রমণ', 'Cross-Site Scripting (XSS), Clickjacking', 'SQL Injection, Remote Code Execution (RCE), CSRF'],
          ['পারফরম্যান্স মেট্রিক্স', 'First Contentful Paint (FCP), Cumulative Layout Shift', 'Response Time (TTFB), Database Throughput, QPS (Queries/Sec)']
        ]
      },
      bulletPoints: [
        {
          title: 'Full-Stack Developer-এর বাস্তব ভূমিকা',
          text: 'একজন ফুল-স্ট্যাক ডেভেলপার পুরো আর্কিটেকচার বোঝেন—তিনি ডেটাবেস স্কিমা ডিজাইন থেকে শুরু করে PHP REST API তৈরি এবং React বা ভ্যানিলা JS দিয়ে ডায়নামিক UI সংযোগ করতে পারেন। এতে সফটওয়্যার ডেভেলপমেন্ট টিমের কমিউনিকেশন গ্যাপ দূর হয়।'
        }
      ]
    },
    {
      id: '1.3',
      code: '1.3',
      title: 'ওয়েব ইন্ডাস্ট্রিতে ডেভেলপারের বিভিন্ন রোল ও দায়িত্ব বণ্টন',
      englishTitle: 'Industrial Roles, Job Hierarchies & Engineering Lifecycle',
      explanationBengali: 'প্রফেশনাল সফটওয়্যার ফার্ম বা এজেন্সিতে একটি ওয়েব প্রজেক্ট একক ব্যক্তির দ্বারা নির্মিত হয় না। Agile Scrum পদ্ধতিতে একটি ক্রস-ফাংশনাল দল বিভিন্ন বিশেষায়িত ভূমিকায় বিভক্ত হয়ে প্রজেক্ট সম্পন্ন করে।',
      detailedSections: [
        {
          heading: 'একটি স্ট্যান্ডার্ড প্রোডাক্ট টিমের ইঞ্জিনিয়ারিং রোলসমূহ',
          contentBengali: 'ওয়েব ইন্ডাস্ট্রির বিভিন্ন ইঞ্জিনিয়ারিং রোলের সুস্পষ্ট কর্মপরিধি:',
          keyPoints: [
            '১. UI/UX Product Designer: ইউজারের সমস্যা চিহ্নিত করে Figma বা Adobe XD-তে Wireframe, High-Fidelity Prototype এবং Design Token তৈরি করেন।',
            '২. Frontend Software Engineer: ফিগমা ডিজাইন ফাইল থেকে ডিজাইন টোকেন সংগ্রহ করে Semantic HTML, মডুলার CSS এবং অপটিমাইজড জাভাস্ক্রিপ্ট কোডে রূপান্তর করেন। ক্রস-ডিভাইস রেসপনসিভনেস নিশ্চিত করেন।',
            '৩. Backend Architect: ডেটাবেসের ERD (Entity Relationship Diagram) ডিজাইন করেন, স্কেলেবল ডেটা কুয়েরি লেখেন, এবং ফ্রন্টএন্ডের জন্য সিকিউর এন্ডপয়েন্ট (REST / GraphQL API) এক্সপোজ করেন।',
            '৪. DevOps & Infrastructure Engineer: গিটহাব অ্যাকশনস দিয়ে CI/CD পাইপলাইন তৈরি, ডকার কন্টেইনারাইজেশন, ক্লাউড সার্ভার প্রভিশনিং এবং সার্ভার হেলথ মনিটর করেন।',
            '৫. QA (Quality Assurance) Engineer: অটোমেটেড টেস্টিং (Cypress, Playwright) ও ম্যানুয়াল টেস্টিং চালিয়ে বাগ, সিকিউরিটি ফুটপ্রিন্ট এবং ব্রাউজার ইনকমপ্যাটিবিলিটি শনাক্ত করেন।'
          ]
        }
      ],
      keyTakeaways: [
        'ইন্ডাস্ট্রি টিমে একক কাজ নয়, বরং টিমওয়ার্কের ভিত্তিতে ভার্সন কন্ট্রোল (Git) ব্যবহার করে কাজ সম্পন্ন হয়।',
        'কোড লেখার পাশাপাশি ডকুমেন্টেশন (README, Swagger API Docs) তৈরি করা ইঞ্জিনিয়ারের আবশ্যিক দায়িত্ব।'
      ]
    },
    {
      id: '1.4',
      code: '1.4',
      title: 'আধুনিক IT ট্রেন্ডস এবং ওয়েব প্রযুক্তির ভবিষ্যৎ রূপরেখা',
      englishTitle: 'Cutting-Edge IT Trends: PWA, WebAssembly, Serverless & Microfrontends',
      explanationBengali: 'গত কয়েক বছরে ওয়েব প্রযুক্তি সাধারণ স্ট্যাটিক পৃষ্ঠা থেকে ক্লাউড-নেটিভ কম্পিউটিং প্ল্যাটফর্মে রূপান্তরিত হয়েছে। আন্তর্জাতিক সফটওয়্যার ইন্ডাস্ট্রিতে রাজত্ব করা প্রধান ট্রেন্ডগুলো নিম্নরূপ:',
      detailedSections: [
        {
          heading: '১. Progressive Web Apps (PWA) আর্কিটেকচার',
          contentBengali: 'PWA ওয়েবের সার্বজনীন অ্যাক্সেসিবিলিটি এবং নেটিভ মোবাইল অ্যাপের উচ্চ কার্যক্ষমতাকে একত্রিত করে। Service Worker ব্যাকগ্রাউন্ড থ্রেড ব্যবহার করে অফলাইন ক্যাশিং, পুশ নোটিফিকেশন, ব্যাকগ্রাউন্ড সিঙ্ক এবং ডিভাইসের হার্ডওয়্যার ক্যামেরা/লোকেশন অ্যাক্সেস করা সম্ভব হয়। এটি প্লে-স্টোর নির্ভরতা ছাড়া যেকোনো ব্রাউজার থেকেই ডিভাইসে ইনস্টল করা যায়।'
        },
        {
          heading: '২. Serverless Computing ও Edge Functions',
          contentBengali: 'সার্ভারলেস মডেলে ডেভেলপারকে সার্বক্ষণিক ক্লাউড সার্ভার পরিচালনা বা প্যাচিং করতে হয় না। কোডকে ছোট ছোট ফাংশন (FaaS - Function as a Service) হিসেবে ডিপ্লয় করা হয় (যেমন AWS Lambda, Cloudflare Workers)। রিকোয়েস্ট এলে মাইক্রোসেকেন্ডে ফাংশনটি জেগে উঠে এক্সিকিউট হয় এবং কাজ শেষে মেমরি খালি করে; এতে সার্ভার কস্টিং ৯৫% পর্যন্ত হ্রাস পায়।'
        },
        {
          heading: '৩. WebAssembly (Wasm)',
          contentBengali: 'WebAssembly ব্রাউজারে নিয়ার-নেটিভ স্পিডে C++, Rust বা Go-তে লিখিত কোড নির্বাহের সুযোগ দেয়। ভিডিও এডিটিং, 3D গেমিং এবং সাইবার ক্রিপ্টোগ্রাফি এখন সরাসরি ব্রাউজারেই সুপারফাস্ট গতিতে রান করে।'
        }
      ]
    },
    {
      id: '1.5',
      code: '1.5',
      title: 'ক্যারিয়ার অপরচুনিটি এবং গ্লোবাল ফ্রিল্যান্সিং স্ট্যান্ডার্ডস',
      englishTitle: 'Career Pathways, Freelancing Roadmaps & Industry Competencies',
      explanationBengali: 'পলিটেকনিক ডিপ্লোমা গ্র্যাজুয়েটদের জন্য ওয়েব ডেভেলপমেন্ট হলো দ্রুততম ক্যারিয়ার গড়ার অন্যতম সুবর্ণ সুযোগ। বাংলাদেশ সরকারের স্মার্ট বাংলাদেশ ভিশন এবং আন্তর্জাতিক সফটওয়্যার আউটসোর্সিংয়ে ওয়েব স্কিলের চাহিদা শীর্ষস্থানে।',
      detailedSections: [
        {
          heading: 'আন্তর্জাতিক ক্লায়েন্টদের প্রত্যাশিত কোডিং মান ও স্ট্যান্ডার্ড',
          contentBengali: 'ফ্রিল্যান্স মার্কেটপ্লেসগুলোতে সফল হতে হলে নিচের কারিগরি অভ্যাসগুলো বাধ্যতামূলক:',
          keyPoints: [
            'Clean Architecture ও DRY (Don\'t Repeat Yourself) নীতি: কোনো কোড দুইবার ডুপ্লিকেট না করে ফাংশন ও কম্পোনেন্টে ভাগ করা।',
            'Semantic Versioning ও Git Commit Convention: যেমন "feat: add user login API", "fix: resolve mobile overflow bug"।',
            'Cross-Browser & Responsive Rigor: সাইটটি যাতে Chrome, Safari, Firefox এবং 320px থেকে 4K স্ক্রিনে কোনো লেআউট ব্রেক ছাড়া মসৃণভাবে চলে।'
          ]
        }
      ]
    },
    {
      id: '1.6',
      code: '1.6',
      title: 'W3C স্ট্যান্ডার্ড এবং Web Accessibility (WCAG 2.1) নীতিমালার গভীর বিশ্লেষণ',
      englishTitle: 'W3C Web Standards, Validation & Web Content Accessibility Guidelines (WCAG)',
      explanationBengali: 'World Wide Web Consortium (W3C) ১৯৯৪ সালে ওয়েবের জনক টিম বার্নার্স-লি কর্তৃক প্রতিষ্ঠিত হয়। এর মূল লক্ষ্য হলো "Web for All, Web on Everything"—অর্থাৎ কোনো নির্দিষ্ট ব্রাউজার বা ডিভাইসের একচেটিয়া আধিপত্য প্রতিহত করে উন্মুক্ত স্ট্যান্ডার্ড নিশ্চিত করা।',
      detailedSections: [
        {
          heading: 'WCAG 2.1-এর চারটি প্রধান স্তম্ভ (POUR Principles)',
          contentBengali: 'Web Content Accessibility Guidelines (WCAG) চারটি সার্বজনীন স্তম্ভের ওপর প্রতিষ্ঠিত:',
          keyPoints: [
            '১. Perceivable (উপলব্ধিযোগ্য): তথ্য ও ইউজার ইন্টারফেস উপাদান ব্যবহারকারীর ইন্দ্রিয়গ্রাহ্য হতে হবে। উদাহরণ: প্রতিটি ইমেজে অর্থপূর্ণ `alt` টেক্সট প্রদান করা যাতে দৃষ্টিপ্রতিবন্ধী ব্যক্তি স্ক্রিন রিডারে টেক্সট শুনতে পান।',
            '২. Operable (ব্যবহারযোগ্য): ইন্টারফেস উপাদানগুলো কীবোর্ডের মাধ্যমে পরিচালনাযোগ্য হতে হবে। উদাহরণ: মাউস ছাড়া শুধুমাত্র `Tab` এবং `Enter` কী চেপে ফর্ম সাবমিট ও নেভিগেট করার সুবিধা।',
            '৩. Understandable (বোধগম্য): টেক্সট ও ফর্মের তথ্য সহজে বোধগম্য হতে হবে। উদাহরণ: ইনপুট ফিল্ডে সঠিক লেবেল ও ভুল হলে পরিষ্কার এরর মেসেজ প্রদর্শন।',
            '৪. Robust (দৃঢ়/টেকসই): কন্টেন্ট এমনভাবে কোড করতে হবে যা বর্তমান ও ভবিষ্যতের বিভিন্ন ইউজার এজেন্ট ও সহায়ক প্রযুক্তি (Assistive Technologies) নির্ভরযোগ্যভাবে পার্স করতে পারে।'
          ]
        }
      ],
      w3cStandards: [
        'W3C Markup Validator (validator.w3.org) দ্বারা পেজের HTML ভ্যালিডেশন শূন্য এরর নিশ্চিত করতে হবে।',
        'CSS কন্ট্রাস্ট রেশিও সাধারণ টেক্সটের জন্য নূন্যতম 4.5:1 এবং বড় টেক্সটের জন্য 3:1 (WCAG AA Level) বজায় রাখতে হবে।'
      ]
    },
    {
      id: '1.7',
      code: '1.7',
      title: 'URL-এর শারীরস্থান (Anatomy of a URL) ও নেটওয়ার্ক কাঠামো',
      englishTitle: 'Comprehensive Technical Breakdown of Uniform Resource Locator (URL)',
      explanationBengali: 'URL (Uniform Resource Locator) হলো ইন্টারনেটে যেকোনো ওয়েব পেজ, ইমেজ, ভিডিও বা API এন্ডপয়েন্টের অনন্য বৈশ্বিক ভৌগোলিক পরিচয়। এটি কেবল একটি স্ট্রিং নয়, বরং নেটওয়ার্ক রাউটিংয়ের সম্পূর্ণ নির্দেশনা সংবলিত প্রটোকল কাঠামো।',
      detailedSections: [
        {
          heading: 'একটি পূর্ণাঙ্গ URL-এর প্রতিটি উপাদানের নেটওয়ার্ক দায়িত্ব',
          contentBengali: 'URL-এর ৭টি মৌলিক অংশের পুঙ্খানুপুঙ্খ বিবরণ:',
          keyPoints: [
            '১. Scheme / Protocol (https://): ক্লায়েন্ট ও সার্ভারের মধ্যে ডেটা বিনিময়ের ট্রান্সমিশন নিয়ম নির্ধারণ করে।',
            '২. Subdomain (www / api / portal): মূল ডোমেনের অধীনে নির্দিষ্ট সাব-সেকশন বা মাইক্রোসার্ভিস নির্দেশ করে।',
            '৩. Domain Name & SLD (example): সেকেন্ড লেভেল ডোমেন যা প্রতিষ্ঠানের ব্র্যান্ড নেম ধারণ করে।',
            '৪. Top-Level Domain - TLD (.com, .org, .edu, .gov.bd): ডোমেনের ক্যাটাগরি বা দেশীয় ভৌগোলিক সত্তা নির্দেশ করে।',
            '৫. Port Number (:443, :80, :8080): সার্ভারের নির্দিষ্ট ভার্চুয়াল গেটওয়ে যেখানে সংশ্লিষ্ট প্রসেস রিকোয়েস্ট শোনার অপেক্ষায় লিসেন করে।',
            '৬. Path (/department/cst/semester-4): সার্ভারের ফাইলসিস্টেম বা রাউটারের ভার্চুয়াল ডিরেক্টরি পাথ।',
            '৭. Query String (?code=28544&track=theory): প্রশ্নবোধক চিহ্নের পর অ্যান্ড (&) দ্বারা বিভক্ত কী-ভ্যালু পেয়ার যা সার্ভারে ফিল্টারিং ডেটা পাঠায়।',
            '৮. Fragment Identifier / Hash (#curriculum): ব্রাউজারকে সার্ভারে না পাঠিয়ে ক্লায়েন্টেই নির্দিষ্ট HTML আইডি বিশিষ্ট এলিমেন্টে জাম্প করায়।'
          ]
        }
      ],
      codeSnippets: [
        {
          language: 'bash',
          filename: 'url_dissection_map.txt',
          explanation: 'URL-এর আর্কিটেকচারাল ম্যাপিং চিত্র',
          code: `https://portal.polytechnic.edu.bd:443/academic/syllabus?code=28544&credit=3#unit-01
  │        │          │          │   │         │               │                │
  │        │          │          │   │         │               │                └─ Fragment (#unit-01)
  │        │          │          │   │         │               └─ Query Parameters (?code=28544&credit=3)
  │        │          │          │   │         └─ Resource Path (/academic/syllabus)
  │        │          │          │   └─ Port Number (:443 for Secure TLS)
  │        │          │          └─ Country Code TLD (.bd) + Second Level (.edu)
  │        │          └─ Primary Domain (polytechnic)
  │        └─ Subdomain (portal)
  └─ Scheme / Protocol (https)`
        }
      ]
    }
  ],
  selfAssessment: {
    shortQuestions: [
      {
        id: 'q1-1',
        q: 'Web Technology বলতে কী বোঝায়? এর প্রধান উপাদানগুলো কী কী?',
        a: 'Web Technology হলো এমন একটি সামগ্রিক প্রযুক্তিগত কাঠামো যার মাধ্যমে ক্লায়েন্ট ও সার্ভারের মধ্যে নেটওয়ার্ক প্রটোকল (HTTP/HTTPS), ব্রাউজার রেন্ডারিং ইঞ্জিন, সার্ভার-সাইড স্ক্রিপ্টিং ল্যাঙ্গুয়েজ (PHP) এবং ডেটাবেস সিস্টেম সমন্বিত হয়ে ইন্টারনেটে ডায়নামিক ও ইন্টারঅ্যাক্টিভ ওয়েব সেবা নিশ্চিত করে। এর প্রধান উপাদান: Client, Web Server, Database এবং Network Protocols।',
        marks: 2
      },
      {
        id: 'q1-2',
        q: 'Frontend ও Backend ডেভেলপমেন্টের মূল তিনটি পার্থক্য লেখো।',
        a: '১) Frontend ব্রাউজারে এক্সিকিউট হয়, Backend ওয়েব সার্ভারে চলে; ২) Frontend-এর কোড (HTML/CSS/JS) ব্রাউজারে দৃশ্যমান, Backend কোড (PHP/SQL) ক্লায়েন্টের নিকট সম্পূর্ণ গোপন থাকে; ৩) Frontend ইউজার ইন্টারফেস ও অভিজ্ঞতার ওপর ফোকাস করে, Backend ডেটাবেস অপারেশন, বিজনেস লজিক ও ডেটা সিকিউরিটি পরিচালনা করে।',
        marks: 2
      },
      {
        id: 'q1-3',
        q: 'W3C এর পূর্ণরূপ কী এবং এর প্রধান লক্ষ্য কী?',
        a: 'W3C এর পূর্ণরূপ হলো World Wide Web Consortium। এর প্রধান লক্ষ্য হলো এমন উন্মুক্ত টেকনিক্যাল স্পেসিফিকেশন ও গাইডলাইন (যেমন HTML5, CSS3, WCAG) প্রণয়ন করা যা যেকোনো ব্রাউজার ও ডিভাইসে অবাধ সামঞ্জস্যতা নিশ্চিত করে।',
        marks: 2
      },
      {
        id: 'q1-4',
        q: 'URL এবং URI এর মধ্যে সম্পর্ক কী?',
        a: 'URI (Uniform Resource Identifier) হলো একটি সার্বজনীন আমব্রেলা টার্ম যা কোনো রিসোর্সকে নাম বা ঠিকানা দ্বারা শনাক্ত করে। URL (Uniform Resource Locator) হলো URI-এরই একটি বিশেষ রূপ যা রিসোর্সটি কীভাবে এবং কোন নেটওয়ার্ক ঠিকানায় পাওয়া যাবে (Protocol + Domain + Path) তা স্পষ্টভাবে নির্দিষ্ট করে। অর্থাৎ "All URLs are URIs, but not all URIs are URLs"।',
        marks: 2
      },
      {
        id: 'q1-5',
        q: 'PWA (Progressive Web App) কী? এর দুটি প্রধান সুবিধা কী?',
        a: 'PWA হলো আধুনিক ওয়েব স্ট্যান্ডার্ড (যেমন Service Workers, Web Manifest) ব্যবহার করে নির্মিত এমন ওয়েব অ্যাপ্লিকেশন যা স্মার্টফোনে ইনস্টল করা যায় এবং অফলাইনে কাজ করে। প্রধান দুটি সুবিধা: ১) ইন্টারনেটের অনুপস্থিতিতেও ক্যাশ ডেটা প্রদর্শন করতে পারে; ২) অ্যাপ স্টোর অনুমোদন ছাড়াই হোমস্ক্রিন থেকে সরাসরি লঞ্চ করা যায়।',
        marks: 2
      }
    ],
    broadQuestions: [
      {
        id: 'bq1-1',
        q: 'ক্লায়েন্ট-সার্ভার আর্কিটেকচার চিত্রসহ ব্যাখ্যা করো এবং ব্রাউজারে একটি URL টাইপ করার পর পেজ রেন্ডার হওয়া পর্যন্ত সম্পূর্ণ রিকোয়েস্ট-রেসপন্স লাইফসাইকেল বর্ণনা করো।',
        a: 'ক্লায়েন্ট-সার্ভার আর্কিটেকচারে ক্লায়েন্ট (ব্যবহারকারীর ব্রাউজার) এবং ওয়েব সার্ভার দুটি পৃথক নোড হিসেবে কাজ করে। ইউজার ব্রাউজারে URL লিখে এন্টার করলে নিম্নলিখিত ধাপসমূহ সম্পন্ন হয়:\n১) DNS Lookup: ব্রাউজার ডোমেন নেমটিকে আইপি ঠিকানায় রূপান্তর করে।\n২) TCP/IP Handshake: ব্রাউজার ও ওয়েব সার্ভারের নির্দিষ্ট পোর্ট (যেমন HTTPS এর জন্য ৪৪৩) এর সাথে থ্রি-ওয়ে হ্যান্ডশেকের মাধ্যমে নির্ভরযোগ্য সংযোগ স্থাপন করে।\n৩) TLS Negotiation: সিকিউর কানেকশনের জন্য ক্রিপ্টোগ্রাফিক সেশন কী বিনিময় হয়।\n৪) HTTP Request: ব্রাউজার একটি HTTP GET মেথড এবং হেডারসহ রিকোয়েস্ট পাঠায়।\n৫) Server Execution: Apache ওয়েব সার্ভার রিকোয়েস্ট গ্রহণ করে, PHP মডিউল দিয়ে বিজনেস লজিক এক্সিকিউট করে, প্রয়োজনে MySQL ডেটাবেস থেকে তথ্য সংগ্রহ করে HTML রেসপন্স তৈরি করে।\n৬) HTTP Response: সার্ভার স্ট্যাটাস কোড (200 OK) এবং কন্টেন্ট সহকারে রেসপন্স ব্যাক করে।\n৭) Client Rendering: ব্রাউজারের রেন্ডারিং ইঞ্জিন প্রাপ্ত HTML পার্স করে DOM ট্রি এবং CSS পার্স করে CSSOM ট্রি গঠন করে। এরপর Render Tree তৈরি করে লেআউট ও পেইন্ট ধাপের মাধ্যমে মনিটরে পেজ দৃশ্যমান করে।',
        marks: 5
      },
      {
        id: 'bq1-2',
        q: 'W3C স্ট্যান্ডার্ড এবং Web Accessibility (WCAG 2.1)-এর গুরুত্ব ও বাস্তবায়ন পদ্ধতি উদাহরণসহ আলোচনা করো।',
        a: 'W3C স্ট্যান্ডার্ড অনুসরণের গুরুত্ব:\n১) Cross-browser Compatibility: সকল প্রধান ব্রাউজারে সাইটের লেআউট ও কার্যকারিতা অভিন্ন থাকে।\n২) Search Engine Optimization (SEO): সার্চ ইঞ্জিন ক্রলাররা পেজের বিষয়বস্তু নির্ভুলভাবে ইনডেক্স করতে পারে।\n৩) Performance & Maintainability: পরিষ্কার ও স্পেসিফিকেশন মেনে চলা কোড দ্রুত পার্স হয় এবং ভবিষ্যতের সফটওয়্যার আপগ্রেডেশনে কম খরচ হয়।\n\nWCAG 2.1 বাস্তবায়নের পদ্ধতি:\n১) Semantic HTML ব্যবহার: <div> এর পরিবর্তে <nav>, <main>, <header>, <article> ব্যবহার করলে দৃষ্টিপ্রতিবন্ধীরা স্ক্রিন রিডারের সাহায্যে সহজে কনটেন্টে জাম্প করতে পারেন।\n২) অল্টারনেটিভ টেক্সট: প্রতিটি <img> ট্যাগে অর্থপূর্ণ `alt` টেক্সট প্রদান করা।\n৩) Color Contrast: টেক্সট ও ব্যাকগ্রাউন্ডের মধ্যে পর্যাপ্ত কন্ট্রাস্ট বজায় রাখা (ন্যূনতম 4.5:1)।\n৪) Keyboard Navigation: ইন্টারঅ্যাক্টিভ বাটন ও লিঙ্কে দৃশ্যমান ফোকাস আউটলাইন রাখা যাতে মাউস ছাড়াও কীবোর্ড দিয়ে ওয়েব পেজ ব্যবহার করা যায়।',
        marks: 5
      }
    ],
    mcqs: [
      {
        id: 'mcq1-1',
        question: 'HTTP প্রটোকলের ক্ষেত্রে নিচের কোন উক্তিটি সত্য?',
        options: [
          'এটি স্টেটফুল প্রটোকল',
          'এটি স্বভাবগতভাবে স্টেটলেস প্রটোকল',
          'এটি কেবল টেক্সট ট্রান্সফার করতে পারে, কোনো বাইনারি ফাইল নয়',
          'এটি পোর্ট ২১ ব্যবহার করে'
        ],
        correctIndex: 1,
        explanation: 'HTTP প্রটোকল প্রতিটি রিকোয়েস্টকে সম্পূর্ণ স্বাধীনভাবে বিবেচনা করে এবং পূর্ববর্তী রিকোয়েস্টের তথ্য মেমরিতে রাখে না, তাই এটি Stateless।'
      },
      {
        id: 'mcq1-2',
        question: 'WCAG 2.1 গাইডলাইনের নূন্যতম কনট্রাস্ট রেশিও স্ট্যান্ডার্ড কত?',
        options: ['2:1', '3:1', '4.5:1', '7:1'],
        correctIndex: 2,
        explanation: 'সাধারণ টেক্সটের জন্য WCAG AA লেভেলের নূন্যতম কন্ট্রাস্ট রেশিও হলো 4.5:1।'
      },
      {
        id: 'mcq1-3',
        question: 'URL-এ হ্যাশ চিহ্নের (#) পরের অংশকে কী বলা হয়?',
        options: ['Path', 'Query String', 'Fragment Identifier', 'Port'],
        correctIndex: 2,
        explanation: 'হ্যাশ (#) চিহ্নের পরের অংশকে Fragment Identifier বলা হয়, যা ব্রাউজারকে পেজের নির্দিষ্ট সেকশনে স্ক্রল করতে নির্দেশ দেয়।'
      }
    ]
  }
};
