import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse(`Meu nome é John Doe`);
}
