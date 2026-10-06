import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const outputPath = path.resolve('public', 'TUYIRINGIRE_Pacifique_Curriculum_Vitae.pdf');

// A4 dimensions: 595.28 x 841.89 points
const doc = new PDFDocument({
  size: 'A4',
  margin: 0,
  info: {
    Title: 'TUYIRINGIRE Pacifique - Curriculum Vitae',
    Author: 'TUYIRINGIRE Pacifique',
    Subject: 'Executive Curriculum Vitae - Computer Science Educator & Software Developer',
    Keywords: 'TUYIRINGIRE Pacifique, Computer Science, Educator, Software Developer, NexaStack, GS Kampanga, Musanze, Rwanda',
  }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors based on user reference design
const NAVY = '#0d254c';       // Primary dark navy
const NAVY_DARK = '#091a36';  // Deepest navy for pills
const BRONZE = '#b46b38';     // Warm caramel / bronze accent
const BRONZE_LIGHT = '#c87a3e';
const TEXT_DARK = '#0f172a';  // Body text dark
const TEXT_SLATE = '#334155'; // Subtext slate
const TEXT_MUTED = '#64748b'; // Gray annotations
const WHITE = '#ffffff';
const SIDEBAR_BG = '#0d254c'; // Left column background
const LIGHT_BG = '#f8fafc';   // Soft off-white for badges
const BORDER_LIGHT = '#e2e8f0';

// ==========================================
// 1. TOP HEADER SECTION
// ==========================================

// Name
doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(23).text('TUYIRINGIRE PACIFIQUE', 35, 30, { characterSpacing: 0.5 });

// Title Badge (Caramel pill)
doc.roundedRect(35, 60, 315, 20, 10).fill(BRONZE);
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(9).text('COMPUTER SCIENCE EDUCATOR & SOFTWARE DEVELOPER', 35, 65.5, {
  width: 315,
  align: 'center',
  characterSpacing: 0.8
});

// Professional Quote / Statement (Navy rounded container)
doc.roundedRect(35, 87, 315, 68, 12).fill(NAVY);
doc.fillColor(WHITE).font('Helvetica-Oblique').fontSize(8.4).lineGap(2.5);
doc.text(
  '"Computer Science with Education scholar at the University of Rwanda and Head of Developers at NexaStack. Dedicated to transforming African learning through competency-based pedagogy (CBC), educational software architecture, and scalable technology solutions."',
  48,
  98,
  { width: 289, align: 'left' }
);

// Photo on Top Right (Academic Formal Portrait)
const photoPath = path.resolve('public', 'tuyiringire-pacifique-formal-blue-suit.jpg');
const photoX = 372;
const photoY = 28;
const photoW = 188;
const photoH = 127;

// Outer decorative border for photo
doc.roundedRect(photoX - 2, photoY - 2, photoW + 4, photoH + 4, 14).strokeColor(BRONZE).lineWidth(1.5).stroke();

doc.save();
doc.roundedRect(photoX, photoY, photoW, photoH, 12).clip();
if (fs.existsSync(photoPath)) {
  doc.image(photoPath, photoX, photoY - 15, { width: photoW });
} else {
  doc.rect(photoX, photoY, photoW, photoH).fill('#1e293b');
}
doc.restore();

// ==========================================
// 2. CONTACT PILLS & SKILLS CONTAINER
// ==========================================

// Left: Contact Info Pills (Navy pills with white text)
const pillX = 35;
const pillW = 205;
const pillH = 18;
const pillRadius = 9;

// Pill 1: Phone & Location
doc.roundedRect(pillX, 162, pillW, pillH, pillRadius).fill(NAVY_DARK);
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.5).text('+250 781 343 621  |  Kigali & Musanze, Rwanda', pillX, 167, { width: pillW, align: 'center' });

// Pill 2: Email & LinkedIn
doc.roundedRect(pillX, 184, pillW, pillH, pillRadius).fill(NAVY_DARK);
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.5).text('tpaccy6@gmail.com  |  NexaStack Lead', pillX, 189, { width: pillW, align: 'center' });

// Pill 3: GitHub & Portfolio
doc.roundedRect(pillX, 206, pillW, pillH, pillRadius).fill(NAVY_DARK);
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.5).text('github.com/tpaccy6-star  |  paccyportifolio.vercel.app', pillX, 211, { width: pillW, align: 'center' });

