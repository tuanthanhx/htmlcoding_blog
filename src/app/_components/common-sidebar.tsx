import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/api';

export function CommonSidebar() {
  const allPosts = getAllPosts();
  const allTags = Array.from(new Set(allPosts.flatMap((post) => post.tags || []).map((tag) => tag.toLowerCase()))).sort();

  return (
    <aside className="lg:flex-[360px_0_0] p-5 bg-gray-100">
      <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)] p-6">
        <h2 className="mb-6 text-2xl font-bold">Sponsors</h2>
        <ul className="space-y-6">
          <li>
            <Link href="https://htmlcoding.net" target="_blank" className="hover:opacity-90">
              <Image src="/assets/sponsors/htmlcoding.jpg" alt="HTMLCODING" className="w-full" width="272" height="143" />
            </Link>
          </li>
          <li>
            <Link href="https://vercel.com" target="_blank" className="hover:opacity-90" rel="noopener noreferrer nofollow">
              <Image src="/assets/sponsors/vercel.jpg" alt="Vercel" className="w-full" width="272" height="143" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)] p-6 mt-5">
        <h2 className="mb-6 text-2xl font-bold">Tags</h2>
        {allTags.length > 0 ? (
          <ul className="space-y-2 m-[0_-0.5rem_0_0]">
            {allTags.map((tag) => (
              <li key={tag} className="inline-block mr-2">
                <Link href={`/tags/${encodeURIComponent(tag)}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                  #{tag}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tags available.</p>
        )}
      </div>
    </aside>
  );
}
