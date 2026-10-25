export type LangKey = 'py' | 'js' | 'ts' | 'go' | 'rust' | 'sql';
export interface Language { n: string; c: string; f: string; code: string; out: string[]; }
export interface Course { n: string; l: LangKey; lv: 'Beginner' | 'Intermediate'; t: 'Data' | 'Web' | 'Systems'; h: number; ls: number; }
export interface Plan { name: string; m: number; y: number; unit: string; perks: string[]; cta: string; popular?: boolean; }

// [[token|note]] marks a word that shows a tooltip in the code card.
export const LANGS: Record<LangKey, Language> = {
    py: { n: 'Python', c: '#ffcf3f', f: 'hello.py', code: 'name = "Ada"\nfor i in [[range|Counts 0, 1, 2. The number you pass is where it stops, and it is not included.]](3):\n    print([[f"Hello, {name} #{i + 1}"|An f-string puts variables straight into the text.]])', out: ['Hello, Ada #1', 'Hello, Ada #2', 'Hello, Ada #3'] },
    js: { n: 'JavaScript', c: '#ff8a3d', f: 'hello.js', code: 'const name = "Ada";\nfor (let i = 1; i <= 3; i++) {\n  console.log([[`Hello, ${name} #${i}`|Backticks make a template string, so ${…} can hold any value.]]);\n}', out: ['Hello, Ada #1', 'Hello, Ada #2', 'Hello, Ada #3'] },
    ts: { n: 'TypeScript', c: '#5aa9ff', f: 'hello.ts', code: 'const name: [[string|A type annotation. TypeScript checks it before the code runs.]] = "Ada";\nfor (let i = 1; i <= 3; i++) {\n  console.log(`Hello, ${name} #${i}`);\n}', out: ['Hello, Ada #1', 'Hello, Ada #2', 'Hello, Ada #3'] },
    go: { n: 'Go', c: '#3fd6c8', f: 'main.go', code: 'func main() {\n    name [[:=|Declares a variable and sets it in one step. Go infers the type.]] "Ada"\n    for i := 1; i <= 3; i++ {\n        fmt.Printf("Hello, %s #%d\\n", name, i)\n    }\n}', out: ['Hello, Ada #1', 'Hello, Ada #2', 'Hello, Ada #3'] },
    rust: { n: 'Rust', c: '#ff6b57', f: 'main.rs', code: 'fn main() {\n    [[let|Variables are immutable by default. Add mut when a value must change.]] name = "Ada";\n    for i in 1..=3 {\n        println!("Hello, {name} #{i}");\n    }\n}', out: ['Hello, Ada #1', 'Hello, Ada #2', 'Hello, Ada #3'] },
    sql: { n: 'SQL', c: '#b58cff', f: 'progress.sql', code: 'SELECT name, COUNT(*) AS lessons\nFROM progress\nWHERE done = true\n[[GROUP BY|Merges rows that share the same name into one row, so COUNT can add them up.]] name;', out: ['name | lessons', 'Ada  | 3'] }
  };

export const COURSES: Course[] = [
    { n: 'Python from zero', l: 'py', lv: 'Beginner', t: 'Data', h: 18, ls: 24 },
    { n: 'JavaScript for the web', l: 'js', lv: 'Beginner', t: 'Web', h: 24, ls: 30 },
    { n: 'TypeScript in practice', l: 'ts', lv: 'Intermediate', t: 'Web', h: 14, ls: 20 },
    { n: 'Go for backend services', l: 'go', lv: 'Intermediate', t: 'Systems', h: 20, ls: 26 },
    { n: 'Rust fundamentals', l: 'rust', lv: 'Intermediate', t: 'Systems', h: 26, ls: 28 },
    { n: 'SQL for analysis', l: 'sql', lv: 'Beginner', t: 'Data', h: 12, ls: 18 }
  ];

export const CODES: Record<LangKey, string> = { py: 'Py', js: 'JS', ts: 'TS', go: 'Go', rust: 'Rs', sql: 'SQL' };
export const KEYWORDS = /^(const|let|for|in|func|fn|package|print|SELECT|FROM|WHERE|AS|COUNT|true)$/;
export const FILTERS = ['All', 'Beginner', 'Web', 'Data', 'Systems'] as const;

export const PLANS: Plan[] = [
  { name: 'Free', m: 0, y: 0, unit: '', perks: ['First 3 lessons of every course', 'Community forum'], cta: 'Start free' },
  { name: 'Plus', m: 15, y: 12, unit: '/ month', perks: ['All courses and projects', 'Project reviews', 'Completion certificates'], cta: 'Choose Plus', popular: true },
  { name: 'Team', m: 12, y: 10, unit: '/ seat, per month', perks: ['Everything in Plus', 'Progress dashboard', 'Minimum 3 seats'], cta: 'Talk to us' },
];

export const FAQ = [
  { q: 'Do I need any experience?', a: 'No. Python from zero and SQL for analysis start with the very basics, and every lesson is short enough for a coffee break.' },
  { q: 'How long does a course take?', a: 'Between 12 and 26 hours of lessons. At six hours a week, most people finish a course in two to five weeks.' },
  { q: 'Which language should I start with?', a: 'Python or JavaScript for most beginners. Pick Python for data and automation, JavaScript if you want to build websites.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Cancel in two clicks and keep access until the end of the period you paid for.' },
];
