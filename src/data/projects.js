import andRealEstate from "../assets/projects/and-real-estate.png";
import personalAIEngineer from "../assets/projects/personal-ai-engineer.png";
import mlTimeSeriesImage from "../assets/projects/ml-time-series-ranking-engine.png";
import projectGuardian from "../assets/projects/project-guardian.png";

export const projects = [
  {
    id: 1,
    title: "Project Guardian",
    image: projectGuardian,
    status: "COMPLETE",
    featured: true,
    description:
      "A modular Python static analysis engine that audits code quality, dependency constraints, security risks, and machine-learning architecture patterns.",
    tech: ["Python", "AST", "Pytest", "GitHub Actions"],
    github: "https://github.com/jorige3/project_guardian",
    demo: "",
  },

  {
    id: 2,
    title: "AND Real Estate",
    image: andRealEstate,
    status: "LIVE",
    featured: false,
    description:
      "A modern full-stack real estate platform with property listings, admin dashboard, image uploads, and lead management.",
    tech: ["React", "Tailwind", "FastAPI", "PostgreSQL"],
    github: "https://github.com/jorige3/and-real-estate",
    demo: "https://and-real-estates.onrender.com/",
  },

  {
    id: 3,
    title: "Personal AI Engineer",
    image: personalAIEngineer,
    status: "ACTIVE",
    featured: false,
    description:
      "AI-powered personal developer assistant for coding, automation, and productivity.",
    tech: ["React", "Python", "FastAPI", "Docker"],
    github: "https://github.com/jorige3/personal-ai-engineer",
    demo: "",
  },

  {
    id: 4,
    title: "ML Time Series Ranking Engine",
    image: mlTimeSeriesImage,
    status: "LIVE",
    featured: false,
    description:
      "Machine learning-powered prediction engine with FastAPI, Docker, analytics APIs, and automated daily prediction workflows.",
    tech: ["Python", "FastAPI", "Docker", "Machine Learning"],
    github: "https://github.com/jorige3/ml-time-series-ranking-engine",
    demo: "https://ml-time-series-ranking-engine.onrender.com/docs",
  },
];