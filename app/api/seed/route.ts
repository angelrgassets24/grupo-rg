import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Check if admin user already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email: "admin@gruporg.mx" },
    });

    if (existingAdmin) {
      return NextResponse.json(
        { message: "Admin user already exists" },
        { status: 400 }
      );
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash("Admin123!", 10);
    const admin = await prisma.user.create({
      data: {
        email: "admin@gruporg.mx",
        password: hashedPassword,
        name: "Administrador",
        role: "admin",
      },
    });

    return NextResponse.json(
      {
        message: "Admin user created",
        user: { email: admin.email, name: admin.name },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
