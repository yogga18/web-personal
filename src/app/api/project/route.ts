import { DummyDataProject } from '@/app/DummyData/DummyDataProject';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    code: 200,
    message: 'success',
    data: DummyDataProject,
    error: null,
  });
}
