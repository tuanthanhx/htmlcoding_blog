import { BlogGrid } from '@/app/_components/blog-grid';
import { CommonSidebar } from '@/app/_components/common-sidebar';
import { getAllPosts } from '@/lib/api';

export default function Index() {
  const allPosts = getAllPosts();
  return (
    <main>
      <div className="mt-10 mx-auto px-[20px] w-full max-w-[1272px] flex justify-between gap-10">
        <div className="w-full pb-12">
          <div>
            <BlogGrid posts={allPosts} />
          </div>
        </div>
        <CommonSidebar />
      </div>
    </main>
  );
}
