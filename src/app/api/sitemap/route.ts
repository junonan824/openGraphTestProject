import { NextResponse } from 'next/server';
import { MetadataRoute } from 'next';

export async function GET(): Promise<NextResponse> {
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: 'https://open-graph-test-project.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://open-graph-test-project.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  return NextResponse.json(sitemap);
} 