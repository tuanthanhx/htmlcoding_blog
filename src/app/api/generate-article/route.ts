import { NextRequest } from 'next/server';
import { generateText } from 'ai';
import { xai } from '@ai-sdk/xai';

interface PostRequestBody {
  subject?: string;
}

interface ArticleResponse {
  content: string;
}

const model = xai('grok-2-1212');

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const body: PostRequestBody = await request.json();
    const subject = body.subject || 'a random topic';

    const { text } = await generateText({
      model,
      prompt: `Generate a blog article about "${subject}" in Markdown format. Start with "## Introduction" or normal text (no need # H1 headers), and include at least one subheader and some descriptive text.`,
    });

    const markdownContent = `---
title: "${subject.charAt(0).toUpperCase() + subject.slice(1)}"
excerpt: ""
tags: []
coverImage: "/uploads/2025-03/cover.jpg"
ogImage:
  url: "/uploads/2025-03/cover.jpg"
author:
  name: Tuan Thanh Ngo
  picture: "/uploads/authors/thanh.jpg"
---

${text}
`;

    const response: ArticleResponse = {
      content: markdownContent,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating article:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate article' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