// Right: Skills Container (Caramel container with white & dark text)
const skillsBoxX = 252;
const skillsBoxY = 162;
const skillsBoxW = 308;
const skillsBoxH = 62;

doc.roundedRect(skillsBoxX, skillsBoxY, skillsBoxW, skillsBoxH, 14).fill(BRONZE);

// Skills Header
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(10).text('KEY TECHNICAL & PEDAGOGICAL SKILLS', skillsBoxX + 15, skillsBoxY + 8);

// Two columns of skills
doc.font('Helvetica-Bold').fontSize(7.5).fillColor(WHITE);
doc.text('• TypeScript, JavaScript & Python', skillsBoxX + 15, skillsBoxY + 25);
doc.text('• React, Next.js & React Native', skillsBoxX + 15, skillsBoxY + 36);
doc.text('• C# (.NET / WPF) & PostgreSQL', skillsBoxX + 15, skillsBoxY + 47);

doc.text('• Competency-Based Curriculum (CBC)', skillsBoxX + 160, skillsBoxY + 25);
doc.text('• 5E Microteaching & SEN Inclusion', skillsBoxX + 160, skillsBoxY + 36);
doc.text('• Architecture Decisions & Code Reviews', skillsBoxX + 160, skillsBoxY + 47);


// ==========================================
// 3. MAIN BODY (TWO COLUMNS)
// ==========================================
const splitY = 232;
const sidebarW = 215;
const sidebarH = 609.89 - 10; // Fills to bottom margin

// Draw Left Sidebar Background (Solid Navy Blue)
doc.rect(0, splitY, sidebarW, sidebarH).fill(SIDEBAR_BG);

// ------------------------------------------
// LEFT COLUMN CONTENT (White & Bronze on Navy)
// ------------------------------------------
let leftY = splitY + 16;
const leftContentX = 22;
const leftContentW = 175;

function leftSectionHeader(title) {
  doc.fillColor(BRONZE_LIGHT).font('Helvetica-Bold').fontSize(10).text(title.toUpperCase(), leftContentX, leftY, { characterSpacing: 1 });
  leftY += 13;
  doc.strokeColor(BRONZE).lineWidth(1.2).moveTo(leftContentX, leftY).lineTo(leftContentX + leftContentW, leftY).stroke();
  leftY += 10;
}

// EDUCATION
leftSectionHeader('Education');

