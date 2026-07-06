import andRealEstate from "../assets/projects/and-real-estate.png";
import personalAIEngineer from "../assets/projects/personal-ai-engineer.png";

export const projects = [
  {
    id: 1,
    title: "AND Real Estate",
    image: andRealEstate,
    status: "Live",
    featured: true,
    description:
      "A modern full-stack real estate platform with property listings, admin dashboard, image uploads, and lead management.",
    tech: ["React", "Tailwind", "FastAPI", "PostgreSQL"],
    github: "https://github.com/jorige3/and-real-estate",
    demo: "https://and-real-estates.onrender.com/",
  },

  {
    id: 2,
    title: "Personal AI Engineer",
    image: personalAIEngineer,
    status: "Active",
    featured: true,
    description:
      "AI-powered personal developer assistant for coding, automation, and productivity.",
    tech: ["React", "Python", "FastAPI", "Docker"],
    github: "https://github.com/jorige3/personal-ai-engineer",
    demo: "",
  },

  {
    id: 3,
    title: "ML Time Series Ranking Engine",
    status: "Completed",
    featured: false,
    description:
      "Machine learning analytics platform with Docker services, APIs, and reporting.",
    tech: ["Python", "FastAPI", "Docker"],
    github: "https://github.com/jorige3/ml-time-series-ranking-engine",
    demo: "",
  },

  {
    id: 4,
    title: "Project Guardian Pro",
    status: "Completed",
    featured: false,
    description:
      "CLI tool for project health analysis, security checks, and code quality.",
    tech: ["Python", "CLI", "GitHub Actions"],
    github: "https://github.com/jorige3/project_guardian_pro",
    demo: "",
  },
]