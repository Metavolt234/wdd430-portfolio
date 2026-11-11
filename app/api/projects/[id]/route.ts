import { getProjectById } from '@/lib/projects-db';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: rawId } = await params;
  const id = Number(rawId);
  if (Number.isNaN(id)) {
    return Response.json({ error: 'Invalid id' }, { status: 400 });
  }

  const project = await getProjectById(id);
  if (!project) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }

  return Response.json(project);
}
