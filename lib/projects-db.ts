import { sql } from '@vercel/postgres';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string | null;
}

const PROJECTS_PER_PAGE = 6;

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }

  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function fetchFilteredProjects(
  query: string,
  currentPage: number,
): Promise<Project[]> {
  const searchPattern = `%${query.trim()}%`;
  const page = Number.isSafeInteger(currentPage) && currentPage > 0 ? currentPage : 1;
  const offset = (page - 1) * PROJECTS_PER_PAGE;

  const { rows } = await sql<Project>`
    SELECT
      id,
      title,
      COALESCE(description, '') AS description,
      type,
      COALESCE(technologies, ARRAY[]::TEXT[]) AS technologies,
      link
    FROM projects
    WHERE title ILIKE ${searchPattern}
      OR COALESCE(description, '') ILIKE ${searchPattern}
      OR EXISTS (
        SELECT 1
        FROM unnest(COALESCE(technologies, ARRAY[]::TEXT[])) AS tech(value)
        WHERE value ILIKE ${searchPattern}
      )
    ORDER BY id
    LIMIT ${PROJECTS_PER_PAGE}
    OFFSET ${offset}
  `;
  return rows;
}

export async function fetchProjectsPages(query: string): Promise<number> {
  const searchPattern = `%${query.trim()}%`;
  const { rows } = await sql<{ count: number | string }>`
    SELECT COUNT(*) AS count
    FROM projects
    WHERE title ILIKE ${searchPattern}
      OR COALESCE(description, '') ILIKE ${searchPattern}
      OR EXISTS (
        SELECT 1
        FROM unnest(COALESCE(technologies, ARRAY[]::TEXT[])) AS tech(value)
        WHERE value ILIKE ${searchPattern}
      )
  `;
  const count = Number(rows[0]?.count ?? 0);
  return Math.ceil(count / PROJECTS_PER_PAGE);
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}
