import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const outputPath = path.resolve('public', 'TUYIRINGIRE_Pacifique_Curriculum_Vitae.pdf');

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 36, bottom: 36, left: 40, right: 40 },
  info: {
    Title: 'TUYIRINGIRE Pacifique - Curriculum Vitae',
    Author: 'TUYIRINGIRE Pacifique',
    Subject: 'Curriculum Vitae - Computer Science Educator & Software Developer',
    Keywords: 'Computer Science, Educator, Software Developer, Rwanda, Education, CBC, React, C#',
  }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Primary colors
const PRIMARY = '#0891b2'; // cyan-600
const DARK = '#0f172a';    // slate-900
const SLATE = '#475569';   // slate-600
const MUTED = '#64748b';   // slate-500
const LINE = '#cbd5e1';    // slate-300

// Helper function for horizontal rules
function drawDivider() {
  doc.strokeColor(LINE).lineWidth(0.5).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
  doc.moveDown(0.4);
}

// Helper function for section headings
function sectionHeading(title) {
  doc.moveDown(0.6);
  doc.fillColor(PRIMARY).font('Helvetica-Bold').fontSize(11).text(title.toUpperCase(), { characterSpacing: 1 });
  drawDivider();
}

// ---------------- HEADER ----------------
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(22).text('TUYIRINGIRE Pacifique', { continued: true });
doc.fillColor(PRIMARY).font('Helvetica').fontSize(14).text(' (Paccy)');

doc.moveDown(0.15);
doc.fillColor(PRIMARY).font('Helvetica-Bold').fontSize(11).text('Computer Science Educator & Software Developer');
doc.fillColor(MUTED).font('Helvetica-Oblique').fontSize(9).text('"Transforming Learning Through Passion and Technology"');

doc.moveDown(0.3);
doc.fillColor(SLATE).font('Helvetica').fontSize(8.5);
doc.text('Kigali / Rulindo, Rwanda   |   +250 781 343 621   |   tpaccy6@gmail.com   |   github.com/tpaccy6-star');
doc.moveDown(0.4);
drawDivider();

// ---------------- PROFESSIONAL SUMMARY ----------------
sectionHeading('Professional Summary');
doc.fillColor(DARK).font('Helvetica').fontSize(9).lineGap(2);
doc.text(
  'Computer Science with Education student at the University of Rwanda with formal secondary school teaching experience, full-stack software development expertise, and a commitment to instructional technology. Experienced in Competency-Based Curriculum (CBC) delivery, resource-resilient pedagogy (instructing 68+ students and rotating 18 learners through 5–6 functional laptops), offline architecture engineering (C# / WPF, PWA), and multi-role institutional web/mobile platforms.'
);

// ---------------- EDUCATION ----------------
sectionHeading('Education');
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(10).text('Bachelor of Education – Computer Science with Education', { continued: true });
doc.fillColor(MUTED).font('Helvetica').fontSize(8.5).text('   (Current)', { align: 'right' });
doc.fillColor(PRIMARY).font('Helvetica-Bold').fontSize(9).text('University of Rwanda – College of Education');
doc.fillColor(SLATE).font('Helvetica').fontSize(8.5).text('Department of Mathematics & Computer Science Education');
doc.moveDown(0.2);
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(8.5).text('Key Coursework: ', { continued: true });
doc.font('Helvetica').text('Computer Science Pedagogy, Operating Systems, Algorithm Analysis & Design, Database Systems, Software Requirements (SRS), CBC Teaching Methodology, Educational Data Analytics.');

// ---------------- TEACHING & PRACTICUM EXPERIENCE ----------------
sectionHeading('Teaching & Practicum Experience');

// GS MUHORORO
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(10).text('Computer Science Teacher Intern', { continued: true });
doc.fillColor(MUTED).font('Helvetica').fontSize(8.5).text('   Jan 2025 – Present', { align: 'right' });
doc.fillColor(PRIMARY).font('Helvetica-Bold').fontSize(9).text('GS MUHORORO — Murambi Sector, Rulindo District');
doc.fillColor(SLATE).font('Helvetica').fontSize(8.5);
doc.list([
  'Facilitated senior secondary CS (S4 HGL in HTML/Web Development) and O-Level ICT (S3, 68 students including SEN learners).',
  'Pioneered resource-resilient pedagogy managing a Positivo BGH fleet of only 5–6 functioning student laptops for cohorts of 18–68 students.',
  'Employed Driver/Navigator pair coding, interactive projector code walkthroughs, and blackboard algorithm dry-runs to ensure 100% practical participation.',
  'Designed differentiated lesson plans aligned with Rwanda Basic Education Board (REB) Competency-Based Curriculum (CBC).'
], { bulletRadius: 2, textIndent: 12 });

