'use client';

import { useState } from 'react';

export default function Index() {
  const [subject, setSubject] = useState<string>('');
  const [article, setArticle] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateArticle = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/generate-article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch article');
      }

      const data: { content: string } = await res.json();
      setArticle(data.content);
    } catch (error) {
      console.error(error);
      setArticle('Error generating article');
    } finally {
      setIsLoading(false);
    }
  };

  const slugify = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const downloadAsMarkdown = () => {
    if (!article || article === 'Error generating article') {
      alert('No article content to download!');
      return;
    }

    const titleMatch = article.match(/title: "(.*?)"/);
    const title = titleMatch ? titleMatch[1] : subject || 'untitled';
    const slug = slugify(title);
    const currentDate = new Date().toISOString().split('T')[0];
    const filename = `${currentDate}-${slug}.md`;

    const blob = new Blob([article], { type: 'text/markdown' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <main>
      <div className="mx-auto pt-10 px-[20px] w-full max-w-[1272px] lg:flex lg:justify-between lg:gap-[40px]">
        <div className="w-full pb-12">
          <div>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Enter article subject" className="block w-full p-2 border-2 border-solid" />
            <div className="mb-10">
              <button className="mt-2 p-2 border-none bg-gray-500 text-white flex items-center justify-center" onClick={generateArticle} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Generating...
                  </>
                ) : (
                  'Generate Article'
                )}
              </button>
            </div>
            {article ? (
              <>
                <pre className="language-md min-h-60">
                  <code className="language-md whitespace-pre-wrap">{article}</code>
                </pre>

                <div className="mt-4 ">
                  <button className="mt-2 p-2 border-none bg-green-500 text-white" onClick={downloadAsMarkdown}>
                    Save as MD File
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <aside className="lg:flex-[360px_0_0] p-5 bg-gray-100"></aside>
      </div>
    </main>
  );
}