// Degree
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(8.5).text('BACHELOR OF EDUCATION (CS)', leftContentX, leftY);
leftY += 11;
doc.fillColor('#93c5fd').font('Helvetica-Bold').fontSize(7.5).text('University of Rwanda – CE', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(7).text('Dept of Mathematics & Computer Science', leftContentX, leftY);
leftY += 9;
doc.fillColor('#94a3b8').font('Helvetica-Oblique').fontSize(6.8).text('CS Pedagogy, Algorithms, Systems (Current)', leftContentX, leftY);
leftY += 16;

// Secondary Leaving Certificate
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(8.5).text('SECONDARY SCHOOL DIPLOMA', leftContentX, leftY);
leftY += 11;
doc.fillColor('#93c5fd').font('Helvetica-Bold').fontSize(7.5).text('GS KAMPANGA (Kinigi, Musanze)', leftContentX, leftY);
leftY += 10;
doc.fillColor('#fde047').font('Helvetica-Bold').fontSize(7.2).text('FULL NESA AGGREGATES (Top Score)', leftContentX, leftY);
leftY += 9;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('Hired immediately to teach upon graduation', leftContentX, leftY);
leftY += 20;

// HONORS & FELLOWSHIPS
leftSectionHeader('Honors & Fellowships');

doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(8).text('• Mastercard Foundation Fellow', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('  SEF 2.0 / HATANA Residential Bootcamp', leftContentX, leftY);
leftY += 13;

doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(8).text('• Q-Solve Kenya Hackathon 2026', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('  Pan-African EdTech + FinTech Solution Architect', leftContentX, leftY);
leftY += 13;

doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(8).text('• Huye Hackathon Semi-Finalist', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('  Incubated civic innovation prototype', leftContentX, leftY);
leftY += 20;

// LEADERSHIP & FAITH
leftSectionHeader('Leadership & Service');

doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(8).text('• GBUR Active Member & Leader', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('  Groupe Biblique Universitaire du Rwanda', leftContentX, leftY);
leftY += 8.5;
doc.fillColor('#94a3b8').font('Helvetica-Oblique').fontSize(6.5).text('  Campus Bible study, discipleship & integrity', leftContentX, leftY);
leftY += 13;

doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(8).text('• Horeb Family Choir Secretary', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('  Official documentation, logistics & records', leftContentX, leftY);
leftY += 13;

doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(8).text('• Community Outreach Lead', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('  Nyagahandagaza Secondary School mentorship', leftContentX, leftY);
leftY += 20;

// LANGUAGES
leftSectionHeader('Languages');

function languageBar(name, level, percent) {
  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.5).text(name, leftContentX, leftY);
  doc.fillColor('#93c5fd').font('Helvetica').fontSize(7).text(level, leftContentX + 90, leftY, { width: 85, align: 'right' });
  leftY += 10;
  // Progress bar background
  doc.roundedRect(leftContentX, leftY, leftContentW, 4, 2).fill('#1e3a5f');
  doc.roundedRect(leftContentX, leftY, leftContentW * percent, 4, 2).fill(BRONZE_LIGHT);
  leftY += 10;
}

languageBar('English', 'Fluent / Academic (95%)', 0.95);
languageBar('Kinyarwanda', 'Native (100%)', 1.0);
languageBar('French', 'Working (65%)', 0.65);


// ------------------------------------------
// RIGHT COLUMN CONTENT (Dark Text on White)
// ------------------------------------------
let rightY = splitY + 16;
const rightContentX = 232;
const rightContentW = 330;

function rightSectionHeader(title) {
  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(11).text(title.toUpperCase(), rightContentX, rightY, { characterSpacing: 1 });
  rightY += 14;
  doc.strokeColor(BRONZE).lineWidth(1.5).moveTo(rightContentX, rightY).lineTo(rightContentX + rightContentW, rightY).stroke();
  rightY += 11;
}

// 1. PROFESSIONAL & TEACHING EXPERIENCE
rightSectionHeader('Professional & Teaching Experience');

// Experience 1: NexaStack
doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9.5).text('HEAD OF DEVELOPERS', rightContentX, rightY);
doc.fillColor(BRONZE).font('Helvetica-Bold').fontSize(8).text('2024 – PRESENT', rightContentX + 230, rightY, { width: 100, align: 'right' });
rightY += 11;
doc.fillColor(BRONZE_LIGHT).font('Helvetica-Bold').fontSize(8).text('NexaStack (nexastack.net)', rightContentX, rightY);
doc.fillColor(TEXT_MUTED).font('Helvetica').fontSize(7.5).text('Kigali, Rwanda', rightContentX + 230, rightY, { width: 100, align: 'right' });
rightY += 11;
doc.fillColor(TEXT_SLATE).font('Helvetica').fontSize(7.5).lineGap(1.5);
doc.text(
  '• Engineering lead running developer teams — owning code reviews, architecture decisions, and full-stack product releases.\n' +
  '• Enforce rigorous testing, CI/CD pipelines, and high software quality benchmarks across React, React Native, and backend APIs.\n' +
  '• Mentor junior developers and align technical sprint deliverables with executive product goals.',
  rightContentX,
  rightY,
  { width: rightContentW }
);
rightY += 34;

// Experience 2: GS MUHORORO
doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9.5).text('COMPUTER SCIENCE TEACHER INTERN', rightContentX, rightY);
doc.fillColor(BRONZE).font('Helvetica-Bold').fontSize(8).text('JAN 2026 – PRESENT', rightContentX + 210, rightY, { width: 120, align: 'right' });
rightY += 11;
doc.fillColor(BRONZE_LIGHT).font('Helvetica-Bold').fontSize(8).text('GS MUHORORO — Murambi Sector, Rulindo District', rightContentX, rightY);
rightY += 11;
doc.fillColor(TEXT_SLATE).font('Helvetica').fontSize(7.5).lineGap(1.5);
doc.text(
  '• Pioneered resource-resilient pedagogy for a school of ~2,500 students with a Positivo BGH fleet of only 5–6 functional laptops.\n' +
  '• Instructed Senior 4 HGL in practical HTML web development through pair-rotations and Senior 3 ICT (68 learners) with SEN inclusion.\n' +
  '• Delivered interactive 5E-model microteaching on algorithm design, branching logic, and computational problem solving.',
  rightContentX,
  rightY,
  { width: rightContentW }
);
rightY += 34;

// Experience 3: GS KAMPANGA
doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9.5).text('SECONDARY SCHOOL TEACHER (INTERIM COVER)', rightContentX, rightY);
doc.fillColor(BRONZE).font('Helvetica-Bold').fontSize(8).text('2023 – 2024', rightContentX + 230, rightY, { width: 100, align: 'right' });
rightY += 11;
doc.fillColor(BRONZE_LIGHT).font('Helvetica-Bold').fontSize(8).text('GS KAMPANGA — Kinigi Sector, Musanze District', rightContentX, rightY);
rightY += 11;
doc.fillColor(TEXT_SLATE).font('Helvetica').fontSize(7.5).lineGap(1.5);
doc.text(
  '• Graduated secondary school at GS KAMPANGA with Full NESA Aggregates (maximum national exam score) and appointed to teach.\n' +
  '• Stepped in as interim secondary teacher replacing former teacher on maternity leave, ensuring complete instructional continuity.\n' +
  '• Prepared lesson plans, marked examinations, and provided academic guidance to secondary learners.',
  rightContentX,
  rightY,
  { width: rightContentW }
);
rightY += 36;


// 2. SELECTED SOFTWARE SYSTEMS
rightSectionHeader('Selected Software Systems & Architecture');

function projectItem(name, stack, desc) {
  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(8.5).text(name, rightContentX, rightY);
  doc.fillColor(BRONZE).font('Helvetica-Bold').fontSize(7.5).text(` [${stack}]`, rightContentX + 155, rightY);
  rightY += 10.5;
  doc.fillColor(TEXT_SLATE).font('Helvetica').fontSize(7.3).text(desc, rightContentX, rightY, { width: rightContentW, lineGap: 1 });
  rightY += 17;
}

projectItem(
  'FluentEdge Academy Hub',
  'React, Node.js, Cryptographic Ledger',
  'Tiered learning hub (Levels -> Courses -> Lessons) featuring live CEFR progress tracking and automated cryptographic certificate verification.'
);

projectItem(
  'HLI Timetable Scheduler',
  'React, TypeScript, Constraint Solver',
  'NP-hard constraint optimization system resolving multi-faculty room and lecturer schedule collisions across University of Rwanda.'
);

projectItem(
  'QuizMaster V2 Examination System',
  'C#, WPF, TCP Socket Server, SQLite',
  'Offline computer-based testing suite serving 60+ concurrent student workstations over local LAN with real-time analytics and CSV export.'
);

projectItem(
  'ImbutoBooks Learning Reader',
  'React, PWA, Service Workers, IndexedDB',
  'Ultra-lightweight offline textbook and syllabus reader enabling curriculum study in schools with intermittent electricity and internet.'
);

rightY += 6;

// 3. CORE ATTRIBUTES & METHODOLOGY
rightSectionHeader('Core Attributes & Professional Pillars');

const attributes = [
  'Competency-Based Curriculum (CBC)',
  'Code Architecture & CI/CD',
  'Full-Stack Delivery',
  'Resource-Resilient Pedagogy',
  'Servant Leadership & Integrity',
  'Empirical Data Research'
];

let badgeX = rightContentX;
let badgeY = rightY + 3;

attributes.forEach((attr) => {
  const badgeW = doc.widthOfString(attr, { font: 'Helvetica-Bold', size: 7.2 }) + 14;
  if (badgeX + badgeW > rightContentX + rightContentW) {
    badgeX = rightContentX;
    badgeY += 17;
  }
  doc.roundedRect(badgeX, badgeY, badgeW, 14, 4).fillAndStroke('#f1f5f9', '#cbd5e1');
  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(7.2).text(attr, badgeX + 7, badgeY + 3.5);
  badgeX += badgeW + 6;
});

// Finalize Document
doc.end();

writeStream.on('finish', () => {
  console.log(`Curriculum Vitae successfully generated at: ${outputPath}`);
});
