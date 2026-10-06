import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const outputPath = path.resolve('public', 'TUYIRINGIRE_Pacifique_Curriculum_Vitae.pdf');

// A4 standard dimensions: 595.28 x 841.89 pt
const doc = new PDFDocument({
  size: 'A4',
  margin: 0,
  info: {
    Title: 'TUYIRINGIRE Pacifique - Curriculum Vitae',
    Author: 'TUYIRINGIRE Pacifique',
    Subject: 'Executive Curriculum Vitae - Computer Science Educator & Software Developer',
    Keywords: 'TUYIRINGIRE Pacifique, Computer Science, Educator, Software Developer, NexaStack, GS Kampanga, Kinigi, Musanze, Rwanda',
  }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Core Theme Palette
const NAVY = '#0d254c';       // Deep Academic Navy
const NAVY_DARK = '#091a36';  // Deepest Navy for Contact Pills
const BRONZE = '#b46b38';     // Warm Caramel / Bronze Accent
const BRONZE_LIGHT = '#c87a3e';
const TEXT_DARK = '#0f172a';  // Body text
const TEXT_SLATE = '#334155'; // Clean Slate
const TEXT_MUTED = '#64748b'; // Annotations
const WHITE = '#ffffff';
const SIDEBAR_BG = '#0d254c'; // Left column solid navy
const BADGE_BG = '#f1f5f9';
const BADGE_BORDER = '#cbd5e1';

// ==========================================
// 1. TOP HEADER SECTION
// ==========================================

// Tall Portrait Photo on Top Right (Handover green blazer portrait)
const photoPath = path.resolve('public', 'tuyiringire-pacifique-leadership-handover-portrait.png');
const photoW = 135;
const photoH = 188;
const photoX = 595.28 - 35 - photoW; // 425.28
const photoY = 28;

// Outer decorative border for photo
doc.roundedRect(photoX - 2, photoY - 2, photoW + 4, photoH + 4, 14).strokeColor(BRONZE).lineWidth(1.5).stroke();

doc.save();
doc.roundedRect(photoX, photoY, photoW, photoH, 12).clip();
if (fs.existsSync(photoPath)) {
  // Scale image to fill width with vertical framing focused on head & blazer
  doc.image(photoPath, photoX, photoY - 14, { width: photoW });
} else {
  doc.rect(photoX, photoY, photoW, photoH).fill('#1e293b');
}
doc.restore();

// Name on Top Left
const leftHeaderX = 35;
const leftHeaderW = photoX - leftHeaderX - 18; // ~372 pt wide

doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(24).text('TUYIRINGIRE PACIFIQUE', leftHeaderX, 28, { characterSpacing: 0.5 });

// Title Badge (Warm Caramel pill)
doc.roundedRect(leftHeaderX, 58, leftHeaderW, 20, 10).fill(BRONZE);
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(9).text('COMPUTER SCIENCE EDUCATOR & SOFTWARE DEVELOPER', leftHeaderX, 63.5, {
  width: leftHeaderW,
  align: 'center',
  characterSpacing: 0.8
});

// Professional Quote / Statement (Navy rounded container)
doc.roundedRect(leftHeaderX, 84, leftHeaderW, 64, 12).fill(NAVY);
doc.fillColor(WHITE).font('Helvetica-Oblique').fontSize(8.2).lineGap(2.2);
doc.text(
  '"Computer Science with Education scholar at the University of Rwanda and Head of Developers at NexaStack. Dedicated to transforming African learning through competency-based pedagogy (CBC), educational software architecture, and scalable technology solutions."',
  leftHeaderX + 14,
  93,
  { width: leftHeaderW - 28, align: 'left' }
);

// ==========================================
// 2. CONTACT PILLS & SKILLS CONTAINER
// ==========================================

// Left: Contact Info Pills (Navy pills with white text)
const pillW = 168;
const pillH = 17.5;
const pillRadius = 8.75;
const pillStartY = 155;

// Pill 1: Phone & Location
doc.roundedRect(leftHeaderX, pillStartY, pillW, pillH, pillRadius).fill(NAVY_DARK);
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.2).text('+250 781 343 621  |  Kigali & Musanze', leftHeaderX, pillStartY + 4.5, { width: pillW, align: 'center' });

// Pill 2: Email & Role
doc.roundedRect(leftHeaderX, pillStartY + 21, pillW, pillH, pillRadius).fill(NAVY_DARK);
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.2).text('tpaccy6@gmail.com  |  NexaStack Lead', leftHeaderX, pillStartY + 25.5, { width: pillW, align: 'center' });

