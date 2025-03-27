import { BlogGrid } from '@/app/_components/blog-grid';
import { CommonSidebar } from '@/app/_components/common-sidebar';
import { getAllPosts } from '@/lib/api';

export default async function Index() {
  const allPosts = getAllPosts();
  const postsPerPage = parseInt(process.env.POST_PER_PAGE ?? '10', 10) || 10;
  const currentPage = 1;

  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

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
            <span className="py-2">
              Page {currentPage} of {totalPages}
            </span>
            {totalPages > 1 && (
              <a href={`/page/2`} className="px-4 py-2 bg-gray-200 rounded">
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