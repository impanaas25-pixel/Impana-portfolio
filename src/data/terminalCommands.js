export const terminalSuggestions = ["about", "skills", "projects", "journey", "education", "help", "clear"];

export const executeTerminalCommand = (rawCommand) => {
  const cmd = rawCommand.trim().toLowerCase();

  switch (cmd) {
    case "about":
      return {
        type: "about",
        lines: [
          "--------------------------------------------------",
          " IMPANA A S // DEVELOPER IDENTITY",
          "--------------------------------------------------",
          "Degree     : B.E. in Computer Science & Engineering (5th Sem, 3rd Year)",
          "Institute  : Bapuji Institute of Engineering & Technology (BIET), Davangere",
          "Academics  : 8.65 CGPA (upto 4th Sem)",
          "Languages  : Kannada, English, Marathi, Hindi, Basics of German",
          "Core Stack : PERN Stack (PostgreSQL, Express.js, React, Node.js) & Generative AI",
          "Status     : Open to Learning & Internship Opportunities",
          "",
          "\"Engineering ideas into meaningful digital solutions.\""
        ]
      };

    case "skills":
      return {
        type: "skills",
        lines: [
          "--------------------------------------------------",
          " TECHNICAL ARSENAL",
          "--------------------------------------------------",
          "[Languages]     : C, Java, Python",
          "[Web & Backend] : PERN Stack (PostgreSQL, Express, React, Node.js), Generative AI",
          "[Databases]     : PostgreSQL, Supabase",
          "[Dev Tools]     : Git, GitHub, VS 2022 Community, Railway, Render, Lovable, Replit, Vercel, OpenGL",
          "[Spoken Langs]  : Kannada (Native), English, Marathi, Hindi, German (Basics)",
          "",
          "Tip: Check the 'Skills' section above for categorized technology breakdowns."
        ]
      };

    case "projects":
      return {
        type: "projects",
        lines: [
          "--------------------------------------------------",
          " FEATURED SYSTEMS & REPOSITORIES",
          "--------------------------------------------------",
          "1. StudioYield [Job Schedule Optimizer]",
          "   -> Greedy algorithms for job sequencing & resource optimization.",
          "   -> Role: Lead Developer // Status: Pushed to GitHub (impanaas25-pixel)",
          "   -> Stack: React, Node.js, Express, PostgreSQL, Supabase.",
          "",
          "2. Urban Flow [Eco-Tracker Platform]",
          "   -> Waste management workflow with location-aware dispatch.",
          "   -> Role: Frontend & UI Developer // Status: Collaborative Git Push",
          "   -> Stack: React, JavaScript, Node.js, Vercel.",
          "",
          "3. KalaSetu-AI [Generative AI Artisan Marketplace]",
          "   -> AI catalog generation for rural artisans.",
          "   -> Role: Team Member — Team Code Coven @ BIET SIH",
          "   -> Status: Internal Hackathon Build (Not Pushed to Public Git)",
          "   -> Stack: React, Node, Express, Supabase, Generative AI.",
          "",
          "4. CraftSetu [Artisan Workspace Platform]",
          "   -> Direct-to-consumer digital storefront.",
          "   -> Role: Full-Stack Developer — Team Amethyst @ Hackarena 1.0",
          "   -> Status: Internal Hackarena Build (Not Pushed to Public Git)",
          "   -> Stack: React, JavaScript, Node, PostgreSQL, Tailwind CSS."
        ]
      };

    case "journey":
    case "education":
      return {
        type: "journey",
        lines: [
          "--------------------------------------------------",
          " ACADEMIC TRACK RECORD & HACKATHONS",
          "--------------------------------------------------",
          "[Current B.E.] B.E. in Computer Science & Engineering (5th Sem, 3rd Year)",
          "               Bapuji Institute of Engineering & Technology (BIET), Davangere",
          "               Performance: 8.65 CGPA (upto 4th Sem)",
          "",
          "[PUC / 12th]   Anubhava Mantapa PU College, Davangere",
          "               Score: 91.33% in 12th Grade",
          "",
          "[10th Grade]   Sri Taralabalu Jagadguru Residential School, Davangere",
          "               Score: 93.12% in 10th Grade",
          "",
          "[Hackathon]    Smart India Internal Hackathon (BIET Davangere)",
          "               Role: Team Member — Team Code Coven // Project: KalaSetu-AI",
          "",
          "[Hackathon]    Hackarena 1.0 (BIET Davangere)",
          "               Role: Full-Stack Developer — Team Amethyst // Project: CraftSetu",
          "",
          "[Credentials]  5x Google Cloud Skill Badges (2026)",
          "               Introduction to AI & ML - LinkedIn Learning (2026)"
        ]
      };

    case "help":
      return {
        type: "help",
        lines: [
          "--------------------------------------------------",
          " SIMULATED TERMINAL COMMANDS",
          "--------------------------------------------------",
          "  about     - Displays personal summary, 5th sem CGPA & background",
          "  skills    - Displays PERN stack, PostgreSQL/Supabase, dev tools & languages",
          "  projects  - Lists projects with GitHub and internal git status",
          "  journey   - Displays education scores (10th 93.12%, 12th 91.33%, CGPA 8.65) & hackathons",
          "  education - Alias for journey academic milestones",
          "  contact   - Displays direct contact channels",
          "  clear     - Clears the terminal output screen",
          "  help      - Shows this help manual"
        ]
      };

    case "contact":
      return {
        type: "contact",
        lines: [
          "--------------------------------------------------",
          " CONNECT WITH IMPANA A S",
          "--------------------------------------------------",
          "Email    : impanaas25@gmail.com",
          "GitHub   : https://github.com/impanaas25-pixel",
          "LinkedIn : https://www.linkedin.com/in/impana-a-s-2b5571341",
          "Location : Davangere, Karnataka, India"
        ]
      };

    case "":
      return {
        type: "empty",
        lines: []
      };

    default:
      return {
        type: "error",
        lines: [
          `Command not recognized: "${rawCommand}".`,
          `Type 'help' or click one of the suggestion chips: [${terminalSuggestions.join(", ")}]`
        ]
      };
  }
};
