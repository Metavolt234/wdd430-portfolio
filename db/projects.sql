CREATE TABLE IF NOT EXISTS projects (
  id           SERIAL        PRIMARY KEY,
  title        VARCHAR(255)  NOT NULL,
  description  TEXT,
  type         VARCHAR(20)   CHECK (type IN ('opensource', 'school')),
  technologies TEXT[],
  link         VARCHAR(500)
);


INSERT INTO projects (title, description, type, technologies, link)
VALUES
(
    'MetaVolt Tech Website',
    'A professional website for MetaVolt Tech Solutions.',
    'opensource',
    ARRAY['HTML', 'CSS', 'JavaScript'],
    'https://github.com/MetaVolt234'
),
(
    'Student Management System',
    'A system for managing student records and academic information.',
    'school',
    ARRAY['C#', 'PostgreSQL', 'SQL'],
    NULL
),
(
    'Personal Portfolio Website',
    'A responsive portfolio showcasing my projects and technical skills.',
    'school',
    ARRAY['Next.js', 'TypeScript', 'Tailwind CSS'],
    NULL
),
(
    'Database Management Project',
    'A database project demonstrating relational database design.',
    'opensource',
    ARRAY['PostgreSQL', 'SQL'],
    'https://github.com/MetaVolt234'
);
