export type TrackType = 'theory' | 'practical';

export interface CodeSnippet {
  language: 'html' | 'css' | 'javascript' | 'php' | 'sql' | 'bash' | 'json';
  filename?: string;
  code: string;
  explanation?: string;
  runnable?: boolean;
}

export interface DetailedSection {
  heading: string;
  contentBengali: string;
  codeSnippet?: CodeSnippet;
  keyPoints?: string[];
}

export interface ComparisonTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface RealWorldCaseStudy {
  title: string;
  scenarioBengali: string;
  solutionBengali: string;
}

export interface SubTopic {
  id: string;
  code: string; // e.g. "1.1"
  title: string;
  englishTitle: string;
  explanationBengali: string;
  detailedSections?: DetailedSection[];
  comparisonTable?: ComparisonTable;
  realWorldCaseStudy?: RealWorldCaseStudy;
  bulletPoints?: Array<{ title: string; text: string }>;
  codeSnippets?: CodeSnippet[];
  w3cStandards?: string[];
  keyTakeaways?: string[];
}

export interface MCQQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SelfAssessmentQA {
  id: string;
  q: string;
  a: string;
  marks?: number;
}

export interface SelfAssessment {
  shortQuestions: SelfAssessmentQA[];
  broadQuestions: SelfAssessmentQA[];
  mcqs: MCQQuestion[];
}

export interface TheoryUnit {
  id: string;
  unitNumber: number;
  title: string;
  code: string;
  creditHours: string;
  overviewBengali: string;
  subTopics: SubTopic[];
  selfAssessment: SelfAssessment;
}

export interface PracticalStep {
  stepNumber: number;
  title: string;
  instructionsBengali: string;
  codeSnippet?: CodeSnippet;
}

export interface PracticalExperiment {
  id: string;
  expNumber: number;
  title: string;
  code: string;
  periodHours: string;
  objectives: string[];
  oshStandards: Array<{ rule: string; explanationBengali: string }>;
  toolsAndSoftware: Array<{ name: string; role: string }>;
  projectStructure: string;
  stepByStepSteps: PracticalStep[];
  completeSourceFiles: CodeSnippet[];
  expectedOutput: {
    previewType: 'browser' | 'terminal' | 'flow';
    uiLayoutDescription: string;
    terminalLogs?: string;
    mockDisplayData?: Record<string, unknown>;
  };
  debuggingChecklist: Array<{ errorTitle: string; causeBengali: string; fixBengali: string }>;
}
