import { getAllPosts } from '@/lib/api';
import { notFound } from 'next/navigation';
import { CommonSidebar } from '@/app/_components/common-sidebar';
import { BlogGrid } from '@/app/_components/blog-grid';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const allPosts = getAllPosts();
  const decodedTag = decodeURIComponent(tag).toLowerCase();
  
  const filteredPosts = allPosts.filter((post) =>
    post.tags?.map((t) => t.toLowerCase()).includes(decodedTag)
  );

  if (filteredPosts.length === 0) {
    notFound();
  }

  const postsPerPage = parseInt(process.env.POST_PER_PAGE ?? '10', 10) || 10;
  const currentPage = 1;
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedPosts = filteredPosts.slice(start, end);

  return (
    <main>
      <div className="mx-auto pt-10 px-[20px] w-full max-w-[1272px] lg:flex lg:justify-between lg:gap-[40px]">
        <div className="w-full pb-12">
          <h1 className="mb-10 text-lg lg:text-3xl font-bold">
            Posts tagged with #{decodedTag}
          </h1>
          <BlogGrid posts={paginatedPosts} />
          <div className="mt-8 flex justify-center gap-4">
            <span className="py-2">
              Page {currentPage} of {totalPages}
            </span>
            {totalPages > 1 && (
              <a href={`/tags/${tag}/page/2`} className="px-4 py-2 bg-gray-200 rounded">
                Next
              </a>
            )}
          </div>
        </div>
        <CommonSidebar />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  const allTags = new Set<string>(
    posts.flatMap((post) => post.tags?.map((tag) => tag.toLowerCase()) || [])
  );
  return Array.from(allTags).map((tag) => ({ tag }));
}