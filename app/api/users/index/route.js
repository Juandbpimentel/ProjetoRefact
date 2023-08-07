import { NextResponse } from "next/server";

export async function GET() {
  var vetor = [];
  for (var i = 0; i < 10; i++) {
    vetor.push(`Usuário número ${i}`);
  }
  return NextResponse.json({ vet: vetor });
}
