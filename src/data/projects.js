import andRealEstate from "../assets/projects/and-real-estate.png";
import personalAIEngineer from "../assets/projects/personal-ai-engineer.png";
import mlTimeSeriesImage from "../assets/projects/ml-time-series-ranking-engine.png";

export const projects = [
  {
    id: 1,
    title: "AND Real Estate",
    image: andRealEstate,
    status: "LIVE",
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
    status: "ACTIVE",
    featured: false,
    description:
      "AI-powered personal developer assistant for coding, automation, and productivity.",
    tech: ["React", "Python", "FastAPI", "Docker"],
    github: "https://github.com/jorige3/personal-ai-engineer",
    demo: "",
  },

  {
    id: 3,
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