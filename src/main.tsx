import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";
import "./styles.css";

type SkillGroup = {
  title: string;
  icon: typeof Code2;
  items: string[];
};

type Project = {
  name: string;
  description: string;
  stack: string[];
  link: string;
  focus: string;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  client?: string;
  points: string[];
};

const contact = {
  email: "simjbnathan@gmail.com",
  linkedin: "https://www.linkedin.com/in/jonathanbless-zerda",
  github: "https://github.com/simjbnathan",
  avatar: "https://avatars.githubusercontent.com/u/55340453?v=4",
};

const skillGroups: SkillGroup[] = [
  {
    title: "Backend & APIs",
    icon: ServerCog,
    items: [".NET Core", "ASP.NET Web API", "C#", "REST", "OAuth 2.0", "JWT"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["SQL Server", "Stored Procedures", "Performance Tuning", "ETL", "SSIS", "SSRS"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["Azure DevOps", "App Services", "App Insights", "CI/CD", "IIS", "PowerShell"],
  },
  {
    title: "Frontend",
    icon: Layers3,
    items: ["Angular", "React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Tools & Delivery",
    icon: TerminalSquare,
    items: ["Git", "TFS", "Postman", "Jira", "Liquibase", "Root Cause Analysis"],
  },
];

const projects: Project[] = [
  {
    name: "ProcurePayERP",
    description:
      "Enterprise-style Purchase-to-Pay learning application planned around vendor management, purchase orders, goods receipts, AP vouchers, payments, audit logs, and cloud-ready deployment.",
    stack: ["React", "TypeScript", "ASP.NET Core", "SQL Server", "Clean Architecture"],
    link: "https://github.com/simjbnathan/ProcurePayERP",
    focus: "ERP workflow design",
  },
  {
    name: "MinimalCatalogApi",
    description:
      "Item catalogue SPA with Angular frontend and .NET Core API backend, including CRUD endpoints and API-key authentication behavior.",
    stack: ["Angular", ".NET Core API", "CRUD", "API Auth"],
    link: "https://github.com/simjbnathan/MinimalCatalogApi",
    focus: "Full stack catalogue",
  },
  {
    name: "LoanApplication",
    description:
      "Loan quote and application flow using an API-driven request process, repayment calculation, validation, and secure application data handling.",
    stack: [".NET", "Web App", "API Flow", "Validation"],
    link: "https://github.com/simjbnathan/LoanApplication",
    focus: "Financial workflow",
  },
  {
    name: "CustomerApi-and-UI",
    description:
      "Customer API and UI project used as a practical full stack implementation reference, presented conservatively from public repository metadata.",
    stack: ["API", "UI", "Full Stack"],
    link: "https://github.com/simjbnathan/CustomerApi-and-UI",
    focus: "Customer data app",
  },
  {
    name: "MedMinder",
    description:
      "Healthcare-themed exercise project that complements Jonathan's experience supporting healthcare application services and backend utilities.",
    stack: ["Healthcare", "Exercise", "Application"],
    link: "https://github.com/simjbnathan/MedMinder",
    focus: "Healthcare practice",
  },
];

const experiences: Experience[] = [
  {
    role: "Fullstack Developer",
    company: "iRely Inc",
    period: "2024 - Present",
    points: [
      "Delivered ERP features and fixes focused on production stability.",
      "Led root cause analysis for complex financial issues.",
      "Optimized SQL queries and stored procedures for performance.",
    ],
  },
  {
    role: "Senior Application Development / Software Engineering Analyst",
    company: "Accenture",
    period: "Oct 2022 - Feb 2024",
    client: "AXA, Insurance",
    points: [
      "Implemented enterprise insurance enhancements from user stories.",
      "Created technical documentation and deployment guides.",
      "Contributed SQL scripting standards and team development practices.",
    ],
  },
  {
    role: "Senior Software Engineer / API Specialist",
    company: "Accenture",
    period: "Oct 2021 - Oct 2022",
    client: "Centene, Healthcare",
    points: [
      "Built and maintained .NET Web APIs for healthcare application services.",
      "Implemented validation processes and automated service monitoring.",
      "Designed backend utilities and reporting scripts for operations.",
    ],
  },
  {
    role: "API & Integration Engineer",
    company: "Accenture",
    period: "Jan 2021 - Oct 2022",
    client: "Lumen, Telecommunications",
    points: [
      "Integrated SQL stored procedures into API services for data processing.",
      "Led Informatica Cloud API integration for enterprise data workflows.",
      "Built proof-of-concept solutions and shared technical guidance.",
    ],
  },
  {
    role: "Full Stack Developer / Dev Lead",
    company: "Accenture",
    period: "Sept 2019 - Jan 2021",
    client: "ATCP PH, Security Architecture",
    points: [
      "Led .NET and Angular enterprise web application delivery.",
      "Implemented OneDrive synchronization using Microsoft APIs.",
      "Supported CI/CD pipeline implementation with Azure DevOps.",
    ],
  },
  {
    role: "Software Engineer Analyst / DevOps Support",
    company: "Accenture",
    period: "Apr 2014 - Sept 2019",
    client: "CIO PH and Security Architecture PH",
    points: [
      "Developed ASP.NET MVC applications for enterprise employee services.",
      "Built SQL stored procedures, SSRS reports, and SSIS automation.",
      "Supported OAuth, OpenID Connect, Azure App Services, and production operations.",
    ],
  },
];

const stats = [
  { value: "11+", label: "years building enterprise systems" },
  { value: ".NET/API", label: "backend services and integrations" },
  { value: "Azure", label: "DevOps, App Services, monitoring" },
  { value: "SQL", label: "stored procedures and optimization" },
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jonathan Bless Lopez Zerda home">
          <span>JZ</span>
          <strong>Jonathan Zerda</strong>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <BadgeCheck aria-hidden="true" size={18} />
            Senior Full Stack .NET Developer
          </p>
          <h1>Jonathan Bless Lopez Zerda</h1>
          <p className="lead">
            I design, build, and support enterprise applications across APIs, SQL-heavy systems,
            cloud operations, and practical frontend delivery.
          </p>
          <div className="hero-actions" aria-label="Contact actions">
            <a className="button primary" href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" size={18} />
              Email
            </a>
            <a className="button" href={contact.linkedin} target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" size={18} />
              LinkedIn
            </a>
            <a className="button icon-button" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github aria-hidden="true" size={19} />
            </a>
          </div>
        </div>

        <aside className="profile-panel" aria-label="Professional highlights">
          <img src={contact.avatar} alt="Jonathan Bless Lopez Zerda GitHub avatar" />
          <div>
            <p>Target Role</p>
            <strong>Senior .NET Backend / Full Stack Engineer</strong>
          </div>
          <div className="panel-focus">
            <span>API & Cloud Systems</span>
            <span>SQL Performance</span>
            <span>Enterprise Integration</span>
          </div>
        </aside>
      </section>

      <section className="stats-band" aria-label="Professional credibility">
        {stats.map((stat) => (
          <div key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section summary-section" aria-labelledby="summary-heading">
        <div className="section-heading">
          <p className="eyebrow">
            <BriefcaseBusiness aria-hidden="true" size={18} />
            Profile
          </p>
          <h2 id="summary-heading">Enterprise delivery with full stack range.</h2>
        </div>
        <p>
          Senior Full Stack .NET Developer with 11+ years of experience in enterprise application
          development, API integration, and database systems. Strong background in scalable backend
          services, SQL optimization, and production support across healthcare, insurance, telecom,
          financial, and ERP domains, with hands-on exposure to Azure services, CI/CD pipelines, and
          cross-functional delivery.
        </p>
      </section>

      <section className="section" id="skills" aria-labelledby="skills-heading">
        <div className="section-heading">
          <p className="eyebrow">
            <Code2 aria-hidden="true" size={18} />
            Skills
          </p>
          <h2 id="skills-heading">Technical strengths grouped for delivery.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-card" key={group.title}>
                <div className="card-title">
                  <Icon aria-hidden="true" size={22} />
                  <h3>{group.title}</h3>
                </div>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section projects-section" id="projects" aria-labelledby="projects-heading">
        <div className="section-heading">
          <p className="eyebrow">
            <Github aria-hidden="true" size={18} />
            GitHub Projects
          </p>
          <h2 id="projects-heading">Selected work with practical full stack signals.</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline">
                <span>{project.focus}</span>
                <a href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.name} repository`}>
                  <ExternalLink aria-hidden="true" size={18} />
                </a>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-list compact">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-heading">
        <div className="section-heading">
          <p className="eyebrow">
            <CalendarDays aria-hidden="true" size={18} />
            Experience
          </p>
          <h2 id="experience-heading">A timeline of enterprise systems work.</h2>
        </div>
        <div className="timeline">
          {experiences.map((job) => (
            <article className="timeline-item" key={`${job.company}-${job.role}-${job.period}`}>
              <div className="timeline-meta">
                <span>{job.period}</span>
                <strong>{job.company}</strong>
                {job.client && <em>{job.client}</em>}
              </div>
              <div className="timeline-content">
                <h3>{job.role}</h3>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section credentials-section" aria-labelledby="credentials-heading">
        <div className="section-heading">
          <p className="eyebrow">
            <ShieldCheck aria-hidden="true" size={18} />
            Credentials
          </p>
          <h2 id="credentials-heading">Education and certifications.</h2>
        </div>
        <div className="credential-grid">
          <article>
            <GraduationCap aria-hidden="true" size={24} />
            <h3>Bachelor of Science in Information Technology</h3>
            <p>STI College Surigao, 2009 - 2013</p>
          </article>
          <article>
            <Cloud aria-hidden="true" size={24} />
            <h3>Microsoft Azure Fundamentals</h3>
            <p>AZ-900 certification</p>
          </article>
          <article>
            <Building2 aria-hidden="true" size={24} />
            <h3>SAP Industrialized Training</h3>
            <p>Sales and Distribution</p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <div>
          <p className="eyebrow">
            <Mail aria-hidden="true" size={18} />
            Contact
          </p>
          <h2 id="contact-heading">Available for senior .NET, API, cloud, and full stack roles.</h2>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${contact.email}`}>
            <Mail aria-hidden="true" size={18} />
            {contact.email}
          </a>
          <a className="button" href={contact.linkedin} target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" size={18} />
            LinkedIn
          </a>
          <a className="button" href={contact.github} target="_blank" rel="noreferrer">
            <Github aria-hidden="true" size={18} />
            GitHub
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