doc.moveDown(0.3);
// IEE
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(10).text('Teaching Assistant (Practicum Fellow)', { continued: true });
doc.fillColor(MUTED).font('Helvetica').fontSize(8.5).text('   2023 – 2024', { align: 'right' });
doc.fillColor(PRIMARY).font('Helvetica-Bold').fontSize(9).text('Inspire, Educate and Empower Rwanda (IEE)');
doc.fillColor(SLATE).font('Helvetica').fontSize(8.5);
doc.list([
  'Assisted secondary educators in classroom facilitation, remedial lesson design, and student-centered active learning methods.',
  'Supported community-school digital literacy programs and foundational tech integration in rural education centers.'
], { bulletRadius: 2, textIndent: 12 });

// ---------------- SOFTWARE ENGINEERING PROJECTS ----------------
sectionHeading('Selected Software Systems');

function projectItem(name, stack, desc) {
  doc.fillColor(DARK).font('Helvetica-Bold').fontSize(9.5).text(name, { continued: true });
  doc.fillColor(PRIMARY).font('Helvetica-Bold').fontSize(8.5).text(`  [${stack}]`);
  doc.fillColor(SLATE).font('Helvetica').fontSize(8.5).text(desc);
  doc.moveDown(0.2);
}

projectItem(
  'HLI Timetable System',
  'React, TypeScript, Constraint Satisfaction Solver',
  'Solves NP-hard scheduling bottlenecks at University of Rwanda, eliminating concurrent lecturer/hall overlaps across multiple student cohorts.'
);

projectItem(
  'FluentEdge Academy & Certificate Ledger',
  'React, Node.js, Cryptographic Verification Hash',
  'Comprehensive English learning hub featuring CEFR-aligned assessments, live progress telemetry, and tamper-proof certificate credentialing.'
);

projectItem(
  'QuizMaster V2 (Offline LAN Assessment System)',
  'C#, .NET, TCP Socket Server, SQLite',
  'Reliable offline computer-based examination system broadcasting questions over local Wi-Fi to 60+ concurrent workstations with automated gradebook CSV export.'
);

projectItem(
  'Gasabo District Local Tax Collector',
  'React Native, PostgreSQL, REST API',
  'Mobile fiscal tracking application designed for tax agents with offline caching, receipt generation, and transaction auditing.'
);

projectItem(
  'ImbutoBooks Learning Reader',
  'React, PWA, Service Workers, IndexedDB',
  'Ultra-low-bandwidth offline textbook and syllabus reader designed for students with limited internet connectivity.'
);

// ---------------- SKILLS & TECHNICAL STACK ----------------
sectionHeading('Technical Skills & Pedagogical Competencies');
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(8.5).text('Programming & Languages: ', { continued: true });
doc.font('Helvetica').text('C#, JavaScript (ES6+), TypeScript, Python, PHP, C, Java, SQL, HTML5, CSS3.');

doc.font('Helvetica-Bold').text('Frameworks & Mobile: ', { continued: true });
doc.font('Helvetica').text('React.js, React Native, Vite, Node.js, Express.js, WPF (.NET Desktop).');

doc.font('Helvetica-Bold').text('Databases & Tools: ', { continued: true });
doc.font('Helvetica').text('PostgreSQL, MySQL, SQLite, Git, GitHub, Linux Shell, Postman, Vite.');

doc.font('Helvetica-Bold').text('CS Pedagogy & Methodology: ', { continued: true });
doc.font('Helvetica').text('Competency-Based Curriculum (CBC), 5E Instructional Model, Driver/Navigator Pair Programming, Differentiated Learning, SEN Support.');

// ---------------- LEADERSHIP & RECOGNITION ----------------
sectionHeading('Leadership & Recognition');
doc.fillColor(DARK).font('Helvetica-Bold').fontSize(8.5).text('Mastercard Foundation Scholars Program (SEF 2.0 Fellow): ', { continued: true });
doc.font('Helvetica').text('Selected for leadership, academic excellence, and commitment to transformative education in Africa.');

doc.font('Helvetica-Bold').text('Huye Hackathon 2024 Semi-Finalist: ', { continued: true });
doc.font('Helvetica').text('Developed innovative social-impact tech solution addressing community bottlenecks under incubation mentorship.');

doc.font('Helvetica-Bold').text('Choir President & Conductor: ', { continued: true });
doc.font('Helvetica').text('Christ the King Parish (Saint Paul Choir) — Directing 40+ vocalists, leading weekly rehearsals, logistics, and liturgical service.');

// Finalize Document
doc.end();

writeStream.on('finish', () => {
  console.log(`CV PDF successfully generated at: ${outputPath}`);
});
