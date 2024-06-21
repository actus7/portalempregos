'use server';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function saveJobAction(formData: FormData) {
  const {id, ...jobData} = Object.fromEntries(formData);
  const jobDoc = (id)
    ? await prisma.job.update({
        where: { id: Number(id) },
        data: jobData,
      })
    : await prisma.job.create({
        data: jobData,
      });
  if ('orgId' in jobData) {
    revalidatePath('/jobs/'+jobData?.orgId);
  }
  return JSON.parse( JSON.stringify(jobDoc) );
}
