import React from "react";
import "./Projects.scss";

const PROJECTS = [
  {
    title: "DiskPilot",
    description:
      "Free, open-source disk space analyzer. Scans your entire drive in seconds, shows interactive treemap visualizations, and lets you delete large files instantly. Built with Electron for Mac, Windows & Linux.",
    tags: ["Electron", "React", "Node.js", "Cross-Platform"],
    liveUrl: "https://mhkasif.github.io/DiskPilot/",
    githubUrl: "https://github.com/mhkasif/DiskPilot",
    features: [
      "Interactive Treemap Visualization",
      "Lightning-Fast Scanning",
      "Multi-Selection & Bulk Delete",
      "Dark & Light Mode",
    ],
  },
  {
    title: "Tajeer Plus",
    description:
      "Cloud-based SaaS platform that automates car rental operations in Saudi Arabia. Provides fleet management, electronic contracts, and instant integration with government services (Absher, Tamm, Nafath, ZATCA) for full compliance.",
    tags: ["React", "Next.js", "SaaS", "Cloud Platform"],
    liveUrl: "https://tajeer-plus-web.vercel.app/",
    features: [
      "Instant Government Integration",
      "Fleet Management System",
      "Electronic Contracts",
      "ZATCA Compliance & Invoicing",
    ],
  },
  {
    title: "Know.careers",
    description:
      "Virtual career fair platform connecting 275+ colleges and universities with employers. Led the complete transformation from Angular to React, modernizing the entire frontend architecture for improved performance, scalability, and developer experience.",
    tags: ["React", "Angular Migration", "Virtual Events", "EdTech"],
    liveUrl: "https://know.careers",
    features: [
      "Virtual Career Fairs",
      "Student Portfolio Showcase",
      "Targeted Employer Outreach",
      "Angular to React Migration",
    ],
  },
];

const Projects = () => {
  return (
    <div className="projects-section" data-depth="10">
      <div className="projects-heading exp-heading">Projects</div>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-card-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live
                </a>
                {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                )}
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-features">
              {project.features.map((feature) => (
                <div className="feature-item" key={feature}>
                  <span className="feature-dot">●</span>
                  {feature}
                </div>
              ))}
            </div>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
