import { TheoryUnit } from '../../types/curriculum';

export const unit6: TheoryUnit = {
  id: 'theory-6',
  unitNumber: 6,
  title: 'DATA MANIPULATION',
  code: 'UNIT 06',
  creditHours: 'Theory: 1 Period/Week | Credit: 3',
  overviewBengali: 'এই ইউনিটে AJAX এবং আধুনিক Fetch API-এর মাধ্যমে অ্যাসিঙ্ক্রোনাস ডেটা আদান-প্রদান, JSON সিরিয়ালাইজেশন ও ডিসিরিয়ালাইজেশন, থার্ড-পার্টি পাবলিক ও ক্লাউড APIs (Weather, Firebase, AWS), HTTP প্রটোকল হেডারস ও স্ট্যাটাস কোড ক্লাসিফিকেশন, RESTful আর্কিটেকচারাল মেথডস (GET, POST, PUT, PATCH, DELETE) এবং PHP PDO Prepared Statements সহযোগে সম্পূর্ণ নিরাপদ MySQL ডেটাবেস CRUD অপারেশন বিস্তারিতভাবে আলোচনা করা হয়েছে।',
  subTopics: [
    {
      id: '6.1',
      code: '6.1',
      title: 'AJAX ও JSON: অ্যাসিঙ্ক্রোনাস ডেটা ট্রান্সফার ও আধুনিক Fetch API-এর গভীর বিশ্লেষণ',
      englishTitle: 'AJAX Mechanics, JSON Serialization & Modern Async/Await Fetch API',
      explanationBengali: 'AJAX (Asynchronous JavaScript and XML) হলো এমন একটি আধুনিক প্রযুক্তি যা পুরো ওয়েব পেজ রিলোড না করে পর্দার আড়ালে ক্লায়েন্ট ব্রাউজার ও ব্যাকএন্ড ওয়েব সার্ভারের মধ্যে ডেটা আদান-প্রদান নিশ্চিত করে। ঐতিহ্যবাহী ওয়েবে একটি ফর্ম সাবমিট করলে পুরো পৃষ্ঠা সাদা হয়ে পুনরায় সার্ভার থেকে রিলোড হতো; কিন্তু AJAX কেবল প্রয়োজনীয় ক্ষুদ্রাতিক্ষুদ্র ডেটা (JSON) ব্যাকগ্রাউন্ডে এনে DOM-এর সুনির্দিষ্ট অংশে আপডেট করে।',
      detailedSections: [
        {
          heading: 'XMLHttpRequest (XHR) বনাম আধুনিক Fetch API',
          contentBengali: 'জাভাস্ক্রিপ্টে নেটওয়ার্ক কল করার বিবর্তন:',
          keyPoints: [
            'XMLHttpRequest (XHR): ১৯৯৯ সালে উদ্ভাবিত ইভেন্ট-ভিত্তিক জটিল অবজেক্ট। এতে কলব্যাক হেল (Callback Hell) সৃষ্টি হতো এবং কোড রিড্যাবিলিটি কম ছিল।',
            'Fetch API: আধুনিক ES6+ স্ট্যান্ডার্ড যা Promise-ভিত্তিক। এটি `async/await` সিনট্যাক্সের সাহায্যে অত্যন্ত ক্লিন, মডুলার ও নন-ব্লকিং কোড উপহার দেয়। এতে `response.json()` দিয়ে সরাসরি JSON পার্স করা যায়।'
          ]
        },
        {
          heading: 'JSON (JavaScript Object Notation)-এর মেমরি রূপান্তর',
          contentBengali: 'JSON হলো হালকা, ভাষা-নিরপেক্ষ এবং মানবপাঠ্য টেক্সট ফরম্যাট:',
          keyPoints: [
            'JavaScript-এ: `JSON.stringify(obj)` অবজেক্টকে টেক্সট স্ট্রিংয়ে রূপান্তর করে; `JSON.parse(str)` টেক্সটকে পুনরায় অবজেক্টে ফিরিয়ে আনে।',
            'PHP-তে: `json_encode($array)` পিএইচপি অ্যারে থেকে JSON স্ট্রিং তৈরি করে; `json_decode($json, true)` JSON স্ট্রিং থেকে পিএইচপি অ্যাসোসিয়েটিভ অ্যারে রিটার্ন করে।'
          ]
        }
      ],
      codeSnippets: [
        {
          language: 'javascript',
          filename: 'async_fetch_clean.js',
          explanation: 'আধুনিক Async/Await Fetch API ইমপ্লিমেন্টেশন',
          code: `// Modern Async/Await Pattern with Robust Error Handling
async function fetchCourseData(courseCode) {
  const loadingIndicator = document.querySelector('#loader');
  const resultContainer = document.querySelector('#courseDetails');

  try {
    loadingIndicator.style.display = 'block';

    const response = await fetch(\`/api/courses?code=\${encodeURIComponent(courseCode)}\`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    });

    if (!response.ok) {
      throw new Error(\`Network error! HTTP Status: \${response.status}\`);
    }

    const data = await response.json();
    resultContainer.innerHTML = \`
      <div class="card">
        <h3>\${data.title}</h3>
        <p>Credit: \${data.credit} | Code: \${data.code}</p>
      </div>
    \`;
  } catch (err) {
    console.error('[AJAX Error]:', err.message);
    resultContainer.innerHTML = \`<p class="error">Failed to load data: \${err.message}</p>\`;
  } finally {
    loadingIndicator.style.display = 'none';
  }
}`
        }
      ]
    },
    {
      id: '6.2',
      code: '6.2-6.3',
      title: 'থার্ড-পার্টি ওয়েব APIs এবং ক্লাউড সার্ভিস ইন্টিগ্রেশন',
      englishTitle: 'Consuming Third-Party APIs: OpenWeather, Firebase, AWS & RapidAPI',
      explanationBengali: 'Web API (Application Programming Interface) হলো দুটি সফটওয়্যার সিস্টেমের মধ্যে যোগাযোগ ও ডেটা বিনিময়ের নির্ধারিত চুক্তি। আধুনিক ওয়েব অ্যাপ্লিকেশনে স্ক্র্যাচ থেকে সবকিছু তৈরি না করে থার্ড-পার্টি সার্ভিস ব্যবহার করা হয়।',
      detailedSections: [
        {
          heading: 'প্রধান চারটি এপিআই ইকোসিস্টেম',
          contentBengali: 'ইন্ডাস্ট্রিতে সর্বাধিক ব্যবহৃত সার্ভিসেস:',
          keyPoints: [
            '১. OpenWeather API: সারা বিশ্বের লাইভ আবহাওয়া, তাপমাত্রা ও পূর্বাভাস ওয়েবসাইটে ইন্টিগ্রেট করতে ব্যবহৃত হয়। এতে API Key হেডারে বা কুয়েরি প্যারামিটারে পাঠাতে হয়।',
            '২. Google Firebase API: সার্ভারলেস রিয়েলটাইম ডেটাবেস (Firestore), ফোন ও সোশ্যাল লগইন (Firebase Auth) এবং পুশ নোটিফিকেশন প্রদান করে।',
            '৩. AWS APIs (Amazon Web Services): ক্লাউড ফাইল স্টোরেজ (S3), মেসেজিং কিউ (SQS) এবং এন্টারপ্রাইজ ব্যাকএন্ড সংযোগ।',
            '৪. RapidAPI Hub: বিশ্বের বৃহত্তম এপিআই মার্কেটপ্লেস যেখানে পেমেন্ট, এআই, ফাইন্যান্স ও এসএমএস সার্ভিসেস একটিমাত্র সাবস্ক্রিপশনে অ্যাক্সেস করা যায়।'
          ]
        },
        {
          heading: 'API Key ও Bearer Token সিকিউরিটি',
          contentBengali: 'কোনো পাবলিক গিটহাব রিপোজিটরিতে কখনোই API Key হার্ডকোড করে পুশ করা যাবে না। সিক্রেট কী সর্বদা সার্ভারের `.env` (Environment Variables) ফাইলে নিরাপদে সংরক্ষণ করতে হবে এবং ক্লায়েন্ট থেকে সার্ভার প্রক্সির মাধ্যমে রিকোয়েস্ট পাঠাতে হবে।'
        }
      ]
    },
    {
      id: '6.4',
      code: '6.4',
      title: 'HTTP/HTTPS প্রটোকল, রিকোয়েস্ট হেডারস এবং স্ট্যাটাস কোডের বিস্তৃত শ্রেণিবিভাগ',
      englishTitle: 'HTTP Protocol Architecture, Request Headers & Comprehensive Status Codes',
      explanationBengali: 'HTTP কমিউনিকেশনে সার্ভার প্রতিটি প্রতিক্রিয়ায় ৩-ডিজিটের একটি নিউমেরিক স্ট্যাটাস কোড পাঠায় যা অপারেশনের সফলতা বা ব্যর্থতার কারণ নির্দেশ করে।',
      comparisonTable: {
        caption: 'HTTP Status Code-এর পাঁচটি আন্তর্জাতিক শ্রেণিবিভাগ',
        headers: ['কোড রেঞ্জ (Range)', 'শ্রেণি (Category)', 'সাধারণত ব্যবহৃত গুরুত্বপূর্ণ কোডস', 'তাৎপর্য'],
        rows: [
          ['1xx', 'Informational', '100 Continue, 101 Switching Protocols', 'রিকোয়েস্ট গ্রহণ করা হয়েছে, প্রসেস চলমান'],
          ['2xx', 'Success', '200 OK, 201 Created, 204 No Content', 'রিকোয়েস্ট সফলভাবে সম্পন্ন ও কাঙ্ক্ষিত ডেটা প্রেরিত'],
          ['3xx', 'Redirection', '301 Moved Permanently, 302 Found, 304 Not Modified', 'রিসোর্সের ঠিকানা পরিবর্তিত হয়েছে বা ক্যাশ থেকে লোড'],
          ['4xx', 'Client Error', '400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found', 'ক্লায়েন্টের পাঠানো রিকোয়েস্টে ভুল, অনুমতিহীনতা বা অনুপস্থিতি'],
          ['5xx', 'Server Error', '500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable', 'ওয়েব সার্ভার বা পিএইচপি স্ক্রিপ্টে ক্র্যাশ বা ডাটাবেস ডাউন']
        ]
      }
    },
    {
      id: '6.5',
      code: '6.5',
      title: 'HTTP মেথডস: GET, POST, PUT, PATCH, DELETE এবং RESTful এপিআই আর্কিটেকচার',
      englishTitle: 'HTTP Verbs, Idempotence & RESTful Architecture Principles',
      explanationBengali: 'REST (Representational State Transfer) আর্কিটেকচারে রিসোর্স ম্যানিপুলেশনের জন্য স্ট্যান্ডার্ড HTTP Verbs ব্যবহৃত হয়।',
      comparisonTable: {
        caption: 'HTTP মেথডসমূহের কার্যকারিতা ও নিরাপত্তা বৈশিষ্ট্য',
        headers: ['মেথড (HTTP Verb)', 'CRUD অ্যাকশন', 'নিরাপত্তা (Safe)', 'আইডেমপোটেন্ট (Idempotent)', 'ব্যবহারের উদ্দেশ্য'],
        rows: [
          ['GET', 'Read', 'হ্যাঁ (Safe)', 'হ্যাঁ (Idempotent)', 'সার্ভার থেকে ডেটা রিড করা (সার্ভারের স্টেট বদলায় না)'],
          ['POST', 'Create', 'না (Unsafe)', 'না (Non-Idempotent)', 'সার্ভারে নতুন কোনো রেকর্ড তৈরি করা'],
          ['PUT', 'Update (Replace)', 'না (Unsafe)', 'হ্যাঁ (Idempotent)', 'বিদ্যমান রেকর্ডের সম্পূর্ণ ডেটা প্রতিস্থাপন করা'],
          ['PATCH', 'Update (Partial)', 'না (Unsafe)', 'না (Non-Idempotent)', 'বিদ্যমান রেকর্ডের আংশিক ফিল্ড (যেমন শুধু ফোন নম্বর) আপডেট করা'],
          ['DELETE', 'Delete', 'না (Unsafe)', 'হ্যাঁ (Idempotent)', 'সার্ভার থেকে নির্দিষ্ট রেকর্ড মুছে ফেলা']
        ]
      }
    },
    {
      id: '6.6',
      code: '6.6',
      title: 'ডেটাবেস CRUD অপারেশনস এবং PHP PDO Prepared Statements-এর প্রয়োগ',
      englishTitle: 'Database CRUD Operations & SQL Injection Defense via PHP PDO',
      explanationBengali: 'CRUD হলো যেকোনো পারসিস্টেন্ট ডেটা সিস্টেমের চারটি মৌলিক স্তম্ভ: Create (INSERT), Read (SELECT), Update (UPDATE), এবং Delete (DELETE)। ডেটাবেস অপারেশনে পুরানো `mysql_*` এক্সটেনশন সম্পূর্ণ বর্জনীয়; বর্তমানে PHP Data Objects (PDO) দিয়ে Prepared Statements ব্যবহার করা ইন্ডাস্ট্রির বাধ্যতামূলক সিকিউরিটি স্ট্যান্ডার্ড।',
      detailedSections: [
        {
          heading: 'SQL Injection আক্রমণ এবং PDO Prepared Statements-এর প্রতিরক্ষা কৌশল',
          contentBengali: 'SQL Injection হলো এমন এক বিধ্বংসী সাইবার আক্রমণ যেখানে হ্যাকার ইনপুট ফিল্ডে ক্ষতিকর এসকিউএল কোড (যেমন \' OR \'1\'=\'1) প্রবেশ করিয়ে পুরো ডেটাবেস বাইপাস বা মুছে দিতে পারে।',
          keyPoints: [
            'ঝুঁকিপূর্ণ কোড: $pdo->query("SELECT * FROM users WHERE user = \'$userInput\'"); হ্যাকার ইনপুট পরিবর্তন করলেই কোড ভেঙে যায়।',
            'নিরাপদ Prepared Statements: কুয়েরি এবং ডেটা সম্পূর্ণ আলাদা দুটি চ্যানেলে পাঠানো হয়: $stmt = $pdo->prepare("SELECT * FROM users WHERE user = :u"); $stmt->execute([\'u\' => $userInput]);',
            'ডেটাবেস ইঞ্জিন ইনপুটকে কখনোই নির্বাহযোগ্য কোড হিসেবে গণ্য করে না, কেবল প্লেইন স্ট্রিং লিটারেল হিসেবে ট্রিট করে। ফলে SQL Injection ঘটার কোনো সম্ভাবনা থাকে না।'
          ]
        }
      ],
      codeSnippets: [
        {
          language: 'php',
          filename: 'pdo_crud_master.php',
          explanation: 'PHP PDO দিয়ে সম্পূর্ণ নিরাপদ ও প্রডাকশন-গ্রেড CRUD ক্লাস',
          code: `<?php
class StudentRepository {
  private PDO $pdo;

  public function __construct() {
    $dsn = "mysql:host=localhost;dbname=bteb_portal;charset=utf8mb4";
    $options = [
      PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_EMULATE_PREPARES   => false, // Native prepared statements
    ];
    $this->pdo = new PDO($dsn, "db_user", "db_pass", $options);
  }

  // 1. CREATE (Insert)
  public function create(int $roll, string $name, float $gpa): int {
    $stmt = $this->pdo->prepare("INSERT INTO students (roll, name, gpa) VALUES (:roll, :name, :gpa)");
    $stmt->execute(['roll' => $roll, 'name' => $name, 'gpa' => $gpa]);
    return (int)$this->pdo->lastInsertId();
  }

  // 2. READ (Select)
  public function getByRoll(int $roll): ?array {
    $stmt = $this->pdo->prepare("SELECT * FROM students WHERE roll = :roll LIMIT 1");
    $stmt->execute(['roll' => $roll]);
    $student = $stmt->fetch();
    return $student ?: null;
  }

  // 3. UPDATE
  public function updateGpa(int $roll, float $newGpa): bool {
    $stmt = $this->pdo->prepare("UPDATE students SET gpa = :gpa WHERE roll = :roll");
    return $stmt->execute(['gpa' => $newGpa, 'roll' => $roll]);
  }

  // 4. DELETE
  public function delete(int $roll): bool {
    $stmt = $this->pdo->prepare("DELETE FROM students WHERE roll = :roll");
    return $stmt->execute(['roll' => $roll]);
  }
}
?>`
        }
      ]
    }
  ],
  selfAssessment: {
    shortQuestions: [
      {
        id: 'q6-1',
        q: 'AJAX এর পূর্ণরূপ কী এবং এর প্রধান সুবিধা কী?',
        a: 'AJAX এর পূর্ণরূপ Asynchronous JavaScript and XML। এর প্রধান সুবিধা হলো পুরো ওয়েব পেজ রিলোড না করে ব্যাকগ্রাউন্ডে সার্ভারের সাথে ডেটা আদান-প্রদান করা যায়, ফলে পেজের গতি ও ব্যবহারকারীর অভিজ্ঞতা বহুগুণ বাড়ে।',
        marks: 2
      },
      {
        id: 'q6-2',
        q: 'JSON কী? জাভাস্ক্রিপ্টে JSON স্ট্রিংকে অবজেক্টে রূপান্তর করার মেথড কোনটি?',
        a: 'JSON (JavaScript Object Notation) হলো লাইটওয়েট ও টেক্সট-ভিত্তিক ডেটা এক্সচেঞ্জ ফরম্যাট। জাভাস্ক্রিপ্টে JSON স্ট্রিংকে অবজেক্টে রূপান্তর করার মেথড হলো `JSON.parse()`।',
        marks: 2
      },
      {
        id: 'q6-3',
        q: 'HTTP Status Code 404 এবং 500-এর মধ্যে পার্থক্য কী?',
        a: '404 (Not Found) একটি Client Error কোড যা নির্দেশ করে ক্লায়েন্টের চাওয়া ফাইল বা URL সার্ভারে খুঁজে পাওয়া যায়নি; আর 500 (Internal Server Error) একটি Server Error কোড যা নির্দেশ করে সার্ভার প্রান্তে পিএইচপি স্ক্রিপ্ট বা ডেটাবেসে কোনো মারাত্মক ক্র্যাশ বা ত্রুটি ঘটেছে।',
        marks: 2
      },
      {
        id: 'q6-4',
        q: 'CRUD অপারেশনের পূর্ণরূপ কী কী?',
        a: 'CRUD এর পূর্ণরূপ হলো: Create (INSERT), Read (SELECT), Update (UPDATE), এবং Delete (DELETE)।',
        marks: 2
      },
      {
        id: 'q6-5',
        q: 'Idempotent HTTP Method বলতে কী বোঝায়? একটি উদাহরণ দাও।',
        a: 'যে সকল HTTP মেথডকে সার্ভারে একবার বা একই ডেটা দিয়ে শতবার এক্সিকিউট করলেও সার্ভারের অবস্থার কোনো পরিবর্তন বা অতিরিক্ত পার্শ্বপ্রতিক্রিয়া তৈরি হয় না, তাদের Idempotent মেথড বলে। উদাহরণ: GET, PUT, DELETE। (উল্লেখ্য POST মেথড আইডেমপোটেন্ট নয়)।',
        marks: 2
      }
    ],
    broadQuestions: [
      {
        id: 'bq6-1',
        q: 'SQL Injection কী? PHP PDO Prepared Statements কীভাবে এই বিধ্বংসী আক্রমণ প্রতিহত করে কোডসহ ব্যাখ্যা করো।',
        a: 'SQL Injection (SQLi) হলো ওয়েব অ্যাপ্লিকেশনের সবচেয়ে মারাত্মক সাইবার সিকিউরিটি দুর্বলতাগুলোর একটি। এতে আক্রমণকারী কোনো ওয়েব ফর্মের ইনপুট ফিল্ডে (যেমন ইউজারনেম বক্সে) ক্ষতিকর এসকিউএল কোড প্রবেশ করায়। সার্ভার যদি সেই ইনপুট সরাসরি এসকিউএল কুয়েরির সাথে যুক্ত (Concatenate) করে রান করে, তবে হ্যাকার পাসওয়ার্ড ছাড়াই সিস্টেমে অ্যাডমিন হিসেবে লগইন করতে পারে বা পুরো ডেটাবেস মুছে ফেলতে পারে।\n\nPDO Prepared Statements-এর প্রতিরক্ষা মেকানিজম:\nPrepared Statements ব্যবহারে দুটি পৃথক চ্যানেল কার্যকর হয়:\n১) Preparation Phase: প্রথমে এসকিউএল কুয়েরির টেমপ্লেট প্লেসহোল্ডারসহ (যেমন :roll) ডেটাবেস সার্ভারে পাঠানো হয়। ডেটাবেস ইঞ্জিন কুয়েরিটিকে কম্পাইল ও এক্সিকিউশন প্ল্যান তৈরি করে লক করে রাখে।\n২) Execution Phase: পরবর্তীতে ইউজারের প্রদত্ত কাঁচা ইনপুট প্যারামিটার হিসেবে পাঠানো হয়।\n\nডেটাবেস ইঞ্জিন প্রেরিত ইনপুটকে কখনোই এক্সিকিউটেবল কোড হিসেবে বিবেচনা করে না; কেবল সাধারণ টেক্সট লিটারেল হিসেবে বিবেচনা করে। হ্যাকার যদি কোনো ক্ষতিকর কমান্ডও ইনপুট দেয়, ডেটাবেস তা নির্বাহ না করে কেবল সাধারণ স্ট্রিং হিসেবে ম্যাচ করার চেষ্টা করে। ফলে আক্রমণ সম্পূর্ণ ব্যর্থ হয়।',
        marks: 5
      },
      {
        id: 'bq6-2',
        q: 'RESTful API আর্কিটেকচার কী? HTTP Methods (GET, POST, PUT, DELETE) এর সাথে CRUD অপারেশনের ম্যাপিং চিত্রসহ বর্ণনা করো।',
        a: 'REST (Representational State Transfer) হলো ওয়েব সার্ভিস নির্মাণের একটি সার্বজনীন স্থাপত্যরীতি যা ক্লায়েন্ট ও সার্ভারের মধ্যে ডেটা আদান-প্রদানের জন্য স্ট্যান্ডার্ড HTTP প্রটোকলকে ভিত্তি হিসেবে গ্রহণ করে।\n\nCRUD এর সাথে HTTP Verbs-এর সরাসরি ম্যাপিং:\n\n১) Create -> HTTP POST:\nনতুন কোনো রিসোর্স তৈরি করতে ব্যবহৃত হয়। উদাহরণ: POST /api/students (অনুরোধের বডিতে নতুন শিক্ষার্থীর JSON পাঠানো হয় এবং সফল হলে সার্ভার 201 Created কোড রিটার্ন করে)।\n\n২) Read -> HTTP GET:\nসার্ভার থেকে রিসোর্স ফেচ করতে ব্যবহৃত হয়। এটি সম্পূর্ণ Safe ও Idempotent। উদাহরণ: GET /api/students/542101 (রোল ৫৪২১০১ এর তথ্য রিটার্ন করে 200 OK সহ)।\n\n৩) Update -> HTTP PUT / PATCH:\nবিদ্যমান রিসোর্সের সম্পূর্ণ তথ্য প্রতিস্থাপনে PUT এবং নির্দিষ্ট কোনো ফিল্ড আংশিক সংশোধনে PATCH ব্যবহৃত হয়। উদাহরণ: PUT /api/students/542101।\n\n৪) Delete -> HTTP DELETE:\nসার্ভার থেকে নির্দিষ্ট রিসোর্স অপসারন করতে ব্যবহৃত হয়। এটিও Idempotent। উদাহরণ: DELETE /api/students/542101 (মুছে ফেলার পর 200 OK বা 204 No Content প্রদান করে)।',
        marks: 5
      }
    ],
    mcqs: [
      {
        id: 'mcq6-1',
        question: 'নিচের কোন HTTP মেথডটি নন-আইডেমপোটেন্ট (Non-Idempotent)?',
        options: ['GET', 'POST', 'PUT', 'DELETE'],
        correctIndex: 1,
        explanation: 'POST মেথড প্রতিবার কল করলে সার্ভারে একটি নতুন রেকর্ড তৈরি হয়, তাই এটি Non-Idempotent।'
      },
      {
        id: 'mcq6-2',
        question: 'PHP-তে SQL Injection থেকে শতভাগ সুরক্ষা পাওয়ার আধুনিকতম সমাধান কোনটি?',
        options: [
          'addslashes() ফাংশন',
          'mysql_escape_string()',
          'PDO Prepared Statements',
          'md5() হ্যাশিং'
        ],
        correctIndex: 2,
        explanation: 'PDO Prepared Statements কুয়েরি ও ডেটাকে আলাদা চ্যানেলে পাঠিয়ে এসকিউএল ইনজেকশন পুরোপুরি প্রতিহত করে।'
      }
    ]
  }
};
