import { BlogGrid } from '@/app/_components/blog-grid';
import { CommonSidebar } from '@/app/_components/common-sidebar';
import { getAllPosts } from '@/lib/api';

export default function Index() {
  const allPosts = getAllPosts();
  return (
    <main>
      <div className="mx-auto pt-10 px-[20px] w-full max-w-[1272px] lg:flex lg:justify-between lg:gap-[40px]">
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
