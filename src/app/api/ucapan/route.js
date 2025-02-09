import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    console.log("Fetching data from Prisma...");
    const ucapan = await prisma.ucapan.findMany();
    console.log("Data fetched:", ucapan);

    return Response.json(ucapan, { status: 200 });
  } catch (error) {
    console.error("Error fetching ucapan:", error);
    return Response.json({ error: "Gagal mengambil data ucapan." }, { status: 500 });
  }
};