// Pill 3: GitHub & Portfolio
doc.roundedRect(leftHeaderX, pillStartY + 42, pillW, pillH, pillRadius).fill(NAVY_DARK);
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.2).text('github.com/tpaccy6-star  |  Portfolio Live', leftHeaderX, pillStartY + 46.5, { width: pillW, align: 'center' });

// Right: Skills Container (Caramel container)
const skillsBoxX = leftHeaderX + pillW + 10;
const skillsBoxY = pillStartY;
const skillsBoxW = leftHeaderW - pillW - 10;
const skillsBoxH = 60;

doc.roundedRect(skillsBoxX, skillsBoxY, skillsBoxW, skillsBoxH, 12).fill(BRONZE);

// Skills Header
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(9).text('TECHNICAL & PEDAGOGICAL SKILLS', skillsBoxX + 10, skillsBoxY + 7);

// Two columns of skills
doc.font('Helvetica-Bold').fontSize(7.2).fillColor(WHITE);
doc.text('• TypeScript, JavaScript & Python', skillsBoxX + 10, skillsBoxY + 22);
doc.text('• React, Next.js & React Native', skillsBoxX + 10, skillsBoxY + 33);
doc.text('• C# (.NET / WPF) & PostgreSQL', skillsBoxX + 10, skillsBoxY + 44);

doc.text('• Competency-Based Curriculum (CBC)', skillsBoxX + 105, skillsBoxY + 22);
doc.text('• 5E Model & SEN Inclusion', skillsBoxX + 105, skillsBoxY + 33);
doc.text('• Code Architecture & Reviews', skillsBoxX + 105, skillsBoxY + 44);


// ==========================================
// 3. MAIN BODY (TWO COLUMNS)
// ==========================================
const splitY = 224;
const sidebarW = 210;
const sidebarH = 841.89 - splitY; // Fills to bottom of page

// Draw Left Sidebar Background (Solid Navy Blue)
doc.rect(0, splitY, sidebarW, sidebarH).fill(SIDEBAR_BG);

// ------------------------------------------
// LEFT COLUMN CONTENT (White & Bronze on Navy)
// ------------------------------------------
let leftY = splitY + 14;
const leftContentX = 22;
const leftContentW = 172;

function leftSectionHeader(title) {
  doc.fillColor(BRONZE_LIGHT).font('Helvetica-Bold').fontSize(9.5).text(title.toUpperCase(), leftContentX, leftY, { characterSpacing: 1 });
  leftY += 12;
  doc.strokeColor(BRONZE).lineWidth(1.2).moveTo(leftContentX, leftY).lineTo(leftContentX + leftContentW, leftY).stroke();
  leftY += 9;
}

// 1. EDUCATION
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
leftY += 18;

// 2. HONORS & FELLOWSHIPS
leftSectionHeader('Honors & Fellowships');

doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.8).text('• Mastercard Foundation Fellow', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('  SEF 2.0 / HATANA Residential Bootcamp', leftContentX, leftY);
leftY += 13;

doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.8).text('• Q-Solve Kenya Hackathon 2026', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('  EdTech + FinTech Solution Architect', leftContentX, leftY);
leftY += 13;

doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.8).text('• Huye Hackathon Semi-Finalist', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('  Incubated civic tech innovation prototype', leftContentX, leftY);
leftY += 18;

// 3. LEADERSHIP & FAITH (NO HOREB)
leftSectionHeader('Leadership & Service');

doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.8).text('• GBUR Active Member & Leader', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('  Groupe Biblique Universitaire du Rwanda', leftContentX, leftY);
leftY += 8.5;
doc.fillColor('#94a3b8').font('Helvetica-Oblique').fontSize(6.5).text('  Campus Bible study, discipleship & integrity', leftContentX, leftY);
leftY += 13;

doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.8).text('• Student Union Governance', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('  University of Rwanda Academic Delegate', leftContentX, leftY);
leftY += 8.5;
doc.fillColor('#94a3b8').font('Helvetica-Oblique').fontSize(6.5).text('  Peer tutoring & student welfare advocacy', leftContentX, leftY);
leftY += 13;

doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.8).text('• Community Mentorship Lead', leftContentX, leftY);
leftY += 10;
doc.fillColor('#cbd5e1').font('Helvetica').fontSize(6.8).text('  Nyagahandagaza Secondary School outreach', leftContentX, leftY);
leftY += 18;

