import { TheoryUnit } from '../../types/curriculum';

export const unit4: TheoryUnit = {
  id: 'theory-4',
  unitNumber: 4,
  title: 'CLIENT-SIDE SCRIPTING LANGUAGE',
  code: 'UNIT 04',
  creditHours: 'Theory: 1 Period/Week | Credit: 3',
  overviewBengali: 'এই ইউনিটে Client-side Scripting-এর অন্তর্নিহিত কার্যপদ্ধতি, ব্রাউজার জাভাস্ক্রিপ্ট ইঞ্জিন আর্কিটেকচার (Call Stack, Event Loop), আধুনিক ES6+ সিনট্যাক্স, স্কোপ ও মেমরি মডেল (var বনাম let ও const), স্ক্রিপ্ট লোডিং অপটিমাইজেশন (defer বনাম async), jQuery লাইব্রেরির অভ্যন্তরীণ মেকানিজম, ডম ম্যানিপুলেশন এবং Chrome DevTools দিয়ে প্রফেশনাল ডিবাগিং বিস্তারিতভাবে আলোচিত হয়েছে।',
  subTopics: [
    {
      id: '4.1',
      code: '4.1',
      title: 'Client-side Scripting-এর গভীর ধারণা এবং ব্রাউজার ইঞ্জিন আর্কিটেকচার',
      englishTitle: 'Concept of Client-Side Scripting, V8 Engine & Browser Event Loop',
      explanationBengali: 'Client-side Scripting বলতে এমন প্রোগ্রাম কোড বোঝায় যা দূরবর্তী ওয়েব সার্ভারে নয়, বরং ব্যবহারকারীর নিজস্ব ব্রাউজার ইঞ্জিনের (যেমন Google Chrome-এর V8, Mozilla Firefox-এর SpiderMonkey, Apple Safari-এর JavaScriptCore) মেমরিতে কম্পাইল ও এক্সিকিউট হয়। এটি পেজ রিলোড না করেই তাৎক্ষণিক ইউজার ইন্টারঅ্যাকশন, ইনপুট যাচাই এবং ডায়নামিক কনটেন্ট রেন্ডারিং সক্ষম করে।',
      detailedSections: [
        {
          heading: 'V8 Engine এবং ব্রাউজার রানটাইম মেকানিক্স',
          contentBengali: 'জাভাস্ক্রিপ্ট একটি Single-Threaded ল্যাঙ্গুয়েজ, অর্থাৎ এটি একবারে একটি মাত্র কাজ করতে পারে। ব্রাউজার কীভাবে নন-ব্লকিং অ্যাসিনক্রোনাস কাজ সম্পন্ন করে:',
          keyPoints: [
            'Memory Heap: মেমরির অনির্দিষ্ট অংশ যেখানে ভেরিয়েবল ও অবজেক্ট সংরক্ষিত হয়।',
            'Call Stack: যেখানে ফাংশনগুলো LIFO (Last In, First Out) পদ্ধতিতে জমা হয়ে এক্সিকিউট হয়।',
            'Web APIs: ব্রাউজারের ব্যাকগ্রাউন্ড থ্রেড (যেমন setTimeout, DOM Events, Fetch API)।',
            'Callback Queue ও Event Loop: যখন কোনো অ্যাসিনক্রোনাস কাজ সম্পন্ন হয়, তা কিউতে জমা হয়। Event Loop সার্বক্ষণিক কল স্ট্যাকের দিকে লক্ষ্য রাখে; কল স্ট্যাক শূন্য হলেই কেবল কিউ থেকে টাস্ক কল স্ট্যাকে স্থানান্তর করে।'
          ]
        }
      ]
    },
    {
      id: '4.2',
      code: '4.2',
      title: 'JavaScript সিনট্যাক্স, ভেরিয়েবল স্কোপ (var, let, const), ডেটা টাইপ ও DOM',
      englishTitle: 'JavaScript ES6+ Syntax, Scoping, Hoisting, Data Types & DOM Operations',
      explanationBengali: 'আধুনিক জাভাস্ক্রিপ্ট (ES6+) ওয়েব প্রোগ্রামিংয়ে আমূল পরিবর্তন এনেছে। পুরোনো ত্রুটিপূর্ণ `var`-এর বদলে ব্লক-স্কোপড `let` ও অপরিবর্তনীয় `const` প্রমিত মান হিসেবে প্রতিষ্ঠিত হয়েছে।',
      comparisonTable: {
        caption: 'var, let এবং const-এর প্রযুক্তিগত পার্থক্য',
        headers: ['বৈশিষ্ট্য (Parameter)', 'var (Legacy ES5)', 'let (Modern ES6)', 'const (Modern ES6)'],
        rows: [
          ['স্কোপ (Scope)', 'Function Scoped (ব্লক মানে না)', 'Block Scoped { ... }', 'Block Scoped { ... }'],
          ['Hoisting আচরণ', 'Hoisted ও ডিফল্ট মান undefined', 'Hoisted কিন্তু Temporal Dead Zone (TDZ)', 'Hoisted কিন্তু Temporal Dead Zone (TDZ)'],
          ['পুনরায় ঘোষণা (Re-declaration)', 'অনুমোদিত (একই ভেরিয়েবল বারবার লেখা যায়)', 'অনুমোদনহীন (SyntaxError দেয়)', 'অনুমোদনহীন (SyntaxError দেয়)'],
          ['মান পরিবর্তন (Reassignment)', 'অনুমোদিত', 'অনুমোদিত', 'নিষিদ্ধ (Assignment to constant variable error)']
        ]
      },
      codeSnippets: [
        {
          language: 'javascript',
          filename: 'modern_es6_dom.js',
          explanation: 'ES6+ অ্যারো ফাংশন, ডিস্ট্রাকচারিং ও ইভেন্ট লিসেনার',
          code: `// Modern ES6+ Architecture
const config = { course: 'WebDev-1', code: 28544 };
let enrollmentCount = 0;

// Selecting DOM Elements with querySelector
const enrollButton = document.querySelector('#enrollBtn');
const displayBox = document.querySelector('#displayBox');

// Arrow Function Event Handler
enrollButton.addEventListener('click', (event) => {
  event.preventDefault();
  enrollmentCount++;

  // Template Literals with dynamic interpolation
  displayBox.innerHTML = \`
    <div class="alert alert-success">
      <strong>Course:</strong> \${config.course} (\${config.code})<br>
      <strong>Enrolled Students:</strong> \${enrollmentCount}
    </div>
  \`;
});`
        }
      ]
    },
    {
      id: '4.3',
      code: '4.3',
      title: 'jQuery লাইব্রেরির কাঠামো এবং DOM Ready সিনট্যাক্স',
      englishTitle: 'jQuery Architecture, $ Abstraction Layer & DOM Ready Lifecycle',
      explanationBengali: 'jQuery হলো বিশ্বের সবচেয়ে প্রভাবশালী জাভাস্ক্রিপ্ট লাইব্রেরি যার স্লোগান "Write less, Do more"। এটি ডম ট্রাভার্সিং, ইভেন্ট হ্যান্ডলিং, অ্যানিমেশন এবং অ্যাজাক্স কলকে একটি একক গ্লোবাল অবজেক্ট `jQuery` বা `$`-এর মাধ্যমে বিমূর্ত (Abstract) করে তোলে।',
      detailedSections: [
        {
          heading: '$(document).ready() বনাম window.onload-এর তাত্ত্বিক পার্থক্য',
          contentBengali: 'ওয়েব পেজে স্ক্রিপ্ট এক্সিকিউশনের দুটি গুরুত্বপূর্ণ মুহূর্ত:',
          keyPoints: [
            '$(document).ready(): ব্রাউজার যখন সম্পূর্ণ HTML ট্রি পার্স করে DOM ট্রি তৈরি শেষ করে, ঠিক সেই মুহূর্তেই এটি ফায়ার হয়। পেজের বিশাল ইমেজ বা ভিডিও ডাউনলোড হওয়ার জন্য অপেক্ষা করে না। ফলে ব্যবহারকারী অত্যন্ত দ্রুত ইন্টারঅ্যাকশন সুবিধা পায়।',
            'window.onload: এটি সম্পূর্ণ পেজসহ সকল ইমেজ, স্টাইলশিট, আইফ্রেম এবং মিডিয়া ফাইল ডাউনলোড সম্পন্ন হওয়ার পর ফায়ার হয়। এটি ধীরগতির।'
          ]
        }
      ]
    },
    {
      id: '4.4',
      code: '4.4',
      title: 'Script ট্যাগ পজিশনিং: ডিফল্ট বনাম Defer বনাম Async অ্যাট্রিবিউট',
      englishTitle: 'Script Loading Performance: Parser-Blocking vs Defer vs Async',
      explanationBengali: 'ব্রাউজার যখন উপর থেকে নিচে HTML পার্স করে, তখন সাধারণ <script> ট্যাগ পেলে তৎক্ষণাৎ পার্সিং বন্ধ (Parser-Blocking) করে সার্ভার থেকে স্ক্রিপ্ট ডাউনলোড ও রান করে। এটি পেজ লোড বিলম্বিত করে। আধুনিক ব্রাউজারে `defer` এবং `async` এই সমস্যা নিরসন করে।',
      comparisonTable: {
        caption: 'ডিফল্ট স্ক্রিপ্ট, Async এবং Defer-এর রেন্ডারিং আচরণ',
        headers: ['অ্যাট্রিবিউট (Attribute)', 'ডাউনলোড আচরণ (Download)', 'এক্সিকিউশন মুহূর্ত (Execution)', 'এক্সিকিউশন অর্ডার'],
        rows: [
          ['ডিফল্ট <script>', 'HTML পার্সিং বন্ধ করে ডাউনলোড হয়', 'ডাউনলোড শেষ হওয়ামাত্রই পার্সিং স্থগিত রেখে রান করে', 'সোর্স অর্ডারে'],
          ['<script async>', 'HTML পার্সিং চলাকালীন ব্যাকগ্রাউন্ডে ডাউনলোড', 'ডাউনলোড হওয়ামাত্রই সাথে সাথে রান করে (পার্সিং বন্ধ করে)', 'যেটি আগে ডাউনলোড হবে সেটি আগে রান করবে'],
          ['<script defer>', 'HTML পার্সিং চলাকালীন ব্যাকগ্রাউন্ডে ডাউনলোড', 'সম্পূর্ণ DOM পার্সিং সমাপ্ত হওয়ার পর সিকোয়েন্স অনুযায়ী রান করে', 'সোর্স কোডের ক্রমানুসারে (Guaranteed)']
        ]
      },
      codeSnippets: [
        {
          language: 'html',
          filename: 'script_optimization.html',
          explanation: 'পারফরম্যান্স অপটিমাইজড স্ক্রিপ্ট ইনক্লুশন',
          code: `<!-- 1. Third-party Analytics (Independent - async is best) -->
<script async src="https://www.google-analytics.com/analytics.js"></script>

<!-- 2. Application Core & Libraries (Dependent - defer is best) -->
<script defer src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script defer src="js/app.js"></script>`
        }
      ]
    },
    {
      id: '4.5',
      code: '4.5',
      title: 'Browser Developer Tools (DevTools) এবং ডিবাগিং কৌশল',
      englishTitle: 'Browser Developer Tools: Console, Network, Breakpoints & Performance Profiling',
      explanationBengali: 'প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ারিংয়ে বাগ শনাক্ত ও নিরসনের জন্য ব্রাউজার ডেভটুলস অপরিহার্য:',
      detailedSections: [
        {
          heading: 'Chrome DevTools-এর কোর প্যানেলসমূহের দায়িত্ব',
          contentBengali: 'পাঁচটি প্রধান ডিবাগিং ট্যাব:',
          keyPoints: [
            'Elements Tab: লাইভ ডম নোড সম্পাদনা, CSS বক্স মডেল যাচাই এবং অ্যাক্সেসিবিলিটি ট্রি পর্যবেক্ষণ।',
            'Console Tab: JavaScript রানটাইম এক্সেপশন, আনকন্ডিশনাল লগিং (console.table, console.time, console.error) এবং লাইভ এক্সপ্রেশন টেস্ট।',
            'Network Tab: সকল HTTP রিকোয়েস্টের সাইজ, মেথড, স্ট্যাটাস কোড (200, 404, 500) এবং Waterfall লোডিং টাইম পরিদর্শন।',
            'Sources Tab: সোর্স কোডে ব্রেকপয়েন্ট (Breakpoint) সেট করে কোড লাইন-বাই-লাইন পজ করে ভেরিয়েবলের তাৎক্ষণিক মান ও কল স্ট্যাক পরীক্ষা করা।',
            'Application Tab: LocalStorage, SessionStorage, IndexedDB, Cookies এবং PWA Service Worker ম্যানেজমেন্ট।'
          ]
        }
      ]
    },
    {
      id: '4.6',
      code: '4.6',
      title: 'jQuery বিল্ট-ইন ফাংশনসমূহ, সিলেক্টর ও ইফেক্টস',
      englishTitle: 'Comprehensive jQuery Methods: Selectors, DOM Manipulation & Animation Effects',
      explanationBengali: 'jQuery লাইব্রেরিতে সমৃদ্ধ বিল্ট-ইন ফাংশন রয়েছে যা জটিল জাভাস্ক্রিপ্ট অপারেশনকে এক লাইনে সমাধান করে:',
      bulletPoints: [
        { title: 'DOM Manipulation', text: '.html(), .text(), .val(), .append(), .prepend(), .after(), .before(), .remove(), .empty()' },
        { title: 'Attribute & CSS', text: '.attr(), .removeAttr(), .prop(), .addClass(), .removeClass(), .toggleClass(), .hasClass(), .css()' },
        { title: 'Animation & Effects', text: '.fadeIn(), .fadeOut(), .fadeToggle(), .slideDown(), .slideUp(), .slideToggle(), .animate()' },
        { title: 'Event Handlers', text: '.on("click"), .off(), .trigger(), .hover(), .focus(), .blur(), .change()' }
      ]
    }
  ],
  selfAssessment: {
    shortQuestions: [
      {
        id: 'q4-1',
        q: 'JavaScript-এ let এবং const এর মধ্যে পার্থক্য কী?',
        a: 'let এবং const উভয়ই ব্লক-স্কোপড। তবে let দিয়ে ঘোষিত ভেরিয়েবলের মান পরবর্তীতে পরিবর্তন (Reassign) করা যায়; কিন্তু const দিয়ে ঘোষিত ভেরিয়েবলের মান ইনিশিয়ালাইজেশনের পর আর পরিবর্তন করা যায় না।',
        marks: 2
      },
      {
        id: 'q4-2',
        q: 'Script ট্যাগে `defer` এবং `async` অ্যাট্রিবিউটের মূল পার্থক্য কী?',
        a: 'async স্ক্রিপ্ট ডাউনলোড হওয়ামাত্রই পার্সিং থামিয়ে সাথে সাথে রান করে এবং ক্রমানুসার মানে না; পক্ষান্তরে defer স্ক্রিপ্ট ব্যাকগ্রাউন্ডে ডাউনলোড হয়ে পুরো HTML পার্সিং সমাপ্ত হওয়ার পরেই কেবল সোর্স অর্ডারে রান করে।',
        marks: 2
      },
      {
        id: 'q4-3',
        q: '$(document).ready() কেন ব্যবহার করা হয়?',
        a: 'DOM ট্রি সম্পূর্ণ লোড ও পার্স হওয়ার পূর্বে যাতে কোনো স্ক্রিপ্ট অনুপস্থিত উপাদানে ক্লিক বা ম্যানিপুলেশন করতে গিয়ে এরর না দেয়, তা নিশ্চিত করতে $(document).ready() ব্যবহার করা হয়।',
        marks: 2
      },
      {
        id: 'q4-4',
        q: 'DOM (Document Object Model) বলতে কী বোঝায়?',
        a: 'DOM হলো একটি অবজেক্ট ওরিয়েন্টেড রিপ্রেজেন্টেশন যেখানে ব্রাউজার HTML ডকুমেন্টকে নোড এবং অবজেক্টের একটি হায়ারার্কিক্যাল ট্রিতে রূপান্তর করে, যা প্রোগ্রামিং ল্যাঙ্গুয়েজ (JS) দিয়ে ডায়নামিকভাবে পরিবর্তন করা যায়।',
        marks: 2
      },
      {
        id: 'q4-5',
        q: 'Chrome DevTools-এর Network ট্যাবের প্রধান কাজ কী?',
        a: 'ওয়েব পেজ লোডকালীন সমস্ত রিকোয়েস্ট ও রেসপন্স (HTTP স্ট্যাটাস, ফাইলের আকার, রেসপন্স টাইম, ক্যাশিং এবং পেলোড) রিয়েলটাইমে পর্যবেক্ষণ করা।',
        marks: 2
      }
    ],
    broadQuestions: [
      {
        id: 'bq4-1',
        q: 'ব্রাউজারের JavaScript Execution Engine (V8) কীভাবে কাজ করে? Event Loop, Call Stack এবং Web APIs এর ভূমিকা চিত্রসহ বর্ণনা করো।',
        a: 'জাভাস্ক্রিপ্ট একটি সিঙ্গেল-থ্রেডেড ভাষা হওয়ায় এটি একসাথে একটি মাত্র নির্দেশনা এক্সিকিউট করতে পারে। ব্রাউজার রানটাইম নিচের উপাদানগুলোর সমন্বয়ে অ্যাসিনক্রোনাস কাজ সম্পন্ন করে:\n১) Call Stack: এটি একটি LIFO ডেটা স্ট্রাকচার। যেকোনো ফাংশন কল হলে তা স্ট্যাকের শীর্ষে জমা হয় এবং কাজ শেষ হলে স্ট্যাক থেকে পপ আউট হয়।\n২) Web APIs: যখন ব্রাউজার কোনো অ্যাসিনক্রোনাস কাজ পায় (যেমন setTimeout, Fetch API, DOM Click Event), তখন V8 ইঞ্জিন নিজে আটকে না থেকে কাজটি ব্রাউজারের ব্যাকগ্রাউন্ড Web APIs থ্রেডে হস্তান্তর করে দেয়।\n৩) Callback Queue: ব্যাকগ্রাউন্ডে কাজটি (যেমন ২ সেকেন্ড টাইমার) শেষ হলে তার কলব্যাক ফাংশনটি Callback Queue-তে এসে অপেক্ষায় থাকে।\n৪) Event Loop: ইভেন্ট লুপ হলো একটি অবিরাম পর্যবেক্ষক লুপ। এটি প্রতিনিয়ত চেক করে কল স্ট্যাক ফাঁকা আছে কিনা। কল স্ট্যাক সম্পূর্ণ খালি হওয়ামাত্রই ইভেন্ট লুপ কিউ থেকে প্রথম কলব্যাকটিকে কল স্ট্যাকে পুশ করে এক্সিকিউট করায়। ফলে ভারী কাজেও ব্রাউজারের UI কখনো ফ্রিজ হয় না।',
        marks: 5
      },
      {
        id: 'bq4-2',
        q: 'JavaScript DOM ম্যানিপুলেশন এবং Event Bubbling ও Capturing-এর মেকানিজম উদাহরণসহ ব্যাখ্যা করো।',
        a: 'DOM Manipulation হলো জাভাস্ক্রিপ্ট ব্যবহার করে কোনো HTML উপাদানের কনটেন্ট, অ্যাট্রিবিউট বা স্টাইল যোগ, বিয়োগ বা পরিবর্তন করা।\n\nEvent Propagation মেকানিজম:\nযখন কোনো নেস্টেড উপাদানে (যেমন <div> এর ভেতরে <button>) ক্লিক করা হয়, তখন ইভেন্টটি দুটি ধাপে ভ্রমণ করে:\n১) Event Capturing (Trickling): ইভেন্টটি উইন্ডো ও ডকুমেন্ট থেকে শুরু করে নিচের দিকে টার্গেট উপাদানের দিকে নেমে আসে।\n২) Event Target: কাঙ্ক্ষিত উপাদানটিতে ইভেন্ট এক্সিকিউট হয়।\n৩) Event Bubbling: টার্গেট থেকে শুরু করে ইভেন্টটি বুদ্বুদের মতো ওপরের দিকে প্যারেন্ট, বডি এবং উইন্ডোর দিকে উঠতে থাকে। ডিফল্টভাবে addEventListener ইভেন্ট বাবলিং পর্যায়ে লিসেন করে।\n\nবাবলিং প্রতিরোধের উপায়:\nযদি কোনো প্যারেন্ট ডিভ এবং চাইল্ড বাটন উভয়েরই নিজস্ব ক্লিক ইভেন্ট থাকে, তবে বাটনে ক্লিক করলে প্যারেন্টের ক্লিকও রান হয়ে যেতে পারে। এটি প্রতিরোধে ইভেন্ট অবজেক্টে `event.stopPropagation()` মেথড কল করতে হয়।',
        marks: 5
      }
    ],
    mcqs: [
      {
        id: 'mcq4-1',
        question: 'নিচের কোন বৈশিষ্ট্যটি `const` এর ক্ষেত্রে প্রযোজ্য নয়?',
        options: [
          'এটি ব্লক-স্কোপড',
          'ঘোষণার সাথে সাথে মান নির্ধারণ করতে হয়',
          'এর মান পরবর্তীতে পুনরায় অ্যাসাইন করা যায়',
          'এটি টেম্পোরাল ডেড জোন (TDZ) মেনে চলে'
        ],
        correctIndex: 2,
        explanation: '`const` দিয়ে ঘোষিত ভেরিয়েবলের মান পুনরায় অ্যাসাইন করা যায় না; এটি করলে TypeError উৎপন্ন হয়।'
      },
      {
        id: 'mcq4-2',
        question: 'সম্পূর্ণ DOM পার্সিং সমাপ্ত হওয়ার পর ক্রমানুসারে স্ক্রিপ্ট রান করার জন্য কোনটি সেরা?',
        options: ['<script async>', '<script defer>', '<script>', '<script run="post">'],
        correctIndex: 1,
        explanation: '`defer` নিশ্চিত করে যে স্ক্রিপ্ট ব্যাকগ্রাউন্ডে ডাউনলোড হবে কিন্তু পুরো DOM পার্সিং সমাপ্ত হওয়ার পরেই অর্ডারে রান করবে।'
      }
    ]
  }
};
