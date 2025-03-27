import { notFound, redirect } from 'next/navigation';
import { BlogGrid } from '@/app/_components/blog-grid';
import { CommonSidebar } from '@/app/_components/common-sidebar';
import { getAllPosts } from '@/lib/api';

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  const postsPerPage = parseInt(process.env.POST_PER_PAGE ?? '10', 10) || 10;
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    number: (i + 2).toString(),
  }));
}

interface PageProps {
  params: Promise<{ number: string }>;
}

export default async function Page({ params }: PageProps) {
  const allPosts = getAllPosts();
  const postsPerPage = parseInt(process.env.POST_PER_PAGE ?? '10', 10) || 10;
  
  const resolvedParams = await params;
  const currentPage = parseInt(resolvedParams.number, 10);

  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (currentPage < 2) {
    redirect('/');
  }

  if (currentPage > totalPages) {
    notFound();
  }

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedPosts = allPosts.slice(start, end);

  return (
    <main>
      <div className="mx-auto pt-10 px-[20px] w-full max-w-[1272px] lg:flex lg:justify-between lg:gap-[40px]">
        <div className="w-full pb-12">
          <div>
            <BlogGrid posts={paginatedPosts} />
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <a href={currentPage === 2 ? '/' : `/page/${currentPage - 1}`} className="px-4 py-2 bg-gray-200 rounded">
              Prev
            </a>
            <span className="py-2">
              Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
              <a href={`/page/${currentPage + 1}`} className="px-4 py-2 bg-gray-200 rounded">
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