// 4. LANGUAGES
leftSectionHeader('Languages');

function languageBar(name, level, percent) {
  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.5).text(name, leftContentX, leftY);
  doc.fillColor('#93c5fd').font('Helvetica').fontSize(7).text(level, leftContentX + 90, leftY, { width: 82, align: 'right' });
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
// RIGHT COLUMN CONTENT (Dark Text on Crisp White)
// Generous spacing to completely eliminate phrase collision!
// ------------------------------------------
let rightY = splitY + 14;
const rightContentX = 228;
const rightContentW = 338;

function rightSectionHeader(title) {
  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(10.5).text(title.toUpperCase(), rightContentX, rightY, { characterSpacing: 0.8 });
  rightY += 13;
  doc.strokeColor(BRONZE).lineWidth(1.4).moveTo(rightContentX, rightY).lineTo(rightContentX + rightContentW, rightY).stroke();
  rightY += 11;
}

// 1. PROFESSIONAL & TEACHING EXPERIENCE
rightSectionHeader('Professional & Teaching Experience');

// Experience 1: NexaStack
doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9.2).text('HEAD OF DEVELOPERS', rightContentX, rightY);
doc.fillColor(BRONZE).font('Helvetica-Bold').fontSize(7.8).text('2024 – PRESENT', rightContentX + 235, rightY, { width: 103, align: 'right' });
rightY += 11.5;

doc.fillColor(BRONZE_LIGHT).font('Helvetica-Bold').fontSize(8).text('NexaStack (nexastack.net)', rightContentX, rightY);
doc.fillColor(TEXT_MUTED).font('Helvetica').fontSize(7.2).text('Kigali, Rwanda', rightContentX + 235, rightY, { width: 103, align: 'right' });
rightY += 11;

const exp1Bullets = [
  '• Engineering lead running developer teams — owning code reviews, architecture decisions, and full-stack delivery.',
  '• Enforces rigorous automated testing, CI/CD pipelines, and high quality benchmarks across web & mobile systems.',
  '• Mentors junior engineers and aligns sprint technical deliverables directly with client product milestones.'
];

exp1Bullets.forEach(b => {
  doc.fillColor(TEXT_SLATE).font('Helvetica').fontSize(7.2).lineGap(1.8).text(b, rightContentX, rightY, { width: rightContentW });
  rightY += doc.heightOfString(b, { width: rightContentW, lineGap: 1.8 }) + 2.5;
});
rightY += 7; // Extra generous spacing between roles

// Experience 2: GS MUHORORO
doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9.2).text('COMPUTER SCIENCE TEACHER INTERN', rightContentX, rightY);
doc.fillColor(BRONZE).font('Helvetica-Bold').fontSize(7.8).text('JAN 2026 – PRESENT', rightContentX + 215, rightY, { width: 123, align: 'right' });
rightY += 11.5;

doc.fillColor(BRONZE_LIGHT).font('Helvetica-Bold').fontSize(8).text('GS MUHORORO — Murambi Sector, Rulindo District', rightContentX, rightY);
rightY += 11;

const exp2Bullets = [
  '• Pioneered resource-resilient pedagogy for a school of ~2,500 students with a Positivo BGH fleet of only 5–6 functional laptops.',
  '• Instructed Senior 4 HGL in practical HTML web development via pair coding and Senior 3 ICT (68 learners) with SEN inclusion.',
  '• Delivered interactive 5E-model microteaching introducing algorithm design, branching logic, and computational problem solving.'
];

exp2Bullets.forEach(b => {
  doc.fillColor(TEXT_SLATE).font('Helvetica').fontSize(7.2).lineGap(1.8).text(b, rightContentX, rightY, { width: rightContentW });
  rightY += doc.heightOfString(b, { width: rightContentW, lineGap: 1.8 }) + 2.5;
});
rightY += 7; // Extra generous spacing between roles

