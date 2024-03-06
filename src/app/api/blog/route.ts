import { DummyDataBlog } from '@/app/DummyData/DimmyDataBlog';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    code: 200,
    message: 'success',
    data: DummyDataBlog,
    error: null,
  });
}
