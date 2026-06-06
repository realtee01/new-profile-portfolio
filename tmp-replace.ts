import fs from 'fs';

const replaces = [
  { file: 'src/components/Preloader.tsx', rules: [[/FRONTEND DEVELOPER/g, 'FULL-STACK DEVELOPER']] },
  { file: 'src/components/Experience/Experience.tsx', rules: [
      [/Frontend Engineering Intern/g, 'Full-stack Engineering Intern'],
      [/frontend roadmap/g, 'full-stack roadmap'],
      [/Lead Frontend Engineer/g, 'Lead Full-stack Engineer'],
      [/frontend environment/g, 'full-stack environment'],
      [/Frontend Development Immersive/g, 'Full-stack Development Immersive'],
      [/frontend architectures/g, 'full-stack architectures'],
      [/Frontend Engineer/g, 'Full-stack Engineer'],
  ]},
  { file: 'src/components/Testimonials/Testimonials.tsx', rules: [
      [/complex frontend concepts/g, 'complex full-stack concepts'],
      [/Frontend Lead/g, 'Engineering Lead']
  ]},
  { file: 'src/components/Blog/Blog.tsx', rules: [
      [/frontend engineering/g, 'full-stack engineering']
  ]},
  { file: 'src/components/Blog/blogData.ts', rules: [
      [/frontend/g, 'full-stack'],
      [/Frontend/g, 'Full-stack']
  ]}
];

for (const {file, rules} of replaces) {
  let content = fs.readFileSync(file, 'utf8');
  for (const [regex, replace] of rules) {
    content = content.replace(regex, replace);
  }
  fs.writeFileSync(file, content);
}
