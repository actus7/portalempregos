import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import {NextRequest} from "next/server";

export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  await prisma.job.delete({
    where: {
      id: Number(id),
    },
  });
  return Response.json(true);
}
