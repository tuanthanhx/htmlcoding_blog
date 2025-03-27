import { notFound, redirect } from 'next/navigation';
import { getAllPosts } from '@/lib/api';
import { BlogGrid } from '@/app/_components/blog-grid';
import { CommonSidebar } from '@/app/_components/common-sidebar';

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  const postsPerPage = 5;
  
  const allTags = new Set<string>(
    allPosts.flatMap((post) => post.tags?.map((tag) => tag.toLowerCase()) || [])
  );

  const params: { tag: string; number: string }[] = [];
  allTags.forEach((tag) => {
    const filteredPosts = allPosts.filter((post) =>
      post.tags?.map((t) => t.toLowerCase()).includes(tag)
    );
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    for (let i = 2; i <= totalPages; i++) {
      params.push({ tag, number: i.toString() });
    }
  });

  return params;
}

interface TagPaginationProps {
  params: Promise<{ tag: string; number: string }>;
}

export default async function TagPaginationPage({ params }: TagPaginationProps) {
  const resolvedParams = await params;
  const { tag, number } = resolvedParams;
  const decodedTag = decodeURIComponent(tag).toLowerCase();
  const currentPage = parseInt(number, 10);

  const allPosts = getAllPosts();
  const filteredPosts = allPosts.filter((post) =>
    post.tags?.map((t) => t.toLowerCase()).includes(decodedTag)
  );

  const postsPerPage = 5;
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (currentPage < 2) {
    redirect(`/tags/${tag}`);
  }
  if (currentPage > totalPages || filteredPosts.length === 0) {
    notFound();
  }

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
            <a href={currentPage === 2 ? `/tags/${tag}` : `/tags/${tag}/page/${currentPage - 1}`} className="px-4 py-2 bg-gray-200 rounded">
              Prev
            </a>
            <span className="py-2">
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <a href={`/tags/${tag}/page/${currentPage + 1}`} className="px-4 py-2 bg-gray-200 rounded">
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