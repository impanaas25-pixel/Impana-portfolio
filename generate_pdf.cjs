// Simple Node script to generate a valid PDF resume file for Impana A S
const fs = require('fs');
const path = require('path');

function createPdf(outputPath) {
  const lines = [
    "IMPANA A S",
    "B.E. Computer Science & Engineering (5th Sem, 3rd Year | 8.65 CGPA upto 4th Sem) | BIET Davangere",
    "Email: impanaas25@gmail.com | GitHub: github.com/impanaas25-pixel | Davangere, Karnataka",
    "----------------------------------------------------------------------------------------------------",
    "EDUCATION & ACADEMIC TRACK RECORD",
    "* B.E. in Computer Science & Engineering (5th Sem, 3rd Year) - 8.65 CGPA (upto 4th Sem)",
    "  Bapuji Institute of Engineering & Technology (BIET), Davangere",
    "* Pre-University Education (PUC / 12th Grade) - 91.33%",
    "  Anubhava Mantapa PU College, Davangere",
    "* Secondary Schooling (10th Grade / SSLC) - 93.12%",
    "  Sri Taralabalu Jagadguru Residential School, Davangere",
    "",
    "LANGUAGES KNOWN",
    "Kannada (Native), English (Fluent), Marathi (Fluent), Hindi (Fluent), German (Basics)",
    "",
    "TECHNICAL SKILLS",
    "Programming Languages: C, Java, Python",
    "Web & Backend: PERN Stack (PostgreSQL, Express.js, React, Node.js), Generative AI",
    "Databases: PostgreSQL, Supabase",
    "Tools & Platforms: Git, GitHub, VS 2022 Community, Railway, Render, Lovable, Replit, Vercel, OpenGL",
    "",
    "FEATURED PROJECTS",
    "1. StudioYield - Job Schedule Optimizer",
    "   Role: Lead Developer | Stack: React, Node.js, Express.js, PostgreSQL, Supabase, Greedy Algorithms",
    "   * Implemented greedy algorithms to determine efficient job execution sequence & resource throughput.",
    "   * Status: Pushed to GitHub (impanaas25-pixel/StudioYield).",
    "",
    "2. Urban Flow - Eco-Tracker Platform",
    "   Role: Frontend & UI Developer | Stack: React, JavaScript, Node.js, Vercel",
    "   * Built responsive UI for waste management workflow with location-aware dispatching.",
    "   * Status: Collaborative Git Push to team repository.",
    "",
    "3. KalaSetu-AI - Generative AI Artisan Marketplace",
    "   Role: Team Member (Team Code Coven) | Stack: React, Node.js, Express.js, Supabase, Generative AI",
    "   * Integrated generative AI to automate multilingual catalog generation for rural artisans at BIET SIH.",
    "   * Status: Internal Hackathon Build (Not Pushed to Public Git).",
    "",
    "4. CraftSetu - Artisan Workspace Platform",
    "   Role: Full-Stack Developer (Team Amethyst) | Stack: React, JavaScript, Node.js, PostgreSQL, Tailwind CSS",
    "   * Created direct-to-consumer storefront and modular artisan catalog during Hackarena 1.0.",
    "   * Status: Internal Hackarena Build (Not Pushed to Public Git).",
    "",
    "HACKATHONS & ACHIEVEMENTS",
    "* Smart India Internal Hackathon (BIET Davangere) - Team Member, Team Code Coven (KalaSetu-AI)",
    "* Hackarena 1.0 (BIET Davangere) - Developer, Team Amethyst (CraftSetu)",
    "",
    "CERTIFICATIONS",
    "* 5x Google Cloud Skill Badges - Google Cloud Platform (2026)",
    "* Introduction to AI & ML - LinkedIn Learning (2026)"
  ];

  // Build stream content for PDF
  let streamContent = "BT\n";
  let y = 790;
  streamContent += "/F1 15 Tf\n40 " + y + " Td\n(" + escapePdf(lines[0]) + ") Tj\n";
  y -= 16;
  streamContent += "/F1 9 Tf\n0 -16 Td\n(" + escapePdf(lines[1]) + ") Tj\n";
  y -= 13;
  streamContent += "0 -13 Td\n(" + escapePdf(lines[2]) + ") Tj\n";
  y -= 10;
  streamContent += "0 -10 Td\n(" + escapePdf(lines[3]) + ") Tj\n";

  for (let i = 4; i < lines.length; i++) {
    const line = lines[i];
    const isHeading = [
      "EDUCATION & ACADEMIC TRACK RECORD",
      "LANGUAGES KNOWN",
      "TECHNICAL SKILLS",
      "FEATURED PROJECTS",
      "HACKATHONS & ACHIEVEMENTS",
      "CERTIFICATIONS"
    ].includes(line);

    const font = isHeading ? "/F2 10 Tf" : "/F1 8 Tf";
    const dy = isHeading ? -15 : -9.5;
    streamContent += font + "\n0 " + dy + " Td\n(" + escapePdf(line) + ") Tj\n";
  }
  streamContent += "ET\n";

  const streamLength = Buffer.byteLength(streamContent, 'ascii');

  const pdfBody = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595 842]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica
      >>
      /F2 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica-Bold
      >>
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length ${streamLength}
>>
stream
${streamContent}endstream
endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000378 00000 n 
trailer
<<
  /Size 5
  /Root 1 0 R
>>
startxref
${450 + streamLength}
%%EOF`;

  fs.writeFileSync(outputPath, pdfBody);
  console.log('PDF resume successfully generated at:', outputPath);
}

function escapePdf(str) {
  return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

const targetPath = path.join(__dirname, 'public', 'Impana_A_S_Resume.pdf');
createPdf(targetPath);
