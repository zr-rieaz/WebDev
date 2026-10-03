import { TheoryUnit } from '../../types/curriculum';

export const unit2: TheoryUnit = {
  id: 'theory-2',
  unitNumber: 2,
  title: 'UI / UX AND MARKUP LANGUAGE',
  code: 'UNIT 02',
  creditHours: 'Theory: 1 Period/Week | Credit: 3',
  overviewBengali: 'এই ইউনিটে User Interface (UI) ও User Experience (UX)-এর তাত্ত্বিক ও ব্যবহারিক বিভাজন, ওয়্যারফ্রেমিং ও প্রোটোটাইপিং পদ্ধতি, মার্কআপ ল্যাঙ্গুয়েজের অন্তর্নিহিত কার্যপদ্ধতি ও ইতিহাস (SGML, HTML, XML, XHTML), W3C মার্কআপ স্ট্যান্ডার্ড, আধুনিক HTML5-এর ডকুমেন্ট ট্রি এবং Semantic Tags ও Attributes-এর গভীর পর্যালোচনা অন্তর্ভুক্ত করা হয়েছে।',
  subTopics: [
    {
      id: '2.1',
      code: '2.1',
      title: 'UI এবং UX-এর গভীর ধারণা ও ডিজাইন থিওরি',
      englishTitle: 'Core Concepts of UI & UX, Design Systems & Cognitive Ergonomics',
      explanationBengali: 'UI (User Interface) এবং UX (User Experience) ডিজিটাল পণ্য তৈরির দুটি অবিচ্ছেদ্য অথচ পৃথক শাখা। UI হলো পণ্যের রূপ, সৌন্দর্য এবং ভিজ্যুয়াল উপস্থাপনা; আর UX হলো ব্যবহারকারীর মানসিক সন্তুষ্টি, কার্যকারিতা, সমস্যা সমাধানের গতি এবং আবেগিক অভিজ্ঞতা (Emotional Response)।',
      detailedSections: [
        {
          heading: 'ডিজাইন সিস্টেমের মৌলিক নীতি ও ভিজ্যুয়াল হায়ারার্কি',
          contentBengali: 'একটি আধুনিক UI তৈরিতে যেসকল মূলনীতি কঠোরভাবে মেনে চলা হয়:',
          keyPoints: [
            'Visual Hierarchy: চোখের প্রাকৃতিক স্ক্যানিং প্যাটার্ন (যেমন টেক্সট-হেভি পেজে "F-Shape Pattern" এবং ল্যান্ডিং পেজে "Z-Shape Pattern") অনুসরণ করে গুরুত্বপূর্ণ শিরোনাম ও অ্যাকশন বাটন উপস্থাপন করা।',
            'Consistency & Predictability: পুরো প্ল্যাটফর্মে প্রাইমারি অ্যাকশন বাটন, ইনপুট ফিল্ড ও আইকনোগ্রাফির অভিন্ন স্টাইল বজায় রাখা যাতে ব্যবহারকারীকে বারবার নতুন করে ভাবতে না হয় (Jacob\'s Law)।',
            'Affordance & Signifiers: কোনো উপাদান দেখে যেন তৎক্ষণাৎ বোঝা যায় এটি ক্লিকেবল কিনা (যেমন বাটনকে বাটন মনে হওয়া, আন্ডারলাইন লিঙ্কে লিঙ্ক মনে হওয়া)।',
            'Feedback & Tolerance: প্রতিটি ইউজার ইন্টারঅ্যাকশনে তাৎক্ষণিক প্রতিক্রিয়া প্রদান (যেমন হোভার ইফেক্ট, স্পিনার, সাকসেস বা এরর টোস্ট) এবং দুর্ঘটনাবশত ভুল রুখতে আনডু (Undo) বা কনফার্মেশন ডায়ালগ রাখা।'
          ]
        }
      ],
      bulletPoints: [
        {
          title: 'Hick\'s Law',
          text: 'ব্যবহারকারীকে যত বেশি অপশন দেওয়া হবে, তার সিদ্ধান্ত নিতে তত বেশি সময় লাগবে। সুতরাং UI সর্বদা সংক্ষিপ্ত ও ফোকাসড রাখা আবশ্যক।'
        },
        {
          title: 'Fitts\'s Law',
          text: 'একটি টার্গেটে (যেমন বাটন) পৌঁছানোর সময় টার্গেটের আকার এবং দূরত্বের ওপর নির্ভরশীল। তাই মোবাইলে প্রাইমারি বাটনের আকার নূন্যতম 44x44px হওয়া বাঞ্ছনীয়।'
        }
      ]
    },
    {
      id: '2.2',
      code: '2.2',
      title: 'UI বনাম UX: পার্থক্য, ওয়্যারফ্রেমিং এবং প্রোটোটাইপিং প্রক্রিয়া',
      englishTitle: 'Comprehensive Comparison: UI vs UX, Wireframing & Prototyping',
      explanationBengali: 'UI এবং UX-এর কাজের পর্যায়ক্রম সফটওয়্যার ইঞ্জিনিয়ারিং লাইফসাইকেলের ভিন্ন ভিন্ন ধাপে সম্পাদিত হয়। UX ডিজাইনার পণ্যের কঙ্কাল ও কার্যপদ্ধতি নির্ধারণ করেন, আর UI ডিজাইনার সেই কঙ্কালকে নান্দনিক রক্ত-মাংসে রূপদান করেন।',
      comparisonTable: {
        caption: 'UI Designer বনাম UX Designer-এর দায়িত্বের পুঙ্খানুপুঙ্খ তুলনা',
        headers: ['বৈশিষ্ট্য (Parameter)', 'UX (User Experience)', 'UI (User Interface)'],
        rows: [
          ['সংজ্ঞা', 'ব্যবহারকারীর সামগ্রিক যাত্রা, সুবিধা ও ব্যবহারযোগ্যতা', 'অ্যাপ্লিকেশনের ভিজ্যুয়াল উপাদান, স্পর্শকাতর ইন্টারফেস ও স্টাইল'],
          ['মূল ফোকাস', 'সমস্যা সমাধান, লজিক্যাল ফ্লো, স্ট্রাকচার ও ইনফরমেশন আর্কিটেকচার', 'রঙের স্কিম, টাইপোগ্রাফি, স্পেসিং, আইকন, বাটন ও কম্পোনেন্ট'],
          ['প্রস্তুতকৃত সম্পদ (Deliverables)', 'User Persona, Journey Map, Wireframe, User Testing Data', 'High-Fidelity Mockup, UI Kit, Design System, Asset Export'],
          ['মূল মূল্যায়ন মানদণ্ড', 'ব্যবহারকারী কি সহজে ও দ্রুত তার লক্ষ্য পূরণ করতে পারছে?', 'ইন্টারফেসটি কি নান্দনিক, ট্রেন্ডি এবং ব্র্যান্ড-উপযোগী?'],
          ['ব্যবহৃত টুলস', 'Miro, Whimsical, Figma, Notion', 'Figma, Adobe XD, Sketch, Illustrator']
        ]
      },
      detailedSections: [
        {
          heading: 'ওয়্যারফ্রেম বনাম মকআপ বনাম প্রোটোটাইপ',
          contentBengali: 'ডিজাইন পর্যায় থেকে ডেভেলপমেন্টে যাওয়ার তিনটি প্রধান পর্যায়:',
          keyPoints: [
            '১. Wireframe (Low-Fidelity): কোনো রঙ বা ইমেজ ছাড়া সাধারণ ধূসর বক্স ও স্কেচের মাধ্যমে লেআউট ও কন্টেন্টের অবস্থান নির্ধারণ। এটি আর্কিটেকচারাল ব্লুপ্রিন্ট সদৃশ।',
            '২. Mockup (Mid to High-Fidelity): চূড়ান্ত কালার প্যালেট, আসল ছবি, ফন্ট ও ব্র্যান্ডিং সহযোগে তৈরি স্থির ভিজ্যুয়াল উপস্থাপনা।',
            '৩. Prototype (Interactive Model): ক্লিকেবল ইন্টারঅ্যাকটিভ মডেল যেখানে স্ক্রিন ট্রানজিশন, ড্রপডাউন এবং বাটন ক্লিকের অ্যানিমেশন প্রদর্শন করা হয়, যার ফলে কোডিং শুরুর আগেই ক্লায়েন্ট সম্পূর্ণ কার্যকারিতা অনুভব করতে পারে।'
          ]
        }
      ]
    },
    {
      id: '2.3',
      code: '2.3',
      title: 'Markup Language-এর অভ্যন্তরীণ মেকানিজম ও প্রোগ্রামিং ল্যাঙ্গুয়েজ থেকে পার্থক্য',
      englishTitle: 'Mechanism of Markup Languages vs Programming Languages',
      explanationBengali: 'Markup Language হলো এমন এক সেট ট্যাগ এবং রুলস যা টেক্সট কনটেন্টের সাথে অতিরিক্ত সিনট্যাক্সিয়াল মেটাডেটা যুক্ত করে ব্রাউজারকে নির্দেশ দেয় কোনো টেক্সট বা মিডিয়ার অর্থ ও কাঠামো কী হবে। এটি সাধারণ প্রোগ্রামিং ভাষার মতো কোনো অ্যালগরিদমিক লুপ, ডিসিশন মেকিং বা গাণিতিক এক্সিকিউশন পরিচালনা করে না; বরং ডকুমেন্টের গঠনগত প্রেজেন্টেশন ও অর্থ সংজ্ঞায়িত করে।',
      detailedSections: [
        {
          heading: 'ব্রাউজারের HTML পার্সিং এবং DOM Tree রূপান্তর প্রক্রিয়া',
          contentBengali: 'ব্রাউজার যখন নেটওয়ার্ক দিয়ে বাইট স্ট্রিম গ্রহণ করে, তখন নিচের পাইপলাইনে কাজ চলে:',
          keyPoints: [
            '১. Characters Conversion: র কাঁচা বাইটকে ক্যারেক্টার এনকোডিং (UTF-8) অনুযায়ী টেক্সটে রূপান্তর।',
            '২. Tokenization: টেক্সট থেকে ট্যাগ চিহ্নিত করে আলাদা টোকেনে রূপান্তর (যেমন StartTag: html, StartTag: body, StartTag: p, EndTag: p)।',
            '৩. Node Construction: প্রতিটি টোকেনকে এক একটি মেমরি অবজেক্ট বা Node-এ রূপান্তর।',
            '৪. DOM Tree Formation: নোডগুলোকে একটি হায়ারার্কিক্যাল ট্রি বা Document Object Model-এ সাজানো, যেখানে <html> রুট এবং অন্যান্য ট্যাগগুলো তার চাইল্ড বা ডিসেন্ড্যান্ট নোড হিসেবে যুক্ত হয়।'
          ]
        }
      ]
    },
    {
      id: '2.4',
      code: '2.4',
      title: 'বিভিন্ন প্রকার Markup Language এবং তাদের তুলনামূলক বিবর্তন',
      englishTitle: 'Types of Markup Languages: SGML, HTML, XML, XHTML & Markdown',
      explanationBengali: 'কম্পিউটার বিজ্ঞানের ইতিহাসে তথ্য সংরক্ষণ ও প্রদর্শনের জন্য বিভিন্ন ধরনের মার্কআপের উদ্ভাবন ঘটেছে:',
      comparisonTable: {
        caption: 'বিভিন্ন প্রকার মার্কআপ ল্যাঙ্গুয়েজের বৈশিষ্ট্যগত তুলনা',
        headers: ['ভাষা (Language)', 'উদ্দেশ্য / ভূমিকা', 'নিয়মের কঠোরতা (Syntax Strictness)', 'কাস্টম ট্যাগ সুবিধা'],
        rows: [
          ['SGML (1986)', 'সকল আধুনিক মার্কআপের মেটাল্যাঙ্গুয়েজ ও আদি উৎস', 'অত্যন্ত জটিল ও বিশাল স্পেসিফিকেশন', 'সমর্থিত'],
          ['HTML5', 'ওয়েব পেজের প্রেজেন্টেশন ও কাঠামো নির্ধারণ', 'নমনীয় ও ত্রুটিসহনশীল (Error Tolerant)', 'সমর্থিত নয় (নির্দিষ্ট ট্যাগ সেট)'],
          ['XML', 'বিভিন্ন সফটওয়্যারের মধ্যে কাঠামোবদ্ধ ডেটা পরিবহন ও সংরক্ষণ', 'কঠোর (Strict Syntax, ট্যাগ ক্লোজিং বাধ্যতামূলক)', 'সম্পূর্ণ কাস্টম ট্যাগ তৈরি সম্ভব'],
          ['XHTML', 'HTML-কে XML-এর কঠোর নিয়মের ফ্রেমে বাঁধার উদ্যোগ', 'অত্যন্ত কঠোর (XML পার্সার দ্বারা ভ্যালিডেট হয়)', 'নির্দিষ্ট ট্যাগ সেট'],
          ['Markdown', 'সহজে পাঠযোগ্য সরল টেক্সট মার্কআপ (README, Docs)', 'খুব সহজ ও ন্যূনতম সিনট্যাক্স (#, **, [])', 'প্রযোজ্য নয়']
        ]
      },
      codeSnippets: [
        {
          language: 'html',
          filename: 'semantic_document_tree.html',
          explanation: 'একটি আধুনিক W3C স্ট্যান্ডার্ডসম্মত HTML5 ডকুমেন্ট স্ট্রাকচার',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BTEB Computer Technology - WebDev 1</title>
</head>
<body>
  <!-- Document Header Landmark -->
  <header>
    <div class="brand">
      <h1>Polytechnic Technical Education</h1>
    </div>
    <nav aria-label="Course Navigation">
      <ul>
        <li><a href="#theory">Theory Syllabus</a></li>
        <li><a href="#practical">Practical Labs</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main Content Landmark -->
  <main id="main-content">
    <article>
      <header>
        <h2>Unit 2: Markup Languages & Semantic Systems</h2>
        <p>Published for Subject Code 28544</p>
      </header>
      <section>
        <h3>Core Principles</h3>
        <p>Semantic tags improve accessibility, SEO, and developer readability.</p>
      </section>
    </article>
    <aside>
      <h3>Related Resources</h3>
      <p>W3C Nu HTML Validator Guidelines</p>
    </aside>
  </main>

  <!-- Document Footer Landmark -->
  <footer>
    <p>&copy; 2026 Bangladesh Technical Education Board (BTEB)</p>
  </footer>
</body>
</html>`
        }
      ]
    },
    {
      id: '2.5',
      code: '2.5',
      title: 'W3C Markup গাইডলাইন এবং Semantic HTML5-এর গভীর প্রয়োগ',
      englishTitle: 'W3C Markup Guidelines, Doctypes & Semantic Architecture',
      explanationBengali: 'Semantic HTML বলতে এমন মার্কআপ বোঝায় যার ট্যাগ দেখেই মানুষ এবং মেশিন (ব্রাউজার, স্ক্রিন রিডার, সার্চ ইঞ্জিন ক্রলার) উভয়ের কাছে ট্যাগের ভেতরের তথ্যের অর্থ ও তাৎপর্য পরিষ্কার হয়ে ওঠে। অতীতে <div> ও <span>-এর মতো নন-সিমান্টিক ট্যাগের আধিক্য ছিল, যা ওয়েবকে অস্পষ্ট ও অবিন্যস্ত করে ফেলেছিল।',
      detailedSections: [
        {
          heading: 'HTML5 Semantic ল্যান্ডমার্কস এবং তাদের নির্দিষ্ট কার্যপরিধি',
          contentBengali: 'প্রধান সিমান্টিক ল্যান্ডমার্ক ট্যাগসমূহের ব্যবহারবিধি:',
          keyPoints: [
            '<header>: কোনো পৃষ্ঠা বা কোনো স্বতন্ত্র আর্টিকেলের শিরোনাম, লোগো এবং পরিচিতিমূলক মেটাডেটা ধারণ করে।',
            '<nav>: মূল নেভিগেশন লিংকসমূহ ধারণের জন্য সংরক্ষিত। সাধারণ তালিকার জন্য এটি নয়, শুধুমাত্র প্রধান সাইট বা পেজ নেভিগেশনের জন্য প্রযোজ্য।',
            '<main>: একটি HTML ডকুমেন্টের কেন্দ্রীয় এবং অনন্য মূল বিষয়বস্তু ধারণ করে। সমগ্র ডকুমেন্টে <main> ট্যাগ কেবল একবারই থাকবে এবং এর মধ্যে সাইটজুড়ে পুনরাবৃত্ত কনটেন্ট (যেমন হেডার, ফুটার, সাইডবার) থাকবে না।',
            '<article>: স্বয়ংসম্পূর্ণ কনটেন্ট ব্লক (যেমন ব্লগ পোস্ট, নিউজ রিপোর্ট, ফোরাম কমেন্ট) যা সাইটের বাকি অংশ থেকে সম্পূর্ণ বিচ্ছিন্ন করলেও স্বকীয় অর্থ বহন করে।',
            '<section>: ডকুমেন্টের থিমেটিক গ্রুপ বা অধ্যায় নির্দেশ করে। প্রতিটি <section>-এ অবশ্যই একটি প্রাসঙ্গিক হেডিং ট্যাগ (h2-h6) থাকা W3C-এর আবশ্যিক স্পেসিফিকেশন।',
            '<aside>: মূল বিষয়ের সাথে পরোক্ষভাবে সম্পর্কিত সহায়ক তথ্য বা সাইডবার (যেমন সম্পর্কিত লিঙ্ক, গ্লসারি, লেখক পরিচিতি)।',
            '<footer>: ডকুমেন্ট বা সেকশনের পাদটীকা, যাতে কপিরাইট, যোগাযোগের লিঙ্ক বা নিয়মাবলী থাকে।'
          ]
        }
      ],
      comparisonTable: {
        caption: 'Semantic Tag বনাম Non-Semantic Tag-এর সরাসরি তুলনা',
        headers: ['Non-Semantic ট্যাগ (অপ্রস্তাবিত)', 'Semantic ট্যাগ (W3C প্রস্তাবিত)', 'সুফল ও তাৎপর্য'],
        rows: [
          ['<div class="header">', '<header>', 'ব্রাউজার ও স্ক্রিন রিডার এটিকে সরাসরি সাইট হেডার হিসেবে শনাক্ত করে'],
          ['<div class="nav">', '<nav>', 'কীবোর্ড ইউজাররা নেভিগেশনাল কি-লিস্টে সরাসরি জাম্প করতে পারেন'],
          ['<div class="content">', '<main>', 'পেজের কেন্দ্রীয় বিষয়বস্তু স্ক্রিন রিডারের এক ক্লিকে পঠিত হয়'],
          ['<div class="post">', '<article>', 'সার্চ ইঞ্জিন ক্রলার এটিকে স্বতন্ত্র পোস্ট হিসেবে ইনডেক্স করে'],
          ['<div class="footer">', '<footer>>', 'ডকুমেন্টের কপিরাইট ও লিগ্যাল তথ্যের বৈধতা প্রতিষ্ঠিত হয়']
        ]
      }
    },
    {
      id: '2.6',
      code: '2.6',
      title: 'HTML Tags, Void Elements এবং Attributes-এর বিস্তারিত শ্রেণিবিভাগ',
      englishTitle: 'HTML Tags, Self-Closing Void Elements, Global & Specialized Attributes',
      explanationBengali: 'HTML উপাদানের ভিত্তি হলো ট্যাগ এবং অ্যাট্রিবিউট। ট্যাগগুলো উপাদানের পরিধি নির্ধারণ করে এবং অ্যাট্রিবিউটগুলো উপাদানের অতিরিক্ত মেটাডেটা ও আচরণ নিয়ন্ত্রণ করে।',
      detailedSections: [
        {
          heading: 'Paired Tags বনাম Void Elements-এর কারিগরি বৈশিষ্ট্য',
          contentBengali: 'HTML-এ দুই ধরনের ট্যাগ পাওয়া যায়:',
          keyPoints: [
            'Paired Tags: এদের ওপেনিং ট্যাগ (<p>) এবং ক্লোজিং ট্যাগ (</p>) দুটিই থাকে এবং এর মাঝে কনটেন্ট বা অন্যান্য চাইল্ড ট্যাগ অন্তর্ভুক্ত হতে পারে।',
            'Void Elements (Self-closing): HTML5 স্পেসিফিকেশনে এমন কিছু ট্যাগ রয়েছে যাদের কোনো ক্লোজিং ট্যাগ বা চাইল্ড নোড থাকে না। তারা নিজেরাই স্বয়ংসম্পূর্ণ। উদাহরণ: <area>, <base>, <br>, <col>, <embed>, <hr>, <img>, <input>, <link>, <meta>, <source>, <track>, <wbr>।'
          ]
        },
        {
          heading: 'Attributes-এর শ্রেণিবিভাগ ও নিরাপত্তা বিবেচনা',
          contentBengali: 'অ্যাট্রিবিউট মূলত দুই শ্রেণিতে বিভক্ত:',
          keyPoints: [
            'Global Attributes: যেকোনো বৈধ HTML উপাদানে ব্যবহার করা যায়। যেমন: `id` (পৃষ্ঠায় অনন্য শনাক্তকারী), `class` (সিএসএস ক্লাস্টার স্টাইলিং), `title` (টুলটিপ), `hidden`, `tabindex` (কীবোর্ড ফোকাস অর্ডার), `data-*` (কাস্টম ডেটা অ্যাট্রিবিউট)।',
            'Element-Specific Attributes: নির্দিষ্ট ট্যাগের সাথে সামঞ্জস্যপূর্ণ। যেমন: `href` (<a> ট্যাগে লিঙ্ক নির্দেশক), `src` ও `alt` (<img> ট্যাগে ফাইলের পাথ ও টেক্সট বিকল্প), `type`, `name`, `placeholder`, `required` (<input> ট্যাগে)।'
          ]
        }
      ],
      codeSnippets: [
        {
          language: 'html',
          filename: 'accessible_form.html',
          explanation: 'W3C কমপ্লায়েন্ট অ্যাক্সেসিবল ফর্ম কাঠামো',
          code: `<form action="/register" method="POST" class="auth-form" novalidate>
  <!-- Accessible Form Group -->
  <div class="form-field">
    <label for="studentEmail">Polytechnic Institutional Email:</label>
    <input 
      type="email" 
      id="studentEmail" 
      name="email" 
      required 
      autocomplete="email"
      placeholder="e.g. roll28544@polytechnic.edu.bd"
      aria-describedby="emailHelp"
    >
    <small id="emailHelp" class="help-text">We never share your email with third parties.</small>
  </div>

  <div class="form-field">
    <label for="studentPass">Portal Password:</label>
    <input 
      type="password" 
      id="studentPass" 
      name="password" 
      required 
      minlength="8"
    >
  </div>

  <button type="submit" class="btn-submit">Authenticate Student</button>
</form>`
        }
      ]
    }
  ],
  selfAssessment: {
    shortQuestions: [
      {
        id: 'q2-1',
        q: 'UI এবং UX এর মধ্যকার মৌলিক পার্থক্য কী?',
        a: 'UI (User Interface) অ্যাপ্লিকেশনের ভিজ্যুয়াল রূপ—রঙ, টাইপোগ্রাফি, বাটন ও গ্রাফিক্স নিয়ে কাজ করে; পক্ষান্তরে UX (User Experience) অ্যাপ্লিকেশনটি ব্যবহারকালীন ইউজারের স্বাচ্ছন্দ্য, ব্যবহারযোগ্যতা (Usability) এবং সমস্যা সমাধানের সাবলীল পথ নির্ধারণ করে।',
        marks: 2
      },
      {
        id: 'q2-2',
        q: 'Semantic HTML Tag বলতে কী বোঝায়? তিনটি উদাহরণ দাও।',
        a: 'যে সকল ট্যাগ তাদের নামের মাধ্যমেই ভেতরের কনটেন্টের উদ্দেশ্য এবং প্রকার ব্রাউজার ও সার্চ ইঞ্জিনের কাছে অর্থপূর্ণভাবে প্রকাশ করে তাদের Semantic Tag বলে। যেমন: <header>, <article>, <nav>।',
        marks: 2
      },
      {
        id: 'q2-3',
        q: 'HTML-এ Void Element কাকে বলে? তিনটি উদাহরণ দাও।',
        a: 'যে সকল HTML ট্যাগের কোনো সমাপ্তি (Closing) ট্যাগ থাকে না এবং যা কোনো চাইল্ড টেক্সট ধারণ করতে পারে না, তাদের Void Element বা Self-closing Element বলে। যেমন: <img>, <input>, <br>।',
        marks: 2
      },
      {
        id: 'q2-4',
        q: 'Global Attribute কী? দুটি বহুল ব্যবহৃত গ্লোবাল অ্যাট্রিবিউট উল্লেখ করো।',
        a: 'যেসব অ্যাট্রিবিউট কোনো নির্দিষ্ট ট্যাগে সীমাবদ্ধ না থেকে যেকোনো বৈধ HTML উপাদানে ব্যবহার করা যায় তাদের Global Attribute বলে। যেমন: `id` এবং `class`।',
        marks: 2
      },
      {
        id: 'q2-5',
        q: 'Wireframe এবং Prototype-এর মধ্যে পার্থক্য কী?',
        a: 'Wireframe হলো কালার ও ইমেজ ছাড়া সাধারণ ব্ল্যাক-অ্যান্ড-হোয়াইট প্রাথমিক লেআউট স্কেচ; পক্ষান্তরে Prototype হলো ডিজাইনের ক্লিকেবল ইন্টারঅ্যাকটিভ মডেল যার মাধ্যমে কোডিং শুরুর আগেই ইউজার ফ্লো টেস্ট করা যায়।',
        marks: 2
      }
    ],
    broadQuestions: [
      {
        id: 'bq2-1',
        q: 'HTML5-এ Semantic Tags ব্যবহারের সুবিধা ও বাস্তবায়ন কৌশল বিস্তারিত আলোচনা করো।',
        a: 'Semantic Tags ব্যবহারের প্রধান সুবিধাসমূহ:\n১) Web Accessibility (WCAG): দৃষ্টিপ্রতিবন্ধী ব্যবহারকারীরা যখন Screen Reader (NVDA, JAWS) ব্যবহার করেন, তখন স্ক্রিন রিডার সরাসরি ল্যান্ডমার্ক ট্যাগ (<nav>, <main>, <header>) শনাক্ত করে কীবোর্ড শর্টকাট দিয়ে পেজে জাম্প করতে দেয়।\n২) Search Engine Optimization (SEO): Google, Bing ইত্যাদি সার্চ ইঞ্জিন ক্রলার সাধারণ <div>-এর ভেতরে থাকা টেক্সটের গুরুত্ব সহজে বুঝতে পারে না। কিন্তু <article> বা <main>-এর ভেতরে থাকা কনটেন্টকে মূল বিষয়বস্তু হিসেবে অগ্রাধিকার দিয়ে সার্চ র‍্যাঙ্কিংয়ে এগিয়ে রাখে।\n৩) Code Readability & Maintainability: অন্যান্য ডেভেলপারদের পক্ষে সোর্স কোড দেখে সহজে পেজের কোন অংশে কী কাজ হচ্ছে তা অনুধাবন করা সম্ভব হয়, ফলে ডিবাগিং ও রিফ্যাক্টরিংয়ের সময় ও খরচ বাঁচে।\n৪) Responsive Framework Compatibility: আধুনিক CSS Grid ও Flexbox-এ সিমান্টিক এলিমেন্টগুলোকে গ্রিড এরিয়া হিসেবে ডিক্লেয়ার করে ক্লিন সিএসএস লেখা যায়।',
        marks: 5
      },
      {
        id: 'bq2-2',
        q: 'Markup Language-এর বিবর্তন আলোচনা করো। SGML, HTML, XML এবং XHTML-এর তুলনামূলক চিত্র তুলে ধরো।',
        a: 'মার্কআপ ল্যাঙ্গুয়েজের ইতিহাস ও বিবর্তন:\n১) SGML (Standard Generalized Markup Language): ১৯৮৬ সালে ISO কর্তৃক গৃহীত মেটাল্যাঙ্গুয়েজ। এটি খুব শক্তিশালী কিন্তু অত্যন্ত জটিল ছিল।\n২) HTML: টিম বার্নার্স-লি ১৯৯১ সালে সাধারণ ডকুমেন্টের লিঙ্ক তৈরির জন্য SGML-এর একটি সহজ সাবসেট হিসেবে HTML তৈরি করেন। HTML5 হলো এর আধুনিকতম সংস্করণ যাতে অডিও, ভিডিও এবং সিমান্টিক ল্যান্ডমার্ক যুক্ত হয়েছে।\n৩) XML (Extensible Markup Language): ১৯৯৮ সালে ডব্লিউথ্রিসি কর্তৃক ডেটা ট্রান্সফার ও সংরক্ষণের জন্য প্রস্তাবিত। এতে ডেভেলপার নিজের ইচ্ছামতো কাস্টম ট্যাগ তৈরি করতে পারেন।\n৪) XHTML: ২০০০ সালের দিকে HTML-কে XML-এর মতো কঠোর সিনট্যাক্সের আওতায় এনেxhtml ১.০ প্রণয়ন করা হয়, যেখানে ট্যাগ বন্ধ করা বাধ্যতামূলক ছিল। তবে কঠোরতার কারণে ডেভেলপারদের কাছে এটি জনপ্রিয়তা হারায় এবং ফলশ্রুতিতে নমনীয় ও শক্তিশালী HTML5 প্রাধান্য লাভ করে।',
        marks: 5
      }
    ],
    mcqs: [
      {
        id: 'mcq2-1',
        question: 'নিচের কোনটি W3C স্ট্যান্ডার্ড অনুযায়ী Void Element নয়?',
        options: ['<meta>', '<hr>', '<header>', '<img>'],
        correctIndex: 2,
        explanation: '<header> একটি সিমান্টিক ব্লক লেভেল কন্টেইনার ট্যাগ যার ওপেনিং ও ক্লোজিং উভয় ট্যাগই থাকে। এটি Void Element নয়।'
      },
      {
        id: 'mcq2-2',
        question: 'একটি HTML ডকুমেন্টে <main> ট্যাগ সর্বোচ্চ কতবার ব্যবহার করা উচিত?',
        options: ['১ বার', '২ বার', '৩ বার', 'অসীম বার'],
        correctIndex: 0,
        explanation: 'W3C স্পেসিফিকেশন অনুযায়ী একটি ডকুমেন্টের মূল অনন্য কনটেন্টকে সংজ্ঞায়িত করার জন্য কেবল একটিমাত্র <main> ট্যাগ প্রযোজ্য।'
      }
    ]
  }
};
