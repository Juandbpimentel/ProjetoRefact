import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  return new NextResponse(`Meu nome é ${params.username}`);
}
