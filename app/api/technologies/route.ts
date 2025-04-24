import { NextResponse } from 'next/server'
import { getTechnologies } from '@/lib/notion'

export async function GET() {
  const data = await getTechnologies()
  return NextResponse.json(data)
}
