import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const ucapan = await prisma.ucapan.findMany();
    return NextResponse.json(ucapan, { status: 200 });
  } catch (error) {
    console.error("GET Error details:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data ucapan.", details: error.message },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();
    const { nama, ucapan, kehadiran } = data;

    if (!nama || !ucapan || !kehadiran) {
      return NextResponse.json(
        { error: "Nama, ucapan, dan kehadiran harus diisi." },
        { status: 400 }
      );
    }

    const newUcapan = await prisma.ucapan.create({
      data: { nama, ucapan, kehadiran },
    });

    return NextResponse.json(newUcapan, { status: 201 });
  } catch (error) {
    console.error("POST Error details:", error);
    return NextResponse.json(
      { error: "Gagal menyimpan ucapan.", details: error.message },
      { status: 500 }
    );
  }
};
