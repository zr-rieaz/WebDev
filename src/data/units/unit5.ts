import { TheoryUnit } from '../../types/curriculum';

export const unit5: TheoryUnit = {
  id: 'theory-5',
  unitNumber: 5,
  title: 'SERVER-SIDE SCRIPTING LANGUAGE (PHP)',
  code: 'UNIT 05',
  creditHours: 'Theory: 1 Period/Week | Credit: 3',
  overviewBengali: 'এই ইউনিটে Server-side Scripting-এর ক্লায়েন্ট-সার্ভার রিকোয়েস্ট লাইফসাইকেল, PHP-এর স্থাপত্য ও Zend Engine, ভেরিয়েবল স্কোপ ও আধুনিক ডেটা টাইপ, অ্যাসোসিয়েটিভ ও মাল্টিডাইমেনশনাল অ্যারে, কন্ট্রোল স্ট্রাকচার ও লুপস, ফাইল ইনক্লুশন (include বনাম require), ইউজার-ডিফাইনড ফাংশন এবং সেশন ও কুকি ব্যবহারের মাধ্যমে স্টেট পারসিস্টেন্স বিশদভাবে আলোচনা করা হয়েছে।',
  subTopics: [
    {
      id: '5.1',
      code: '5.1',
      title: 'Server-side Scripting-এর স্থাপত্য ও ক্লায়েন্ট-সার্ভার রিকোয়েস্ট লাইফসাইকেল',
      englishTitle: 'Server-Side Architecture, Execution Model & Request Lifecycle',
      explanationBengali: 'Server-side Scripting বলতে এমন প্রোগ্রাম কোডকে বোঝায় যা ব্যবহারকারীর ব্রাউজারে নয়, বরং ওয়েব সার্ভার সফটওয়্যারের (Apache, Nginx) ব্যাকএন্ড মডিউলে এক্সিকিউট হয়। ক্লায়েন্ট যখন কোনো `.php` ফাইলের জন্য রিকোয়েস্ট পাঠায়, ওয়েব সার্ভার ফাইলটির সোর্স কোড ক্লায়েন্টকে সরাসরি না পাঠিয়ে PHP ইন্টারপ্রেটারকে (Zend Engine) হস্তান্তর করে। ইন্টারপ্রেটার সমস্ত লজিক ও ডেটাবেস কুয়েরি সম্পাদন করে শুধুমাত্র প্লেইন HTML বা JSON টেক্সট রেসপন্স হিসেবে ক্লায়েন্টে রিটার্ন করে।',
      detailedSections: [
        {
          heading: 'সার্ভার-সাইড স্ক্রিপ্টিংয়ের ৫টি অনন্য সুবিধা',
          contentBengali: 'কেন ক্লায়েন্ট-সাইড থেকে সার্ভার-সাইড আলাদা ও নিরাপদ:',
          keyPoints: [
            '১. Code Privacy & Intellectual Property: সোর্স কোড সার্ভারের ভেতর কম্পাইল হয়, ব্রাউজারের কোনো Inspect Element বা View Source দিয়ে মূল বিজনেস লজিক বা ডেটাবেস পাসওয়ার্ড দেখা অসম্ভব।',
            '২. Direct Database Access: সার্ভার সরাসরি MySQL বা MariaDB ডেটাবেসের সাথে নিরবচ্ছিন্ন ও দ্রুতগতিতে যোগাযোগ করতে পারে।',
            '৩. High Security & Validation: ইউজার ইনপুট ব্রাউজারে জাল করা গেলেও সার্ভার প্রান্তে ফিল্টার ও ভ্যালিডেশন আটকানো যায় না।',
            '৪. Session State Management: একাধিক পৃষ্ঠাজুড়ে ইউজারের লগইন পরিচয় ও কার্ট ডেটা সার্ভারের মেমরিতে সংরক্ষিত থাকে।',
            '৫. Hardware Independence: ক্লায়েন্টের ডিভাইস ধীরগতির হলেও সার্ভার তার নিজস্ব শক্তিশালী সিপিইউ ও র‍্যাম দিয়ে সেকেন্ডের ভগ্নাংশে কাজ শেষ করে কেবল ফলাফল পাঠায়।'
          ]
        }
      ]
    },
    {
      id: '5.2',
      code: '5.2',
      title: 'PHP ভূমিকা, আর্কিটেকচার এবং সার্ভার এনভায়রনমেন্ট (XAMPP/Apache)',
      englishTitle: 'Introduction to PHP 8.x, Zend Engine & Localhost Architecture',
      explanationBengali: 'PHP (যার রিকার্সিভ পূর্ণরূপ: Hypertext Preprocessor) ১৯৯৪ সালে রাসমুস লারডর্ফ (Rasmus Lerdorf) কর্তৃক উদ্ভাবিত হয়। এটি বিশ্বের সর্বাধিক ব্যবহৃত ওপেন সোর্স সার্ভার-সাইড ওয়েব ভাষা। আধুনিক PHP 8.x-এ JIT (Just-In-Time) কম্পাইলার যুক্ত হওয়ায় এর গতি বহুগুণ বৃদ্ধি পেয়েছে।',
      codeSnippets: [
        {
          language: 'php',
          filename: 'php_syntax_core.php',
          explanation: 'PHP বেসিক ট্যাগ ও ডাইনামিক আউটপুট',
          code: `<?php
// Standard PHP Opening Tag
$institute = "Bangladesh Technical Education Board";
$subjectCode = 28544;

echo "<h1>Polytechnic Curriculum: " . htmlspecialchars($institute) . "</h1>";
echo "<p>Subject Code: <strong>{$subjectCode}</strong></p>";
?>`
        }
      ]
    },
    {
      id: '5.3',
      code: '5.3',
      title: 'PHP ভেরিয়েবল, ধ্রুবক (Constants), স্কোপ এবং ডেটা টাইপ',
      englishTitle: 'Variables, Constants, Scope Rules & Type Systems in PHP',
      explanationBengali: 'PHP-তে প্রতিটি ভেরিয়েবল ডলার ($) সাইন দিয়ে শুরু হয় এবং এটি Loosely Typed ল্যাঙ্গুয়েজ। তবে পিএইচপি ৭ ও ৮-এ কঠোর টাইপ ডিক্লারেশন (Strict Types) সমর্থন করে।',
      detailedSections: [
        {
          heading: 'ভেরিয়েবল স্কোপের ৩টি স্তর',
          contentBengali: 'PHP-তে ভেরিয়েবলের দৃশ্যমানতা ও জীবনকাল:',
          keyPoints: [
            'Local Scope: কোনো ফাংশনের ভেতরে ঘোষিত ভেরিয়েবল কেবল সেই ফাংশনের ভেতরেই কাজ করে; ফাংশন শেষ হলে মেমরি থেকে মুছে যায়।',
            'Global Scope: ফাংশনের বাইরে ঘোষিত ভেরিয়েবল। ফাংশনের ভেতর থেকে অ্যাক্সেস করতে হলে `global $var;` অথবা `$GLOBALS[\'var\']` ব্যবহার করতে হয়।',
            'Static Scope: কোনো লোকাল ভেরিয়েবলের আগে `static` কিওয়ার্ড দিলে ফাংশন কল শেষ হলেও ভেরিয়েবলটির মান মুছে না গিয়ে সংরক্ষিত থাকে।'
          ]
        },
        {
          heading: 'ধ্রুবক (Constants) নির্ধারণ: define() বনাম const',
          contentBengali: 'ধ্রুবকের মান স্ক্রিপ্ট চলাকালীন কখনোই পরিবর্তন করা যায় না এবং এতে কোনো ডলার ($) সাইন থাকে না।',
          keyPoints: [
            'define("DB_HOST", "localhost"); // রানটাইমে কার্যকর হয়',
            'const DB_PORT = 3306; // কম্পাইল-টাইমে কার্যকর হয়'
          ]
        }
      ]
    },
    {
      id: '5.4',
      code: '5.4',
      title: 'PHP অ্যারে: Indexed, Associative এবং Multidimensional-এর বিস্তৃত প্রয়োগ',
      englishTitle: 'Deep Dive: Indexed, Associative & Multidimensional Arrays and Functions',
      explanationBengali: 'PHP-তে অ্যারে হলো একটি বহুমুখী ডেটা স্ট্রাকচার যা সংখ্যাসূচক সূচক বা নামযুক্ত কী (Key-Value) জোড়ায় ডেটা সংরক্ষণ করে।',
      comparisonTable: {
        caption: 'PHP-র তিন প্রকার অ্যারের গঠন ও প্রয়োগ',
        headers: ['অ্যারের প্রকার (Type)', 'সূচক পদ্ধতি (Index / Key)', 'সিনট্যাক্স উদাহরণ', 'ব্যবহারিক ক্ষেত্র'],
        rows: [
          ['Indexed Array', 'স্বয়ংক্রিয় সংখ্যাসূচক (০, ১, ২...)', '$colors = ["Red", "Green", "Blue"];', 'সরল তালিকার জন্য'],
          ['Associative Array', 'কাস্টম নেমড স্ট্রিং কী (Key => Value)', '$user = ["name" => "Rahim", "roll" => 101];', 'ইউজার প্রোফাইল বা ডেটাবেস রেকর্ড সংরক্ষণে'],
          ['Multidimensional Array', 'অ্যারের ভেতরে নেস্টেড অ্যারে', '$students = [ ["id" => 1, "name" => "A"], ["id" => 2, "name" => "B"] ];', 'সম্পূর্ণ ডেটাবেস টেবিলের ফলাফল সংরক্ষণে']
        ]
      },
      codeSnippets: [
        {
          language: 'php',
          filename: 'associative_multidim.php',
          explanation: 'অ্যাসোসিয়েটিভ ও মাল্টিডাইমেনশনাল অ্যারে ইটারেশন',
          code: `<?php
// Multidimensional Array of Polytechnic Students
$diplomaStudents = [
  ["roll" => 542101, "name" => "Kawsar Ahmed", "gpa" => 3.85],
  ["roll" => 542102, "name" => "Nusrat Jahan", "gpa" => 3.92],
  ["roll" => 542103, "name" => "Sabbir Hossain", "gpa" => 3.78]
];

// Iterating using foreach loop
echo "<table border='1'><tr><th>Roll</th><th>Name</th><th>GPA</th></tr>";
foreach ($diplomaStudents as $s) {
  echo "<tr>";
  echo "<td>" . $s['roll'] . "</td>";
  echo "<td>" . htmlspecialchars($s['name']) . "</td>";
  echo "<td>" . $s['gpa'] . "</td>";
  echo "</tr>";
}
echo "</table>";
?>`
        }
      ]
    },
    {
      id: '5.5',
      code: '5.5',
      title: 'PHP অপারেটরস: গাণিতিক, তুলনামূলক (== বনাম ===) এবং আধুনিক টার্নারি',
      englishTitle: 'Comprehensive PHP Operators: Loose vs Strict Equality & Null Coalescing',
      explanationBengali: 'PHP-তে এক্সপ্রেশন মূল্যায়নের জন্য বিভিন্ন অপারেটর ব্যবহৃত হয়:',
      detailedSections: [
        {
          heading: 'Loose Equality (==) বনাম Strict Equality (===)',
          contentBengali: 'PHP প্রোগ্রামিংয়ে সবচেয়ে সাধারণ বাগের কারণ হলো টাইপ কোয়ের্সন (Type Coercion):',
          keyPoints: [
            '== (Loose Equality): ডেটা টাইপ রূপান্তর করে কেবল মান পরীক্ষা করে। উদাহরণ: ("5" == 5) ফলাফল দেবে true!',
            '=== (Strict Equality / Identical): মান এবং ডেটা টাইপ উভয়ই সম্পূর্ণ অভিন্ন কিনা তা যাচাই করে। উদাহরণ: ("5" === 5) ফলাফল দেবে false, কারণ একটি String ও অপরটি Integer। ইন্ডাস্ট্রিতে সর্বদা === ব্যবহারের সুপারিশ করা হয়।'
          ]
        },
        {
          heading: 'Null Coalescing Operator (??)',
          contentBengali: 'PHP 7+ এ যুক্ত হওয়া ?? অপারেটর কোনো ভেরিয়েবল সেট আছে কিনা এবং তা null কিনা তা অত্যন্ত সংক্ষেপে পরীক্ষা করে: `$username = $_GET[\'user\'] ?? \'Guest\';`'
        }
      ]
    },
    {
      id: '5.6',
      code: '5.6-5.8',
      title: 'কন্ট্রোল স্ট্রাকচার, লুপস (for, while, foreach), Break ও Continue',
      englishTitle: 'Control Flow, Iterations, Jump Statements and Exception Exits',
      explanationBengali: 'লজিক্যাল সিদ্ধান্ত গ্রহণ ও রিপিটেটিভ কাজ পরিচালনার সিনট্যাক্সসমূহ:',
      bulletPoints: [
        { title: 'Decision Structures', text: 'if, if-else, if-elseif-else, switch-case, এবং match expression (PHP 8)।' },
        { title: 'Loops', text: 'for (নির্দিষ্ট সংখ্যায়), while (শর্তাধীন), do-while (শর্ত যাই হোক কমপক্ষে একবার রান করে), foreach (অ্যারে ট্রাভার্সিংয়ে সবচেয়ে দ্রুত ও নিরাপদ)।' },
        { title: 'Jump Statements', text: 'break (লুপ থেকে তাৎক্ষণিক প্রস্থান), continue (বর্তমান চক্র বাদ দিয়ে পরবর্তী চক্রে গমন), exit() / die() (স্ক্রিপ্ট বন্ধ করা)।' }
      ]
    },
    {
      id: '5.9',
      code: '5.9',
      title: 'ফাইল ইনক্লুশন: include, require, include_once ও require_once-এর গভীর পার্থক্য',
      englishTitle: 'File Inclusion Architecture: include vs require & Fatal Errors',
      explanationBengali: 'কোড পুনর্ব্যবহার ও মডুলার আর্কিটেকচার নিশ্চিত করতে ফাইল ইনক্লুশন অপরিহার্য।',
      comparisonTable: {
        caption: 'include বনাম require-এর এরর হ্যান্ডলিং ও আচরণ',
        headers: ['ফাংশন (Construct)', 'ফাইল না পেলে এরর ধরন', 'স্ক্রিপ্ট এক্সিকিউশন স্ট্যাটাস', 'ব্যবহারের উপযুক্ত ক্ষেত্র'],
        rows: [
          ['include', 'E_WARNING উৎপন্ন করে', 'চলমান থাকে (পরবর্তী কোড রান হয়)', 'ঐচ্ছিক উইজেট, সাইডবার, ব্যানার'],
          ['require', 'E_COMPILE_ERROR (Fatal Error)', 'তৎক্ষণাৎ বন্ধ হয়ে যায়', 'ডেটাবেস কানেকশন, অথেনটিকেশন কনফিগ'],
          ['include_once', 'E_WARNING', 'চলমান থাকে (পূর্বে লোড হলে বাদ দেয়)', 'ফাংশন ও ক্লাস হেল্পার ফাইল'],
          ['require_once', 'E_COMPILE_ERROR (Fatal Error)', 'তৎক্ষণাৎ বন্ধ (পূর্বে লোড হলে বাদ দেয়)', 'ক্লাউড কনফিগ, কোর লাইব্রেরি, রাউটার']
        ]
      }
    },
    {
      id: '5.10',
      code: '5.10',
      title: 'PHP ইউজার-ডিফাইনড ফাংশন, প্যারামিটার পাসিং ও রিটার্ন টাইপস',
      englishTitle: 'User-Defined Functions, Pass-by-Reference & Return Type Declarations',
      explanationBengali: 'ফাংশন হলো নির্দেশনার সুসংজ্ঞায়িত ব্লক যা ইনপুট গ্রহণ করে নির্দিষ্ট কাজ সম্পাদন করে আউটপুট প্রদান করে।',
      codeSnippets: [
        {
          language: 'php',
          filename: 'typed_functions.php',
          explanation: 'PHP 8 টাইপ হিন্টিং ও রেফারেন্স পাসিং',
          code: `<?php
declare(strict_types=1);

// Strictly Typed Function with Return Type
function calculateExamGpa(float $theoryMarks, float $practicalMarks): float {
  $total = $theoryMarks + $practicalMarks;
  return round($total / 50.0, 2);
}

// Pass-by-Reference (& operator)
function applyGraceMarks(int &$marks, int $grace): void {
  $marks += $grace; // Direct memory manipulation
}

$myMarks = 38;
applyGraceMarks($myMarks, 2);
echo "Updated Marks: " . $myMarks; // Output: 40
?>`
        }
      ]
    },
    {
      id: '5.11',
      code: '5.11',
      title: 'স্টেট পারসিস্টেন্স: কুকিজ এবং সেশনের ক্লায়েন্ট-সার্ভার মেকানিজম',
      englishTitle: 'Deep Dive: State Persistence via Cookies & PHP Sessions',
      explanationBengali: 'যেহেতু HTTP একটি স্টেটলেস প্রটোকল, তাই ইউজারের লগইন পরিচয়, শপিং কার্ট এবং ব্যক্তিগত পছন্দ ধরে রাখার জন্য কুকি ও সেশন ব্যবহৃত হয়।',
      comparisonTable: {
        caption: 'Cookie বনাম Session-এর স্থাপত্যগত পার্থক্য',
        headers: ['বৈশিষ্ট্য (Parameter)', 'Cookie (setcookie())', 'Session (session_start())'],
        rows: [
          ['সংরক্ষণ অবস্থান', 'ব্যবহারকারীর ক্লায়েন্ট ব্রাউজারে সংরক্ষিত টেক্সট ফাইল', 'ওয়েব সার্ভারের সুরক্ষিত মেমরি বা ফাইলে সংরক্ষিত'],
          ['সর্বোচ্চ ডেটা সাইজ', 'সীমিত (সাধারণত সর্বোচ্চ ৪ কিলোবাইট প্রতি ডোমেনে)', 'অসীম (সার্ভারের মেমরি ও ডিস্ক স্পেসের ওপর নির্ভরশীল)'],
          ['নিরাপত্তা মাত্রা', 'কম নিরাপদ (ইউজার নিজে ব্রাউজার থেকে দেখতে ও এডিট করতে পারে)', 'অত্যন্ত নিরাপদ (ক্লায়েন্ট কেবল একটি র্যান্ডম সেশন আইডি জানে)'],
          ['মেয়াদ (Expiration)', 'ম্যানুয়ালি সময় নির্ধারণ করা যায় (যেমন ৩০ দিন বা ১ বছর)', 'ব্রাউজার বন্ধ করলে অথবা session_destroy() দিলে মুছে যায়'],
          ['উপযুক্ত ব্যবহার', 'Remember Me টোকেন, থিম পছন্দ (Dark/Light mode)', 'লগইন অথেনটিকেশন ক্রেডেনশিয়াল, শপিং কার্ট, ওটিপি']
        ]
      },
      codeSnippets: [
        {
          language: 'php',
          filename: 'secure_auth_flow.php',
          explanation: 'নিরাপদ সেশন হ্যান্ডলিং ও সেশন হাইজ্যাকিং প্রতিরোধ',
          code: `<?php
// Must be called before ANY html output or whitespace
session_start([
  'cookie_httponly' => true, // Prevents JavaScript XSS cookie theft
  'cookie_secure'   => true, // Transmits cookie only via HTTPS
  'cookie_samesite' => 'Strict' // Protects against CSRF attacks
]);

// 1. Authenticate user
$_SESSION['user_id'] = 28544;
$_SESSION['role'] = 'DiplomaStudent';

// 2. Prevent Session Fixation attacks by regenerating session ID
session_regenerate_id(true);

// 3. Logout action
function secureLogout() {
  $_SESSION = [];
  if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
      $params["path"], $params["domain"],
      $params["secure"], $params["httponly"]
    );
  }
  session_destroy();
}
?>`
        }
      ]
    }
  ],
  selfAssessment: {
    shortQuestions: [
      {
        id: 'q5-1',
        q: 'PHP-তে `include` এবং `require`-এর মূল পার্থক্য কী?',
        a: 'include ফাইল খুঁজে না পেলে একটি Warning (E_WARNING) দিয়ে স্ক্রিপ্টের পরবর্তী কোড চালু রাখে; পক্ষান্তরে require ফাইল খুঁজে না পেলে Fatal Error (E_COMPILE_ERROR) দিয়ে তৎক্ষণাৎ পুরো স্ক্রিপ্ট বন্ধ করে দেয়।',
        marks: 2
      },
      {
        id: 'q5-2',
        q: 'Cookie এবং Session এর প্রধান তিনটি পার্থক্য লেখো।',
        a: '১) Cookie ক্লায়েন্ট ব্রাউজারে সংরক্ষিত থাকে, Session সার্ভারের ফাইলে সংরক্ষিত থাকে; ২) Cookie-র ডেটা সীমা ৪ KB, Session-এ ডেটা সীমা সার্ভারের ডিস্কের সমান; ৩) Cookie ক্লায়েন্ট দেখতে ও পরিবর্তন করতে পারে তাই কম নিরাপদ, Session সার্ভারে থাকায় অত্যন্ত নিরাপদ।',
        marks: 2
      },
      {
        id: 'q5-3',
        q: 'PHP-তে `==` এবং `===` এর মধ্যে পার্থক্য কী?',
        a: '`==` (Loose Equality) কেবল মান তুলনা করে এবং প্রয়োজনে স্বয়ংক্রিয়ভাবে ডেটা টাইপ রূপান্তর করে; অন্যদিকে `===` (Strict Equality) মান এবং ডেটা টাইপ উভয়ই কঠোরভাবে সমান কিনা তা পরীক্ষা করে।',
        marks: 2
      },
      {
        id: 'q5-4',
        q: 'PHP এর রিকার্সিভ পূর্ণরূপ কী?',
        a: 'PHP এর রিকার্সিভ পূর্ণরূপ হলো "PHP: Hypertext Preprocessor" (পূর্বে Personal Home Page)।',
        marks: 2
      },
      {
        id: 'q5-5',
        q: 'session_start() ফাংশনটি স্ক্রিপ্টের কোথায় কল করতে হয় এবং কেন?',
        a: 'session_start() ফাংশনটি ফাইলের একদম শীর্ষে যেকোনো HTML ট্যাগ বা খালি স্পেসের আউটপুট হওয়ার পূর্বে কল করতে হয়; অন্যথায় "Headers already sent" ওয়ার্নিং উৎপন্ন হয় এবং সেশন কুকি পাঠানো ব্যর্থ হয়।',
        marks: 2
      }
    ],
    broadQuestions: [
      {
        id: 'bq5-1',
        q: 'PHP সেশন ব্যবহারের মাধ্যমে একটি নিরাপদ ইউজার অথেনটিকেশন (Login ও Logout) সিস্টেমের আর্কিটেকচার কোডসহ ব্যাখ্যা করো।',
        a: 'নিরাপদ ইউজার অথেনটিকেশন আর্কিটেকচারের তিনটি মূল অংশ থাকে:\n\n১) লগইন যাচাইকরণ (login.php):\nইউজারের ইনপুট (ইমেইল ও পাসওয়ার্ড) গ্রহণ করে ফিল্টার করার পর ডেটাবেসের হ্যাশড পাসওয়ার্ডের সাথে `password_verify()` দিয়ে মেলানো হয়। সফল হলে `session_start()` কল করে `$_SESSION["user_id"]` এবং `$_SESSION["logged_in_time"]` সেট করা হয়। এরপর `session_regenerate_id(true)` কল করে পুরানো সেশন আইডি পরিবর্তন করে নতুন আইডি দেওয়া হয়, যা Session Fixation আক্রমণ প্রতিহত করে।\n\n২) সুরক্ষিত ড্যাশবোর্ড গার্ড (dashboard.php):\nসুরক্ষিত পৃষ্ঠার শীর্ষে সেশন চালু করে চেক করা হয়:\nif (!isset($_SESSION["user_id"])) {\n  header("Location: login.php");\n  exit();\n}\nএটি অননুমোদিত ইউজারদের ড্যাশবোর্ডে প্রবেশ আটকে দেয়।\n\n৩) নিরাপদ লগআউট প্রক্রিয়া (logout.php):\nসেশন খালি করতে `$_SESSION = []`, সেশন কুকি মেয়াদোত্তীর্ণ করতে `setcookie()` এবং পরিশেষে `session_destroy()` কল করে সার্ভারের মেমরি থেকে সেশন ফাইলটি সম্পূর্ণ মুছে ফেলা হয়।',
        marks: 5
      },
      {
        id: 'bq5-2',
        q: 'PHP অ্যারে কী? Indexed, Associative এবং Multidimensional অ্যারের বৈশিষ্ট্য উদাহরণসহ বিস্তারিত আলোচনা করো।',
        a: 'PHP-তে অ্যারে হলো একটি বিশেষ ভেরিয়েবল যা একক নামে একাধিক মান ধারণ করতে পারে। এটি তিন প্রকারে বিভক্ত:\n\n১) Indexed Array:\nএতে সূচকগুলো স্বয়ংক্রিয়ভাবে সংখ্যাসূচক হয় এবং শূন্য (০) থেকে শুরু হয়।\nউদাহরণ:\n$courses = ["WebDev", "Database", "Networking"];\necho $courses[0]; // Output: WebDev\n\n২) Associative Array:\nএতে সংখ্যার পরিবর্তে নামযুক্ত স্ট্রিং কী (Named Keys) ব্যবহার করা হয়।\nউদাহরণ:\n$student = ["name" => "Tanvir", "roll" => 542101, "dept" => "CST"];\necho $student["name"]; // Output: Tanvir\n\n৩) Multidimensional Array:\nযখন একটি অ্যারের ভেতরের উপাদান হিসেবে আরও এক বা একাধিক অ্যারে সন্নিবেশিত থাকে, তখন তাকে বহুমাত্রিক অ্যারে বলে। ডেটাবেস টেবিলের রো ও কলাম সংরক্ষণে এটি আদর্শ।\nউদাহরণ:\n$btebRecords = [\n  ["roll" => 101, "name" => "Sabbir"],\n  ["roll" => 102, "name" => "Jannat"]\n];\necho $btebRecords[1]["name"]; // Output: Jannat\n\nঅ্যারে পরিদর্শনের জন্য `foreach ($array as $key => $value)` লুপ সর্বাধিক কার্যকর ও নিরাপদ।',
        marks: 5
      }
    ],
    mcqs: [
      {
        id: 'mcq5-1',
        question: 'ফাইল খুঁজে না পেলে নিচের কোনটি Fatal Error তৈরি করে স্ক্রিপ্ট বন্ধ করে দেয়?',
        options: ['include', 'require', 'include_path', 'import'],
        correctIndex: 1,
        explanation: '`require` ফাইল খুঁজে না পেলে Fatal Error দিয়ে তৎক্ষণাৎ পুরো স্ক্রিপ্ট এক্সিকিউশন বন্ধ করে দেয়।'
      },
      {
        id: 'mcq5-2',
        question: 'PHP-তে ("10" === 10) এক্সপ্রেশনের ফলাফল কী হবে?',
        options: ['true', 'false', 'null', 'TypeError'],
        correctIndex: 1,
        explanation: '`===` মান এবং ডেটা টাইপ উভয়ই চেক করে। এখানে প্রথমটি String এবং দ্বিতীয়টি Integer, তাই ফলাফল `false`।'
      }
    ]
  }
};