// Experience 3: GS KAMPANGA
doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9.2).text('SECONDARY SCHOOL TEACHER (INTERIM MATERNITY COVER)', rightContentX, rightY);
doc.fillColor(BRONZE).font('Helvetica-Bold').fontSize(7.8).text('2023 – 2024', rightContentX + 235, rightY, { width: 103, align: 'right' });
rightY += 11.5;

doc.fillColor(BRONZE_LIGHT).font('Helvetica-Bold').fontSize(8).text('GS KAMPANGA — Kinigi Sector, Musanze District', rightContentX, rightY);
rightY += 11;

const exp3Bullets = [
  '• Graduated secondary school at GS KAMPANGA with Full NESA Aggregates (top national score) and appointed to teach.',
  '• Stepped in as interim secondary teacher replacing former teacher on maternity leave, ensuring complete instructional continuity.',
  '• Structured lesson plans, marked examinations, and guided secondary students through computing and analytical problem-solving.'
];

exp3Bullets.forEach(b => {
  doc.fillColor(TEXT_SLATE).font('Helvetica').fontSize(7.2).lineGap(1.8).text(b, rightContentX, rightY, { width: rightContentW });
  rightY += doc.heightOfString(b, { width: rightContentW, lineGap: 1.8 }) + 2.5;
});
rightY += 9;


// 2. SELECTED SOFTWARE SYSTEMS & ARCHITECTURE
rightSectionHeader('Selected Software Systems & Architecture');

function renderProject(title, stack, desc) {
  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(8.2).text(title, rightContentX, rightY, { continued: true });
  doc.fillColor(BRONZE).font('Helvetica-Bold').fontSize(7.2).text(`  [${stack}]`);
  rightY += 10.5;
  doc.fillColor(TEXT_SLATE).font('Helvetica').fontSize(7.1).lineGap(1.5).text(desc, rightContentX, rightY, { width: rightContentW });
  rightY += doc.heightOfString(desc, { width: rightContentW, lineGap: 1.5 }) + 5;
}

renderProject(
  'FluentEdge Academy Hub',
  'React, Node.js, Cryptographic Ledger',
  'Tiered learning hub (Levels -> Courses -> Lessons) featuring live CEFR progress tracking and automated cryptographic certificate verification.'
);

renderProject(
  'HLI Timetable Scheduler',
  'React, TypeScript, Constraint Solver',
  'NP-hard constraint optimization system resolving multi-faculty room and lecturer schedule collisions across University of Rwanda.'
);

renderProject(
  'QuizMaster V2 Examination System',
  'C#, WPF, TCP Socket Server, SQLite',
  'Offline computer-based testing suite serving 60+ concurrent student workstations over local LAN with real-time analytics and CSV export.'
);

renderProject(
  'ImbutoBooks Learning Reader',
  'React, PWA, Service Workers, IndexedDB',
  'Ultra-lightweight offline textbook and syllabus reader enabling curriculum study in schools with intermittent electricity and internet.'
);

rightY += 4;

// 3. CORE ATTRIBUTES & METHODOLOGY
rightSectionHeader('Core Attributes & Professional Pillars');

const attributes = [
  'Competency-Based Curriculum (CBC)',
  'Code Architecture & CI/CD',
  'Full-Stack Delivery',
  'Resource-Resilient Pedagogy',
  'Servant Leadership & Integrity',
  'Empirical Data Analytics'
];

let badgeX = rightContentX;
let badgeY = rightY + 2;

attributes.forEach((attr) => {
  const badgeW = doc.widthOfString(attr, { font: 'Helvetica-Bold', size: 7 }) + 14;
  if (badgeX + badgeW > rightContentX + rightContentW) {
    badgeX = rightContentX;
    badgeY += 18;
  }
  doc.roundedRect(badgeX, badgeY, badgeW, 14, 4).fillAndStroke(BADGE_BG, BADGE_BORDER);
  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(7).text(attr, badgeX + 7, badgeY + 3.5);
  badgeX += badgeW + 6;
});

// Finalize Document
doc.end();

writeStream.on('finish', () => {
  console.log(`Curriculum Vitae successfully generated at: ${outputPath}`);
});
