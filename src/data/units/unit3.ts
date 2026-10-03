import { TheoryUnit } from '../../types/curriculum';

export const unit3: TheoryUnit = {
  id: 'theory-3',
  unitNumber: 3,
  title: 'RESPONSIVE WEBSITE AND FRAMEWORK',
  code: 'UNIT 03',
  creditHours: 'Theory: 1 Period/Week | Credit: 3',
  overviewBengali: 'এই ইউনিটে Responsive Web Design (RWD)-এর গাণিতিক ও প্রযুক্তিগত ভিত্তি, Viewport Meta Tag ও ব্রেকপয়েন্ট মেকানিক্স, আধুনিক CSS Framework-এর আর্কিটেকচার (Bootstrap বনাম Tailwind CSS), W3C CSS Box Model ও আধুনিক লেআউট সিস্টেম (Flexbox ও Grid), CSS Selectors ও Specificity হিসাবরক্ষণ এবং Inline, Internal ও External CSS-এর কার্যদক্ষতা বিশদভাবে আলোচনা করা হয়েছে।',
  subTopics: [
    {
      id: '3.1',
      code: '3.1',
      title: 'Responsive Web Design (RWD)-এর মূলনীতি এবং Viewport Meta Tag-এর গভীর বিশ্লেষণ',
      englishTitle: 'Principles of Responsive Web Design & Viewport Mechanics',
      explanationBengali: 'Responsive Web Design (RWD) কোনো একক প্রযুক্তি নয়; এটি একাধিক ওয়েব প্রযুক্তির সমন্বিত ইঞ্জিনিয়ারিং দর্শন। ২০১০ সালে ইথান মারকোট (Ethan Marcotte) এর মূল তিনটি স্তম্ভ প্রস্তাব করেন: Fluid Grids, Flexible Images, এবং Media Queries। এর উদ্দেশ্য হলো আলাদা আলাদা মোবাইল ও ডেস্কটপ সাইট (যেমন m.example.com) না বানিয়ে একটিমাত্র কোডবেস দিয়ে প্রতিটি ডিভাইসে আদর্শ ইউজার ইন্টারফেস প্রদর্শন করা।',
      detailedSections: [
        {
          heading: 'Viewport Meta Tag-এর গভীর মেকানিজম',
          contentBengali: 'মোবাইল ব্রাউজারগুলো ঐতিহাসিকভাবে ডেস্কটপের জন্য তৈরি ওয়েব পেজ দেখানোর জন্য নিজেদের একটি ভার্চুয়াল ভিউপোর্টে (সাধারণত 980px) পেজটিকে রেন্ডার করে এরপর জুম-আউট করে স্ক্রিনে সংকুচিত করে দেখাত, যার ফলে টেক্সট পড়া অসম্ভব হতো।',
          keyPoints: [
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
            'width=device-width: ব্রাউজারকে নির্দেশ দেয় ভার্চুয়াল ভিউপোর্টের প্রস্থ যেন ডিভাইসের প্রকৃত ফিজিক্যাল স্ক্রিন পিক্সেল প্রস্থের সমান হয়।',
            'initial-scale=1.0: পৃষ্ঠাটি প্রথমবার লোড হওয়ার সময় কোনো কৃত্রিম জুম ছাড়াই ১:১ রেশিওতে রেন্ডার করতে নির্দেশ দেয়।',
            'maximum-scale ও user-scalable: অ্যাক্সেসিবিলিটি (WCAG) নীতি অনুযায়ী কখনোই user-scalable=no ব্যবহার করা যাবে না, কারণ এতে দৃষ্টিপ্রতিবন্ধী ব্যবহারকারীরা প্রয়োজনে টেক্সট জুম করতে পারেন না।'
          ]
        },
        {
          heading: 'Fluid Grids এবং গাণিতিক অনুপাত',
          contentBengali: 'ফিক্সড পিক্সেলের (px) বদলে শতাংশ (%), viewport units (vw, vh), অথবা ফ্লেক্সিবল ফ্র্যাকশন (fr) ব্যবহার করা হয়। ক্লাসিক RWD ফর্মুলা হলো: target / context = result (শতাংশ)।'
        }
      ],
      codeSnippets: [
        {
          language: 'css',
          filename: 'media_queries_standard.css',
          explanation: 'W3C স্ট্যান্ডার্ড মোবাইল-ফার্স্ট ব্রেকপয়েন্ট আর্কিটেকচার',
          code: `/* 1. Mobile-First Base Styles (Default for all screens) */
.container {
  width: 100%;
  padding-inline: 1rem;
  margin-inline: auto;
}

.card-grid {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* 2. Tablet Breakpoint (Min-width: 768px) */
@media (min-width: 768px) {
  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 3. Desktop / Laptop Breakpoint (Min-width: 1024px) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`
        }
      ]
    },
    {
      id: '3.2',
      code: '3.2',
      title: 'CSS Framework-এর ধারণা ও স্থাপত্য বিশ্লেষণ',
      englishTitle: 'Concept, Anatomy & Architectural Paradigms of CSS Frameworks',
      explanationBengali: 'CSS Framework হলো পূর্বে সংকলিত, ক্রস-ব্রাউজার পরীক্ষিত এবং পুনর্ব্যবহারযোগ্য স্টাইলশিট ও ইউটিলিটি ক্লাসের একটি স্থাপত্য কাঠামো। এটি আধুনিক সফটওয়্যার টিমকে স্ক্র্যাচ থেকে প্রতিটি উপাদান কোড করার পুনরাবৃত্তি থেকে রক্ষা করে এবং একটি ধারাবাহিক ডিজাইন সিস্টেম উপহার দেয়।',
      detailedSections: [
        {
          heading: 'CSS Reset বনাম Normalize.css',
          contentBengali: 'বিভিন্ন ব্রাউজারের নিজস্ব ভিন্ন ভিন্ন ডিফল্ট ইউজার-এজেন্ট স্টাইল (User Agent Stylesheet) থাকে (যেমন Chrome ও Firefox-এ মার্জিন ভিন্ন হতে পারে)।',
          keyPoints: [
            'CSS Reset (Eric Meyer): সকল ব্রাউজার ডিফল্ট মার্জিন, প্যাডিং, বর্ডার শূন্য (0) করে সম্পূর্ণ নতুন স্লেট তৈরি করে।',
            'Normalize.css: আধুনিক পদ্ধতি যা ব্রাউজার স্টাইলকে শূন্য না করে বরং সমস্ত ব্রাউজারের মধ্যে অভিন্ন ও প্রত্যাশিত স্ট্যান্ডার্ডে সমতা বিধান করে।'
          ]
        }
      ]
    },
    {
      id: '3.3',
      code: '3.3',
      title: 'জনপ্রিয় ফ্রন্টএন্ড ফ্রেমওয়ার্কস: Bootstrap বনাম Tailwind CSS-এর বিশদ তুলনা',
      englishTitle: 'In-Depth Evaluation: Bootstrap (Component-Based) vs Tailwind CSS (Utility-First)',
      explanationBengali: 'ফ্রন্টএন্ড ফ্রেমওয়ার্কের জগতে দুটি প্রধান ভাবধারা বিদ্যমান: Component-Based Architecture (যেমন Bootstrap) এবং Utility-First Architecture (যেমন Tailwind CSS)।',
      comparisonTable: {
        caption: 'Bootstrap বনাম Tailwind CSS-এর গভীর প্রযুক্তিগত তুলনা',
        headers: ['বৈশিষ্ট্য (Parameter)', 'Bootstrap', 'Tailwind CSS'],
        rows: [
          ['ডিজাইন মেথডোলজি', 'Component-driven (রেডিমেড বাটন, কার্ড, ন্যাভবার)', 'Utility-first (ছোট ছোট কার্যকরী ক্লাস যেমন flex, p-4, text-center)'],
          ['কাস্টমাইজেশনের স্বাধীনতা', 'সীমিত (ডিফল্ট থিম ওভাররাইড করতে প্রচুর সিএসএস লিখতে হয়)', 'সীমাহীন (এইচটিএমএলের ভেতরেই সম্পূর্ণ কাস্টম ডিজাইন তৈরি সম্ভব)'],
          ['বান্ডল সাইজ পারফরম্যান্স', 'তুলনামূলকভাবে ভারী (সম্পূর্ণ সিএসএস ও জেএস বান্ডল লোড হয়)', 'সুপার লাইটওয়েট (PurgeCSS / JIT ইঞ্জিন শুধুমাত্র ব্যবহৃত ক্লাসগুলো বান্ডলে রাখে)'],
          ['শেখার বক্ররেখা (Learning Curve)', 'অত্যন্ত সহজ (ক্লাসের নাম মুখস্থ করলেই দ্রুত প্রোটোটাইপ সম্ভব)', 'CSS প্রোপার্টিজ সম্পর্কে গভীর জ্ঞান প্রয়োজন'],
          ['ইন্ডাস্ট্রি ব্যবহারের প্রেক্ষাপট', 'অ্যাডমিন ড্যাশবোর্ড, দ্রুত MVP, করপোরেট ব্যাকঅফিস', 'আধুনিক হাই-এন্ড স্টার্টআপ, SaaS প্রোডাক্ট, কাস্টম ওয়েব প্ল্যাটফর্ম']
        ]
      }
    },
    {
      id: '3.4',
      code: '3.4',
      title: 'W3C CSS গাইডলাইন, Box Model এবং আধুনিক CSS3 স্পেসিফিকেশন',
      englishTitle: 'W3C CSS Guidelines, Standard Box Model & CSS3 Architecture',
      explanationBengali: 'CSS Box Model হলো ব্রাউজারের প্রতিটি উপাদানের চারপাশের চতুর্ভুজাকার লেআউট হিসাবরক্ষণ ব্যবস্থা। এর চারটি সুনির্দিষ্ট স্তর রয়েছে: Content -> Padding -> Border -> Margin।',
      detailedSections: [
        {
          heading: 'Standard Content-Box বনাম Border-Box মেকানিক্স',
          contentBengali: 'CSS-এ ডিফল্ট বক্স-সাইজিং হলো `content-box`। যদি একটি ডিভের উইডথ 300px এবং প্যাডিং 20px ও বর্ডার 2px দেওয়া হয়, তবে ব্রাউজারে তার মোট প্রস্থ দাঁড়ায়: 300 + 20(বাম) + 20(ডান) + 2(বাম) + 2(ডান) = 344px! এটি লেআউট ভেঙে দেয়।',
          keyPoints: [
            'box-sizing: border-box; প্রয়োগ করলে ঘোষিত উইডথ (300px)-এর ভেতরেই প্যাডিং এবং বর্ডার অন্তর্ভুক্ত হয়ে যায়। ফলে কনটেন্ট সাইজ স্বয়ংক্রিয়ভাবে সংকুচিত হয় কিন্তু মোট উপাদানটি ঠিক 300px-ই থাকে।',
            'আধুনিক ওয়েবে প্রথম লাইনেই সার্বজনীনভাবে বক্স সাইজিং সেট করা ইন্ডাস্ট্রি বেস্ট প্র্যাকটিস:',
            '*, *::before, *::after { box-sizing: border-box; }'
          ]
        }
      ],
      codeSnippets: [
        {
          language: 'css',
          filename: 'box_sizing_standard.css',
          explanation: 'আধুনিক CSS রিসেট ও বক্স মডেল ইনিশিয়ালাইজেশন',
          code: `/* Standard Box-Sizing & Margin Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.box-demo {
  width: 320px;
  padding: 24px;              /* Inside space */
  border: 2px solid #0284c7;  /* Outer boundary */
  margin: 16px auto;          /* Exterior separation */
  background-color: #ffffff;
  /* Actual total rendered width is strictly 320px */
}`
        }
      ]
    },
    {
      id: '3.5',
      code: '3.5',
      title: 'CSS Selectors, Pseudo-classes এবং Specificity-র গাণিতিক হিসাব',
      englishTitle: 'CSS Selectors, Combinators, Pseudo-elements and Specificity Math',
      explanationBengali: 'CSS Selector হলো ওয়েব পেজের নির্দিষ্ট নোডকে লক্ষ্য করে স্টাইল প্রয়োগের নিয়মাবলী। যখন একাধিক রুল একই উপাদানের ওপর প্রয়োগ হয়, তখন ব্রাউজার Specificity Math (গাণিতিক অগ্রাধিকার) অনুসারে জয়ী রুল কার্যকর করে।',
      detailedSections: [
        {
          heading: 'Specificity-র গাণিতিক ম্যাট্রিক্স (A, B, C, D Calculation)',
          contentBengali: 'ব্রাউজার ৪-অঙ্কের একটি গাণিতিক হায়ারার্কি স্কোরিং গণনা করে:',
          keyPoints: [
            'A (Inline Style - 1000): ট্যাগের ভেতরে style="..." অ্যাট্রিবিউট ব্যবহার করলে ১০০০ পয়েন্ট অর্জিত হয়।',
            'B (ID Selector - 100): #myId সিলেক্টর ব্যবহার করলে প্রতিটির জন্য ১০০ পয়েন্ট অর্জিত হয়।',
            'C (Class, Attribute, Pseudo-class - 10): .myClass, [type="text"], :hover, :nth-child() এর জন্য প্রতিটিতে ১০ পয়েন্ট।',
            'D (Element, Pseudo-element - 1): div, p, h1, ::before, ::after এর জন্য প্রতিটিতে ১ পয়েন্ট।',
            '!important রুল: সকল স্বাভাবিক স্পেসিফিসিটিকে সরাসরি ওভাররাইড করে। তবে এর মাত্রাতিরিক্ত ব্যবহার কোড মেইনটেইনেবিলিটি ধ্বংস করে বলে এটি বর্জনীয়।'
          ]
        }
      ],
      comparisonTable: {
        caption: 'বিভিন্ন CSS সিলেক্টরের Specificity স্কোর বিশ্লেষণ',
        headers: ['সিলেক্টর সিনট্যাক্স (Selector Expression)', 'A-B-C-D স্কোর', 'মোট গণনা'],
        rows: [
          ['h1', '0-0-0-1', '১ পয়েন্ট'],
          ['.nav-link', '0-0-1-0', '১০ পয়েন্ট'],
          ['ul.nav > li.active a', '0-0-2-2', '২২ পয়েন্ট (২টি ক্লাস + ২টি এলিমেন্ট)'],
          ['#main-header .title', '0-1-1-0', '১১০ পয়েন্ট (১টি আইডি + ১টি ক্লাস)'],
          ['<h1 style="color: red;">', '1-0-0-0', '১০০০ পয়েন্ট (ইনলাইন স্টাইল)']
        ]
      }
    },
    {
      id: '3.6',
      code: '3.6',
      title: 'Inline, Internal এবং External CSS-এর কার্যদক্ষতা ও অগ্রাধিকার',
      englishTitle: 'Architectural Comparison: Inline, Internal vs External CSS & Cascade Flow',
      explanationBengali: 'HTML ফাইলে CSS সংযুক্ত করার তিনটি প্রধান কৌশল রয়েছে। পারফরম্যান্স, ক্যাশিং এবং মেইনটেইনেবিলিটির বিচারে এদের প্রয়োগ পদ্ধতি ভিন্ন।',
      detailedSections: [
        {
          heading: 'ক্যাশিং ও নেটওয়ার্ক পারফরম্যান্সের গভীর বিশ্লেষণ',
          contentBengali: 'কেন External CSS ইন্ডাস্ট্রির সার্বজনীন আদর্শ:',
          keyPoints: [
            '১. Browser Caching: প্রথম পেজে External CSS ডাউনলোড হওয়ার পর ব্রাউজার তা ডিস্ক বা মেমরি ক্যাশে সংরক্ষণ করে। ইউজার পরবর্তী যেকোনো পেজে গেলে পুনরায় CSS ডাউনলোড করতে হয় না; ফলে পরবর্তী পেজগুলো প্রায় তাৎক্ষণিকভাবে লোড হয়।',
            '২. Separation of Concerns: কন্টেন্ট (HTML) এবং প্রেজেন্টেশন (CSS) আলাদা ফাইলে থাকায় একাধিক ডেভেলপার সহজে কাজ করতে পারেন।',
            '৩. Critical CSS Optimization: আধুনিক পারফরম্যান্স অপটিমাইজেশনে Above-the-fold কন্টেন্টের জন্য সামান্য Internal CSS এবং বাকি সমগ্র সাইটের জন্য Deferred External CSS ব্যবহার করা হয়।'
          ]
        }
      ]
    }
  ],
  selfAssessment: {
    shortQuestions: [
      {
        id: 'q3-1',
        q: 'Responsive Web Design (RWD) এর তিনটি মূল স্তম্ভ কী কী?',
        a: 'RWD এর তিনটি মূল স্তম্ভ হলো: ১) Fluid Grids (শতাংশ ভিত্তিক গ্রিড), ২) Flexible Images (max-width: 100%), এবং ৩) Media Queries (@media ব্রেকপয়েন্ট)।',
        marks: 2
      },
      {
        id: 'q3-2',
        q: '`box-sizing: border-box;` কেন ব্যবহার করা হয়?',
        a: '`border-box` ব্যবহার করলে কোনো উপাদানের ঘোষিত প্রস্থ ও উচ্চতার ভেতরেই প্যাডিং এবং বর্ডার অন্তর্ভুক্ত থাকে, ফলে প্যাডিং বা বর্ডার যোগ করার কারণে উপাদানের মোট আকার বৃদ্ধি পেয়ে লেআউট ভেঙে যায় না।',
        marks: 2
      },
      {
        id: 'q3-3',
        q: 'CSS Specificity কী?',
        a: 'CSS Specificity হলো এমন একটি গাণিতিক স্কোরিং পদ্ধতি যার মাধ্যমে ব্রাউজার নির্ধারণ করে যখন কোনো উপাদানের জন্য একাধিক পরস্পরবিরোধী স্টাইল নিয়ম প্রযোজ্য হয়, তখন কোন নিয়মের অগ্রাধিকার সবচেয়ে বেশি হবে।',
        marks: 2
      },
      {
        id: 'q3-4',
        q: 'CSS-এ Pseudo-class এবং Pseudo-element-এর মধ্যে পার্থক্য কী?',
        a: 'Pseudo-class (যেমন :hover, :focus) উপাদানের বিশেষ অবস্থা নির্দেশ করে; অন্যদিকে Pseudo-element (যেমন ::before, ::after) উপাদানের নির্দিষ্ট কোনো ভার্চুয়াল অংশকে নির্দেশ করে।',
        marks: 2
      },
      {
        id: 'q3-5',
        q: 'Bootstrap এবং Tailwind CSS-এর মূল আদর্শিক পার্থক্য কী?',
        a: 'Bootstrap হলো Component-based ফ্রেমওয়ার্ক যাতে রেডিমেড ডিজাইন করা বাটন ও কার্ড থাকে; অন্যদিকে Tailwind হলো Utility-first ফ্রেমওয়ার্ক যাতে ছোট ছোট ক্লাস দিয়ে সম্পূর্ণ কাস্টম ডিজাইন তৈরি করা যায়।',
        marks: 2
      }
    ],
    broadQuestions: [
      {
        id: 'bq3-1',
        q: 'CSS Box Model চিত্রসহ ব্যাখ্যা করো এবং Content-box ও Border-box-এর মধ্যে পার্থক্য গাণিতিক উদাহরণসহ বিশ্লেষণ করো।',
        a: 'CSS Box Model হলো প্রতিটি HTML এলিমেন্টের চারপাশের চারটি স্তরের আয়তাকার রূপ:\n১) Content Area: যেখানে মূল টেক্সট বা ইমেজ প্রদর্শিত হয়।\n২) Padding: কন্টেন্ট এবং বর্ডারের ভেতরের মধ্যবর্তী ফাঁকা জায়গা।\n৩) Border: প্যাডিংকে ঘিরে থাকা সীমানারেখা।\n৪) Margin: বর্ডারের বাইরে অন্যান্য পার্শ্ববর্তী উপাদান থেকে দূরত্ব রক্ষার ফাঁকা স্থান।\n\nগাণিতিক তুলনা:\nধরা যাক, width = 400px, padding = 20px, border = 5px।\n• content-box এ মোট প্রস্থ = 400 + 20(বাম) + 20(ডান) + 5(বাম) + 5(ডান) = 450px।\n• border-box এ মোট প্রস্থ = 400px (প্যাডিং ও বর্ডার 400px এর ভেতর থেকেই কেটে নেওয়া হয়, ফলে মোট আকার স্থির থাকে)।',
        marks: 5
      },
      {
        id: 'bq3-2',
        q: 'CSS Specificity গণনা পদ্ধতি উদাহরণসহ আলোচনা করো। !important ব্যবহারের প্রভাব কী?',
        a: 'Specificity গণনা পদ্ধতি ৪টি কলামে (A, B, C, D) বিভক্ত:\n• A: Inline Style (স্কোর: ১০০০)\n• B: ID Selectors (স্কোর: ১০০ প্রতিটির জন্য)\n• C: Classes, Attributes ও Pseudo-classes (স্কোর: ১০ প্রতিটির জন্য)\n• D: Elements ও Pseudo-elements (স্কোর: ১ প্রতিটির জন্য)\n\nউদাহরণ:\n১) #header nav ul li a.active: এখানে ১টি ID (১০০), ১টি ক্লাস (১০), এবং ৪টি এলিমেন্ট (৪)। মোট স্কোর = ১১৪।\n২) nav ul li a: এখানে ৪টি এলিমেন্ট। মোট স্কোর = ৪।\nসুতরাং প্রথম রুলটি জয়ী হবে।\n\n!important এর প্রভাব: কোনো স্টাইলের শেষে !important যুক্ত করলে তা সাধারণ সকল স্পেসিফিসিটিকে সরাসরি বাতিল করে প্রাধান্য পায়। তবে এটি ঘনঘন ব্যবহার করলে সিএসএস ওভাররাইড করা কঠিন হয়ে পড়ে এবং বাগ সৃষ্টি হয়।',
        marks: 5
      }
    ],
    mcqs: [
      {
        id: 'mcq3-1',
        question: 'নিচের কোন সিলেক্টরের Specificity স্কোর সবচেয়ে বেশি?',
        options: [
          'div.container > p',
          '#main-content p',
          '.header .nav-item a:hover',
          'body article p'
        ],
        correctIndex: 1,
        explanation: '#main-content p-তে একটি ID সিলেক্টর রয়েছে যার মান ১০০+১ = ১০১ পয়েন্ট, যা ক্লাসভিত্তিক সিলেক্টরের চেয়ে বেশি।'
      },
      {
        id: 'mcq3-2',
        question: 'মোবাইল-ফার্স্ট রেসপনসিভ ডিজাইনে নিচের কোন মিডিয়া কুয়েরিটি প্রমিত?',
        options: [
          '@media (max-width: 768px)',
          '@media (min-width: 768px)',
          '@media (orientation: landscape)',
          '@media (device-width: 768px)'
        ],
        correctIndex: 1,
        explanation: 'মোবাইল-ফার্স্ট ডিজাইনে ছোট স্ক্রিনের কোড শুরুতে লিখে বড় স্ক্রিনের জন্য `min-width` ব্যবহার করা হয়।'
      }
    ]
  }
};
