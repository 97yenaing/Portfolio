export const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Credentials', path: '/credentials' },
  { label: 'Contact', path: '/contact' },
]

export const stats = [
  ['03+', 'Years building'], ['05', 'Core products'], ['02', 'Primary stacks'], ['360°', 'SDLC ownership'],
]

export const skills = [
  { category: 'Backend', level: 90, items: ['C# / .NET', 'EF Core', 'PHP / Laravel', 'Go', 'Java', 'REST APIs', 'Swagger / OpenAPI'] },
  { category: 'Frontend', level: 76, items: ['JavaScript', 'HTML & CSS', 'jQuery', 'Bootstrap', 'Razor'] },
  { category: 'Database', level: 88, items: ['SQL Server 2019', 'MySQL', 'Relational design', 'Data validation', 'Excel pipelines'] },
  { category: 'Cloud & platform', level: 77, items: ['Linux Ubuntu', 'Docker', 'LAMP stack', 'Deployment', 'Production support'] },
  { category: 'Tools', level: 84, items: ['Git', 'Postman', 'OpenAPI', 'Debugging', 'Testing', 'Migrations'] },
  { category: 'Ways of working', level: 89, items: ['Ownership', 'Problem solving', 'Stakeholder collaboration', 'Data quality', 'Continuous learning'] },
]

export const experiences = [
  {
    role: 'Backend Developer', company: 'BIM Myanmar', date: 'Sep 2024 — Present', current: true,
    intro: 'Developing and maintaining backend services for enterprise products using .NET and Entity Framework Core.',
    bullets: ['Design and maintain RESTful APIs, DTO mapping flows, validation rules, and database migrations.', 'Model complex entity relationships for ticketing, hospital, and content-management workflows.', 'Contribute across debugging, testing, performance optimization, and deployment throughout the SDLC.'],
  },
  {
    role: 'Software Engineer', company: 'Medical Action Myanmar', date: 'Feb 2023 — Sep 2024',
    intro: 'Delivered a full-stack patient reporting platform and supported high-volume data workflows on Linux infrastructure.',
    bullets: ['Built frontend and backend features with PHP, Laravel, JavaScript, jQuery, and Bootstrap.', 'Owned data validation, reporting logic, and secure database operations for sensitive patient records.', 'Improved performance, resolved production issues, handled deployments, and iterated with stakeholders.'],
  },
  {
    role: 'Software Developer Trainee', company: 'BIB Co., Ltd', date: 'May 2022 — Aug 2022',
    intro: 'Contributed to product and marketing web experiences during structured on-the-job training.',
    bullets: ['Built JobHub features with Java, Spring MVC, Spring Security, MySQL, and Bootstrap.', 'Implemented search, secure uploads, and role-based access for job seekers, companies, and administrators.', 'Delivered a responsive cosmetics web page with HTML, CSS, and jQuery.'],
  },
]

export const projects = [
  { number: '01', title: 'Ticket Announce Management', type: 'Enterprise platform', description: 'Secure backend modules for ticket processing and announcement management, designed around maintainable APIs and dependable data integrity.', tech: ['.NET', 'EF Core', 'REST APIs', 'DTO Mapping'], accent: 'from-emerald-400/30 to-cyan-400/5' },
  { number: '02', title: 'Hospital Management System', type: 'Healthcare operations', description: 'Backend capabilities for patient management, medical records, billing, and reporting across complex relational entities.', tech: ['.NET', 'SQL Server', 'Reporting', 'Optimization'], accent: 'from-lime-300/30 to-emerald-400/5' },
  { number: '03', title: 'Headless CMS Website', type: 'Content platform', description: 'Content-driven full-stack features supporting administration, publishing workflows, and reliable product maintenance.', tech: ['Laravel', 'PHP', 'Admin workflows', 'Full stack'], accent: 'from-cyan-400/30 to-blue-500/5' },
  { number: '04', title: 'Patient Reporting System', type: 'Data-intensive healthcare', description: 'A comprehensive reporting platform with secure validation, large-dataset handling, Excel workflows, and production support.', tech: ['Laravel', 'MySQL', 'Linux', 'Data validation'], accent: 'from-emerald-300/30 to-lime-400/5' },
  { number: '05', title: 'JobHub', type: 'Job marketplace', description: 'Search-driven marketplace features with secure company uploads and role-based administration for three user types.', tech: ['Java', 'Spring MVC', 'MySQL', 'Spring Security'], accent: 'from-blue-400/30 to-emerald-400/5' },
]

export const recommendations = [
  { title: 'Multi-tenant SaaS API', text: 'Build a production-grade .NET API with tenant isolation, RBAC, audit logs, background jobs, tests, and Docker deployment.' },
  { title: 'Healthcare analytics dashboard', text: 'Create an anonymized Laravel reporting product with large CSV imports, queued processing, validation, and visual insights.' },
  { title: 'Go integration service', text: 'Demonstrate Go depth with a documented microservice, retries, idempotency, observability, and CI/CD.' },
]
